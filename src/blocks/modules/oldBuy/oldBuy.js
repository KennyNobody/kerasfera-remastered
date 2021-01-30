document.addEventListener('DOMContentLoaded', function() {

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

	$('body').on('click', '.cart__link', function (e) {
		e.preventDefault();

		$.get('/personal/cart/ajax.php?action=delete&id=' + $(this).parents('.cart__line').data('id'), function( data ) {});

		$(this).parents('.cart__line').remove();

		var a = $(".header__link-counter").text();

		$(".header__link-counter").text(Number(a) - parseFloat($(this).parents('.cart__line').find(".cart__counter-total").val()));
		$(".mob-toolbar__counter").text(Number(a) - parseFloat($(this).parents('.cart__line').find(".cart__counter-total").val()));
	});

	// Для карточки товара

	$("body").on("submit", ".item-card", function (e) {

		let form = this;

		e.preventDefault();

		$.ajax({
			type: 'POST',
			data: {
				item_id: form.dataset.id,
				iblick_id:form.dataset.iblockId,
				count: form.elements['q'].value,
			},
			url: '/ajax/add2basket.php',
			success: function (response) {
				addCounter();
				showMessage(form);
				console.log(response);
			},
			error: function (response) {

			}
		});

		function addCounter() {
			let countMob = document.querySelector('.mob-toolbar__counter');

			console.log(+countMob.innerText);

			if (countMob) {
				countMob.innerText = +countMob.innerText + 1;
			}

			let countDesktop = document.querySelector('.header__link-counter');

			console.log(+countDesktop.innerText);

			if (countDesktop) {
				countDesktop.innerText = +countDesktop.innerText + 1;
			}
		}

		function showMessage(form) {
			let button = form.querySelector('.item-card__submit');

			if (button) {

				button.innerText = "Добавлено";

				setTimeout(function(){
					button.innerText = "В корзину";
				}, 3000);
			}
		}
	});

	$("body").on("submit", ".product-form", function (e) {

		let form = this;

		e.preventDefault();

		$.ajax({
			type: 'POST',
			data: {
				item_id: form.dataset.id,
				iblick_id:form.dataset.iblockId,
				count: form.elements['product-form__value'].value,
			},
			url: '/ajax/add2basket.php',
			success: function (response) {
				addCounter();
				showMessage(form);
			},
			error: function (response) {

			}
		});

		function addCounter() {
			let countMob = document.querySelector('.mob-toolbar__counter');

			console.log(+countMob.innerText);

			if (countMob) {
				countMob.innerText = +countMob.innerText + +form.elements['product-form__value'].value;
			}

			let countDesktop = document.querySelector('.header__link-counter');

			console.log(+countDesktop.innerText);

			if (countDesktop) {
				countDesktop.innerText = +countDesktop.innerText + +form.elements['product-form__value'].value;
			}
		}

		function showMessage(form) {
			let button = form.querySelector('#buy');

			if (button) {

				button.innerText = "Добавлено";

				setTimeout(function(){
					button.innerText = "В корзину";
				}, 3000);
			}
		}
	});
});