import magnificPopup from 'magnific-popup';
import noUiSlider from 'nouislider';

document.addEventListener('DOMContentLoaded', function() {
    $(window).scroll(function() {
        if ($(document).width() < 1000) {
            if ($(window).scrollTop()  > 300) {
                $('.filter__mob-title').addClass('filter__mob-title--fixed');
            } else {
                $('.filter__mob-title').removeClass('filter__mob-title--fixed');
            }
        } 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    $(".filter__mob-title").click(function(){
        $('.body').toggleClass('body--filter');
    });

    $(".filter__overlay").click(function(){
        $('.body').toggleClass('body--filter');
    });

});

document.addEventListener('DOMContentLoaded', function() {
    let filter;
    let page;

    function initFilter() {
        let parent = document.querySelector('.filter');

        if (parent) {
            filter = parent;
            initToggler();
            initRangeSlider();
            initCheckboxes();
            initToolbar();
            initPagination();
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

            activeBlock.noUiSlider.on('update', function (values, handle) {
                minValue.value = Math.round(values[0]);
                maxValue.value = Math.round(values[1]);
            });

            activeBlock.noUiSlider.on('change', function (values, handle) {
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

    function initPagination() {
        $('.shop__navigation').on('click', '.pagination__btn', function(e) {
            page = this.dataset.page;
            getRequest();
        });
    }

    function initToolbar() {
        $('.shop').on('change', '.toolbar__select', function() {
            getRequest();
        });
    }

    function getValues() {

        let result = {
            page: page || 1,
            count: getCount(), 
            tag : getTag(),
            type: getTypes(),
            min: getPrice('min'),
            max: getPrice('max'),
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

    function getRequest(page) {


        document.querySelector('.shop__items').classList.add('m-load');
        $.ajax({
            type: 'GET',
            data: getValues(),
            success: function (response) {
                console.log(this);
                let params = $(response).find('.shop__content .columns').html();
                $('.shop__content .columns').html(params);
                document.querySelector('.shop__items').classList.remove('m-load');

            },
            error: function (response) {
                document.querySelector('.shop__items').classList.remove('m-load');
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
//             init = function(){
//                 инициализируем фильтр
//             },
//             initPrice = function(){
//                 инициализируем слайдер цен
//             },
//             initFilter = function(){
//                 инициализируем
//             },
//             clickToogler = function(e){
//                 переключаем коллекции/товары
//             },

//             changeFilter = function(e){
//                 не нужно
//             },
//             resetFilter = function(){
//                 все скидываем, возвращаем к изначальному значению
//             },
//             removeFilter = function(e){
//                очищаем все чекбоксы
//             },
//             clickTag = function(){
//                ??
//             },
//             clickCount = function(){
//                передаем номер страницы
//             },
//             clickPages = function(e){
//                 выбираем номер страницы
//             },
//             exec = function(){
//                 if(!initEnd) return;
//                 clearTimeout(execTimeout);
//                 execTimeout = setTimeout(function(){
//                     var params = {};
//                     var url = [];

//                     1. Формируем пустой params
//                     2. Формируем пустой url
//                     3. Добавляем класс loader $('.shop__items').addClass('m-load');
//                     4. 

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

