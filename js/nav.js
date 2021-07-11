const sticky = document.querySelector('header');

window.onscroll = () => {
  this.scrollY > 180
    ? sticky.classList.add('sticky')
    : sticky.classList.remove('sticky');
};

const sideNavBg = document.querySelector('.side-nav-bg');
const sideNavButn = document.querySelector('.side-nav-btn');
const nav = document.querySelector('.nav');
const closeBtnBg = document.querySelector('.close-btn-bg');

sideNavButn.addEventListener('click', () => {
  sideNavButn.classList.toggle('nav-clicked');
  closeBtnBg.classList.toggle('show');
  sideNavBg.classList.toggle('show');
  nav.classList.toggle('side-nav');
});

closeBtnBg.addEventListener('click', () => {
  sideNavButn.classList.toggle('nav-clicked');
  closeBtnBg.classList.toggle('show');
  sideNavBg.classList.toggle('show');
  nav.classList.toggle('side-nav');
});
