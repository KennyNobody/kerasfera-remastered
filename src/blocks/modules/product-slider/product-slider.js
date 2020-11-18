import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
	(function initSlider() {
		var galleryThumbs = new Swiper('.product-slider__bottom-slider', {
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
		var galleryTop = new Swiper('.product-slider__top-slider', {
			loop: true,
			loopedSlides: 4,
			slideActiveClass: 'product-slider__top-slide--active',
			thumbs: {
				swiper: galleryThumbs
			}
		});
		galleryTop.controller.control = galleryThumbs;
		galleryThumbs.controller.control = galleryTop;
	})();
})

