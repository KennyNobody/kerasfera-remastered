import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
	(function initSlider() {
		let sliderTop = document.querySelector('.product-slider__top-slider');
		let sliderThumb = document.querySelector('.product-slider__bottom-slider');

		if (sliderThumb) {
			let length = sliderThumb.querySelectorAll('.product-slider__bottom-slide').length;

			if (length <= 1) {
				sliderThumb.classList.add('product-slider__bottom-slider--hidden');
			} else {
				let galleryThumbs = new Swiper(sliderThumb, {
					spaceBetween: 16,
					slidesPerView: 3,
					watchSlidesVisibility: true,
					watchSlidesProgress: true,
					loop: true,
					loopedSlides: 4,
					slideToClickedSlide: true,
					centeredSlides: true,
					slideActiveClass: 'product-slider__bottom-slide--active'
				});

				let galleryTop = new Swiper(sliderTop, {
					loop: true,
					loopedSlides: 4,
					slideActiveClass: 'product-slider__top-slide--active',
					thumbs: {
						swiper: galleryThumbs
					}
				});

				galleryTop.controller.control = galleryThumbs;
				galleryThumbs.controller.control = galleryTop;
			}
		}
		

	})();
})