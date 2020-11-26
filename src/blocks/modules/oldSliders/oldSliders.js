import Swiper from 'swiper';

//========== Синхронный слайдер в карточке товара ==========

if($("div.gallery-top .swiper-slide").length > 1) {
	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 10,
		loop:true,
		centeredSlides: true,
		loopedSlides: 3,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs,
		},
	});

	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 10,
		slidesPerView: 3,
		loop: true,
		centeredSlides: true,
		loopedSlides: 3,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		slideToClickedSlide: true,
	});

	galleryTop.controller.control = galleryThumbs;
	galleryThumbs.controller.control = galleryTop;

} else {
	$("div.gallery-thumbs").hide();
	$("div.swiper-button-next").hide();
	$("div.swiper-button-prev").hide();
}
