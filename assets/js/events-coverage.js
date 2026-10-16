// Events Coverage page: the cover film, count-ups, the graphics gallery, the AI
// director's decision log, the Almanac facts card and the sound player. Every
// piece starts from server-rendered, readable markup and only adds motion.
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var saveData = !!(navigator.connection && navigator.connection.saveData);
  // European notation on every language, as on the Almanac page.
  var locale = 'de-DE';

  function onVisible(el, callback, threshold) {
    if (!('IntersectionObserver' in window)) { callback(); return; }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { observer.disconnect(); callback(); }
      });
    }, { threshold: threshold || 0.3 });
    observer.observe(el);
  }

  // Calls back with true/false as the element enters and leaves the viewport.
  function watchVisibility(el, callback) {
    if (!('IntersectionObserver' in window)) { callback(true); return; }
    new IntersectionObserver(function (entries) {
      callback(entries[0].isIntersecting);
    }, { threshold: 0.15 }).observe(el);
  }

  // ── Cover film ─────────────────────────────────────────────────────────────
  // Plays only while it is on screen and the sound player is closed. Data
  // saver and reduced motion keep the poster instead.
  var heroVideo = document.querySelector('[data-evc-hero-video]');
  var playerOpen = false;
  var heroVisible = true;
  var heroFullscreen = false;

  function syncHero() {
    if (!heroVideo || heroFullscreen) return;
    if (reduceMotion || saveData || playerOpen || !heroVisible) {
      heroVideo.pause();
    } else {
      var playing = heroVideo.play();
      if (playing && playing.catch) playing.catch(function () {});
    }
  }

  if (heroVideo) {
    if (reduceMotion || saveData) {
      heroVideo.removeAttribute('autoplay');
      heroVideo.preload = 'none';
    }
    watchVisibility(heroVideo, function (visible) { heroVisible = visible; syncHero(); });
  }

  // ── Screen glow ────────────────────────────────────────────────────────────
  // The light behind the screen swells up the moment the film starts playing,
  // so the eye catches it. Without playback (data saver, reduced motion) it
  // simply appears.
  var stage = document.querySelector('[data-evc-stage]');
  if (stage) {
    var lit = false;
    var light = function () {
      if (lit) return;
      lit = true;
      stage.classList.add('is-lit');
    };
    if (!heroVideo || reduceMotion || saveData) {
      light();
    } else {
      if (!heroVideo.paused && heroVideo.readyState >= 3) setTimeout(light, 300);
      heroVideo.addEventListener('playing', function () { setTimeout(light, 300); });
      // Never leave it dark if playback is blocked.
      setTimeout(light, 4000);
    }
  }

  // ── Full screen, landscape ─────────────────────────────────────────────────
  // Takes the cover film itself full screen, with sound and controls, from
  // where it already is. Android turns to landscape on its own; iOS hands the
  // film to its native player, which follows the phone when it is rotated.
  // Leaving full screen puts the muted loop back.
  var fullButton = document.querySelector('[data-evc-fullscreen]');
  if (heroVideo && fullButton) {
    var canStandard = !!(heroVideo.requestFullscreen || heroVideo.webkitRequestFullscreen);
    var canIOS = typeof heroVideo.webkitEnterFullscreen === 'function';
    var fullscreenElement = function () {
      return document.fullscreenElement || document.webkitFullscreenElement;
    };
    var leaveFullscreen = function () {
      if (!heroFullscreen) return;
      heroFullscreen = false;
      heroVideo.muted = true;
      heroVideo.controls = false;
      if (screen.orientation && screen.orientation.unlock) {
        try { screen.orientation.unlock(); } catch (e) {}
      }
      syncHero();
    };

    if (canStandard || canIOS) {
      fullButton.hidden = false;
      fullButton.addEventListener('click', function () {
        heroFullscreen = true;
        heroVideo.muted = false;
        heroVideo.controls = true;
        var playing = heroVideo.play();
        if (playing && playing.catch) playing.catch(function () {});
        if (canStandard) {
          var request = heroVideo.requestFullscreen
            ? heroVideo.requestFullscreen({ navigationUI: 'hide' })
            : heroVideo.webkitRequestFullscreen();
          Promise.resolve(request).then(function () {
            if (screen.orientation && screen.orientation.lock) {
              return screen.orientation.lock('landscape').catch(function () {});
            }
          }).catch(function () {
            if (canIOS) heroVideo.webkitEnterFullscreen(); else leaveFullscreen();
          });
        } else {
          heroVideo.webkitEnterFullscreen();
        }
      });
      var onChange = function () { if (!fullscreenElement()) leaveFullscreen(); };
      document.addEventListener('fullscreenchange', onChange);
      document.addEventListener('webkitfullscreenchange', onChange);
      heroVideo.addEventListener('webkitendfullscreen', leaveFullscreen);
    }
  }

  // ── Count-ups ──────────────────────────────────────────────────────────────
  // Whole numbers count up from zero; a value with decimals (the timing
  // precision) counts down from data-from, closing in on its target.
  document.querySelectorAll('[data-evc-count]').forEach(function (el) {
    if (reduceMotion) return;
    var finalText = el.textContent;
    var target = parseFloat(el.getAttribute('data-evc-count'));
    var from = parseFloat(el.getAttribute('data-from') || '0');
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var group = el.hasAttribute('data-group-digits');
    var separator = finalText.indexOf(',') !== -1 && !group ? ',' : '.';
    function format(n) {
      if (group) return Math.round(n).toLocaleString(locale);
      return n.toFixed(decimals).replace('.', separator);
    }
    el.textContent = format(from);
    onVisible(el, function () {
      var start = null;
      var duration = 1700;
      function frame(time) {
        if (start === null) start = time;
        var t = Math.min((time - start) / duration, 1);
        var eased = 1 - Math.pow(1 - t, 4);
        el.textContent = t < 1 ? format(from + (target - from) * eased) : finalText;
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }, 0.5);
  });

  // ── Graphics gallery ───────────────────────────────────────────────────────
  // One clock drives the shot, its caption, the progress bar and the rail, so
  // they cannot drift apart. It pauses while pointed at, focused, touched or
  // off screen, and never runs on its own under reduced motion.
  var gallery = document.querySelector('[data-evc-gallery]');
  if (gallery) {
    var shots = gallery.querySelectorAll('[data-evc-shot]');
    var captions = gallery.querySelectorAll('[data-evc-caption]');
    var thumbs = gallery.querySelectorAll('[data-evc-thumb]');
    var groups = gallery.querySelectorAll('[data-evc-group]');
    var rail = gallery.querySelector('.evc-rail');
    var screen = gallery.querySelector('.evc-screen');
    var progress = gallery.querySelector('[data-evc-progress]');
    var tag = gallery.querySelector('[data-evc-tag]');
    var tagText = gallery.querySelector('[data-evc-tag-text]');
    var counter = gallery.querySelector('[data-evc-current]');
    var DURATION = 3600;
    var current = 0;
    var elapsed = 0;
    var last = null;
    var hovering = false;
    var focusedInside = false;
    var visible = false;
    var heldUntil = 0;

    // The first shot is on screen at once; load the rest eagerly once the
    // gallery is near so switching never shows an empty frame.
    onVisible(gallery, function () {
      shots.forEach(function (img) { img.loading = 'eager'; });
    }, 0);

    function show(index, fromUser) {
      var count = shots.length;
      index = (index + count) % count;
      shots[current].classList.remove('is-active');
      captions[current].classList.remove('is-active');
      thumbs[current].classList.remove('is-active');
      thumbs[current].setAttribute('aria-selected', 'false');
      current = index;
      elapsed = 0;
      shots[current].classList.add('is-active');
      captions[current].classList.add('is-active');
      thumbs[current].classList.add('is-active');
      thumbs[current].setAttribute('aria-selected', 'true');
      var label = thumbs[current].getAttribute('data-tag');
      tagText.textContent = label;
      tag.classList.toggle('is-replay', thumbs[current].getAttribute('data-group') === 'replays');
      counter.textContent = (current < 9 ? '0' : '') + (current + 1);
      var group = thumbs[current].getAttribute('data-group');
      groups.forEach(function (g) { g.classList.toggle('is-active', g.getAttribute('data-evc-group') === group); });
      // Scroll the rail sideways only: scrollIntoView would also move the page.
      var thumb = thumbs[current];
      var target = thumb.offsetLeft - (rail.clientWidth - thumb.offsetWidth) / 2;
      rail.scrollTo({ left: target, behavior: reduceMotion ? 'auto' : 'smooth' });
      if (fromUser) heldUntil = performance.now() + 9000;
      if (progress) progress.style.transform = 'scaleX(0)';
    }

    thumbs.forEach(function (thumb, i) {
      thumb.addEventListener('click', function () { show(i, true); });
    });
    groups.forEach(function (g) {
      g.addEventListener('click', function () {
        var key = g.getAttribute('data-evc-group');
        for (var i = 0; i < thumbs.length; i++) {
          if (thumbs[i].getAttribute('data-group') === key) { show(i, true); return; }
        }
      });
    });
    gallery.querySelector('[data-evc-prev]').addEventListener('click', function () { show(current - 1, true); });
    gallery.querySelector('[data-evc-next]').addEventListener('click', function () { show(current + 1, true); });

    rail.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1), true);
      thumbs[current].focus();
    });

    // Swipe the monitor on touch screens.
    var touchX = null;
    screen.addEventListener('touchstart', function (event) {
      touchX = event.touches[0].clientX;
      heldUntil = performance.now() + 9000;
    }, { passive: true });
    screen.addEventListener('touchend', function (event) {
      if (touchX === null) return;
      var dx = event.changedTouches[0].clientX - touchX;
      touchX = null;
      if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1), true);
    }, { passive: true });

    gallery.addEventListener('mouseenter', function () { hovering = true; });
    gallery.addEventListener('mouseleave', function () { hovering = false; });
    gallery.addEventListener('focusin', function () { focusedInside = true; });
    gallery.addEventListener('focusout', function () { focusedInside = false; });
    watchVisibility(gallery, function (v) { visible = v; });

    if (!reduceMotion) {
      var tick = function (time) {
        var dt = last === null ? 0 : time - last;
        last = time;
        var paused = hovering || focusedInside || !visible || playerOpen || time < heldUntil || document.hidden;
        if (!paused) {
          elapsed += dt;
          if (elapsed >= DURATION) show(current + 1, false);
        }
        if (progress) progress.style.transform = 'scaleX(' + Math.min(elapsed / DURATION, 1) + ')';
        requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }
    gallery.classList.add('is-enhanced');
  }

  // ── AI director decision log ───────────────────────────────────────────────
  // Lines arrive one by one, the action typed out like a live log. An operator
  // line flips the mode pill to show that a person can take over.
  var consoleEl = document.querySelector('[data-evc-console]');
  if (consoleEl && !reduceMotion) {
    var lines = consoleEl.querySelectorAll('.evc-log-line');
    var shotLabel = consoleEl.querySelector('[data-evc-shot-label]');
    var autoPill = consoleEl.querySelector('[data-evc-auto]');
    var manualPill = consoleEl.querySelector('[data-evc-manual]');
    var actions = [];
    lines.forEach(function (line) {
      var span = line.querySelector('[data-evc-type]');
      actions.push(span.textContent);
    });
    var consoleVisible = false;
    var running = false;

    function setMode(manual) {
      autoPill.classList.toggle('is-on', !manual);
      manualPill.classList.toggle('is-on', manual);
    }

    function reset() {
      lines.forEach(function (line, i) {
        line.classList.remove('is-shown', 'is-typing');
        line.querySelector('[data-evc-type]').textContent = actions[i];
      });
      setMode(false);
    }

    function wait(ms, then) {
      // Hold the log while it is off screen so the story is never missed.
      var waited = 0;
      var step = 100;
      var timer = setInterval(function () {
        if (consoleVisible && !document.hidden) waited += step;
        if (waited >= ms) { clearInterval(timer); then(); }
      }, step);
    }

    function typeLine(i) {
      if (i >= lines.length) {
        wait(4200, function () { reset(); wait(500, function () { typeLine(0); }); });
        return;
      }
      var line = lines[i];
      var span = line.querySelector('[data-evc-type]');
      var text = actions[i];
      span.textContent = '';
      line.classList.add('is-shown', 'is-typing');
      shotLabel.textContent = line.getAttribute('data-shot');
      setMode(line.classList.contains('is-operator'));
      var n = 0;
      var typer = setInterval(function () {
        n += 1;
        span.textContent = text.slice(0, n);
        if (n >= text.length) {
          clearInterval(typer);
          line.classList.remove('is-typing');
          wait(1300, function () { typeLine(i + 1); });
        }
      }, 26);
    }

    consoleEl.classList.add('is-enhanced');
    reset();
    watchVisibility(consoleEl, function (v) {
      consoleVisible = v;
      if (v && !running) { running = true; typeLine(0); }
    });
  }

  // ── Almanac facts card ─────────────────────────────────────────────────────
  var factsCard = document.querySelector('[data-evc-facts]');
  if (factsCard && !reduceMotion) {
    var facts = factsCard.querySelectorAll('.evc-fact');
    var factIndex = 0;
    var factsVisible = false;
    var factsHover = false;
    factsCard.classList.add('is-enhanced');
    factsCard.addEventListener('mouseenter', function () { factsHover = true; });
    factsCard.addEventListener('mouseleave', function () { factsHover = false; });
    watchVisibility(factsCard, function (v) { factsVisible = v; });
    setInterval(function () {
      if (!factsVisible || factsHover || document.hidden) return;
      facts[factIndex].classList.remove('is-active');
      factIndex = (factIndex + 1) % facts.length;
      facts[factIndex].classList.add('is-active');
    }, 2800);
  }

  // ── Watch with sound ───────────────────────────────────────────────────────
  var player = document.querySelector('[data-evc-player]');
  var playerVideo = player && player.querySelector('[data-evc-player-video]');
  var opener = null;

  function closePlayer() {
    if (!player || !player.open) return;
    player.close();
  }

  if (player && typeof player.showModal === 'function') {
    document.querySelectorAll('[data-evc-open]').forEach(function (button) {
      button.addEventListener('click', function () {
        opener = button;
        playerOpen = true;
        syncHero();
        player.showModal();
        document.documentElement.classList.add('evc-player-open');
        // Start where the cover film is, so the switch feels continuous.
        if (heroVideo && heroVideo.currentTime && playerVideo.readyState === 0) {
          var resumeAt = heroVideo.currentTime;
          playerVideo.addEventListener('loadedmetadata', function seek() {
            playerVideo.removeEventListener('loadedmetadata', seek);
            try { playerVideo.currentTime = resumeAt; } catch (e) {}
          });
        }
        playerVideo.muted = false;
        var playing = playerVideo.play();
        if (playing && playing.catch) playing.catch(function () {});
      });
    });
    player.querySelector('[data-evc-close]').addEventListener('click', closePlayer);
    // A click on the backdrop lands on the dialog itself, outside the frame.
    player.addEventListener('click', function (event) {
      if (event.target === player) closePlayer();
    });
    player.addEventListener('close', function () {
      playerVideo.pause();
      playerOpen = false;
      document.documentElement.classList.remove('evc-player-open');
      syncHero();
      if (opener) opener.focus();
    });
  } else if (player) {
    // No <dialog> support: open the film on its own.
    document.querySelectorAll('[data-evc-open]').forEach(function (button) {
      button.addEventListener('click', function () {
        var source = playerVideo.querySelector('source');
        window.open(source.src, '_blank', 'noopener');
      });
    });
  }
})();
