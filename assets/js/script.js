const header = document.querySelector('.header-wrapper');
const logo = document.querySelector('.logo');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const home = document.getElementById('home');
const footer = document.querySelector('.footer');
const hero = document.getElementById('hero');

// nav links
const homeBtn = document.querySelector('.home-btn');
const projectsBtn = document.querySelector('.projects-btn');
const aboutBtn = document.querySelector('.about-btn');
const contactBtn = document.querySelector('.contact-btn');

let showMenu = false;


const btns = [menuBtn, homeBtn, projectsBtn, aboutBtn, contactBtn];

function addBtnListeners() {
  for (let i= 0; i < btns.length; i++) {
    if (btns[i]) {
      btns[i].addEventListener('click', toggleMenu);
    }
  }
}

addBtnListeners();



function toggleMenu() {
  if(!showMenu) {
    logo.style.visibility = 'hidden';
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    if (home) {
      home.style.visibility = 'hidden';
    }
    if (hero) {
      hero.style.visibility = 'hidden';
    }
    footer.style.visibility = 'hidden';
    disableScrolling();
    showMenu = true;
  } else {
    setTimeout(function(){
      logo.style.visibility = 'visible';
    }, 500);
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    if (home) {
      setTimeout(function(){
        home.style.visibility = 'visible';
      }, 500);
    }
    if (hero) {
      hero.style.visibility = 'visible';
    }
    setTimeout(function(){
      footer.style.visibility = 'visible';
    }, 500);
    enableScrolling();
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

function disableScrolling(){
  let x=window.scrollX;
  let y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
  window.onscroll=function(){};
}


// function sendEmail(event) {
//   event.preventDefault();

//   let formData = {
//     name: document.getElementById('name').value,
//     email: document.getElementById('email').value,
//     message: document.getElementById('message').value
//   };

//   const serviceId = "service_v2qr8wc";
//   const templateId = "template_6fjhqv9";

//   emailjs.send('serviceId','templateId',formData)
//   .then(function(response) {
//     alert('SUCCESS!' + response.status);
//   }, function(error) {
//     alert('FAILED...'+ error.status);
//   });  
// }