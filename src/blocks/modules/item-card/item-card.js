document.addEventListener('DOMContentLoaded', function() {
	(function toggleCounter() {
		var counter = document.querySelectorAll('.item-card__counter');

		for (var i = 0; i < counter.length; i++) {
			initToggleCounters(counter[i]);
		}

		function initToggleCounters(item) {
			var btnMinus = item.querySelector('.item-card__btn--minus');
			var btnPlus = item.querySelector('.item-card__btn--plus');
			var field = item.querySelector('.item-card__input');

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