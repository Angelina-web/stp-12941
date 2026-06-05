import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.howtoplay-swiper');
  if (!container) return;

  new Swiper(container, {
    modules: [Pagination, Autoplay],

    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    speed: 600,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      1440: {
        enabled: false,
        slidesPerView: 6,
        loop: false,
        autoplay: false,
      },
    },

    on: {
      mouseenter() { this.autoplay.stop(); },
      mouseleave() { this.autoplay.start(); },
    },
  });
});