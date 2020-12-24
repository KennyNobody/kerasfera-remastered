document.addEventListener('DOMContentLoaded', function () {

	$(document).on('click', '.table__remove', function () {

		let templateFolder = BX.message('templateFolder');
		let el = this;
		let id = $(this).closest('.table__tr').data('id');

		$.ajax({
			url: templateFolder + "/get/ajax.php",
			data: { 
				"action": "delete", 
				"id": id,
			},
			type: "GET",
			success: function(response) {
				let itemSum = $(el).closest('.table__tr').next().find(".table__counter-input").val();

				let headerCounter = document.querySelector('.header__link-counter');
				let toolbarCounter =  document.querySelector('.mob-toolbar__counter');
				let num = +headerCounter.innerText.trim();

				$(el).closest('.table__tr').next().remove();
				$(el).closest('.table__tr').remove();

				headerCounter.innerText = +num - itemSum;
				toolbarCounter.innerText = +num - itemSum;
			},
			error: function(xhr) {
				console.log(this);
			}
		});
	}); 

	$('.promocode__field').on('change', function () {
		var templateFolder = BX.message('templateFolder');
		$.ajax({
			url: templateFolder + "/get/activated-card.php",
			cache: false,
			type: "POST",
			data: ({card: $(this).val()}),
			success: function (data) {
				if (data == '') {
					$(".cart__sale-result").html('Карта успешно добавлена, пожалуйста перезагрузите страницу');
				} else {
					$(".cart__sale-result").html(data);
				}
			}
		});
	});
})