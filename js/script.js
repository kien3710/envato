// swipper

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
});

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
});
// nav-mobile
function bars() {
  var nav = document.querySelector(".menu-mobile");
  nav.classList.toggle("actives");
}
