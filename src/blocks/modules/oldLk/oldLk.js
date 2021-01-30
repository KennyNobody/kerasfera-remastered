document.addEventListener('DOMContentLoaded', function () {

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
			let step = input.getAttribute('step');

			if (input.value > 1) {
				let val = +input.value - +step;
				input.value = +val.toFixed(2);
				getRequest(input);
			}

			checkDisabled(btnMinus, input.value);
		});

		btnPlus.addEventListener('click', function(e) {
			e.preventDefault();

			let step = input.getAttribute('step');

			let val = +input.value + +step;

			input.value = +val.toFixed(2);
			
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

		$.ajax({
			url: templateFolder + "/get/ajax.php",
			data: { 
				"action": "update", 
				"id": $(el).closest('.table__tr').data('id'),
				"q": $(el).val(),
			},
			type: "GET",
			success: function(response) {
				changeQuantityItem(el.closest('.table__article'));
			},
			error: function(xhr) {
				console.log(this);
			}
		});
	}

	let changeQuantityItem = (el) => {
		let quantity = +el.querySelector('.table__counter-input').value;
		let weight = +el.dataset.weight;
		let price = +el.dataset.price;
		let oldPrice = +el.dataset.oldPrice;
		let discont = +el.dataset.discont;

		let setPrice = () => {
			let itemPrice = price * quantity;
			let itemOldPrice = oldPrice * quantity;

			let itemPriceFixed = +itemPrice.toFixed(2);
			let itemOldPriceFixed = +itemOldPrice.toFixed(2);

			el.querySelector('.table__price--item').innerHTML = itemPriceFixed.toLocaleString() + " руб.";

			if (el.querySelector('.table__oldprice')) {
				el.querySelector('.table__oldprice').innerHTML = itemOldPriceFixed.toLocaleString() + " руб.";
			}
			
			el.dataset.fullPrice = itemPrice;
			el.dataset.fullDiscontPrice = itemOldPrice;
		}

		setPrice();
		changeCart();
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

				

				// $(el).closest('.table__tr').next().remove();
				$(el).closest('.table__article').remove();

				headerCounter.innerText = +num - itemSum;
				toolbarCounter.innerText = +num - itemSum;

				changeCart();
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
			type: "POST",
			data: ({card: $(this).val()}),
			success: function (data) {
				if (data == '') {
					$(".promocode__message").html('Карта успешно добавлена, пожалуйста перезагрузите страницу');
				} else {
					$(".promocode__message").html(data);
				}
			}
		});
	});

	let changeCart = () => {
		let recountCart = () => {
			let cart = document.querySelector('.table--cart');

			let articles = cart.querySelectorAll('.table__article');
			let resultBlock = cart.querySelector('.table__price--result');

			if (articles) {

				let result = 0;

				for (let i = 0; i < articles.length; i++) {
					result = +result + +articles[i].dataset.price * +articles[i].querySelector('.table__counter-input').value;
				}

				let resultFixed = +result.toFixed(2);

				resultBlock.innerText = resultFixed.toLocaleString() + ' руб.';

			} else {
				resultBlock.innerText = '0 руб.';
			}
		}

		let reqountWeight = () => {
			let cart = document.querySelector('.table--cart');

			let items = cart.querySelectorAll('.table__article');
			let resultBlock = cart.querySelector('#final-weight');

			if (items) {
				let result = 0;

				for (let i = 0; i < items.length; i++) {
					result = +result + +items[i].dataset.weight * +items[i].querySelector('.table__counter-input').value;

					let itemWeight = items[i].dataset.weight * +items[i].querySelector('.table__counter-input').value;

					let itemWeightFixed = +itemWeight.toFixed(2);

					items[i].querySelector('#result-weight').innerText = itemWeightFixed + ' кг.';
				}

				let resultFixed = +result.toFixed(2);

				resultBlock.innerText = resultFixed + ' кг.';
			} else {
				resultBlock.innerText = '0 кг.';
			}

			
		}
		recountCart();
		reqountWeight();
	}

	
})