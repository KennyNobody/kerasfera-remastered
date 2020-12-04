import magnificPopup from 'magnific-popup';
import noUiSlider from 'nouislider';

// document.addEventListener('DOMContentLoaded', function() {

// });

// $(window).scroll(function() {

//     if ($(document).width() < 1000) {
//         if ($(window).scrollTop()  > 300) {
//             $('.filter__mob-title').addClass('filter__mob-title--fixed');
//         } else {
//             $('.filter__mob-title').removeClass('filter__mob-title--fixed');
//         }
//     } 
// });

document.addEventListener('DOMContentLoaded', function() {
    let filter;

    function initFilter() {
        let parent = document.querySelector('.filter');

        if (parent) {
            filter = parent;
            initToggler();
            initRangeSlider();
            initCheckboxes();
            initToolbar();
            initTypes();
            clearForm();
        }

    }

    function initTypes() {
        const radios = filter.querySelectorAll('.filter__toggle-input');

        for (let i = 0; i < radios.length; i++) {
            radios[i].addEventListener('change', function() {
                getRequest();
            });
        }
    }

    function initToggler() {

        const items = filter.querySelectorAll('.filter__block');

        for (let i = 0; i < items.length; i++) {
            toggleBlock(items[i]);
        }

        function toggleBlock(item) {

            let area = item.querySelector('.filter__name');

            area.addEventListener('click', function() {
                item.classList.toggle('filter__block--open');
            });
        }
    }

    function initRangeSlider() {
        let rangeSlider = filter.querySelector('.price');

        if (rangeSlider) {

            let activeBlock = rangeSlider.querySelector('.filter__range');
            let minValue = rangeSlider.querySelector('#input-with-keypress-0') || 0;
            let maxValue = rangeSlider.querySelector('#input-with-keypress-1') || 10000;

            noUiSlider.create(activeBlock, {
                start: [+minValue.value, +maxValue.value],
                connect: true,
                step: 100,

                range: {
                    'min': [+minValue.value],
                    'max': [+maxValue.value]
                }
            });

            activeBlock.noUiSlider.on('change', function (values, handle) {
                minValue.value = Math.round(values[0]);
                maxValue.value = Math.round(values[1]);
                getRequest();
            });

        }
    }

    function initCheckboxes() {
        let inputs = filter.querySelectorAll('.filter-input');

        for (let i = 0; i < inputs.length; i++) {
            addListeners(inputs[i]);
        }

        function addListeners(item) {
            let field = item.querySelector('.filter-input__input');

            field.addEventListener('change', function() {
                getRequest();
            });
        }
    }

    function initToolbar() {
        const inputs = document.querySelectorAll('.toolbar select');

        if (inputs) {
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener('change', function() {
                    getRequest();
                })
            } 
        }
    }

    function getValues() {

        let result = {
            count: getCount(), 
            tag : getTag(),
            type: getTypes(),
            min: getPrice('min'),
            max: getPrice('max'),
            wmin: getSizes('wmin'),
            wmax: getSizes('wmax'),
            hmin: getSizes('hmin'),
            hmax: getSizes('hmax'),
        };

        let array = filter.querySelectorAll('[data-block-type="checkbox"]');

        for (let i = 0; i < array.length; i++) {
            if (getBlockValue(array[i])) {
                getBlockValue(array[i]); 
            }
        }

        function getBlockValue(parent) {
            let urlString;
            let name = parent.getAttribute("name");

            let inputs = parent.querySelectorAll('.filter-input__input');

            for (let n = 0; n < inputs.length; n++) {

                if ((result[name] != undefined) && inputs[n].checked) {
                    result[name] = result[name] + "," + inputs[n].value;
                } else if (result[name] == undefined && inputs[n].checked) {
                    result[name] = inputs[n].value;
                } else {

                }
            }

            if (urlString != undefined) {
                return urlString;
            }
        }

        return result;
    }

    function getPage() {
        return 1;
    }

    function getPrice(price) {
        return filter.elements[price].value;
    }

    function getTypes() {
        return filter.elements['filter-type'].value;
    }

    function getTag() {
        const form = document.querySelector('.toolbar');

        return form.elements['select-tag'].value;
    }

    function getCount() {
        const form = document.querySelector('.toolbar');

        return form.elements['select-count'].value;
    }

    function getSizes(type) {
        return filter.elements[type].value;
    }

    function getRequest() {
        $.ajax({
            url: 'shop',
            type: 'GET',
            data: getValues(),
            success: function (response) {
                console.log(response);
            },
            error: function (response) {
                console.log(response);
            }
        });
    }

    function clearForm() {
        let button = filter.querySelector('.filter__reset');

        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                filter.reset();
                getRequest();
            });
        }

    }

    initFilter();

});

