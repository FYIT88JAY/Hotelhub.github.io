/*!
 * Start Bootstrap - Agency v7.0.4 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {


    // Navbar shrink function
    var navbarShrink = function() {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const masthead = document.body.querySelector('.masthead');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0 && masthead != null) {
            navbarCollapsible.classList.remove('navbar-shrink')

        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function(responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Slider

var slides = document.querySelectorAll(".slides");
var leftBtn = document.querySelector(".slider-button-left");
var rightBtn = document.querySelector(".slider-button-right");
var currSlide = 0;
var maxSlide = slides.length;
var dotContainer = document.querySelector(".dots");
var goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
// console.log(i);
// console.log(s);
goToSlide(0);

var nextSlide = function () {
  if (currSlide === maxSlide - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
};

var prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlide - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
  activateDot(currSlide);
};

rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    nextSlide();
  } else if (e.key === "ArrowLeft") {
    prevSlide();
  }
});

var createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots_dot" data-val="${i}"></button>`
    );
  });
};
createDots();

var activateDot = (slide) => {
  document.querySelectorAll(".dots_dot").forEach((dot) => {
    dot.classList.remove("dots_dot_active");
  });

  document
    .querySelector(`.dots_dot[data-val="${slide}"]`)
    .classList.add("dots_dot_active");
};
activateDot(0);

dotContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("dots_dot")) {
    var slide = e.target.dataset.val;
    goToSlide(slide);
    activateDot(slide);
  }
});

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });

// To make it automatic
setInterval(function () {
  nextSlide();
}, 4000);
