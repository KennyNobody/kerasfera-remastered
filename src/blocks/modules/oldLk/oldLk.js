document.addEventListener('DOMContentLoaded', function () {

	function number_format(number, decimals, dec_point, thousands_sep) {
		var i, j, kw, kd, km;

		if (isNaN(decimals = Math.abs(decimals))) {
			decimals = 2;
		}
		if (dec_point == undefined) {
			dec_point = ",";
		}
		if (thousands_sep == undefined) {
			thousands_sep = ".";
		}

		i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

		if ((j = i.length) > 3) {
			j = j % 3;
		} else {
			j = 0;
		}

		km = (j ? i.substr(0, j) + thousands_sep : "");
		kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
		kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


		return km + kw + kd;
	}

	const counters = document.querySelectorAll('.table__counter');

	for (let i = 0; i < counters.length; i++) {
		changeCounter(counters[i]);
	}

	function changeCounter(item) {
		let btnMinus = item.querySelector('.table__counter-btn--prev');
		let btnPlus = item.querySelector('.table__counter-btn--next');
		let input = item.querySelector('.table__counter-input');

		checkDisabled(btnMinus, input.value);

		btnMinus.addEventListener('click', function(e) {
			e.preventDefault();
			if (input.value > 1) {
				input.value = +input.value - 1;
				getRequest(input);
			}

			checkDisabled(btnMinus, input.value);
		});

		btnPlus.addEventListener('click', function(e) {
			e.preventDefault();
			input.value = +input.value + 1;
			getRequest(input);
			checkDisabled(btnMinus, input.value);
		});

		function checkDisabled(item, value) {
			if (value == 1) {
				item.classList.add('table__counter-btn--disabled');
			} else {
				item.classList.remove('table__counter-btn--disabled');
			}
		}
	}

	let getRequest = (el) => {
		let templateFolder = BX.message('templateFolder');

		console.log(el);
		$.ajax({
			url: templateFolder + "/get/ajax.php",
			data: { 
				"action": "update", 
				"id": $(el).closest('.table__tr').data('id'),
				"q": $(el).val(),
			},
			type: "GET",
			success: function(response) {
				

				let onePrice = $(el).closest('.table__tr').find('#price_start').text();

				onePrice = onePrice.replace('руб.', '');

				onePrice = Number(onePrice.replace(/[^0-9\.]/gi, ''));

				$(el).closest('.table__tr').find('.table__price--item').text(
					number_format(onePrice * Number($(el).val()), 2, '.', ' ').replace(/0+$/gi, '').replace(/\.+$/gi, '') + ' руб.'
					);

				recountCart();
			},
			error: function(xhr) {
				console.log(this);
			}
		});
	}

	$(document).on('click', '.table__remove', function () {

		let templateFolder = BX.message('templateFolder');
		let el = this;
		let id = $(this).closest('.table__tr').data('id');

		$.ajax({
			url: templateFolder + "/get/ajax.php",
			data: { 
				"action": "delete", 
				"id": id,
			},
			type: "GET",
			success: function(response) {
				let itemSum = $(el).closest('.table__tr').next().find(".table__counter-input").val();

				let headerCounter = document.querySelector('.header__link-counter');
				let toolbarCounter =  document.querySelector('.mob-toolbar__counter');
				let num = +headerCounter.innerText.trim();

				$(el).closest('.table__tr').next().remove();
				$(el).closest('.table__tr').remove();

				headerCounter.innerText = +num - itemSum;
				toolbarCounter.innerText = +num - itemSum;
			},
			error: function(xhr) {
				console.log(this);
			}
		});
	}); 

	$('.promocode__field').on('change', function () {
		var templateFolder = BX.message('templateFolder');
		$.ajax({
			url: templateFolder + "/get/activated-card.php",
			cache: false,
			type: "POST",
			data: ({card: $(this).val()}),
			success: function (data) {
				if (data == '') {
					$(".cart__sale-result").html('Карта успешно добавлена, пожалуйста перезагрузите страницу');
				} else {
					$(".cart__sale-result").html(data);
				}
			}
		});
	});

	let recountCart = () => {
		let cart = document.querySelector('.table--cart');

		if (cart) {
			let items = cart.querySelectorAll('.table__price--item');
			let resultBlock = cart.querySelector('.table__price--result');

			let result;

			for (let i = 0; i < items.length; i++) {
				if (result) {
					result = +result + +items[i].innerText.replace(/\D/g, '');
				} else {
					result = +items[i].innerText.replace(/\D/g, '')
				}
			}

			resultBlock.innerText = result.toLocaleString() + ' руб.';
		}

		
		// console.log(result);
	} 
})