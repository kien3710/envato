// var slider_1 = new Swiper(".mySlide-1", {
//   spaceBetween: 30,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="' + className + '">' + menu[index] + "</span>";
//     },
//   },
// });

var menu = [];
var mySwiper = new Swiper(".mySlide-1", {
  // If we need pagination
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
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
      slidesPerView: 1,
    },
  },
});

var slider_2 = new Swiper(".mySlide-2", {
  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    667: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

var slider_3 = new Swiper(".mySlide-3", {
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".pagination-promotion",
    clickable: true,
  },
  slidesPerView: 2,
  spaceBetween: 10,
});

var slider_4 = new Swiper(".mySlide-4", {
  autoplay: {
    delay: 2000,
  },
  slidesPerView: 4,
  spaceBetween: 20,
  navigation: {
    nextEl: ".button-next-2",
    prevEl: ".button-prev-2",
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  loop: true,
});
var slider_5 = new Swiper(".mySlide-5", {
  slidesPerView: 2,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
function bars() {
  var show = document.querySelector(".BgHv");
  var nav = document.querySelector(".menu-mobile");
  nav.classList.toggle("active");
  show.classList.toggle("show");
}
