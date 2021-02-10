document.addEventListener('DOMContentLoaded', function() {
	const links = document.querySelectorAll('.auth-link');

	for (let i = 0; i < links.length; i++) {
		links[i].addEventListener('click', function() {
			setUrl();
		});
	}

	let setUrl = () => {
		sessionStorage.setItem('redirectLink', window.location.href);
	}

	// let redirect = () => {
	// 	let link = sessionStorage.getItem('redirectLink');

	// 	if (link) {
	// 		delete sessionStorage.redirectLink;
	// 		document.location.href = link;
	// 	}
	// }

	// window.redirectLink = redirect;
});