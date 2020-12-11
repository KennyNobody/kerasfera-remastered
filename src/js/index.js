import "./import/modules";

document.addEventListener('DOMContentLoaded', function() {

	$('.autoscroll').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
		e.preventDefault();
	});

	$(window).on('load scroll', function(e) {
		$('.autoscroll').toggleClass('autoscroll--hidden', $(this).scrollTop() > 600);
	});

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

	$(document).on('click', '.item-card__btn--plus', function() {
		var value = $(this).parent().children("input").val();
		value++;
		$(this).parent().children("input").val(value);
	});

	$(document).on('click', '.item-card__btn--minus', function() {
		var value = $(this).parent().children("input").val();
		1 < value && (value--, $(this).parent().children("input").val(value));
	});

	$('.item-card__tag--favorite').on('click', function () {
		var favorID = $(this).attr('data-item');
		if ($(this).hasClass('item-card__tag--favorite')) {
			favHandler(favorID, 'delete');
		} else {
			favHandler(favorID, 'add');
		}
	});
	getFavoriteItems();


	$(document).ready(function () {

		$(document).on('click', '.counter__btn--plus', function() {
			var value = $(this).parent().children("input").val();
			value++;
			$(this).parent().children("input").val(value);
		});

		$(document).on('click', '.counter__btn--minus', function() {
			var value = $(this).parent().children("input").val();
			1 < value && (value--, $(this).parent().children("input").val(value));
		});

		$(document).on('click', '.shop__btn', function() {
			var url = window.location.href;
			var matches = url.match(/count=[a-z\d]+/gi);

			if (matches) {
				var countLink = +parseInt(matches[0].replace(/[^\d]/g, '')) + 15;

				var leftLink = url.split(matches)[0];
				var rightLink = url.split(matches)[1];

				window.location.href = leftLink + "count=" + countLink + rightLink;    
			}

		})

	});

	function getFavoriteItems() {
		var param = 'get_fav_list=1';
		$.ajax({
			url: '/ajax/favorites.php',
			type: "GET",
			dataType: "html",
			data: param,
			success: function (response) {
				var result = $.parseJSON(response);
				$(result).each(function (index, element) {
					if ($('.favorite-btn[data-item="' + element + '"]')) {
						$('.favorite-btn[data-item="' + element + '"]').addClass('item-card__tag--favorite');
					}
				});
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Error: ' + errorThrown);
			}
		});
	}
});