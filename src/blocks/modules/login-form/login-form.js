document.addEventListener('DOMContentLoaded', function() {
	let form = document.querySelector('.login-form__wrapper');

	if (form) {
		let btn = form.querySelectorAll('.button--login-toggle');

		for (let i = 0; i < btn.length; i++) {
			btn[i].addEventListener('click', function(e) {
				e.preventDefault();
				toggle();
			});
		}
	}

	function toggle() {
		form.classList.toggle('login-form__wrapper--reg');
	}
});