// var waitInterval = setInterval(function(){
//     if (typeof($) == typeof(function(){})) {
//         clearInterval(waitInterval);

//         $('.shop').each(function(){
//             var $shop = $(this),
//             $filterCheckbox = $shop.find('.filter__block input[type="checkbox"]'),
//             $resetBtn = $shop.find('.reset.filter__reset'),

//             $toggler = $shop.find('.filter__toogle'),

//             initEnd = false,
//             filterCheckbox = {},
//             keypressSlider = null,
//             keypressSlider1 = null,
//             keypressSlider2 = null,

//             needScroll = false,

//             page = null,
//             priceSetManual = false,
//             sizeSetManual0 = false,
//             sizeSetManual1 = false,
//             execTimeout = null,

//             init = function(){
//                 initPrice();
//                 initSize();
//                 initFilter();

//                 $resetBtn.on('click', resetFilter);
//                 $shop.on('change', '.toolbar__select--sort', clickTag);
//                 $shop.on('change', '.filter__type-select', clickTag);
//                 $shop.on('change', '.toolbar__select--count', clickCount);
//                 $shop.on('click', '.page_nav a', clickPages);
//                 $shop.on('click', '.filter__toogle', clickToogler);

//                 // $(".filter__name").click(function(){
//                 //     $(this).parent().toggleClass('filter__block--open');
//                 // });

//                 $(".filter__mob-title").click(function(){
//                     $('.body').toggleClass('body--filter');
//                 });

//                 $(".filter__overlay").click(function(){
//                     $('.body').toggleClass('body--filter');
//                 });


//                 window.addEventListener('popstate', loadPage);

//                 exec();
//                 initEnd = true;
//                 $('body').removeClass('body--filter');

//                 $(".filter__name").eq(1).trigger('click');
//                 var showSize = false;
//                 $('.filter__block--RAZMER').find('input').each(function(i){
//                     if (i == 0 || i == 2) {
//                         if($(this).val() != 0) showSize = true;
//                     } else {
//                         if($(this).val() != 300) showSize = true;
//                     }
//                 });
//                 if (showSize) {
//                     $('.filter__block--RAZMER .filter__name').trigger('click');
//                 }
//             },

//             initPrice = function(){
//                 // keypressSlider = document.getElementById('filter__range');
//                 // var input0 = document.getElementById('input-with-keypress-0');
//                 // var input1 = document.getElementById('input-with-keypress-1');
//                 // var inputs = [input0, input1];


//                 // if (keypressSlider) {
//                 //     noUiSlider.create(keypressSlider, {
//                 //         start: [$(input0).val(), $(input1).val()],
//                 //         connect: true,
//                 //         step: 100,

//                 //         range: {
//                 //             'min': [0],
//                 //             'max': 10000
//                 //         }
//                 //     });

//                 //     keypressSlider.noUiSlider.on('update', function (values, handle) {
//                 //         inputs[handle].value = +values[handle];
//                 //         page = 1;
//                 //         if(!priceSetManual) {
//                 //             $('.body').addClass('body--filter');
//                 //             exec();
//                 //         }
//                 //     });

//                 //     inputs.forEach(function (input, handle) {
//                 //         input.addEventListener('change', function () {
//                 //             keypressSlider.noUiSlider.setHandle(handle, this.value);
//                 //         });
//                 //         input.addEventListener('keydown', function (e) {
//                 //             var values = keypressSlider.noUiSlider.get();
//                 //             var value = Number(values[handle]);

