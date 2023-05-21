const header = document.querySelector('.wrapper-header');
const logo = document.querySelector('.logo');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const projectsWrapper = document.querySelector('.projects-wrapper');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    logo.style.visibility = 'hidden';
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    projectsWrapper.style.visibility = 'hidden';

    showMenu = true;
  } else {
    setTimeout(function(){
      logo.style.visibility = 'visible';
    }, 500);
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    setTimeout(function(){
      projectsWrapper.style.visibility = 'visible';
    }, 500);

    showMenu = false;
  }
}

let prevScrollpos = window.pageYOffset;
window.addEventListener('scroll', function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos && currentScrollPos < 100) {
    header.classList.remove('hidden');
  } else if (currentScrollPos >= 35) {
    header.classList.add('hidden');
  }
  prevScrollpos = currentScrollPos;
});