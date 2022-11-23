var swiper = new Swiper(".mySlide-1", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

// slide -2
var swipers = new Swiper(".mySlide-2", {
  spaceBetween: -30,
  slidesPerView: 3,
  centeredSlides: true,
  roundLengths: true,
  loop: true,
  loopAdditionalSlides: 30,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});