//                 //             var steps = keypressSlider.noUiSlider.steps();

//                 //             var step = steps[handle];
//                 //             var position;

//                 //             switch (e.which) {
//                 //                 case 13:
//                 //                 keypressSlider.noUiSlider.setHandle(handle, this.value);
//                 //                 break;
//                 //                 case 38:
//                 //                 position = step[1];

//                 //                 if (position === false) {
//                 //                     position = 1;
//                 //                 }

//                 //                 if (position !== null) {
//                 //                     keypressSlider.noUiSlider.setHandle(handle, value + position);
//                 //                 }
//                 //                 break;
//                 //                 case 40:
//                 //                 position = step[0];
//                 //                 if (position === false) {
//                 //                     position = 1;
//                 //                 }
//                 //                 if (position !== null) {
//                 //                     keypressSlider.noUiSlider.setHandle(handle, value - position);
//                 //                 }
//                 //                 break;
//                 //             }
//                 //         });
//                 //     });
//                 // }
//             },

//             initFilter = function(){
//                 $filterCheckbox.on('click', changeFilter);

//                 $shop.find('.filter__checked-block').on('click', removeFilter);

//                 $filterCheckbox.each(function(){
//                     var $this = $(this);
//                     if (typeof(filterCheckbox[$this.attr('name')]) == 'undefined') {
//                         filterCheckbox[$this.attr('name')] = {};
//                     }
//                     filterCheckbox[$this.attr('name')][$this.attr('value')] = {
//                         input: $this,
//                         el: $shop.find('.filter-'+$this.attr('name')+'-'+$this.attr('value'))
//                     };

//                 });

//                 $filterCheckbox.filter(':checked').trigger('click');
//             },

//             clickToogler = function(e){
//                 e.preventDefault();
//                 $(this).toggleClass('filter__toogle--active');
//                 exec();
//             },

//             changeFilter = function(e){
//                 var label = $(this).parent();
//                 if (label.hasClass("active")){
//                     label.removeClass('active');
//                     $(this).prop('checked', false);
//                     filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.hide();
//                 }else{
//                     label.addClass('active');
//                     $(e.target).prop('checked', true);
//                     filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.show();
//                 }
//                 page = 1;
//                 exec();
//             },

//             resetFilter = function(){
//                 $filterCheckbox.filter(':checked').trigger('click');
//                 keypressSlider.noUiSlider.set([0, 50000]);
//                 keypressSlider1.noUiSlider.set([0, 300]);
//                 keypressSlider2.noUiSlider.set([0, 300]);
//             },

//             removeFilter = function(e){
//                 e.preventDefault();
//                 filterCheckbox[$(this).data('name')][$(this).data('value')].input.trigger('click');
//             },

//             clickTag = function(){

//                 page = 1;
//                 exec();
//             },

//             clickCount = function(){

//                 page = 1;
//                 exec();

//             },

//             clickPages = function(e){
//                 e.preventDefault();
//                 page = $(this).attr('rel');
//                 needScroll = true;
//                 exec();
//             },

//             exec = function(){
//                 if(!initEnd) return;
//                 clearTimeout(execTimeout);
//                 execTimeout = setTimeout(function(){
//                     var params = {};
//                     var url = [];

//                     $('.shop__items').addClass('m-load');

//                     if (page != null) {
//                         url.push('page='+page);
//                         params.page = page;
//                     }

//                     if($toggler.hasClass('filter__toogle--active')) {
//                         url.push('type');
//                     }

//                     url.push('count='+Number($(".toolbar__select--count").children("option:selected").val()));
//                     params.count = Number($(".toolbar__select--count").children("option:selected").val());

//                     if (document.documentElement.clientWidth > 1000) {
//                         url.push('tag=' + $(".toolbar__select--sort").children("option:selected").attr('name'));
//                         params.tag = $(".toolbar__select--sort").children("option:selected").attr('name');
//                         console.log('toolbar');
//                     } else {
//                         url.push('tag=' + $(".filter__type-select").children("option:selected").attr('name'));
//                         params.tag = $(".filter__type-select").children("option:selected").attr('name');
//                         console.log('filter');
//                     }    

