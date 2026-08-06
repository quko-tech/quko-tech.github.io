/*
 * Country-aware indicative pricing.
 *
 * Everything here is a display convenience and nothing more. The price a
 * customer actually pays is decided server-side at cloud.quko.es from the
 * billing country on their payment method, and re-checked against the settled
 * transaction. So a wrong guess here is a cosmetic problem, never a revenue
 * one — which is why it is safe to fall back to a geolocation API at all.
 *
 * Data: /data/countries-pricing.json, generated from the authoritative table in
 * Quko-Cloud. Never hand-edited.
 */
(function () {
  'use strict';

  var root = document.querySelector('[data-pricing-root]');
  if (!root) return;

  var STORAGE_KEY = 'quko.pricing.country';
  var CLOUD = root.getAttribute('data-cloud') || 'https://cloud.quko.es';

  var data = null;
  var period = 'sub_monthly';
  var country = null;

  var select = root.querySelector('[data-country-select]');
  var toggles = root.querySelectorAll('[data-period]');
  var disclaimerEl = root.querySelector('[data-disclaimer]');

  function bandFor(code) {
    if (!data) return null;
    var entry = code && data.countries[code];
    // An unknown country falls back to the most expensive band, matching the
    // server. Not recognising somewhere must never look like a discount.
    return entry ? entry.band : data.default_band;
  }

  function money(amount) {
    var sym = (data && data.currency && data.currency.symbol) || '€';
    return sym + amount;
  }

  function periodLabel() {
    var active = root.querySelector('[data-period].is-active');
    return active ? active.textContent.trim().toLowerCase() : '';
  }

  function render() {
    if (!data) return;
    var band = bandFor(country);
    var prices = band && data.bands[band] && data.bands[band].basic;
    var known = !!(country && data.countries[country]);

    // Fixed periods are sold in the shop, which cannot price by country, so
    // they always show the high band — NOT the visitor's. Showing a banded
    // figure here would quote a price the shop will not honour. Rendered
    // before the country check because they do not depend on it.
    var shopPrices = data.bands.high && data.bands.high.basic;
    root.querySelectorAll('[data-fixed-sku]').forEach(function (link) {
      var sku = link.getAttribute('data-fixed-sku');
      var key = sku.replace('basic_', '');             // basic_code_6m -> code_6m
      var em = link.querySelector('[data-fixed-price]');
      if (em && shopPrices && shopPrices[key] !== undefined) {
        em.textContent = money(shopPrices[key]);
      }
    });

    root.querySelectorAll('[data-plan]').forEach(function (card) {
      var priceEl = card.querySelector('[data-price]');
      if (!priceEl || !prices) return;

      if (!known) {
        // Don't show a number we can't stand behind; ask instead.
        priceEl.textContent = '—';
        card.querySelectorAll('[data-period-label]').forEach(function (el) {
          el.textContent = '';
        });
        var note = card.querySelector('[data-vat-note]');
        if (note) note.hidden = true;
        return;
      }

      priceEl.textContent = money(prices[period]);
      var label = card.querySelector('[data-period-label]');
      if (label) label.textContent = '/ ' + periodLabel();
      var vat = card.querySelector('[data-vat-note]');
      if (vat) vat.hidden = false;

      var cta = card.querySelector('[data-cta]');
      if (cta) {
        var sku = period === 'sub_yearly'
          ? cta.getAttribute('data-sku-yearly')
          : cta.getAttribute('data-sku-monthly');
        if (sku) cta.href = CLOUD + '/billing/checkout?sku=' + encodeURIComponent(sku);
      }

    });
  }

  function setCountry(code, remember) {
    country = code || null;
    if (remember && code) {
      try { localStorage.setItem(STORAGE_KEY, code); } catch (e) { /* private mode */ }
    }
    if (select && select.value !== (code || '')) select.value = code || '';
    render();
  }

  function populateSelect() {
    if (!select || !data) return;
    var codes = Object.keys(data.countries).sort(function (a, b) {
      return data.countries[a].name.localeCompare(data.countries[b].name);
    });
    var frag = document.createDocumentFragment();
    codes.forEach(function (code) {
      var opt = document.createElement('option');
      opt.value = code;
      opt.textContent = data.countries[code].flag + '  ' + data.countries[code].name;
      frag.appendChild(opt);
    });
    select.appendChild(frag);
  }

  /* Geolocation is a convenience for first-time visitors only, and is skipped
     entirely once a choice has been stored or made. Both endpoints are
     best-effort: if they fail or are blocked, the selector is simply left for
     the visitor to use. */
  function guessCountry() {
    return fetch('https://ipapi.co/json/')
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(function (j) { return j && j.country_code; })
      .catch(function () {
        return fetch('https://api.country.is/')
          .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
          .then(function (j) { return j && j.country; })
          .catch(function () { return null; });
      });
  }

  toggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toggles.forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      period = btn.getAttribute('data-period');
      render();
    });
  });

  if (select) {
    select.addEventListener('change', function () {
      setCountry(select.value, true);
    });
  }

  fetch('/data/countries-pricing.json')
    .then(function (r) { return r.json(); })
    .then(function (json) {
      data = json;
      populateSelect();
      if (disclaimerEl && !disclaimerEl.textContent.trim() && json.disclaimer) {
        disclaimerEl.textContent = json.disclaimer;
      }

      var stored = null;
      try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
      if (stored && json.countries[stored]) {
        setCountry(stored, false);
        return;
      }
      render();
      return guessCountry().then(function (code) {
        if (code && json.countries[code]) setCountry(code, false);
      });
    })
    .catch(function () {
      // The table could not be loaded. Leave the placeholders as they are
      // rather than inventing a price; the CTAs still reach the Cloud, which is
      // where the real figure comes from anyway.
      if (disclaimerEl) disclaimerEl.hidden = true;
    });
})();
