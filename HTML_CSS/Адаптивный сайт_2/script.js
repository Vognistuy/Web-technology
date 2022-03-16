"use strict"
// ------------ПРОВЕРКА НА ТИП УСТРОЙСТВА------------
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iOS/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/Windows/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry () ||
            isMobile.iOS () ||
            isMobile.Opera () ||
            isMobile.Windows ());
        
    }
};

if (isMobile.any()){
    document.body.classList.add('_touch')    
} else {
    document.body.classList.add('_pc')
}

// ------------МЕНЮ БУРГЕР--------------

const iconMenu = document.querySelector('.menu__icon');
const listBody = document.querySelector('.navigation__list-body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        listBody.classList.toggle('_active');
    });
}

// Scroll down

(function() {
  
    var btnScrollDown = document.querySelector('.header__scroll_down');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
        if (window.pageYOffset < windowCoords) {
          window.scrollBy(0, 7);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();
  /* end Scroll Down Button */

