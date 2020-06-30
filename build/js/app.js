'use strict';

/*Плавная прокрутка до якоря*/
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/*Попапы*/
const openPopupButtons = document.querySelectorAll('.popup-button'),
  popupOverlay = document.querySelector('.popup-overlay'),
  closePopupButtons = document.querySelectorAll('.popup-close'),
  popupForm = document.querySelectorAll('.popup form');


openPopupButtons.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.preventDefault();

    let popupId = this.getAttribute('data-popup'),
      popupElem = document.querySelector('.popup[data-popup="' + popupId + '"]');

    popupElem.classList.add('active');
    popupOverlay.classList.add('active');
  });
});

closePopupButtons.forEach(function(item) {
  item.addEventListener('click', function(e) {
    let parentPopup = this.closest('.popup');

    parentPopup.classList.remove('active');
    popupOverlay.classList.remove('active');
  });
});

document.body.addEventListener('keyup', function(e) {
  let key = e.keyCode;

  if (key == 27) {
    document.querySelector('.popup.active').classList.remove('active');
    document.querySelector('.popup-overlay').classList.remove('active');
  }
});

popupOverlay.addEventListener('click', function() {
  document.querySelector('.popup.active').classList.remove('active');
  this.classList.remove('active');
});

popupForm.forEach(function(item) {
  item.addEventListener('submit', function() {
    let parentPopup = this.closest('.popup');

    parentPopup.classList.remove('active');
    popupOverlay.classList.remove('active');

  });
});

/*Аккордеон*/
let accordionToggle = document.querySelectorAll('.accordion-toggle');

for (let i = 0; i < accordionToggle.length; i++) {
  accordionToggle[i].addEventListener('click', function() {
    if (!(this.classList.contains('active'))) {
      for (let i = 0; i < accordionToggle.length; i++) {
        accordionToggle[i].classList.remove('active');
      }
      this.classList.add('active');
    } else {
      this.classList.remove('active');
    }
  })
}

/*Перенос элемента при уменьшении экрана*/
let copyright = document.querySelector('.main-footer__bottom-copyright'),
  newLocation = document.querySelector('.main-footer__links'),
  oldLocation = document.querySelector('.main-footer__bottom .wrapper'),
  socialLinks = document.querySelector('.main-footer__top .social-links'),
  policy = document.querySelector('.main-footer__bottom-policy');

window.addEventListener('resize', () => {
  if (document.body.clientWidth <= 1024) {
      newLocation.insertBefore(copyright, socialLinks)
  } else if (document.body.clientWidth >= 1024) {
      oldLocation.insertBefore(copyright, policy)
    }
});



