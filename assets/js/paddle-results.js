// Paddle Results page: count-up stats, the cover's phone cycling through the
// app's screens, the web app's tabs and the scrolling tour that swaps the
// sticky phone's screen as each step is read. Every piece starts from
// server-rendered, readable markup and only adds motion on top.
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
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

  // Stats count up once, the first time they scroll into view.
  document.querySelectorAll('[data-pr-count]').forEach(function (el) {
    if (reduceMotion) return;
    var target = parseInt(el.getAttribute('data-pr-count'), 10);
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

  function show(screens, index) {
    screens.forEach(function (screen, i) {
      screen.classList.toggle('is-active', i === index);
    });
  }

  // Steps through `count` views every `delay` ms, but only while `root` is on
  // screen, the tab is visible and nobody is pointing at one of `holders`
  // (root itself by default). `root` gets .is-playing while the clock runs,
  // so a timer bar can follow it. Returns a function that shows a view by
  // hand; `false` as its second argument stops the clock for good.
  function autoplay(root, count, delay, select, holders) {
    var current = 0;
    var timer = null;
    var inView = true;
    var held = false;
    var stopped = reduceMotion;

    function stop() {
      clearTimeout(timer);
      root.classList.remove('is-playing');
    }

    function play() {
      stop();
      if (stopped || held || !inView || document.hidden) return;
      // Restart any timer bar so it always matches the clock.
      void root.offsetWidth;
      root.classList.add('is-playing');
      timer = setTimeout(function () { go((current + 1) % count); }, delay);
    }

    function go(index, keepPlaying) {
      current = index;
      select(index);
      if (keepPlaying === false) stopped = true;
      play();
    }

    (holders || [root]).forEach(function (el) {
      el.addEventListener('mouseenter', function () { held = true; stop(); });
      el.addEventListener('mouseleave', function () { held = false; play(); });
    });
    document.addEventListener('visibilitychange', play);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (entries) {
        inView = entries[0].isIntersecting;
        play();
      }).observe(root);
    }
    play();
    return go;
  }

  // Cover: the phone beside the browser cycles through the app's screens.
  var carousel = document.querySelector('[data-pr-carousel]');
  if (carousel) {
    var screens = Array.prototype.slice.call(carousel.querySelectorAll('.pr-screen'));
    autoplay(carousel, screens.length, 3600, function (index) { show(screens, index); });
  }

  // On the web: a tab per page of the web app, with its address in the bar.
  // The tabs play by themselves until someone picks one.
  var web = document.querySelector('[data-pr-web]');
  if (web) {
    var tabs = Array.prototype.slice.call(web.querySelectorAll('[data-pr-tab]'));
    var webShots = Array.prototype.slice.call(web.querySelectorAll('[data-pr-webshot]'));
    var url = web.querySelector('[data-pr-url]');
    var view = web.querySelector('[role="tabpanel"]');
    var tabList = web.querySelector('.pr-web-tabs');
    var holders = [tabList, web.querySelector('.pr-web-window')];

    // On a narrow screen the tabs scroll sideways: keep the chosen one in
    // view, and drop the edge fade once the row is scrolled to its end.
    function reveal(tab) {
      if (tabList.scrollWidth <= tabList.clientWidth) return;
      var left = tab.offsetLeft - (tabList.clientWidth - tab.offsetWidth) / 2;
      tabList.scrollTo({ left: Math.max(0, left), behavior: reduceMotion ? 'auto' : 'smooth' });
    }
    function edge() {
      tabList.classList.toggle('is-scrolled-end', tabList.scrollLeft + tabList.clientWidth >= tabList.scrollWidth - 2);
    }
    tabList.addEventListener('scroll', edge);
    edge();

    var go = autoplay(web, tabs.length, 4000, function (index) {
      show(webShots, index);
      tabs.forEach(function (tab, i) {
        tab.setAttribute('aria-selected', i === index ? 'true' : 'false');
        tab.tabIndex = i === index ? 0 : -1;
      });
      if (url) url.textContent = tabs[index].getAttribute('data-address');
      reveal(tabs[index]);
      if (view) view.setAttribute('aria-labelledby', tabs[index].id);
    }, holders);
    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () { go(i, false); });
      tab.addEventListener('keydown', function (event) {
        var step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
        if (!step) return;
        var next = (i + step + tabs.length) % tabs.length;
        go(next, false);
        tabs[next].focus();
      });
    });
  }

  // Tour: the step nearest the middle of the viewport is the one being read.
  // The sticky phone shows its screen and the meter fills to match.
  var tour = document.querySelector('[data-pr-tour]');
  if (tour && 'IntersectionObserver' in window) {
    var steps = Array.prototype.slice.call(tour.querySelectorAll('[data-pr-step]'));
    var shots = Array.prototype.slice.call(tour.querySelectorAll('[data-pr-shot]'));
    var counter = tour.querySelector('[data-pr-current]');
    var progress = tour.querySelector('[data-pr-progress]');

    tour.classList.add('is-enhanced');

    function activate(index) {
      steps.forEach(function (step, i) {
        step.classList.toggle('is-active', i === index);
      });
      show(shots, index);
      if (counter) counter.textContent = (index < 9 ? '0' : '') + (index + 1);
      if (progress) progress.style.transform = 'scaleX(' + (index + 1) / steps.length + ')';
    }

    var stepObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) activate(steps.indexOf(entry.target));
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    steps.forEach(function (step) { stepObserver.observe(step); });
    activate(0);
  }
})();
