var waitInterval = setInterval(function(){
    if (typeof($) == typeof(function(){})) {
        clearInterval(waitInterval);

        $('.shop').each(function(){
            var $shop = $(this),
            $filterCheckbox = $shop.find('.filter__block input[type="checkbox"]'),
            $resetBtn = $shop.find('.reset.filter__reset'),

            $toggler = $shop.find('.filter__toogle'),

            initEnd = false,
            filterCheckbox = {},
            keypressSlider = null,
            keypressSlider1 = null,
            keypressSlider2 = null,

            needScroll = false,

            page = null,
            priceSetManual = false,
            sizeSetManual0 = false,
            sizeSetManual1 = false,
            execTimeout = null,

            init = function(){
                initPrice();
                initSize();
                initFilter();

                $resetBtn.on('click', resetFilter);
                $shop.on('click', '.shop__tag', clickTag);
                $shop.on('click', '.shop__counter-btn', clickCount);
                $shop.on('click', '.page_nav a', clickPages);
                $shop.on('click', '.filter__toogle', clickToogler);

                $(".filter__name").click(function(){
                    $(this).parent().toggleClass('filter__block--open');
                });

                $(".filter__mob-title").click(function(){
                    $('.body').toggleClass('body--filter');
                });

                $(".filter__overlay").click(function(){
                    $('.body').toggleClass('body--filter');
                });


                window.addEventListener('popstate', loadPage);

                exec();
                initEnd = true;
                $('body').removeClass('body--filter');

                $(".filter__name").eq(1).trigger('click');
                var showSize = false;
                $('.filter__block--RAZMER').find('input').each(function(i){
                    if (i == 0 || i == 2) {
                        if($(this).val() != 0) showSize = true;
                    } else {
                        if($(this).val() != 300) showSize = true;
                    }
                });
                if (showSize) {
                    $('.filter__block--RAZMER .filter__name').trigger('click');
                }
            },

            initPrice = function(){
                keypressSlider = document.getElementById('filter__range');
                var input0 = document.getElementById('input-with-keypress-0');
                var input1 = document.getElementById('input-with-keypress-1');
                var inputs = [input0, input1];


                if (keypressSlider) {
                    noUiSlider.create(keypressSlider, {
                        start: [$(input0).val(), $(input1).val()],
                        connect: true,
                        step: 100,
                        // tooltips: [true, wNumb({decimals: 1})],
                        range: {
                            'min': [0],
                            'max': 10000
                        }
                    });

                    keypressSlider.noUiSlider.on('update', function (values, handle) {
                        inputs[handle].value = +values[handle];
                        page = 1;
                        if(!priceSetManual) {
                            $('.body').addClass('body--filter');
                            exec();
                        }
                    });

                    // Listen to keydown events on the input field.
                    inputs.forEach(function (input, handle) {
                        input.addEventListener('change', function () {
                            keypressSlider.noUiSlider.setHandle(handle, this.value);
                        });
                        input.addEventListener('keydown', function (e) {
                            var values = keypressSlider.noUiSlider.get();
                            var value = Number(values[handle]);
                            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                            var steps = keypressSlider.noUiSlider.steps();
                            // [down, up]
                            var step = steps[handle];
                            var position;
                            // 13 is enter,
                            // 38 is key up,
                            // 40 is key down.
                            switch (e.which) {
                                case 13:
                                keypressSlider.noUiSlider.setHandle(handle, this.value);
                                break;
                                case 38:
                                // Get step to go increase slider value (up)
                                position = step[1];
                                // false = no step is set
                                if (position === false) {
                                    position = 1;
                                }
                                // null = edge of slider
                                if (position !== null) {
                                    keypressSlider.noUiSlider.setHandle(handle, value + position);
                                }
                                break;
                                case 40:
                                position = step[0];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    keypressSlider.noUiSlider.setHandle(handle, value - position);
                                }
                                break;
                            }
                        });
                    });
                }
            },

            initSize = function(){
                keypressSlider1 = document.getElementById('filter__range1');
                keypressSlider2 = document.getElementById('filter__range2');
                var input2 = document.getElementById('input-with-keypress-2');
                var input3 = document.getElementById('input-with-keypress-3');
                var input4 = document.getElementById('input-with-keypress-4');
                var input5 = document.getElementById('input-with-keypress-5');
                var inputs0 = [input2, input3];
                var inputs1 = [input4, input5];


                if (keypressSlider) {
                    noUiSlider.create(keypressSlider1, {
                        start: [$(input2).val(), $(input3).val()],
                        connect: true,
                        step: 5,
                        // tooltips: [true, wNumb({decimals: 1})],
                        range: {
                            'min': [0],
                            'max': 300
                        }
                    });

                    noUiSlider.create(keypressSlider2, {
                        start: [$(input4).val(), $(input5).val()],
                        connect: true,
                        step: 5,
                        // tooltips: [true, wNumb({decimals: 1})],
                        range: {
                            'min': [0],
                            'max': 300
                        }
                    });

                    keypressSlider1.noUiSlider.on('update', function (values, handle) {
                        inputs0[handle].value = +values[handle];
                        page = 1;
                        if(!sizeSetManual0) {
                            $('.body').addClass('body--filter');
                            exec();
                        }
                    });

                    keypressSlider2.noUiSlider.on('update', function (values, handle) {
                        inputs1[handle].value = +values[handle];
                        page = 1;
                        if(!sizeSetManual1) {
                            $('.body').addClass('body--filter');
                            exec();
                        }
                    });

                    // Listen to keydown events on the input field.
                    inputs0.forEach(function (input, handle) {
                        input.addEventListener('change', function () {
                            keypressSlider1.noUiSlider.setHandle(handle, this.value);
                        });
                        input.addEventListener('keydown', function (e) {
                            var values = keypressSlider1.noUiSlider.get();
                            var value = Number(values[handle]);
                            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                            var steps = keypressSlider1.noUiSlider.steps();
                            // [down, up]
                            var step = steps[handle];
                            var position;
                            // 13 is enter,
                            // 38 is key up,
                            // 40 is key down.
                            switch (e.which) {
                                case 13:
                                keypressSlider1.noUiSlider.setHandle(handle, this.value);
                                break;
                                case 38:
                                // Get step to go increase slider value (up)
                                position = step[1];
                                // false = no step is set
                                if (position === false) {
                                    position = 1;
                                }
                                // null = edge of slider
                                if (position !== null) {
                                    keypressSlider1.noUiSlider.setHandle(handle, value + position);
                                }
                                break;
                                case 40:
                                position = step[0];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    keypressSlider1.noUiSlider.setHandle(handle, value - position);
                                }
                                break;
                            }
                        });
                    });

                    // Listen to keydown events on the input field.
                    inputs1.forEach(function (input, handle) {
                        input.addEventListener('change', function () {
                            keypressSlider2.noUiSlider.setHandle(handle, this.value);
                        });
                        input.addEventListener('keydown', function (e) {
                            var values = keypressSlider2.noUiSlider.get();
                            var value = Number(values[handle]);
                            // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                            var steps = keypressSlider2.noUiSlider.steps();
                            // [down, up]
                            var step = steps[handle];
                            var position;
                            // 13 is enter,
                            // 38 is key up,
                            // 40 is key down.
                            switch (e.which) {
                                case 13:
                                keypressSlider2.noUiSlider.setHandle(handle, this.value);
                                break;
                                case 38:
                                // Get step to go increase slider value (up)
                                position = step[1];
                                // false = no step is set
                                if (position === false) {
                                    position = 1;
                                }
                                // null = edge of slider
                                if (position !== null) {
                                    keypressSlider2.noUiSlider.setHandle(handle, value + position);
                                }
                                break;
                                case 40:
                                position = step[0];
                                if (position === false) {
                                    position = 1;
                                }
                                if (position !== null) {
                                    keypressSlider2.noUiSlider.setHandle(handle, value - position);
                                }
                                break;
                            }
                        });
                    });
                }
            },

            initFilter = function(){
                $filterCheckbox.on('click', changeFilter);

                // var html = '';
                // $filterCheckbox.each(function(){

                //     var $this = $(this);
                //     html += '<div style="display:none" class="filter__checked-block filter-'+$this.attr('name')+'-'+$this.attr('value')+'" data-name="'+$this.attr('name')+'" data-value="'+$this.attr('value')+'"><span class="selected">' + $(this).next().text() + '</span> x</div>';
                // });
                // $(".filter__toogle").after(html);
                $shop.find('.filter__checked-block').on('click', removeFilter);

                $filterCheckbox.each(function(){
                    var $this = $(this);
                    if (typeof(filterCheckbox[$this.attr('name')]) == 'undefined') {
                        filterCheckbox[$this.attr('name')] = {};
                    }
                    filterCheckbox[$this.attr('name')][$this.attr('value')] = {
                        input: $this,
                        el: $shop.find('.filter-'+$this.attr('name')+'-'+$this.attr('value'))
                    };

                });

                $filterCheckbox.filter(':checked').trigger('click');
            },

            clickToogler = function(e){
                e.preventDefault();
                $(this).toggleClass('filter__toogle--active');
                exec();
            },

            changeFilter = function(e){
                var label = $(this).parent();
                if (label.hasClass("active")){
                    label.removeClass('active');
                    $(this).prop('checked', false);
                    filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.hide();
                }else{
                    label.addClass('active');
                    $(e.target).prop('checked', true);
                    filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.show();
                }
                page = 1;
                exec();
            },

            resetFilter = function(){
                $filterCheckbox.filter(':checked').trigger('click');
                keypressSlider.noUiSlider.set([0, 50000]);
                keypressSlider1.noUiSlider.set([0, 300]);
                keypressSlider2.noUiSlider.set([0, 300]);
            },

            removeFilter = function(e){
                e.preventDefault();
                filterCheckbox[$(this).data('name')][$(this).data('value')].input.trigger('click');
            },

            clickTag = function(){
                if ($(this).index() == 0) {
                    $(this).parent().find('span').removeClass('active');
                } else {
                    if ($(this).hasClass('active')) {
                        $(this).removeClass('active');
                    } else {
                        $(this).parent().find('span').removeClass('active');
                        $(this).addClass('active');
                    }
                }
                page = 1;
                exec();
            },

            clickCount = function(){
                if (!$(this).hasClass('shop__counter-btn—active')) {
                    $(this).parent().find('span').removeClass('shop__counter-btn—active');
                    $(this).addClass('shop__counter-btn—active');
                    page = 1;
                    exec();
                }
            },

            clickPages = function(e){
                e.preventDefault();
                page = $(this).attr('rel');
                needScroll = true;
                exec();
            },

            exec = function(){
                if(!initEnd) return;
                clearTimeout(execTimeout);
                execTimeout = setTimeout(function(){
                    var params = {};
                    var url = [];

                    $('.shop__items').addClass('m-load');

                    if (page != null) {
                        url.push('page='+page);
                        params.page = page;
                    }

                    if($toggler.hasClass('m-active')) {
                        url.push('type');
                    }

                    url.push('count='+Number($('.shop__counter-btn—active').text()));
                    params.count = Number($('.shop__counter-btn—active').text());

                    var tagActive = [];
                    $('.shop__tag.active').each(function(){
                        tagActive.push($(this).attr('name'));
                    });
                    url.push('tag='+tagActive.join(','));
                    params.tag = tagActive;

                    var min = $('#input-with-keypress-0').val();
                    var max = $('#input-with-keypress-1').val();

                    url.push('min='+min);
                    url.push('max='+max);

                    params.min = min;
                    params.max = max;

                    var wmin = $('#input-with-keypress-2').val();
                    var wmax = $('#input-with-keypress-3').val();

                    url.push('wmin='+wmin);
                    url.push('wmax='+wmax);

                    params.wmin = wmin;
                    params.wmax = wmax;

                    var hmin = $('#input-with-keypress-4').val();
                    var hmax = $('#input-with-keypress-5').val();

                    url.push('hmin='+hmin);
                    url.push('hmax='+hmax);

                    params.hmin = hmin;
                    params.hmax = hmax;

                    var filterCheckboxActive = {};
                    $filterCheckbox.filter(':checked').each(function(){
                        if (typeof(filterCheckboxActive[$(this).attr('name')]) == 'undefined') {
                            filterCheckboxActive[$(this).attr('name')] = $(this).val();
                        } else {
                            filterCheckboxActive[$(this).attr('name')] += ','+$(this).val();
                        }
                    });

                    params.filter = {};
                    for (var prop in filterCheckboxActive) {
                        url.push(prop+'='+filterCheckboxActive[prop]);
                        params.filter[prop] = filterCheckboxActive[prop].split(',');
                    }

                    $.get('?'+url.join('&'), function(html){
                        params.html = $(html).find('.shop__content').html();
                        history.pushState(params, null, '?'+url.join('&'));
						try {
    						var popStateEvent = new PopStateEvent('popstate', { state: params });
							dispatchEvent(popStateEvent);
						} catch (ex) {
							window.location = '?'+url.join('&');
						}
                    });
                }, 500);
            },

            loadPage = function(e){
                if (e.state == null) return;
                if ($('.filter__wrapper').css('position') != 'fixed') {
                    $('.body').removeClass('body--filter');
                }
                $shop.find('.shop__content').html(e.state.html).find('.popup-item').magnificPopup({
                    showCloseBtn: false,
                });
                $shop.find('.shop__content').find('.call__close').on('click', function(e){
                    $.magnificPopup.close();
                });
                priceSetManual = true;
                keypressSlider.noUiSlider.set([e.state.min, e.state.max]);
                priceSetManual = false;
                sizeSetManual0 = true;
                keypressSlider1.noUiSlider.set([e.state.wmin, e.state.wmax]);
                sizeSetManual0 = false;
                sizeSetManual1 = true;
                keypressSlider2.noUiSlider.set([e.state.hmin, e.state.hmax]);
                sizeSetManual1 = false;
                $filterCheckbox.filter(':checked').each(function(){
                    $(this).parent().removeClass('active');
                    $(this).prop('checked', false);
                    filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.hide();
                });

				$(".popup").magnificPopup();
				$(".popup-item").magnificPopup({showCloseBtn:!1});
				$(".popup-image").magnificPopup({type:"image",closeOnContentClick:"true"});
                /*Counters and favorites*/
				$(".style__btn--minus_l").click(function () {
                    var e = $(this).parent().children("input").val();
                    1 < e && (e--, $(this).parent().children("input").val(e))
                });
                $(".style__btn--plus_l").click(function () {
                    var e = $(this).parent().children("input").val();
                    e++, $(this).parent().children("input").val(e)
                });
                $(".style__btn--minus").click(function () {
                    var e = $(this).parent().children("input").val();
                    1 < e && (e--, $(this).parent().children("input").val(e))
                });
                $(".style__btn--plus").click(function () {
                    var e = $(this).parent().children("input").val();
                    e++, $(this).parent().children("input").val(e)
                });
                $('.favorite-btn').on('click', function () {
                    var favorID = $(this).attr('data-item');
                    if ($(this).hasClass('active')) {
                        favHandler(favorID, 'delete');
                        // $(this).removeClass('active');
                    } else {
                        favHandler(favorID, 'add');
                        // $(this).addClass('active');
                    }
                });
                getFavoriteItems();

				$(".style__buy.fast-buy").on("click",function(e){
					e.preventDefault();
					var t=$(this);
					if(t.hasClass("style__buy--added")) {
						window.location="/personal/cart/";
					} else {
						t.css("position","relative");
						t.addClass("style__buy--added");
						setTimeout(function(){
							t.removeClass("style__buy--added");
							t.text("Купить");
						}, 5000);
						var n=$(t.attr("href")).find("form");
						n.find(".call__counter input").val($(this).parents(".style__info-column").find(">.call__counter input").val());
						n.trigger("submit");
						t.text("В корзину");
					}
				});

                for (var prop in e.state.filter) {
                    $.each(e.state.filter[prop], function(){
                        filterCheckbox[prop][this].input.parent().addClass('active');
                        filterCheckbox[prop][this].input.prop('checked', true);
                        filterCheckbox[prop][this].el.show();
                    });
                }

                if (needScroll) {
                    $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
                    needScroll = false;
                }
            };

            init();
        });

    }
}, 100);
$(document).ready(function () {
    $(".style__btn--minus_l").click(function () {
        var e = $(this).parent().children("input").val();
        1 < e && (e--, $(this).parent().children("input").val(e))
    });
    $(".style__btn--plus_l").click(function () {
        var e = $(this).parent().children("input").val();
        e++, $(this).parent().children("input").val(e)
    });
    $(".style__btn--minus").click(function () {
        var e = $(this).parent().children("input").val();
        1 < e && (e--, $(this).parent().children("input").val(e))
    });
    $(".style__btn--plus").click(function () {
        var e = $(this).parent().children("input").val();
        e++, $(this).parent().children("input").val(e)
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
                    $('.favorite-btn[data-item="' + element + '"]').addClass('active');
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
