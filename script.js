const menuOpen = document.querySelector('#menuOpen');
const menuClose = document.querySelector('#menuClose');
const menuMobile = document.querySelector('#menuMobile');

menuOpen.addEventListener('click', () => {
  menuMobile.classList.add('active');
});

menuClose.addEventListener('click', () => {
  menuMobile.classList.remove('active');
});