import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
	const parent = document.querySelectorAll('.slider-line');

	for (let i = 0; i < parent.length; i++) {
		initSlider(parent[i]);
	}

	function initSlider(item) {
		let slider = item.querySelector('.slider-line__container');

		let galleryTop = new Swiper(slider, {
			spaceBetween: 10,
			slidesPerView: 4,
			navigation: {
				nextEl: '.slider-line__btn--right',
				prevEl: '.slider-line__btn--left',
				disabledClass: 'slider-line__btn--disable'
			},
			breakpoints: {
				580: {
					slidesPerView: 1,
					spaceBetween: 16
				},
				840: {
					slidesPerView: 2,
					spaceBetween: 16
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 16
				}
			}
		});
	}

});