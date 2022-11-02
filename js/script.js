// swipper share
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  autoplay: {
    delay: 3000,
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

// swipper news
var swiperNew = new Swiper(".swiper-new", {
  slidesPerView: 4,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination-new",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button",
    prevEl: ".swiper-button-prv",
  },
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
// nav-mobile
function bars() {
  var nav = document.querySelector(".menu-mobile");
  nav.classList.toggle("actives");
}
