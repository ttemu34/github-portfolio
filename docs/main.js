// Project filter: toggles cards by data-tags; no layout libraries.
(function () {
  var chips = document.querySelectorAll('.filters .chip');
  var grid = document.querySelector('.projects');
  var cards = document.querySelectorAll('.projects .project');
  var empty = document.querySelector('.filter-empty');
  if (!chips.length || !grid) return;

  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.dataset.filter;
      chips.forEach(function (c) { c.setAttribute('aria-pressed', String(c === chip)); });
      var shown = 0;
      cards.forEach(function (card) {
        var match = f === 'all' || card.dataset.tags.split(' ').indexOf(f) !== -1;
        card.hidden = !match;
        if (match) shown++;
      });
      grid.classList.toggle('is-filtered', f !== 'all');
      if (empty) empty.hidden = shown !== 0;
    });
  });
})();
