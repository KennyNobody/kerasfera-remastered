import Masonry from 'masonry-layout';

document.addEventListener('DOMContentLoaded', function() {
	let parent = document.querySelector('.grid');

	if (parent) {
		let msnry = new Masonry( parent, {
			itemSelector: '.grid__item',
			gutter: 15
		});
	}
	
});