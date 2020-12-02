import magnificPopup from 'magnific-popup';

document.addEventListener('DOMContentLoaded', function() {
	$(".popup").magnificPopup();

	$(".popup-item").magnificPopup({
		showCloseBtn: !1
	});

	$(".popup-image").magnificPopup({
		type: "image",
		closeOnContentClick: "true"
	});

	$(".tabs__slide").magnificPopup({
		type: "image",
		closeOnContentClick: "true"
	});

	$(".call__close").on("click", function (e) {
		$.magnificPopup.close()
	});

	$(".discont__btn--cancel").on("click", function (e) {
		$.magnificPopup.close()
	});

	$(".popup-gallery").magnificPopup({
		delegate: "a",
		type: "image",
		tLoading: "Загрузка изображения...",
		mainClass: "mfp-img-mobile",
		gallery: {enabled: !0, navigateByImgClick: !0, tCounter: "", preload: [0, 1]},
		image: {
			tError: "Ошибка загрузки изображения"
		}
	});

	$(".gallery-top-popups").magnificPopup({
		delegate: "a",
		type: "image",
		mainClass: "mfp-img-mobile",
		closeOnContentClick: !0,
		gallery: {enabled: !0, navigateByImgClick: !0, tCounter: "", preload: [0, 1]}
	});

	$(".gallery__item").magnificPopup({
		type: "image",
		image: {
			titleSrc: 'title',
			titleSrc: function(item) {
				return '<a href="' + item.el.attr('data-link') + '">Посмотреть коллекцию</a>';
			}
		}
	});

	// var mainInterval = setInterval(function () {
	// 	if (typeof ($) == typeof (function () {
	// 	})) {
	// 		clearInterval(mainInterval);
	// 		let $btn = $('.gallery__btn');
	// 		let $win = $(window);
	// 		let $items = $('.gallery__item');
	// 		let current = 0;

	// 		// var subInterval = setInterval(function () {
	// 		// 	if ($btn.offset().top < $win.scrollTop() + $win.height()) {
	// 		// 		var i = current * 20, e = 0;
	// 		// 		while (e < 20) {
	// 		// 			if ($items.eq(i + e).length) {
	// 		// 				$items.eq(i + e).show();
	// 		// 			} else {
	// 		// 				clearInterval(subInterval);
	// 		// 				break;
	// 		// 			}
	// 		// 			e++;
	// 		// 		}
	// 		// 		current++;
	// 		// 	}
	// 		// }, 500);

	// 		var intervalGallery = null;
	// 		$('.popup-gallery').on('mfpChange', function () {
	// 			clearInterval(intervalGallery);
	// 			intervalGallery = setInterval(function () {
	// 				var src = $('.mfp-img').attr('src');
	// 				if (typeof (src) != 'undefined') {
	// 					var $item = $('.gallery__item[href="' + src + '"]');
	// 					$('.mfp-title').html($item.data('link') ? '<a href="' + $item.data('link') + '">Посмотреть коллекцию</a>' : '');
	// 					clearInterval(intervalGallery);
	// 				}
	// 			}, 200);

	// 		});

	// 	}
	// }, 500);
});