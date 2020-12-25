document.addEventListener('DOMContentLoaded', function() {
	$('a.lk-sidebar__link').each(function () {
		if ($(this).attr('href') === $str) {
			$(this).addClass('lk-sidebar__link--active');
		}
	})
});