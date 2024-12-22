import "../SCSS/style.scss";
import "./nav.js";

import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
import "swiper/css";

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(".swiper", {
  spaceBetween: 24,
  slidesPerView: "auto",
  loop: true,
  speed: 6500,
  freeMode: true,
  allowTouchMove: false,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// let onLoadElem = document.querySelector(".invisible");

// window.addEventListener("load", () => {
//   onLoadElem.classList.remove("invisible");
// });
