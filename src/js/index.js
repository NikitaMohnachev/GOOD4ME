
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    loop: true,
  
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  });