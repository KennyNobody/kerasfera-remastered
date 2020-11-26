document.addEventListener('DOMContentLoaded', function() {
	$(document).ready(function () {
		$('.item-card__tag--favorite').on('click', function () {
			var favorID = $(this).attr('data-item');
			if ($(this).hasClass('item-card__tag--favorite-active')) {
				favHandler(favorID, 'delete');
			} else {
				favHandler(favorID, 'add');
			}
		});
		$('.favorite-btn').on('click', function () {
			var favorID = $(this).attr('data-item');
			if ($(this).hasClass('active')) {
				favHandler(favorID, 'delete');
			} else {
				favHandler(favorID, 'add');
			}
		});
		getFavoriteItems();

	});

	function favHandler(id, action) {
		var param = 'id=' + id + "&action=" + action;
		console.log(param);
		$.ajax({
			url: '/ajax/favorites.php',
			type: "GET",
			dataType: "html",
			data: param,
			success: function (response) {
				var result = $.parseJSON(response);
				if (result == 1) {
					$('.item-card__tag--favorite[data-item="' + id + '"]').addClass('item-card__tag--favorite-active');
					$('.favorite-btn[data-item="' + id + '"]').addClass('active');
				}
				if (result == 2) {
					$('.item-card__tag--favorite[data-item="' + id + '"]').removeClass('item-card__tag--favorite-active');
					$('.favorite-btn[data-item="' + id + '"]').removeClass('active');
				}
				getFavoriteItems();
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Error: ' + errorThrown);
			}
		});
	}

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
						$('.favorite-btn[data-item="' + element + '"]').addClass('active');
					}
					if ($('.item-card__tag--favorite[data-item="' + element + '"]')) {
						$('.item-card__tag--favorite[data-item="' + element + '"]').addClass('item-card__tag--favorite-active');
					}
				});
				if(result != null)
					$('.fav_count').text(getFavoriteCountText(result.length));
			},
			error: function (jqXHR, textStatus, errorThrown) {
				console.log('Error: ' + errorThrown);
			}
		});
	}

	function getFavoriteCountText(count) {
		var number = count;
		var term = "ов";
		if (number >= 10 && number <= 19){
			term = "ов";
		}else{
			if (number === 1){
				term = "";
			}
			if(number >= 2 && number <= 4){
				term = "а";
			}
		}
		if(count === false){
			count = 0;
		}
		return 'В избранном '+count +' товар'+term;
	}
});



