document.addEventListener('DOMContentLoaded', function() {
	$(".tabs__link ").click(function(){
    	$(".tabs__link").removeClass('tabs__link--active');
    	$(this).addClass('tabs__link--active');
    	var thisTab = ($(this).index());
    	console.log(thisTab);
    	$(".tabs__block").css({'display':'none'});
    	$(".tabs__block").eq(thisTab).css({'display':'flex'});
    });
});
