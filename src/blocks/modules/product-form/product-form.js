document.addEventListener('DOMContentLoaded', function() {
	let form = document.querySelector('.product-form');

	let btnPlus = form.querySelector('.product-form__counter-button--plus');
	let btnMinus = form.querySelector('.product-form__counter-button--minus');

	let valueVis = form.querySelector('.product-form__counter-input');


	let tabs = form.querySelectorAll('.product-form__input');
	let area = form.querySelector('#product-type-s').value;
	let count = form.querySelector('#product-type-count').value;
	let packs = form.querySelector('#product-type-pack').value;

	btnPlus.addEventListener('click', function(e) {
		e.preventDefault();
		valueVis.value = +valueVis.value + 1;
		changeState();
	});

	btnMinus.addEventListener('click', function(e) {
		e.preventDefault();
		if (+valueVis.value > 1) {
			valueVis.value = Math.round(+valueVis.value - 1);
		} 
		changeState();
	});

	// for (let i = 0; i < tabs.length; i++) {
	// 	tabs[i].addEventListener('change', function() {
	// 		changeState(this.value, this.getAttribute('data-type'));
	// 	});
	// }

	// function toggle() {

	// }

	function changeState(name, position) {
		// console.log(name);
		// console.log(position);
	}

	function showResult() {
		console.log('Площадь: ' + area);
		console.log('Количество штук: ' + count);
		console.log('Количество упаковок: ' + packs);
	}

	showResult();
});