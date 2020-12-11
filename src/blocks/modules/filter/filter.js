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

    let count;
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
            initLoadMore();
            initTypes();
            clearForm();
        }

    }

    function initTypes() {
        const radios = filter.querySelectorAll('.filter__toggle-input');

        for (let i = 0; i < radios.length; i++) {
            radios[i].addEventListener('change', function() {
                resetCount();
                resetPages();
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

    function initLoadMore() {
        $('.shop__toolbar').on('click', '.shop__btn', function(e) {

            if (count) {
                count = +count + 15;
            } else {
                count = getCount();
                count = +count + 15;
            }
            getRequest();
        });
    }

    function initPagination() {
        $('.shop__navigation').on('click', '.pagination__btn', function(e) {
            page = this.dataset.page;
            // resetCount();
            getRequest();
        });
    }

    function initToolbar() {
        $('.shop').on('change', '.toolbar__select', function() {
            resetCount();
            getRequest();
        });
    }

    function resetCount() {
        count = getCount();
    }

    function resetPages() {
        page = 1;
    }

    function getValues() {

        let result = {
            page: page || 1,
            count: count, 
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
        if (filter.elements[price].value == 0) {
            return false;
        } else {
            return filter.elements[price].value;
        }
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
            url: '/shop/ajax.php/',
            success: function (response) {
                console.log(this);

                let responceArr = $.parseHTML(response);

                function gelEl (el) {
                    for (let i = 0; i < responceArr.length; i++) {
                        console.log(el);
                        // if (el == responceArr[i]) {
                        //     return el;
                        // } else {
                        //     return false;
                        // }
                    }
                 }

                

                let items = gelEl('div.shop__items');
                console.log(items);
               

                // console.log(responceArr.find('div.shop__items'));
                // console.log(responceArr[3].innerHTML); // window.loadMore = response;
                // console.log(loadMore.text())
                //
                // $.each(responceArr, function (i, el) {
                //     $('.shop__content').append(el.innerHTML)
                // })
                // $('.shop__content').append('test')
                // $('.shop__content').append(responceArr[5].innerHTML)
                // $('.shop__content').append('test')
                // Игорь


                let params = $(response).find('.columns').html();

                if ($(response).find('.columns__column').length < 4) {
                    $('.shop__items .columns').html('<p style="margin-bottom:25px; text-align: center; width: 100%;">По данным параметрам товаров не найдено. Попробуйте изменить запрос</p>');
                } else {
                    $('.shop__items .columns').html(params);
                }

                let loadMore = $(response).html();

                if (loadMore) {
                    $('.shop__toolbar').html(loadMore);
                } else {
                    $('.shop__toolbar').html('');
                }

                let pagination = $(response).find('.pagination').html();

                if (pagination == undefined) {
                    $('.shop__navigation .pagination').html('');
                } else {
                    $('.shop__navigation .pagination').html(pagination);
                }

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
