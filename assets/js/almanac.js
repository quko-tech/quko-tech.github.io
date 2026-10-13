// Quko Almanac page: count-up stats, the cycling hero race briefing, the
// before/after tabs, the EN/ES switch and the AI chat reveal. Every piece
// starts from server-rendered, readable markup and only adds motion on top.
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // European notation on every language: dot for thousands, comma for decimals.
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

  // Stats count up once, the first time they scroll into view.
  document.querySelectorAll('[data-count]').forEach(function (el) {
    if (reduceMotion) return;
    var target = parseInt(el.getAttribute('data-count'), 10);
    var plain = el.hasAttribute('data-plain');
    var format = plain ? String : function (n) { return n.toLocaleString(locale); };
    // A year counts back in time from today rather than up from zero.
    var from = plain ? new Date().getFullYear() : 0;
    el.textContent = format(from);
    onVisible(el, function () {
      var start = null;
      var duration = 1600;
      function frame(time) {
        if (start === null) start = time;
        var t = Math.min((time - start) / duration, 1);
        var eased = 1 - Math.pow(1 - t, 4);
        el.textContent = format(Math.round(from + (target - from) * eased));
        if (t < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    });
  });

  // Hero briefing: one fact at a time, with the lanes it talks about lit up.
  // A single clock drives both the fact and its progress bar, so the two can
  // never drift apart. It pauses only while an athlete is being pointed at.
  var briefing = document.querySelector('[data-alm-briefing]');
  if (briefing) {
    var facts = briefing.querySelectorAll('.alm-fact');
    var lanes = briefing.querySelectorAll('[data-lane]');
    var bars = briefing.querySelectorAll('.alm-briefing-progress span');
    var DURATION = 3000;
    var current = 0;
    var elapsed = 0;
    var last = null;
    var held = 0;

    function show(index) {
      facts[current].classList.remove('is-active');
      current = index;
      elapsed = 0;
      var fact = facts[current];
      fact.classList.add('is-active');
      var lit = (fact.getAttribute('data-lanes') || '').split(' ');
      lanes.forEach(function (lane) {
        lane.classList.toggle('is-lit', lit.indexOf(lane.getAttribute('data-lane')) !== -1);
      });
      bars.forEach(function (bar, i) {
        bar.classList.toggle('is-done', i < current);
        bar.style.setProperty('--p', 0);
      });
    }

    function tick(now) {
      // Cap each step, so coming back to a background tab never skips facts.
      var step = last === null ? 0 : Math.min(now - last, 100);
      last = now;
      if (!held) {
        elapsed += step;
        if (elapsed >= DURATION) show((current + 1) % facts.length);
      }
      bars[current].style.setProperty('--p', Math.min(elapsed / DURATION, 1));
      requestAnimationFrame(tick);
    }

    // With reduced motion the card keeps every fact listed instead of cycling.
    if (facts.length && !reduceMotion) {
      briefing.classList.add('is-enhanced');
      show(0);
      requestAnimationFrame(tick);

      // Pointing at an athlete brings up the first fact about them and holds
      // it; letting go gives that fact a full turn before moving on.
      lanes.forEach(function (lane) {
        function hold() {
          held++;
          var id = lane.getAttribute('data-lane');
          for (var i = 0; i < facts.length; i++) {
            if ((facts[i].getAttribute('data-lanes') || '').split(' ').indexOf(id) !== -1) {
              if (i !== current) show(i);
              break;
            }
          }
          elapsed = 0;
        }
        function release() {
          held = Math.max(0, held - 1);
          elapsed = 0;
        }
        lane.addEventListener('mouseenter', hold);
        lane.addEventListener('mouseleave', release);
        lane.addEventListener('focus', hold);
        lane.addEventListener('blur', release);
      });
    }
  }

  // Before/after tabs, with arrow-key support as a proper tablist.
  document.querySelectorAll('[data-alm-tabs]').forEach(function (root) {
    var tabs = Array.prototype.slice.call(root.querySelectorAll('[role="tab"]'));
    function select(tab) {
      tabs.forEach(function (other) {
        var selected = other === tab;
        other.setAttribute('aria-selected', selected ? 'true' : 'false');
        other.tabIndex = selected ? 0 : -1;
        var panel = document.getElementById(other.getAttribute('aria-controls'));
        panel.hidden = !selected;
        // Re-run the cards' entrance each time their tab is chosen.
        panel.classList.remove('is-shown');
        if (selected) { void panel.offsetWidth; panel.classList.add('is-shown'); }
      });
    }
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { select(tab); });
      tab.addEventListener('keydown', function (event) {
        var step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (!step) return;
        var next = tabs[(i + step + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });
  });

  // EN/ES switch.
  document.querySelectorAll('[data-alm-lang]').forEach(function (root) {
    var buttons = root.querySelectorAll('[data-lang-btn]');
    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var code = button.getAttribute('data-lang-btn');
        buttons.forEach(function (other) {
          other.setAttribute('aria-pressed', other === button ? 'true' : 'false');
        });
        root.querySelectorAll('[data-lang-panel]').forEach(function (panel) {
          panel.hidden = panel.getAttribute('data-lang-panel') !== code;
        });
      });
    });
  });

  // AI chat: question, then the tool call, then the answer.
  document.querySelectorAll('[data-alm-chat]').forEach(function (chat) {
    if (reduceMotion) return;
    chat.classList.add('is-waiting');
    onVisible(chat, function () {
      chat.classList.remove('is-waiting');
      chat.classList.add('is-playing');
    }, 0.5);
  });
})();
