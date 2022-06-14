const menu = document.querySelector('.menu');
const mobileNav = document.querySelector('.mobile-nav');

menu.addEventListener('click', () => {
  menu.classList.toggle('active');
  mobileNav.classList.toggle('active');
});

document.querySelectorAll('.itemm').forEach((n) => n.addEventListener('click', () => {
  menu.classList.remove('active');
  mobileNav.classList.remove('active');
}));
