document.addEventListener('DOMContentLoaded', function(){
	$('a.sidebar__link').each(function () {
		if ($(this).attr('href') === $str) {
			$(this).addClass('sidebar__link--active');
		}
	});
});