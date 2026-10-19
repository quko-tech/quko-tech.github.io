// Home page media sections: the broadcast monitor, the count-ups and the
// Almanac chat. Every piece starts from server-rendered, readable markup and
// only adds motion on top; reduced motion keeps everything still.
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // European notation on every language, as on the broadcasting page.
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
    }, { threshold: 0.2 }).observe(el);
  }

  // ── Count-ups ──────────────────────────────────────────────────────────────
  // Whole numbers count up from zero; a value with decimals (the timing
  // precision) counts down from data-from. The final text is the server's.
  document.querySelectorAll('[data-bc-count]').forEach(function (el) {
    if (reduceMotion) return;
    var finalText = el.textContent;
    var target = parseFloat(el.getAttribute('data-bc-count'));
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

  // ── Broadcast monitor ──────────────────────────────────────────────────────
  // One clock drives the frame, its caption and the rail, so they cannot
  // drift apart. It pauses while pointed at, focused or off screen, and never
  // runs on its own under reduced motion. Swipes and arrow keys move it too.
  var carousel = document.querySelector('[data-bc-carousel]');
  if (carousel) {
    var slides = carousel.querySelectorAll('[data-bc-slide]');
    var captions = carousel.querySelectorAll('[data-bc-caption]');
    var dots = carousel.querySelectorAll('[data-bc-dot]');
    var screen = carousel.querySelector('.quko-bc-screen');
    var counter = carousel.querySelector('[data-bc-current]');
    var DURATION = 6000;
    var current = 0;
    var elapsed = 0;
    var last = null;
    var hovered = false;
    var focused = false;
    var visible = false;

    function show(index) {
      var count = slides.length;
      index = (index + count) % count;
      if (index === current) return;
      slides[current].classList.remove('is-active');
      captions[current].classList.remove('is-active');
      dots[current].classList.remove('is-active');
      dots[current].setAttribute('aria-selected', 'false');
      current = index;
      elapsed = 0;
      slides[current].classList.add('is-active');
      captions[current].classList.add('is-active');
      dots[current].classList.add('is-active');
      dots[current].setAttribute('aria-selected', 'true');
      counter.textContent = (current < 9 ? '0' : '') + (current + 1);
      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-done', i < current);
        dot.style.setProperty('--p', 0);
      });
      // Restart the light sweep across the screen on every change.
      screen.classList.remove('is-switching');
      void screen.offsetWidth;
      screen.classList.add('is-switching');
    }

    function tick(now) {
      // Cap each step, so coming back to a background tab never skips frames.
      var step = last === null ? 0 : Math.min(now - last, 100);
      last = now;
      if (!hovered && !focused && visible && !document.hidden) {
        elapsed += step;
        if (elapsed >= DURATION) show(current + 1);
      }
      dots[current].style.setProperty('--p', Math.min(elapsed / DURATION, 1));
      requestAnimationFrame(tick);
    }

    carousel.querySelector('[data-bc-prev]').addEventListener('click', function () { show(current - 1); });
    carousel.querySelector('[data-bc-next]').addEventListener('click', function () { show(current + 1); });
    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { show(i); });
    });
    carousel.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowLeft') { show(current - 1); event.preventDefault(); }
      if (event.key === 'ArrowRight') { show(current + 1); event.preventDefault(); }
    });

    var touchX = null;
    screen.addEventListener('touchstart', function (event) {
      touchX = event.touches[0].clientX;
    }, { passive: true });
    screen.addEventListener('touchend', function (event) {
      if (touchX === null) return;
      var dx = event.changedTouches[0].clientX - touchX;
      if (Math.abs(dx) > 40) show(current + (dx < 0 ? 1 : -1));
      touchX = null;
    });

    if (slides.length > 1 && !reduceMotion) {
      carousel.classList.add('is-playing');
      carousel.addEventListener('mouseenter', function () { hovered = true; });
      carousel.addEventListener('mouseleave', function () { hovered = false; });
      carousel.addEventListener('focusin', function () { focused = carousel.querySelector(':focus-visible') !== null; });
      carousel.addEventListener('focusout', function () { focused = false; });
      watchVisibility(carousel, function (isVisible) { visible = isVisible; });
      requestAnimationFrame(tick);
    }
  }

  // ── Almanac chat ───────────────────────────────────────────────────────────
  // Each thread plays like a real exchange: the question is typed into the
  // input and sent, Almanac searches the archive, the answer streams in and
  // its facts pop up. Time only passes while the chat is on screen.
  var chat = document.querySelector('[data-arch-chat]');
  if (chat && !reduceMotion) {
    var threads = Array.prototype.slice.call(chat.querySelectorAll('[data-arch-thread]'));
    var input = chat.querySelector('[data-arch-input]');
    var placeholder = input.textContent;
    var chatVisible = false;
    var waiters = [];

    var texts = threads.map(function (thread) {
      return {
        q: thread.querySelector('[data-arch-q]').textContent,
        a: thread.querySelector('[data-arch-text]').textContent
      };
    });

    function release() {
      if (chatVisible && !document.hidden) {
        waiters.splice(0).forEach(function (resolve) { resolve(); });
      }
    }

    watchVisibility(chat, function (isVisible) {
      chatVisible = isVisible;
      release();
    });
    document.addEventListener('visibilitychange', release);

    function whenVisible() {
      if (chatVisible && !document.hidden) return Promise.resolve();
      return new Promise(function (resolve) { waiters.push(resolve); });
    }

    // Waits ms of on-screen time, in short slices.
    function wait(ms) {
      return new Promise(function (resolve) {
        var left = ms;
        function step() {
          whenVisible().then(function () {
            var slice = Math.min(left, 120);
            setTimeout(function () {
              left -= slice;
              if (left <= 0) resolve(); else step();
            }, slice);
          });
        }
        step();
      });
    }

    function typeInto(el, text, perChar) {
      var i = 0;
      el.textContent = '';
      function next() {
        if (i >= text.length) return Promise.resolve();
        i += 1;
        el.textContent = text.slice(0, i);
        return wait(perChar).then(next);
      }
      return next();
    }

    // Streams the answer a word at a time, as assistants do.
    function streamInto(el, text, perWord) {
      var words = text.split(' ');
      var i = 0;
      el.textContent = '';
      function next() {
        if (i >= words.length) return Promise.resolve();
        i += 1;
        el.textContent = words.slice(0, i).join(' ');
        return wait(perWord).then(next);
      }
      return next();
    }

    function play(index) {
      var thread = threads[index];
      var q = thread.querySelector('[data-arch-q]');
      var tool = thread.querySelector('[data-arch-tool]');
      var answer = thread.querySelector('[data-arch-a]');
      var answerText = thread.querySelector('[data-arch-text]');
      var chips = thread.querySelectorAll('.quko-arch-chips span');

      threads.forEach(function (t) { t.classList.remove('is-active', 'is-leaving'); });
      [q, tool, answer].forEach(function (el) { el.classList.remove('is-in', 'is-done'); });
      chips.forEach(function (chip) { chip.classList.remove('is-in'); });
      thread.classList.add('is-active');
      input.classList.add('is-typing');

      return typeInto(input, texts[index].q, 32)
        .then(function () { return wait(350); })
        .then(function () {
          input.classList.remove('is-typing');
          input.textContent = placeholder;
          q.classList.add('is-in');
          return wait(450);
        })
        .then(function () {
          tool.classList.add('is-in');
          return wait(1400);
        })
        .then(function () {
          tool.classList.add('is-done');
          answerText.textContent = '';
          answer.classList.add('is-in');
          return streamInto(answerText, texts[index].a, 70);
        })
        .then(function () {
          chips.forEach(function (chip, i) {
            setTimeout(function () { chip.classList.add('is-in'); }, i * 160);
          });
          return wait(5200);
        })
        .then(function () {
          thread.classList.add('is-leaving');
          return wait(450);
        })
        .then(function () { play((index + 1) % threads.length); });
    }

    if (threads.length) {
      chat.classList.add('is-enhanced');
      onVisible(chat, function () { play(0); }, 0.4);
    }
  }
})();
