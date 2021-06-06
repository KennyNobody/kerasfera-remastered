import "./import/modules";

document.addEventListener('DOMContentLoaded', function() {

	$('.autoscroll').on('click', function(e){
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
		e.preventDefault();
	});

	$(window).on('load scroll', function(e) {
		$('.autoscroll').toggleClass('autoscroll--hidden', $(this).scrollTop() > 600);
	});

	$(".cart__btn--minus").click(function (e) {
		$(this).bind("selectstart", function () {
			return !1
		});
		var t = $(this).parent().children(".cart__counter-total").val();
		1 < t && (t--, $(this).parent().children(".cart__counter-total").val(t), $(this).parent().children(".cart__counter-total").trigger("change")), e.preventDefault()
	});

	$(".cart__btn--plus").click(function (e) {
		$(this).bind("selectstart", function () {
			return !1
		});
		var t = $(this).parent().children(".cart__counter-total").val();
		t++, $(this).parent().children(".cart__counter-total").val(t), $(this).parent().children(".cart__counter-total").trigger("change"), e.preventDefault()
	}); 

	$(".data").on("click", ".data__checkbox", function (e) {
		if ("INPUT" != e.target.tagName) {
			var t = $(e.target);
			t.hasClass("data__checkbox") || (t = t.parents(".data__checkbox")), t.parent().find('input[type="radio"]').each(function () {
				$(this).prop("checked", !1)
			}), t.find('input[type="radio"]').prop("checked", !0).trigger("click")
		}
	}); 

	$('.item-card__tag--favorite').on('click', function () {
		var favorID = $(this).attr('data-item');
		if ($(this).hasClass('item-card__tag--favorite')) {
			favHandler(favorID, 'delete');
		} else {
			favHandler(favorID, 'add');
		}
	});

	getFavoriteItems();

	$(document).ready(function () {

		$(document).on('click', '.counter__btn--plus', function() {
			var value = $(this).parent().children("input").val();
			value++;
			$(this).parent().children("input").val(value);
		});

		$(document).on('click', '.counter__btn--minus', function() {
			var value = $(this).parent().children("input").val();
			1 < value && (value--, $(this).parent().children("input").val(value));
		});

		$(document).on('click', '.shop__btn', function() {
			var url = window.location.href;
			var matches = url.match(/count=[a-z\d]+/gi);

			if (matches) {
				var countLink = +parseInt(matches[0].replace(/[^\d]/g, '')) + 15;

				var leftLink = url.split(matches)[0];
				var rightLink = url.split(matches)[1];

				window.location.href = leftLink + "count=" + countLink + rightLink;    
			}

		})

	});

	function getFavoriteItems() {
		var param = 'get_fav_list=1';
		$.ajax({
			url: '/ajax/favorites.php',
			type: "GET",
			dataType: "html",
			data: param,
			success: function (response) {
				var result = $.parseJSON(response);
				$(result).each(function (index, element) {
					if ($('.favorite-btn[data-item="' + element + '"]')) {
						$('.favorite-btn[data-item="' + element + '"]').addClass('item-card__tag--favorite');
					}
				});
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Error: ' + errorThrown);
			}
		});
	}

	function checkAgreement() {
		let checkedControl = document.querySelectorAll('[data-checked-control]');
		let checkedButton;

		for (let i = 0; i < checkedControl.length; i++) {
			toggle(checkedControl[i].dataset.checkedControl, checkedControl[i].checked);

			checkedControl[i].addEventListener('change', function() {
				toggle(this.dataset.checkedControl, this.checked);
			})
		}

		let search = () => {

		}

		function toggle (id, status) {
			let button = document.querySelector('[data-checked-button="' + id + '"]');

			if (button && status) {
				button.classList.remove('disabled');
			} else if (button && status == false) {
				button.classList.add('disabled');
			} else {
				return false;
			}
			
		}
	}

	checkAgreement();

	// LoadMore for gallery

	let loading = false;
	let page = 2;

	function loadMore() {
		let el = document.querySelector('.gallery');

		if (el && isVisible() && loading == false) {
			loading = true;
			load();
		}

		function isVisible() {
			let windowOffset = window.scrollY;
			let galleryOffset = el.getBoundingClientRect().top + document.body.scrollTop + el.offsetHeight - 900;

			if (galleryOffset < 0) {
				return true;
			}
		}

		function load() {
			$.ajax({
				url: '/gallery/ajax.php',
				type: "GET",
				dataType: "html",
				data: {
					page: page,
				},
				success: function (response) {
					el.querySelector('.gallery__container').innerHTML = el.querySelector('.gallery__container').innerHTML + response;
					console.log(page);
					loading = false;
					page = page + 1;
				},
				error: function (jqXHR, textStatus, errorThrown) {
					console.log('Error: ' + errorThrown);
					loading = false;
				}
			});
		}
	}

	

	document.addEventListener('scroll', function() {
		loadMore();
	})
});