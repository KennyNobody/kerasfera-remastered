document.addEventListener('DOMContentLoaded', function() {
	(function toggleSubtabs() {

		const el = document.querySelectorAll('.subtabs');

		for (let i = 0; i < el.length; i++) {
			setToggle(el[i]);
		}

		function setToggle(el) {
			var link = el.querySelectorAll('a[data-subtabs-link]');
			var block = el.querySelectorAll('div[data-subtabs-content]');
			var select = el.querySelectorAll('.subtabs__mob-nav');

			if (link.length > 0 && link.length === block.length) {
				for (var i = 0; i < link.length; i++) {
					link[i].addEventListener('click', function (e) {
						e.preventDefault();
						var activeItem = this.getAttribute('data-subtabs-link');
						toggle(activeItem);
					});
				}

				for (var _i = 0; _i < select.length; _i++) {
					select[_i].addEventListener('change', function (e) {
						var activeItem = this.options[this.selectedIndex].value;
						toggle(activeItem);
					});
				}
			}

			function toggle(index) {
				for (var _i2 = 0; _i2 < link.length; _i2++) {
					link[_i2].classList.remove('subtabs__link--active');
				}

				link[index].classList.add('subtabs__link--active');

				for (var _i3 = 0; _i3 < block.length; _i3++) {
					if (index == block[_i3].getAttribute('data-subtabs-content')) {
						block[_i3].classList.add('subtabs__content--active');
					} else {
						block[_i3].classList.remove('subtabs__content--active');
					}
				}
			}
		}
		
	})();
});