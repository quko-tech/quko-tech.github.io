/*
  Stations map: live water temperature from the public MeteoQUKO stations.

  Reads the Quko-Cloud public API whose base URL the page hands over in
  data-api (site.Params.meteo_api):
    GET <api>/stations                      latest reading of every public station
    GET <api>/stations/<id>/readings?hours  history for one station, on demand
  The contract lives in the firmware repo, docs/stations_api.md section 4.

  Every string shown comes from the page's front matter (the JSON block
  [data-stations-ui]). Text from the API is only ever set with textContent or
  setAttribute, never parsed as HTML.
*/
(function () {
  'use strict';

  var app = document.querySelector('[data-stations-app]');
  if (!app) return;

  var REFRESH_MS = 60 * 1000;
  var REQUEST_TIMEOUT_MS = 15 * 1000;
  var HISTORY_HOURS = 24;
  var HISTORY_TTL_MS = 5 * 60 * 1000;
  var INITIAL_CENTER = [42.75, -7.9]; // Galicia
  var INITIAL_ZOOM = 7;
  var FIT_MAX_ZOOM = 10;
  var FIT_PADDING_PX = 48;
  var FOCUS_MIN_ZOOM = 9;
  var SELECTED_Z_OFFSET = 1000;
  var TILE_URL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
  var TILE_MAX_ZOOM = 19;
  var TILE_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
  var CHART_HEIGHT = 96;
  var CHART_PAD_Y = 10;
  var CHART_MIN_SPAN_C = 0.5; // a flat day still reads as flat, not as noise
  var CHART_GAP_FACTOR = 3; // a gap longer than 3 typical intervals breaks the line
  var CHART_MIN_GAP_MS = 20 * 60 * 1000;
  var RESIZE_DEBOUNCE_MS = 150;
  var STATES = ['ok', 'stale', 'fault', 'no_data'];
  var STATE_ICONS = { ok: 'fa-check-circle', stale: 'fa-clock', fault: 'fa-exclamation-triangle', no_data: 'fa-minus-circle' };
  var SVG_NS = 'http://www.w3.org/2000/svg';
  // Number and time formats for a language a browser lacks data for fall back
  // to a close one with the same conventions (decimal comma, 24-hour clock).
  var LOCALE_FALLBACK = { gl: 'es' };

  var ui = {};
  try { ui = JSON.parse(document.querySelector('[data-stations-ui]').textContent) || {}; } catch (e) { ui = {}; }
  var api = (app.getAttribute('data-api') || '').replace(/\/+$/, '');
  var lang = app.getAttribute('data-lang') || document.documentElement.lang || 'en';
  var reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var $ = function (sel) { return app.querySelector(sel); };
  var mapEl = $('[data-stations-map]');
  var overlay = $('[data-stations-overlay]');
  var overlayTitle = $('[data-overlay-title]');
  var overlayText = $('[data-overlay-text]');
  var retryBtn = $('[data-retry]');
  var listEl = $('[data-stations-list]');
  var listEmpty = $('[data-stations-list-empty]');
  var countEl = $('[data-stations-count]');
  var statusEl = $('[data-stations-status]');
  var liveEl = $('[data-stations-live]');
  var detail = $('[data-station-detail]');
  var chartPlot = $('[data-chart-plot]');
  var chartReadout = $('[data-chart-readout]');
  var chartRange = $('[data-chart-range]');
  var chartMessage = $('[data-chart-message]');

  // ---- Formatting --------------------------------------------------------

  var locales = LOCALE_FALLBACK[lang] ? [lang, LOCALE_FALLBACK[lang]] : [lang];
  // Temperatures always show two decimals ("23.10 °C"; "23,10 °C" in es/gl).
  var tempFormat = new Intl.NumberFormat(locales, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  var timeFormat = new Intl.DateTimeFormat(locales, { hour: 'numeric', minute: '2-digit' });
  // Relative times come from the browser when it knows the page language,
  // and from the page's own short phrases ("hai 5 min") when it does not.
  var relFormat = window.Intl && Intl.RelativeTimeFormat && Intl.RelativeTimeFormat.supportedLocalesOf([lang]).length
    ? new Intl.RelativeTimeFormat(lang, { numeric: 'auto' }) : null;

  function t(key, vars) {
    var s = ui[key] == null ? '' : String(ui[key]);
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split('{' + k + '}').join(vars[k]); });
    return s;
  }

  function isNum(v) { return typeof v === 'number' && isFinite(v); }

  function formatTemp(c) { return isNum(c) ? tempFormat.format(c) + ' °C' : '–'; }

  function ageSeconds(ms) { return ms == null ? null : Math.max(0, (Date.now() - ms) / 1000); }

  // n is zero or negative: 0 is "now", -5 'minute' is "5 minutes ago".
  function rel(n, unit) {
    if (relFormat) return relFormat.format(n, unit);
    return n === 0 ? t('rel_now') : t('rel_' + unit, { n: Math.abs(n) });
  }

  function relative(ms) {
    var s = ageSeconds(ms);
    if (s === null) return '';
    if (s < 45) return rel(0, 'second');
    if (s < 3600) return rel(-Math.max(1, Math.floor(s / 60)), 'minute');
    if (s < 86400) return rel(-Math.floor(s / 3600), 'hour');
    return rel(-Math.floor(s / 86400), 'day');
  }

  // Short age for a marker: "45 min", "3 h", "2 d".
  function compactAge(ms) {
    var s = ageSeconds(ms);
    if (s === null) return '';
    var unit = 'minute', n = Math.max(1, Math.floor(s / 60));
    if (s >= 86400) { unit = 'day'; n = Math.floor(s / 86400); } else if (s >= 3600) { unit = 'hour'; n = Math.floor(s / 3600); }
    try { return new Intl.NumberFormat(locales, { style: 'unit', unit: unit, unitDisplay: 'narrow' }).format(n); } catch (e) { return n + ' ' + unit.charAt(0); }
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function icon(name) {
    var i = el('i', 'fas ' + name);
    i.setAttribute('aria-hidden', 'true');
    return i;
  }

  function stateBadge(state) {
    var badge = el('span', 'quko-station-state is-' + state);
    badge.appendChild(icon(STATE_ICONS[state]));
    badge.appendChild(document.createTextNode(t('state_' + state)));
    return badge;
  }

  // A temperature worth showing. Fault and no_data never have one; stale may
  // not either, when its last reading was itself a fault.
  function hasTemp(s) { return (s.state === 'ok' || s.state === 'stale') && isNum(s.temp); }

  // Stale without a valid value: "no recent valid reading", with its age.
  function staleWithoutTemp(s) { return s.state === 'stale' && !hasTemp(s); }

  // Marker and legend pill: temperature, plus the age when stale.
  function pill(s) {
    var p = el('span', 'quko-station-pill is-' + s.state);
    if (s.approx) p.appendChild(el('span', 'quko-station-pill-approx', '≈'));
    if (s.state === 'fault') p.appendChild(icon(STATE_ICONS.fault));
    p.appendChild(document.createTextNode(hasTemp(s) ? formatTemp(s.temp) : '–'));
    if (s.state === 'stale' && s.measuredAt != null) p.appendChild(el('span', 'quko-station-pill-age', '· ' + compactAge(s.measuredAt)));
    return p;
  }

  function readingText(s) {
    var temp = hasTemp(s) ? formatTemp(s.temp) + ', ' : staleWithoutTemp(s) ? t('no_valid_reading') + ', ' : '';
    return s.name + ': ' + temp + t('state_' + s.state) + (s.approx ? ', ' + t('approx_label') : '');
  }

  // ---- Data --------------------------------------------------------------

  function getJSON(url) {
    var ctrl = window.AbortController ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function () { ctrl.abort(); }, REQUEST_TIMEOUT_MS) : null;
    return fetch(url, { headers: { Accept: 'application/json' }, credentials: 'omit', signal: ctrl ? ctrl.signal : undefined })
      .then(function (r) {
        if (!r.ok) { var err = new Error('HTTP ' + r.status); err.status = r.status; throw err; }
        return r.json();
      })
      .then(function (data) { clearTimeout(timer); return data; }, function (err) { clearTimeout(timer); throw err; });
  }

  function parseTime(v) {
    if (typeof v !== 'string') return null;
    var ms = Date.parse(v);
    return isNaN(ms) ? null : ms;
  }

  function normalise(data) {
    if (!data || !Array.isArray(data.stations)) throw new Error('Unexpected response');
    return data.stations.filter(function (s) {
      return s && typeof s.id === 'string' && s.id && isNum(s.lat) && isNum(s.lon);
    }).map(function (s) {
      var temp = isNum(s.water_temperature_c) ? s.water_temperature_c : null;
      var measuredAt = parseTime(s.measured_at);
      var state = STATES.indexOf(s.state) >= 0 ? s.state : (measuredAt == null ? 'no_data' : 'stale');
      return {
        id: s.id,
        name: typeof s.name === 'string' && s.name ? s.name : s.id,
        reservoir: typeof s.reservoir === 'string' && s.reservoir ? s.reservoir : '',
        lat: s.lat,
        lon: s.lon,
        temp: temp,
        measuredAt: measuredAt,
        state: state,
        // Placed automatically in the middle of the nearest water body. A
        // missing field means an exact (TTN or manual) position.
        approx: s.location_approx === true
      };
    }).sort(function (a, b) { return a.name.localeCompare(b.name, lang); });
  }

  // ---- Map ---------------------------------------------------------------

  var L = window.L;
  var map = null;
  var markers = {};
  var fittedKey = null;

  function initMap() {
    if (!L || !mapEl) {
      if (mapEl) { mapEl.classList.add('is-unavailable'); mapEl.appendChild(el('p', 'quko-stations-map-message', t('map_unavailable'))); }
      return;
    }
    map = L.map(mapEl, { scrollWheelZoom: false, keyboard: true }).setView(INITIAL_CENTER, INITIAL_ZOOM);
    L.tileLayer(TILE_URL, { maxZoom: TILE_MAX_ZOOM, attribution: TILE_ATTRIBUTION }).addTo(map);
    // The wheel zooms the map only once it has been clicked or focused, so
    // scrolling down the page never gets caught in it.
    map.on('focus', function () { map.scrollWheelZoom.enable(); });
    map.on('blur', function () { map.scrollWheelZoom.disable(); });
  }

  function markerIcon(s) {
    var root = el('div', 'quko-station-marker is-' + s.state + (s.id === selectedId ? ' is-selected' : ''));
    root.appendChild(pill(s));
    return L.divIcon({ html: root, className: 'quko-station-marker-icon', iconSize: [0, 0], iconAnchor: [0, 0] });
  }

  function labelMarker(marker, s) {
    var node = marker.getElement();
    if (!node) return;
    node.setAttribute('aria-label', readingText(s));
  }

  function renderMarkers() {
    if (!map) return;
    var seen = {};
    stations.forEach(function (s) {
      seen[s.id] = true;
      var m = markers[s.id];
      if (!m) {
        m = L.marker([s.lat, s.lon], { icon: markerIcon(s), title: s.name, keyboard: true, riseOnHover: true });
        m.on('click', function () { select(s.id); });
        // Leaflet makes the marker a focusable button but only opens popups
        // from the keyboard; Enter and Space select the station here.
        m.on('keydown', function (e) {
          var key = e.originalEvent.key;
          if (key === 'Enter' || key === ' ') { e.originalEvent.preventDefault(); select(s.id); }
        });
        m.addTo(map);
        markers[s.id] = m;
      } else {
        m.setLatLng([s.lat, s.lon]);
        m.setIcon(markerIcon(s));
      }
      m.setZIndexOffset(s.id === selectedId ? SELECTED_Z_OFFSET : 0);
      labelMarker(m, s);
    });
    Object.keys(markers).forEach(function (id) {
      if (!seen[id]) { map.removeLayer(markers[id]); delete markers[id]; }
    });

    // Frame the stations whenever the set changes, never on a plain refresh,
    // so a visitor's own panning is left alone.
    var key = stations.map(function (s) { return s.id + '@' + s.lat + ',' + s.lon; }).join('|');
    if (stations.length && key !== fittedKey) {
      map.fitBounds(L.latLngBounds(stations.map(function (s) { return [s.lat, s.lon]; })), { padding: [FIT_PADDING_PX, FIT_PADDING_PX], maxZoom: FIT_MAX_ZOOM, animate: false });
    }
    fittedKey = key;
  }

  // ---- List --------------------------------------------------------------

  function renderList() {
    var focusedId = document.activeElement && listEl.contains(document.activeElement) ? document.activeElement.getAttribute('data-id') : null;
    while (listEl.firstChild) listEl.removeChild(listEl.firstChild);
    stations.forEach(function (s) {
      var li = el('li');
      var btn = el('button', 'quko-station-item is-' + s.state);
      btn.type = 'button';
      btn.setAttribute('data-id', s.id);
      if (s.id === selectedId) btn.setAttribute('aria-current', 'true');

      var main = el('span', 'quko-station-item-main');
      main.appendChild(el('strong', null, s.name));
      if (s.reservoir) main.appendChild(el('span', null, s.reservoir));
      if (s.approx) main.appendChild(el('span', 'quko-station-item-approx', '≈ ' + t('approx_label')));
      btn.appendChild(main);

      var reading = el('span', 'quko-station-item-reading');
      reading.appendChild(staleWithoutTemp(s)
        ? el('span', 'quko-station-item-temp is-text', t('no_valid_reading'))
        : el('span', 'quko-station-item-temp', hasTemp(s) ? formatTemp(s.temp) : '–'));
      reading.appendChild(stateBadge(s.state));
      reading.appendChild(el('span', 'quko-station-item-age', s.measuredAt != null ? relative(s.measuredAt) : t('never')));
      btn.appendChild(reading);

      btn.addEventListener('click', function () { select(s.id); });
      li.appendChild(btn);
      listEl.appendChild(li);
    });
    if (focusedId) {
      var again = listEl.querySelector('[data-id="' + (window.CSS && CSS.escape ? CSS.escape(focusedId) : focusedId) + '"]');
      if (again) again.focus();
    }
  }

  // ---- Detail ------------------------------------------------------------

  var selectedId = null;
  var history = {}; // id -> { at, measuredAt, readings, error }
  var historyToken = 0;

  function byId(id) {
    for (var i = 0; i < stations.length; i++) if (stations[i].id === id) return stations[i];
    return null;
  }

  function select(id) {
    var s = byId(id);
    if (!s) return;
    selectedId = id;
    renderMarkers();
    renderList();
    renderDetail();
    if (map) {
      var zoom = Math.max(map.getZoom(), FOCUS_MIN_ZOOM);
      if (reducedMotion) map.setView([s.lat, s.lon], zoom, { animate: false });
      else map.flyTo([s.lat, s.lon], zoom, { duration: 0.6 });
    }
    detail.focus({ preventScroll: true });
    detail.scrollIntoView({ block: 'nearest', behavior: reducedMotion ? 'auto' : 'smooth' });
  }

  function closeDetail() {
    var id = selectedId;
    selectedId = null;
    detail.hidden = true;
    renderMarkers();
    renderList();
    var btn = id && listEl.querySelector('[data-id="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
    if (btn) btn.focus();
  }

  function renderDetail() {
    var s = selectedId && byId(selectedId);
    if (!s) { detail.hidden = true; selectedId = null; return; }
    detail.hidden = false;
    detail.className = 'quko-station-detail is-' + s.state;
    $('[data-detail-name]').textContent = s.name;
    var res = $('[data-detail-reservoir]');
    res.textContent = s.reservoir;
    res.hidden = !s.reservoir;
    $('[data-detail-approx]').hidden = !s.approx;
    $('[data-detail-temp]').textContent = hasTemp(s) ? formatTemp(s.temp) : '–';
    var stateEl = $('[data-detail-state]');
    while (stateEl.firstChild) stateEl.removeChild(stateEl.firstChild);
    stateEl.appendChild(stateBadge(s.state));
    $('[data-detail-age]').textContent = s.measuredAt != null ? t('updated', { ago: relative(s.measuredAt) }) : t('never');
    $('[data-detail-explain]').textContent = staleWithoutTemp(s) ? t('state_stale_invalid_text') : t('state_' + s.state + '_text');
    loadHistory(s);
  }

  function loadHistory(s) {
    if (s.state === 'no_data') { showChartMessage(t('chart_empty')); return; }
    var cached = history[s.id];
    if (cached && cached.unavailable) { showChartMessage(t('chart_unavailable')); return; }
    var fresh = cached && !cached.error && Date.now() - cached.at < HISTORY_TTL_MS && cached.measuredAt === s.measuredAt;
    if (fresh) { renderChart(cached.readings); return; }
    if (!cached || cached.error) showChartMessage(t('chart_loading'));
    else renderChart(cached.readings); // keep the old line on screen while the new one loads
    var token = ++historyToken;
    getJSON(api + '/stations/' + encodeURIComponent(s.id) + '/readings?hours=' + HISTORY_HOURS).then(function (data) {
      var readings = (data && Array.isArray(data.readings) ? data.readings : []).map(function (r) {
        return { t: parseTime(r && r.t), c: r && r.c };
      }).filter(function (r) { return r.t != null && isNum(r.c); }).sort(function (a, b) { return a.t - b.t; });
      history[s.id] = { at: Date.now(), measuredAt: s.measuredAt, readings: readings };
      if (token === historyToken && selectedId === s.id) renderChart(readings);
    }, function (err) {
      // 400 (hours out of range) and 404 (unknown or private id) mean there is
      // no history to show for this station; anything else may pass, so the
      // next refresh tries again. Neither touches the page-level state.
      var unavailable = err && (err.status === 400 || err.status === 404);
      history[s.id] = { at: Date.now(), error: !unavailable, unavailable: unavailable };
      if (token === historyToken && selectedId === s.id) showChartMessage(t(unavailable ? 'chart_unavailable' : 'chart_error'));
    });
  }

  function showChartMessage(text) {
    while (chartPlot.firstChild) chartPlot.removeChild(chartPlot.firstChild);
    chartPlot.hidden = true;
    chartRange.hidden = true;
    chartReadout.textContent = '';
    chartMessage.textContent = text;
    chartMessage.hidden = false;
  }

  function svg(tag, attrs) {
    var node = document.createElementNS(SVG_NS, tag);
    Object.keys(attrs || {}).forEach(function (k) { node.setAttribute(k, attrs[k]); });
    return node;
  }

  function renderChart(readings) {
    var now = Date.now();
    var from = now - HISTORY_HOURS * 3600 * 1000;
    var points = readings.filter(function (r) { return r.t >= from; });
    if (!points.length) { showChartMessage(t('chart_empty')); return; }

    chartMessage.hidden = true;
    chartPlot.hidden = false;
    while (chartPlot.firstChild) chartPlot.removeChild(chartPlot.firstChild);

    var w = Math.max(chartPlot.clientWidth, 200);
    var h = CHART_HEIGHT;
    var min = points[0], max = points[0];
    points.forEach(function (p) { if (p.c < min.c) min = p; if (p.c > max.c) max = p; });
    var lo = min.c, hi = max.c;
    if (hi - lo < CHART_MIN_SPAN_C) { var mid = (hi + lo) / 2; lo = mid - CHART_MIN_SPAN_C / 2; hi = mid + CHART_MIN_SPAN_C / 2; }
    var x = function (ms) { return (ms - from) / (now - from) * w; };
    var y = function (c) { return CHART_PAD_Y + (hi - c) / (hi - lo) * (h - 2 * CHART_PAD_Y); };

    // Break the line across gaps in reporting instead of drawing over them.
    var steps = [];
    for (var i = 1; i < points.length; i++) steps.push(points[i].t - points[i - 1].t);
    steps.sort(function (a, b) { return a - b; });
    var typical = steps.length ? steps[Math.floor(steps.length / 2)] : 0;
    var gap = Math.max(CHART_MIN_GAP_MS, typical * CHART_GAP_FACTOR);
    var d = '';
    points.forEach(function (p, k) {
      var move = k === 0 || p.t - points[k - 1].t > gap;
      d += (move ? 'M' : 'L') + x(p.t).toFixed(1) + ' ' + y(p.c).toFixed(1);
    });

    var root = svg('svg', { viewBox: '0 0 ' + w + ' ' + h, width: w, height: h, role: 'img', class: 'quko-station-chart-svg' });
    root.setAttribute('aria-label', t('chart_label', { min: formatTemp(min.c), max: formatTemp(max.c) }));
    root.appendChild(svg('line', { x1: 0, x2: w, y1: y(max.c), y2: y(max.c), class: 'quko-station-chart-grid' }));
    root.appendChild(svg('line', { x1: 0, x2: w, y1: y(min.c), y2: y(min.c), class: 'quko-station-chart-grid' }));
    root.appendChild(svg('path', { d: d, class: 'quko-station-chart-line' }));
    var last = points[points.length - 1];
    root.appendChild(svg('circle', { cx: x(last.t), cy: y(last.c), r: 4, class: 'quko-station-chart-dot' }));
    var cross = svg('line', { y1: 0, y2: h, class: 'quko-station-chart-cross' });
    var hoverDot = svg('circle', { r: 4, class: 'quko-station-chart-dot is-hover' });
    cross.style.display = hoverDot.style.display = 'none';
    root.appendChild(cross);
    root.appendChild(hoverDot);
    chartPlot.appendChild(root);

    var axis = el('div', 'quko-station-chart-axis');
    axis.setAttribute('aria-hidden', 'true');
    axis.appendChild(el('span', null, rel(-HISTORY_HOURS, 'hour')));
    axis.appendChild(el('span', null, rel(0, 'second')));
    chartPlot.appendChild(axis);

    function readout(p) { return formatTemp(p.c) + ' · ' + timeFormat.format(new Date(p.t)); }
    chartReadout.textContent = readout(last);

    // Hover: the nearest reading under the pointer.
    function onMove(e) {
      var box = root.getBoundingClientRect();
      var px = (e.clientX - box.left) / box.width * w;
      var best = points[0];
      points.forEach(function (p) { if (Math.abs(x(p.t) - px) < Math.abs(x(best.t) - px)) best = p; });
      cross.setAttribute('x1', x(best.t)); cross.setAttribute('x2', x(best.t));
      hoverDot.setAttribute('cx', x(best.t)); hoverDot.setAttribute('cy', y(best.c));
      cross.style.display = hoverDot.style.display = '';
      chartReadout.textContent = readout(best);
    }
    function onLeave() {
      cross.style.display = hoverDot.style.display = 'none';
      chartReadout.textContent = readout(last);
    }
    root.addEventListener('pointermove', onMove);
    root.addEventListener('pointerdown', onMove);
    root.addEventListener('pointerleave', onLeave);

    $('[data-chart-min]').textContent = t('at', { value: formatTemp(min.c), time: timeFormat.format(new Date(min.t)) });
    $('[data-chart-max]').textContent = t('at', { value: formatTemp(max.c), time: timeFormat.format(new Date(max.t)) });
    chartRange.hidden = false;
  }

  // ---- Page states -------------------------------------------------------

  var stations = [];
  var hasData = false;
  var lastLoadAt = 0;
  var loading = false;
  var timer = null;
  var announced = null;

  function announce(kind, text) {
    if (announced === kind) return;
    announced = kind;
    liveEl.textContent = text;
  }

  function setOverlay(kind) {
    overlay.hidden = kind === null;
    overlay.className = 'quko-stations-overlay' + (kind ? ' is-' + kind : '');
    retryBtn.hidden = kind !== 'error';
    if (kind === 'loading') { overlayTitle.textContent = t('loading'); overlayText.textContent = ''; }
    if (kind === 'error') { overlayTitle.textContent = t('error_title'); overlayText.textContent = t('error_text'); }
    if (kind === 'empty') { overlayTitle.textContent = t('empty_title'); overlayText.textContent = t('empty_text'); }
  }

  function render(failed) {
    if (!hasData) {
      setOverlay(failed ? 'error' : 'loading');
      listEmpty.hidden = !failed;
      listEmpty.textContent = failed ? t('list_error') : '';
      statusEl.textContent = failed ? '' : t('loading');
      countEl.textContent = '';
      if (failed) announce('error', t('error_title'));
      return;
    }
    setOverlay(stations.length ? null : 'empty');
    countEl.textContent = stations.length ? String(stations.length) : '';
    listEmpty.hidden = stations.length > 0;
    listEmpty.textContent = stations.length ? '' : t('list_empty');
    statusEl.classList.toggle('is-warning', !!failed);
    statusEl.textContent = failed ? t('status_stale', { ago: relative(lastLoadAt) }) : t('status_ok', { time: timeFormat.format(new Date(lastLoadAt)) });
    renderMarkers();
    renderList();
    renderDetail();
    if (failed) announce('refresh-error', t('status_stale', { ago: relative(lastLoadAt) }));
    else announce(stations.length ? 'ok' : 'empty', stations.length ? t('loaded', { count: stations.length }) : t('empty_title'));
  }

  function schedule(delay) {
    clearTimeout(timer);
    if (!document.hidden) timer = setTimeout(load, delay == null ? REFRESH_MS : delay);
  }

  function load() {
    if (loading) return;
    loading = true;
    clearTimeout(timer);
    if (!hasData) render(false);
    var request = api ? getJSON(api + '/stations') : Promise.reject(new Error('meteo_api is not configured'));
    request.then(function (data) {
      stations = normalise(data);
      hasData = true;
      lastLoadAt = Date.now();
      render(false);
    }).catch(function () {
      render(true);
    }).then(function () {
      loading = false;
      schedule();
    });
  }

  // Refresh only while the page is visible; catch up as soon as it is again.
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) { clearTimeout(timer); return; }
    schedule(Math.max(0, REFRESH_MS - (Date.now() - lastLoadAt)));
  });

  retryBtn.addEventListener('click', function () { announced = null; load(); });
  $('[data-detail-close]').addEventListener('click', closeDetail);
  detail.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDetail(); });

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      var cached = selectedId && history[selectedId];
      if (cached && cached.readings && !chartPlot.hidden) renderChart(cached.readings);
    }, RESIZE_DEBOUNCE_MS);
  });

  initMap();
  load();
}());
