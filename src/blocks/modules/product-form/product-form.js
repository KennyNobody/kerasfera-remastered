document.addEventListener('DOMContentLoaded', function() {
	let form = document.querySelector('.product-form');

	if (form) {
		let btnPlus = form.querySelector('.product-form__counter-button--plus');
		let btnMinus = form.querySelector('.product-form__counter-button--minus');

		let inputVisible = form.querySelector('.product-form__counter-input');
		let inputHidden = form.querySelector('.product-form__input-hidden');


		let tabs = form.querySelectorAll('.product-form__input');
		let area = form.querySelector('#product-type-s').value;
		let count = form.querySelector('#product-type-count').value;
		let packs = form.querySelector('#product-type-pack').value;

		let result;
		let position;

		btnPlus.addEventListener('click', function(e) {
			e.preventDefault();
			inputVisible.value = +inputVisible.value + 1;
			countResult();
		});

		btnMinus.addEventListener('click', function(e) {
			e.preventDefault();
			if (+inputVisible.value > 1) {
				inputVisible.value = Math.round(+inputVisible.value - 1);
				countResult();
			} 
		});

		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('change', function() {
				countResult();
			});
		}

		function countResult() {
			inputHidden.value = +inputVisible.value / +form.elements["type"].value;
			console.log('Итого коробок:' + inputHidden.value);
		}

		countResult();
	}

});