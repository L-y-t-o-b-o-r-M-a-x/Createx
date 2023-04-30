import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const portSlider = document.querySelector(".portfolio-section__items");

const bodyStyles = window.getComputedStyle(document.body); // Получаем доступ к переменной '--grid-gap'
const gap = parseInt(bodyStyles.getPropertyValue("--grid-gap"));

const portfolioSlider = new Swiper(portSlider, {
  slidesPerView: "3",
  spaceBetween: gap,
  loop: true,
  on: {
    init: function () {
      console.log("swiper initialized");

      const activeSlide = portSlider.querySelectorAll(".swiper-slide-active"); // Ищем первый слайд с '.swiper-slide-active'

      const nextActiveSlide = activeSlide.nextElementSibling; // Ищем сдедующий(2) слайд с помощью nextElementSibling

      const nextNextActiveSlide = nextActiveSlide.nextElementSibling;

      activeSlide.classList.add("slider-visible");
      nextActiveSlide.classList.add("slider-visible");
      nextNextActiveSlide.classList.add("slider-visible");

      console.log(activeSlide);
      console.log(nextActiveSlide);
      console.log(nextNextActiveSlide);
    },
  },

  navigation: {
    nextEl: ".portfolio-section__next",
    prevEl: ".portfolio-section__prev",
  },
});

portfolioSlider.on("slideChange", function () {
  console.log("slide changed");
});
