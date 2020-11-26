import barrating from 'jquery-bar-rating';

$(".rating-visible").barrating({
	theme: "css-stars", 
	readonly: !0
});

$(".rating-input").barrating({
	theme: "css-stars", 
	initialRating: 5
});