import './scss/styles.scss';

const burger = document.querySelector('.header__burger');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.sidebar__close');
const overlay = document.querySelector('.overlay');
const firstLink = sidebar.querySelector('a');
let lastFocused = null;

const openSidebar = () => {
  lastFocused = document.activeElement;
  overlay.classList.add('overlay--open');
  sidebar.classList.add('sidebar--open');
  burger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';

  (firstLink || sidebar).focus();
};

const closeSidebar = () => {
  sidebar.classList.remove('sidebar--open');
  overlay.classList.remove('overlay--open');
  burger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
};

burger.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeSidebar();
});
