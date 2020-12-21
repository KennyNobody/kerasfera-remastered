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
        function initRangeSlider1() {
            let rangeSlider = filter.querySelector('#range-price');

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

        function initRangeSlider2() {
            let rangeSlider = filter.querySelector('#range-weight');

            if (rangeSlider) {

                let activeBlock = rangeSlider.querySelector('.filter__range');
                let minValue = rangeSlider.querySelector('#input-with-keypress-2') || 0;
                let maxValue = rangeSlider.querySelector('#input-with-keypress-3') || 10000;

                noUiSlider.create(activeBlock, {
                    start: [+minValue.value, +maxValue.value],
                    connect: true,
                    step: 1,

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

        function initRangeSlider3() {
            let rangeSlider = filter.querySelector('#range-height');

            if (rangeSlider) {

                let activeBlock = rangeSlider.querySelector('.filter__range');
                let minValue = rangeSlider.querySelector('#input-with-keypress-4') || 0;
                let maxValue = rangeSlider.querySelector('#input-with-keypress-5') || 10000;

                noUiSlider.create(activeBlock, {
                    start: [+minValue.value, +maxValue.value],
                    connect: true,
                    step: 1,

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

        initRangeSlider1();
        initRangeSlider2();
        initRangeSlider3();
    }

    function initCheckboxes() {
        let inputs = filter.querySelectorAll('.filter-input');

        for (let i = 0; i < inputs.length; i++) {
            addListeners(inputs[i]);
        }

        function addListeners(item) {
            let field = item.querySelector('.filter-input__input');

            field.addEventListener('change', function() {
                toggleButton(item, field.checked);
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

    function toggleButton(item, state) {

        let parent = filter.querySelector('.filter__selected');
        let block = item.querySelector('.filter-input__input');

        let title = item.querySelector('span').innerHTML.trim();
        let forValue = block.id;

        if (title && forValue && state) {
            createDOMNode();
        } else {
            removeDOMNode();
        }

        function createDOMNode() {
            let message = `
            <span class="selected-item__text">
            ${title}
            </span>
            <svg class="selected-item__icon">
            <use xlink:href="/local/templates/new/img/sprites/sprite.svg#icon-svg-close"></use>
            </svg>`;

            let node = document.createElement('label');
            node.classList.add('selected-item');
            node.setAttribute('for', forValue);
            node.innerHTML = message;

            parent.appendChild(node);
        }

        function removeDOMNode() {
            let block = parent.querySelector( 'label[for="' + forValue + '"]' );

            if (block) {
                block.remove();
            }
        }
        
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
            min: getRange('min'),
            max: getRange('max'),
            hmin: getRange('hmin'),
            hmax: getRange('hmax'),
            wmin: getRange('wmin'),
            wmax: getRange('wmax'),
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

    function getRange(price) {
        if (filter.elements[price].value == 0) {
            return false;
        } else {
            return filter.elements[price].value;
        }
    }

    function getWeight() {

    }

    function getHeight() {

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
                        if (el == responceArr[i].className) {
                            // console.log(responceArr[i]);
                            return responceArr[i];
                        }
                        // console.log(responceArr[i].className);
                    }
                }

                // gelEl('shop__items');


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


                let params = gelEl('shop__items').querySelector('.columns');

                // $(response).find('.columns').html();

                if ($(response).find('.columns__column').length < 4) {
                    $('.shop__items .columns').html('<p style="margin-bottom:25px; text-align: center; width: 100%;">По данным параметрам товаров не найдено. Попробуйте изменить запрос</p>');
                } else {
                    $('.shop__items .columns').html(params);
                }

                console.log(params);

                let loadMore = gelEl('shop__toolbar');

                if (loadMore == undefined) {
                    $('.shop__toolbar').html('');
                } else {
                    let btn = loadMore.querySelector('.shop__btn');
                    $('.shop__toolbar').html(btn);
                }

                console.log(loadMore);

                let pagination = gelEl('shop__navigation');

                if (pagination == undefined) {
                    $('.shop__navigation').html('');
                } else {
                    let block = pagination.querySelector('.pagination')
                    $('.shop__navigation').html(block);
                }

                console.log(pagination);

                document.querySelector('.shop__items').classList.remove('m-load');

            },
            error: function (response) {
                document.querySelector('.shop__items').classList.remove('m-load');
            }
        });
    }

    function clearForm() {
        let button = filter.querySelector('.filter__reset');
        let tags = filter.querySelector('.filter__selected');

        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                filter.reset();
                tags.innerHTML = '';
                getRequest();
            });
        }
    }

    initFilter();

});
