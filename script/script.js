const burgButton = document.getElementById('burger-menu');
const navBurg = document.querySelector('.burger_navigation');
const overlay = document.querySelector('.overlay');

if (burgButton) {
  burgButton.addEventListener('click', (e) => {
    burgerClick();
  });
}

if (overlay) {
    overlay.addEventListener('click', (e) => {
      burgerClick();
    });
}

if (navBurg) {
    navBurg.addEventListener('click', (e) => {
      burgerClick();
    });
}


function burgerClick () {
    navBurg.classList.toggle('action');
    overlay.classList.toggle('show');
}
