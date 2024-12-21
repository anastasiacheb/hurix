// core version + navigation, pagination modules:
import Swiper from "swiper";
// import Swiper and modules styles
import "swiper/css";

// init Swiper:
// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(".swiper", {
  // Optional parameters
  //direction: 'vertical',
  spaceBetween: 24,
  loop: true,
  speed: 6500,
  slidesPerView: "auto",
  freeMode: true,
  autoplay: {
    delay: 0,
  },
});
