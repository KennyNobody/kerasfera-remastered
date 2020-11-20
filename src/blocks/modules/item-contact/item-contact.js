import Swiper from 'swiper';

document.addEventListener('DOMContentLoaded', function() {
	(function initSlider() {
		let parent = document.querySelectorAll('.item-contact__slider');

		for (let i = 0; i < parent.length; i++) {
			initItem(parent[i]);
		}

		function initItem(item) {
			let galleryThumbs = new Swiper(item, {
				slidesPerView: 1,
				navigation: {
					nextEl: '.item-contact__button--next',
					prevEl: '.item-contact__button--prev',
					disabledClass: 'item-contact__button--disabled',
				},
			});
		}

	})();
});