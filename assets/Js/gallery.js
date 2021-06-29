var iso = new Isotope( '.gallery__grid', {
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});

var filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener( 'click', function( event ) {
  // only work with buttons
  if ( !matchesSelector( event.target, 'button' ) ) {
    return;
  }
  var filterValue = event.target.getAttribute('data-filter');
  // use matching filter function
  // filterValue = filterFns[ filterValue ] || filterValue;
  iso.arrange({ filter: filterValue });
});