//                     var min = $('#input-with-keypress-0').val();
//                     var max = $('#input-with-keypress-1').val();

//                     url.push('min='+min);
//                     url.push('max='+max);

//                     params.min = min;
//                     params.max = max;

//                     var wmin = $('#input-with-keypress-2').val();
//                     var wmax = $('#input-with-keypress-3').val();

//                     url.push('wmin='+wmin);
//                     url.push('wmax='+wmax);

//                     params.wmin = wmin;
//                     params.wmax = wmax;

//                     var hmin = $('#input-with-keypress-4').val();
//                     var hmax = $('#input-with-keypress-5').val();

//                     url.push('hmin='+hmin);
//                     url.push('hmax='+hmax);

//                     params.hmin = hmin;
//                     params.hmax = hmax;

//                     var filterCheckboxActive = {};
//                     $filterCheckbox.filter(':checked').each(function(){
//                         if (typeof(filterCheckboxActive[$(this).attr('name')]) == 'undefined') {
//                             filterCheckboxActive[$(this).attr('name')] = $(this).val();
//                         } else {
//                             filterCheckboxActive[$(this).attr('name')] += ','+$(this).val();
//                         }
//                     });

//                     params.filter = {};
//                     for (var prop in filterCheckboxActive) {
//                         url.push(prop+'='+filterCheckboxActive[prop]);
//                         params.filter[prop] = filterCheckboxActive[prop].split(',');
//                     }

//                     $.get('?'+url.join('&'), function(html){
//                         params.html = $(html).find('.shop__content').html();
//                         history.pushState(params, null, '?'+url.join('&'));
//                         try {
//                             var popStateEvent = new PopStateEvent('popstate', { state: params });
//                             dispatchEvent(popStateEvent);

//                             $('.toolbar__select--count option[value="'+ params.count +'"]').prop('selected', true);
//                             $('.toolbar__select--sort option[name="'+ params.tag +'"]').prop('selected', true);
//                         } catch (ex) {
//                             window.location = '?'+url.join('&');
//                         }
//                     });
//                 }, 500);
//             },

//             loadPage = function(e){
//                 if (e.state == null) return;
//                 if ($('.filter__wrapper').css('position') != 'fixed') {
//                     $('.body').removeClass('body--filter');
//                 }
//                 $shop.find('.shop__content').html(e.state.html).find('.popup-item').magnificPopup({
//                     showCloseBtn: false,
//                 });
//                 $shop.find('.shop__content').find('.call__close').on('click', function(e){
//                     $.magnificPopup.close();
//                 });
//                 priceSetManual = true;
//                 keypressSlider.noUiSlider.set([e.state.min, e.state.max]);
//                 priceSetManual = false;
//                 sizeSetManual0 = true;
//                 keypressSlider1.noUiSlider.set([e.state.wmin, e.state.wmax]);
//                 sizeSetManual0 = false;
//                 sizeSetManual1 = true;
//                 keypressSlider2.noUiSlider.set([e.state.hmin, e.state.hmax]);
//                 sizeSetManual1 = false;
//                 $filterCheckbox.filter(':checked').each(function(){
//                     $(this).parent().removeClass('active');
//                     $(this).prop('checked', false);
//                     filterCheckbox[$(this).attr('name')][$(this).attr('value')].el.hide();
//                 });

//                 for (var prop in e.state.filter) {
//                     $.each(e.state.filter[prop], function(){
//                         filterCheckbox[prop][this].input.parent().addClass('active');
//                         filterCheckbox[prop][this].input.prop('checked', true);
//                         filterCheckbox[prop][this].el.show();
//                     });
//                 }

//                 if (needScroll) {
//                     $("html, body").stop().animate({scrollTop:0}, 500, 'swing');
//                     needScroll = false;
//                 }
//             };

//             init();
//         });

// }
// }, 100);




// });

