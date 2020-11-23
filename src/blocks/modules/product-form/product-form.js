document.addEventListener('DOMContentLoaded', function() {
	let form = document.querySelector('.product-form');

	let btnPlus = form.querySelector('.product-form__counter-button--plus');
	let btnMinus = form.querySelector('.product-form__counter-button--minus');

	let area = form.querySelector('#product-type-s').value;
	let count = form.querySelector('#product-type-count').value;
	let packs = form.querySelector('#product-type-pack').value;

	btnPlus.addEventListener('click', function(e) {
		e.preventDefault();
		changeState();
	});

	btnMinus.addEventListener('click', function(e) {
		e.preventDefault();
		changeState();
	});

	function changeState() {
		console.log('Изменить стейт');
	}

	function showResult() {
		console.log('Площадь: ' + area);
		console.log('Количество штук: ' + count);
		console.log('Количество упаковок: ' + packs);
	}

	showResult();
});