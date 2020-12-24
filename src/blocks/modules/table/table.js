document.addEventListener('DOMContentLoaded', function() {

	function number_format(number, decimals, dec_point, thousands_sep) {
		var i, j, kw, kd, km;

	    // input sanitation & defaults
	    if (isNaN(decimals = Math.abs(decimals))) {
	    	decimals = 2;
	    }
	    if (dec_point == undefined) {
	    	dec_point = ",";
	    }
	    if (thousands_sep == undefined) {
	    	thousands_sep = ".";
	    }

	    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";

	    if ((j = i.length) > 3) {
	    	j = j % 3;
	    } else {
	    	j = 0;
	    }

	    km = (j ? i.substr(0, j) + thousands_sep : "");
	    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
	    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
	    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");


	    return km + kw + kd;
	}

	const counters = document.querySelectorAll('.table__counter');

	for (let i = 0; i < counters.length; i++) {
		changeCounter(counters[i]);
	}

	function changeCounter(item) {
		let btnMinus = item.querySelector('.table__counter-btn--prev');
		let btnPlus = item.querySelector('.table__counter-btn--next');
		let input = item.querySelector('.table__counter-input');

		checkDisabled(btnMinus, input.value);

		btnMinus.addEventListener('click', function(e) {
			e.preventDefault();
			if (input.value > 1) {
				input.value = +input.value - 1;
				getRequest(input);
			}

			checkDisabled(btnMinus, input.value);
		});

		btnPlus.addEventListener('click', function(e) {
			e.preventDefault();
			input.value = +input.value + 1;
			getRequest(input);
			checkDisabled(btnMinus, input.value);
		});

		function checkDisabled(item, value) {
			if (value == 1) {
				item.classList.add('table__counter-btn--disabled');
			} else {
				item.classList.remove('table__counter-btn--disabled');
			}
		}
	}

	let getRequest = (el) => {
		let templateFolder = BX.message('templateFolder');

		console.log(el);
		$.ajax({
			url: templateFolder + "/get/ajax.php",
			data: { 
				"action": "update", 
				"id": $(el).closest('.table__tr').data('id'),
				"q": $(el).val(),
			},
			type: "GET",
			success: function(response) {
				

				let onePrice = $(el).closest('.table__tr').find('#price_start').text();

				onePrice = onePrice.replace('руб.', '');

				onePrice = Number(onePrice.replace(/[^0-9\.]/gi, ''));

				$(el).closest('.table__tr').find('#price_sum').text(
					number_format(onePrice * Number($(el).val()), 2, '.', ' ').replace(/0+$/gi, '').replace(/\.+$/gi, '') + ' руб.'
					);

				console.log(this);
			},
			error: function(xhr) {
				console.log(this);
			}
		});
	}
});