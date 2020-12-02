import Swiper from 'swiper';

const parent = document.querySelector('.slider-line');

let slider = parent.querySelector('.slider-line__container');

let galleryTop = new Swiper(slider, {
	spaceBetween: 10,
	slidesPerView: 4,
	navigation: {
		nextEl: '.slider-line__btn--right',
		prevEl: '.slider-line__btn--left',
		disabledClass: 'slider-line__btn--disable'
	},
	breakpoints: {
    // when window width is >= 320px
    580: {
      slidesPerView: 1,
      spaceBetween: 16
    },
    // when window width is >= 480px
    840: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3,
      spaceBetween: 16
    }
  }
});