document.addEventListener('DOMContentLoaded', function() {
	(function setCookieMessage() {
		const block = document.querySelector('.accent--top');

		if (block) {
			const btn = block.querySelector('.accent__close');

			if (block && btn && localStorage.getItem('cookieFlagTop') !== 'true') {
				block.setAttribute("style", "display: block;");
			}

			btn.addEventListener('click', function() {
				block.setAttribute("style", "display: none;");
				localStorage.setItem('cookieFlagTop', true);
			})	
		}
		
	})();

	(function setCookieMessage() {
		const block = document.querySelector('.accent--bottom');

		if (block) {
			const btn = block.querySelector('.accent__close');

			if (block && btn && localStorage.getItem('cookieFlagBottom') !== 'true') {
				block.setAttribute("style", "display: block;");
			}

			btn.addEventListener('click', function() {
				block.setAttribute("style", "display: none;");
				localStorage.setItem('cookieFlagBottom', true);
			})	
		}
		
	})();
});