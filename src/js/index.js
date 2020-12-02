import "./import/modules";
// import "./libs";

document.addEventListener('DOMContentLoaded', function() {

	$('.autoscroll').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
		e.preventDefault();
	});

	

	$(window).on('load scroll', function(e) {
		$('.autoscroll').toggleClass('autoscroll--hidden', $(this).scrollTop() > 600);
	});

	 $(window).scroll(function() {

    	if ($(document).width() < 1000) {
    		if ($(window).scrollTop()  > 300) {
    			$('.filter__mob-title').addClass('filter__mob-title--fixed');
    		} else {
    			$('.filter__mob-title').removeClass('filter__mob-title--fixed');
    		}
    	} 
    });

		// $(".grid").masonry({
		// 	itemSelector: ".grid__item", 
		// 	gutter: 15
		// });

		// $(".rating-visible").barrating({
		// 	theme: "css-stars", 
		// 	readonly: !0
		// });

		// $(".rating-input").barrating({
		// 	theme: "css-stars", 
		// 	initialRating: 5
		// });

		// $(".data__dropdown-link").click(function () {
		// 	$(".data__block-info").toggleClass("data__block-info--hidden"), $(".data__block-info").hasClass("data__block-info--hidden") ? $(".data__dropdown-link").text("Ð Ð°Ð·Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ") : $(".data__dropdown-link").text("Ð¡Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ")
		// }), 5 < $("div.tabs__slider-wrapper  .swiper-slide").length) t = new Swiper(".tabs__slider", {
		// 	spaceBetween: 10,
		// 	slidesPerView: "auto",
		// 	centeredMode: !0,
		// 	loop: !0,
		// 	centeredSlides: !0,
		// 	loopedSlides: 5,
		// 	navigation: {nextEl: ".tabs__slider-btn--next", prevEl: ".tabs__slider-btn--prev"}
		// }); else $(".tabs__slider").addClass("tabs__slider--static");


		// $(".tabs__slider-wrapper").magnificPopup({
		// 	delegate: "a",
		// 	type: "image",
		// 	mainClass: "mfp-img-mobile",
		// 	closeOnContentClick: !0,
		// 	gallery: {enabled: !0, navigateByImgClick: !0, tCounter: "", preload: [0, 1]}
		// }); 

		

		$(".cart__btn--minus").click(function (e) {
			$(this).bind("selectstart", function () {
				return !1
			});
			var t = $(this).parent().children(".cart__counter-total").val();
			1 < t && (t--, $(this).parent().children(".cart__counter-total").val(t), $(this).parent().children(".cart__counter-total").trigger("change")), e.preventDefault()
		});

		$(".cart__btn--plus").click(function (e) {
			$(this).bind("selectstart", function () {
				return !1
			});
			var t = $(this).parent().children(".cart__counter-total").val();
			t++, $(this).parent().children(".cart__counter-total").val(t), $(this).parent().children(".cart__counter-total").trigger("change"), e.preventDefault()
		}); 

		$(".data").on("click", ".data__checkbox", function (e) {
			if ("INPUT" != e.target.tagName) {
				var t = $(e.target);
				t.hasClass("data__checkbox") || (t = t.parents(".data__checkbox")), t.parent().find('input[type="radio"]').each(function () {
					$(this).prop("checked", !1)
				}), t.find('input[type="radio"]').prop("checked", !0).trigger("click")
			}
		}); 

		$(".sign__accept input").on("change", function () {
			1 == $(this).prop("checked") ? $("#sign__button").removeClass("sign__button--disabled") : $("#sign__button").addClass("sign__button--disabled")
		}), $(".faq__form .faq__accept input").on("change", function () {
			1 == $(this).prop("checked") ? $(".faq__form .faq__btn").removeClass("faq__btn--disabled") : $(".faq__form .faq__btn").addClass("faq__btn--disabled")
		}), $(".call__question input").on("change", function () {
			1 == $(this).prop("checked") ? $(".call__control-btn").removeClass("call__control-btn--disabled") : $(".call__control-btn").addClass("call__control-btn--disabled")
		}), $(".write__checked-wrap input").on("change", function () {
			1 == $(this).prop("checked") ? $(".write__btn").removeClass("write__btn--disabled") : $(".write__btn").addClass("write__btn--disabled")
		}), $(".sign__nav-link--1").click(function () {
			$(".sign__block--2").css({display: "none"}), $(".sign__block--1").css({display: "block"}), $(".sign__nav-link--1").addClass("sign__nav-link--active"), $(".sign__nav-link--2").removeClass("sign__nav-link--active")
		}), $(".sign__nav-link--2").click(function () {
			$(".sign__block--1").css({display: "none"}), $(".sign__block--2").css({display: "block"}), $(".sign__nav-link--2").addClass("sign__nav-link--active"), $(".sign__nav-link--1").removeClass("sign__nav-link--active")
		}); 

		// $(".accent__close--top").click(function () {
		// 	$.cookie("popup-top", "1", {
		// 		expires: 1
		// 	}); 

		// 	$(this).parent().parent().hide();
		// });

		$(function () {

			$("body").on("submit", ".call__content", function (e) {

				e.preventDefault();
				var t = $(e.target);

				if (!t.find(".call__columns").length) {
					var n = t.find('input[name="Prop[1]"]').val(),
					i = t.find('input[name="Prop[2]"]').val();
					if ("" == n && "" == i) return void alert("Пожалуйста, заполните имя и телефон");
					if ("" == n) return void alert("Пожалуйста, заполните имя");
					if ("" == i) return void alert("Пожалуйста, заполните телефон")
				}

			if (t.hasClass("sending")) t.find(".call__columns").length && (window.location = "/personal/cart/");
			else if (t.addClass("sending"),
				$.post(t.find(".call__columns").length ? "/ajax/add2basket.php" : "/ajax/under_order.php", t.serialize()), t.find(".call__columns").length) {
				var a = $(".header__link-counter").text();
			$(".header__link-counter").text(Number(a) + parseFloat($(this).find(".counter__input").val()));
			$(".mob-toolbar__counter").text(Number(a) + parseFloat($(this).find(".counter__input").val()));
			t.find(".call__control-btn").val("Перейти в корзину")
		} else {
			t.html("<p>Мы проинформируем вас о поступлении. Спасибо за обращение</p>")
		}
	});

			$('body').on('click', '.cart__link', function (e) {
				e.preventDefault();

				$.get(
					'/personal/cart/ajax.php?action=delete&id=' + $(this).parents('.cart__line').data('id'), function( data ) {
					}
					);

				$(this).parents('.cart__line').remove();

				var a = $(".header__link-counter").text();

				$(".header__link-counter").text(Number(a) - parseFloat($(this).parents('.cart__line').find(".cart__counter-total").val()));
				$(".mob-toolbar__counter").text(Number(a) - parseFloat($(this).parents('.cart__line').find(".cart__counter-total").val()));
			});


			$(".item-card__submit.fast-buy").on("click", function (e) {


				e.preventDefault();

				var t = $(this);
				if (t.hasClass("item-card__submit--added")) {

					window.location = "/personal/cart/";

				} else {
					t.css("position", "relative");
					t.addClass("item-card__submit--added");
					t.text("Добавлено");
					setTimeout(function () {
						t.removeClass("item-card__submit--added");
						t.text("В корзину");
					}, 5000);

					var n = $(t.attr("data-href")).find("form");

					n.find(".counter__input").val($(this).parents(".item-card").find(".item-card__input").val());
					n.trigger("submit");
				}
			});
		})
	});