document.addEventListener('DOMContentLoaded', function() {
	(function toggleModalCounter() {
		var counter = document.querySelectorAll('.counter');

		for (let i = 0; i < counter.length; i++) {
			initToggleCounters(counter[i]);
		}

		function initToggleCounters(item) {
			var btnMinus = item.querySelector('.counter__btn--minus');
			var btnPlus = item.querySelector('.counter__btn--plus');
			var field = item.querySelector('.counter__input');

			if (btnMinus && btnPlus && field) {
				btnMinus.addEventListener('click', remove);
				btnPlus.addEventListener('click', add);
			}

			function remove() {
				if (+field.value > 1) {
					field.value--;
				}
			}

			function add() {
				field.value++;
			}
		}

		;
	})();
});