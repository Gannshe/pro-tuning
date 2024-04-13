// Mobile menu
document.querySelectorAll('.menu-item-mobile').forEach(function(menuLink) {
    menuLink.addEventListener('click', function() {
      document.querySelector('#burger-checkbox').checked = false;
    });
  });
// Mobile menu