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
				countMob.innerText = +countMob.innerText + 1;
			}

			let countDesktop = document.querySelector('.header__link-counter');

			console.log(+countDesktop.innerText);

			if (countDesktop) {
				countDesktop.innerText = +countDesktop.innerText + 1;
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

	// if ($.post("/ajax/add2basket.php")) {
	// 	var a = $(".header__link-counter").text();
	// 	$(".header__link-counter").text(Number(a) + parseFloat($(this).find(".counter__input").val()));
	// 	$(".mob-toolbar__counter").text(Number(a) + parseFloat($(this).find(".counter__input").val()));
	// 	t.find(".call__control-btn").val("Перейти в корзину")
	// } else {
	// 	t.html("<p>Мы проинформируем вас о поступлении. Спасибо за обращение</p>")
	// }

	// 	if (!t.find(".call__columns").length) {
	// 		var n = t.find('input[name="Prop[1]"]').val(),
	// 		i = t.find('input[name="Prop[2]"]').val();
	// 		if ("" == n && "" == i) return void alert("Пожалуйста, заполните имя и телефон");
	// 		if ("" == n) return void alert("Пожалуйста, заполните имя");
	// 		if ("" == i) return void alert("Пожалуйста, заполните телефон")
	// 	}

	// if (t.hasClass("sending")) t.find(".call__columns").length && (window.location = "/personal/cart/");
	// else if (t.addClass("sending"), $.post(t.find(".call__columns").length ? "/ajax/add2basket.php" : "/ajax/under_order.php", t.serialize()), t.find(".call__columns").length) {
	// 	var a = $(".header__link-counter").text();
	// 	$(".header__link-counter").text(Number(a) + parseFloat($(this).find(".counter__input").val()));
	// 	$(".mob-toolbar__counter").text(Number(a) + parseFloat($(this).find(".counter__input").val()));
	// 	t.find(".call__control-btn").val("Перейти в корзину")
	// } else {
	// 	t.html("<p>Мы проинформируем вас о поступлении. Спасибо за обращение</p>")
	// }
});