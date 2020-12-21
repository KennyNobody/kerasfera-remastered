document.addEventListener('DOMContentLoaded', function() {
	let form = document.querySelector('.product-form');

	let formType = form ? form.dataset.countType : null;

	if (formType === 'square') {
		initSquareCounter();
	} else if (formType === 'piece') {
		initPieceCounter();
	} else {
		return false;
	}

	function initSquareCounter() {
		let btnPlus = form.querySelector('.product-form__counter-button--plus');
		let btnMinus = form.querySelector('.product-form__counter-button--minus');

		let inputVisible = form.querySelector('.product-form__counter-input');
		let inputHidden = form.querySelector('.product-form__input-hidden');


		let tabs = form.querySelectorAll('.product-form__input');

		let area = form.querySelector('#product-type-s');
		let count = form.querySelector('#product-type-count');
		let packs = form.querySelector('#product-type-pack');

		let resultArea;
		let resultCount;
		let resultPack;

		if (area) {
			resultArea = area.value;
		}

		if (count) {
			resultCount = count.value;
		}
		
		if (packs) {
			resultPack = packs.value;
		}
		
		let result;

		btnPlus.addEventListener('click', function(e) {
			e.preventDefault();
			plus();
		});

		btnMinus.addEventListener('click', function(e) {
			e.preventDefault();
			minus();
		});

		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('change', function() {
				countResult();
			});
		}

		function countResult() {
			let type = getDataAttr(tabs);
			
			inputHidden.value = resultPack;

			function getDataAttr(el) {
				for (let i = 0; i < el.length; i++) {
					if (el[i].checked) {
						return el[i].getAttribute('data-type');
					}
				}
			}

			if (type == 'square') {
				inputVisible.value = Math.floor(resultArea * 100) / 100;
				console.log(resultArea + ' площадь');
			} else if (type == 'quantity') {
				console.log(resultCount + ' штуки');
				inputVisible.value = resultCount;
			} else if (type == 'packs') {
				console.log(resultPack + ' упаковок');
				inputVisible.value = resultPack;
			} else {
				return false;
			}
		}

		function plus () {

			if (area) {
				if (resultArea) {
					console.log('ЕСть ' + resultArea);
					resultArea = +resultArea + +area.value;
				} else {
					resultArea = area.value;
				}
			}
			

			if (count) {
				if (resultCount) {
					resultCount = +resultCount + +count.value;
				} else {
					resultCount = +count.value;
				}	
			}
			

			if (packs) {
				if (resultPack) {
					resultPack = +resultPack + +packs.value;
				} else {
					resultPack = +packs.value;
				}
			}
			
			countResult();
		}

		function minus() {
			if (area) {
				if (resultArea - area.value > 1) {
					resultArea = +resultArea - +area.value;
				} else {
					resultArea = 1;
				}	
			}
			

			if (count) {
				if (resultCount - count.value > 1) {
					resultCount = +resultCount - +count.value;
				} else {
					resultCount = 1;
				}	
			}
			

			if (packs) {
				if (resultPack - packs.value > 1) {
					resultPack = +resultPack - +packs.value;
				} else {
					resultPack = 1;
				}
			}
			
			countResult();
		}

		function setState() {

		}

		countResult();
	}

	function initPieceCounter() {
		let btnPlus = form.querySelector('.product-form__counter-button--plus');
		let btnMinus = form.querySelector('.product-form__counter-button--minus');

		let inputVisible = form.querySelector('.product-form__counter-input');
		let inputHidden = form.querySelector('.product-form__input-hidden');

		let tabs = form.querySelectorAll('.product-form__input');

		let count = form.querySelector('#product-type-count');
		let packs = form.querySelector('#product-type-pack');

		let result = inputVisible.value;

		btnPlus.addEventListener('click', function(e) {
			e.preventDefault();
			plus();
		});

		btnMinus.addEventListener('click', function(e) {
			e.preventDefault();
			minus();
		});

		for (let i = 0; i < tabs.length; i++) {
			tabs[i].addEventListener('change', function() {
				countResult();
				countChange();
			});
		}

		function countResult() {
			inputVisible.value = result;
			inputHidden.value = result;
			console.log('Посчитали, текущая: ' + +result);
		}

		function countChange() {
			let type = getDataAttr(tabs);

			function getDataAttr(el) {
				for (let i = 0; i < el.length; i++) {
					if (el[i].checked) {
						return el[i].getAttribute('data-type');
					}
				}
			}

			if (type == 'quantity') {
				result = Math.ceil(result * count.value);
			} else if (type == 'packs') {
				result = Math.ceil(result / count.value);
			} else {
				return false;
			}

			inputVisible.value = result;
			inputHidden.value = result;
		}

		function plus () {

			result++;
			
			countResult();
		}

		function minus() {

			if (+result - 1 > 1) {
				result = +result - 1;
			} else {
				result = 1;
			}

			countResult();
		}
	}

});