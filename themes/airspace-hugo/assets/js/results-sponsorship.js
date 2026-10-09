(function () {
  var competition = document.querySelector('[data-results-competition]');
  var boat = document.querySelector('[data-results-boat]');
  var tables = document.querySelectorAll('[data-award-table]');
  if (!competition || !boat || !tables.length) return;
  document.documentElement.classList.add('has-results-sponsorship-js');

  function showSelectedTable() {
    tables.forEach(function (table) {
      table.classList.toggle('is-selected', table.dataset.competition === competition.value && table.dataset.boat === boat.value);
    });
  }

  competition.addEventListener('change', showSelectedTable);
  boat.addEventListener('change', showSelectedTable);
  showSelectedTable();
}());
