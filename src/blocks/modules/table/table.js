document.addEventListener('DOMContentLoaded', function() {
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
			}

			checkDisabled(btnMinus, input.value);
		});

		btnPlus.addEventListener('click', function(e) {
			e.preventDefault();
			input.value = +input.value + 1;

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
});