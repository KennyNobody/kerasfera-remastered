import mmenu from 'mmenu-js';

$("#mob-menu").mmenu({
	navbar: {
		title: "<span class='logo navline__logo'>Керасфера</span>"
	},
	extensions: {
		all: [
		"theme-white", 
		"pagedim-black", 
		"border-none", 
		"fx-menu-slide"
		],
		"(min-height: 600px)": [
		"listview-large"
		],
		"(min-height: 900px)": [
		"listview-huge"
		]
	}
}, {
	offCanvas: {
		pageSelector: "#page"
	}
});