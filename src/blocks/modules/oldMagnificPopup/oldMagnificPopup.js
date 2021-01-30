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

	// $(".popup-gallery").magnificPopup({
	// 	delegate: "a",
	// 	type: "image",
	// 	tLoading: "Загрузка изображения...",
	// 	mainClass: "mfp-img-mobile",
	// 	gallery: {enabled: !0, navigateByImgClick: !0, tCounter: "", preload: [0, 1]},
	// 	image: {
	// 		tError: "Ошибка загрузки изображения"
	// 	}
	// });

	$(".gallery-top-popups").magnificPopup({
		delegate: "a",
		type: "image",
		mainClass: "mfp-img-mobile",
		closeOnContentClick: !0,
		gallery: {enabled: !0, navigateByImgClick: !0, tCounter: "", preload: [0, 1]}
	});

	// $(".gallery__item").magnificPopup({
	// 	type: "image",
	// 	image: {
	// 		titleSrc: 'title',
	// 		titleSrc: function(item) {
	// 			return '<a href="' + item.el.attr('data-link') + '">Посмотреть коллекцию</a>';
	// 		}
	// 	}
	// });
});