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

console.log('Подключен');

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

    // setFilter();

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
            initInputs();
            setFilter(filter);
            clearForm();

            if (sessionStorage.filterUsed) {
                preRequest();
            }
        }
    }

    function setStatus(state) {
        sessionStorage.setItem('filterUsed', state);
    }

    function initInputs () {
        let inputs = filter.querySelectorAll('.filter__inputs input');

        console.log(inputs);

        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('blur', getRequest);
        }
    }


    function setFilter() {
        let state = JSON.parse(sessionStorage.getItem('filterState'));
        let checkboxes = JSON.parse(sessionStorage.getItem('filterCheckboxes'));

        if (state) {
            setToolbar(state['tag'] || null, state['count'] || null);
            setRadio(state['type']);
        }

        if (checkboxes) {
            setCheckboxes(checkboxes);
        }

        function setToolbar(stateTag, stateCount) {
            let toolbar = document.querySelector('.toolbar');

            let type;
            let counter;

            if (toolbar) {
                type = toolbar.elements['select-tag'];
                counter = toolbar.elements['select-count'];
            }

            if (stateTag && type) {
                type.value = stateTag;
            }

            if (stateCount && counter) {
                counter.value = stateCount;
            }
        }

        function setCheckboxes() {
            console.log(filter);
            for (let item of checkboxes) {
                let input =  document.getElementById(item);
                console.log(input);
                input.checked = true;
                setTag('add', input.id, input.parentNode.querySelector('span').innerHTML.trim());
                // console.log(item);
            }
        }

        function setRadio(stateType) {
            let radio = filter.querySelectorAll('.filter__toggle-input');

            for (let i = 0; i < radio.length; i++) {
                if (radio[i].value == stateType) {
                    radio[i].checked = true;
                } else {
                    radio[i].checked = false;
                }
            }
        }
    }

    function initTypes() {
        const radios = filter.querySelectorAll('.filter__toggle-input');

        for (let i = 0; i < radios.length; i++) {
            radios[i].addEventListener('change', function() {
                resetCount();
                resetPages();
                // setStatus(true);
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

                if (item.classList.contains('filter__block--fixed') == false && window.innerWidth > 1100) {
                    let height = 0;

                    let items = item.querySelectorAll('ul li');

                    for (let i = 0; i < 5; i++) {
                        if (items[i]) {
                            height = height + items[i].clientHeight;
                        }
                    }

                    if (item.classList.contains("filter__block--open")) {
                        item.querySelector('ul').setAttribute("style", "max-height:" + height + "px");
                    } else {
                        item.querySelector('ul').setAttribute("style", "");
                    }
                }
            });
        }
    }

    function initRangeSlider() {
        let state = JSON.parse(sessionStorage.getItem('filterState'));

        function initRangeSlider1() {
            let rangeSlider = filter.querySelector('#range-price');

            if (rangeSlider) {

                let activeBlock = rangeSlider.querySelector('.filter__range');
                let minValue = rangeSlider.querySelector('#input-with-keypress-0') || 0;
                let maxValue = rangeSlider.querySelector('#input-with-keypress-1') || 10000;

                window.priceSlider = activeBlock;

                let startMin = (state && state.min) ? +state.min : +minValue.value;
                let startMax = (state && state.max) ? +state.max : +maxValue.value;

                noUiSlider.create(activeBlock, {
                    start: [startMin, startMax],
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

                minValue.addEventListener('change', function () {
                    activeBlock.noUiSlider.set([this.value, null]);
                });

                maxValue.addEventListener('change', function () {
                    activeBlock.noUiSlider.set([null, this.value]);
                });

                activeBlock.noUiSlider.on('change', function (values, handle) {
                    setStatus(true);
                    getRequest();
                });

                let inputStart = rangeSlider.querySelector('#input-with-keypress-0');
                let inputEnd = rangeSlider.querySelector('#input-with-keypress-1');

                inputStart.addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        window.priceSlider.noUiSlider.set([inputStart.value, null]);
                        getRequest();
                    }
                });

                inputEnd.addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        window.priceSlider.noUiSlider.set([null, inputEnd.value]);
                        getRequest();
                    }
                });

            }
        }

        function initRangeSlider2() {
            let rangeSlider = filter.querySelector('#range-weight');

            if (rangeSlider) {

                let activeBlock = rangeSlider.querySelector('.filter__range');
                let minValue = rangeSlider.querySelector('#input-with-keypress-2') || 0;
                let maxValue = rangeSlider.querySelector('#input-with-keypress-3') || 10000;

                window.weightSlider = activeBlock;

                let startWmin = (state && state.wmin) ? +state.wmin : +minValue.value;
                let startWmax = (state && state.wmax) ? +state.wmax : +maxValue.value;

                noUiSlider.create(activeBlock, {
                    start: [startWmin, startWmax],
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
                    setStatus(true);
                    getRequest();
                });

                let inputStart = rangeSlider.querySelector('#input-with-keypress-2');
                let inputEnd = rangeSlider.querySelector('#input-with-keypress-3');

                inputStart.addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        window.weightSlider.noUiSlider.set([inputStart.value, null]);
                        getRequest();
                    }
                });

                inputEnd.addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        window.weightSlider.noUiSlider.set([null, inputEnd.value]);
                        getRequest();
                    }
                });

            }
        }

        function initRangeSlider3() {
            let rangeSlider = filter.querySelector('#range-height');

            if (rangeSlider) {

                let activeBlock = rangeSlider.querySelector('.filter__range');
                let minValue = rangeSlider.querySelector('#input-with-keypress-4') || 0;
                let maxValue = rangeSlider.querySelector('#input-with-keypress-5') || 10000;

                window.heightSlider = activeBlock;

                let startHmin = (state && state.hmin) ? +state.hmin : +minValue.value;
                let startHmax = (state && state.hmax) ? +state.hmax : +maxValue.value;

                noUiSlider.create(activeBlock, {
                    start: [startHmin, startHmax],
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
                    setStatus(true);
                    getRequest();
                });

                let inputStart = rangeSlider.querySelector('#input-with-keypress-4');
                let inputEnd = rangeSlider.querySelector('#input-with-keypress-5');

                inputStart.addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        window.heightSlider.noUiSlider.set([inputStart.value, null]);
                        getRequest();
                    }
                });

                inputEnd.addEventListener("keydown", function(event) {
                    if (event.key === "Enter") {
                        event.preventDefault();
                        window.heightSlider.noUiSlider.set([null, inputEnd.value]);
                        getRequest();
                    }
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
                if (field.checked) {
                    setStatus(true);
                }

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
        let block = item.querySelector('.filter-input__input');

        if (block.id && state) {
            setTag('add', item.querySelector('input').id, item.querySelector('span').innerHTML.trim());
            setStoreCheckbox('add', item.querySelector('input').id);
        } else {
            setTag('remove', item.querySelector('input').id, item.querySelector('span').innerHTML.trim());
            setStoreCheckbox('remove', item.querySelector('input').id);
        }
    }

    function setTag(event, id, title) {
        let parent = document.querySelector('.filter__selected');

        if (event == 'add') {
            let message = `
            <span class="selected-item__text">
            ${title}
            </span>
            <svg class="selected-item__icon">
            <use xlink:href="/local/templates/diez__template_kerasfera/img/sprites/sprite.svg#icon-svg-close"></use>
            </svg>`;

            let node = document.createElement('label');
            node.classList.add('selected-item');
            node.setAttribute('for', id);
            node.innerHTML = message;

            parent.appendChild(node);

            sessionStorage.setItem('tags', parent.innerHTML);
        } else if (event == 'remove') {
            let block = parent.querySelector('label[for="' + id + '"]');

            if (block) {
                block.remove();
            }

            sessionStorage.setItem('tags', parent.innerHTML);
        } else {
            return false;
        }
    }

    function setStoreCheckbox(event, id) {
        let store = JSON.parse(sessionStorage.getItem('filterCheckboxes'));

        if (store && event == 'add') {
            store = store.concat(id);
            sessionStorage.setItem('filterCheckboxes', JSON.stringify(store));
        } else if (store && event == 'remove') {
            let index = store.indexOf(id);
            if (index > -1) {
                store.splice(index, 1);
            }
            sessionStorage.setItem('filterCheckboxes', JSON.stringify(store));
        } else {
            store = [id];
            sessionStorage.setItem('filterCheckboxes', JSON.stringify(store));
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

            let inputs = parent.querySelectorAll('.filter-input__input:checked');

            for (let n = 0; n < inputs.length; n++) {

                if ((result[name] != undefined)) {
                    result[name] = result[name] + "," + inputs[n].value;
                } else if (result[name] == undefined) {
                    result[name] = inputs[n].value;
                } else {
                    return false;
                }
            }

            if (urlString != undefined) {
                return urlString;
            }
        }

        sessionStorage.setItem('filterState', JSON.stringify(result));

        return result;     
    }

    function getPage() {
        return 1;
    }

    function getRange(price) {
        let startValue = filter.elements[price];
        let result;

        if (startValue.dataset.startValue != startValue.value) {
            result = filter.elements[price].value;

            if (Number.isInteger(+result)) {
                return result;
            }

        } else {
            return '';
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
            url: '/shop/ajax.php',
            success: function (response) {
                console.log('Кастом-запрос:');
                console.log(this.url);
                // console.log(getValues());
                // console.log(response);

                let responceArr = $.parseHTML(response);

                function gelEl (el) {
                    for (let i = 0; i < responceArr.length; i++) {
                        if (el == responceArr[i].className) {
                            return responceArr[i];
                        }
                    }
                }

                let params = gelEl('shop__items').querySelector('.columns');

                if ($(response).find('.columns__column').length < 4) {
                    $('.shop__items .columns').html('<p style="margin-bottom:25px; text-align: center; width: 100%;">По вашему запросу ничего не найдено</p>');
                } else {
                    $('.shop__items .columns').html(params);
                }

                let loadMore = gelEl('shop__toolbar');

                if (loadMore == undefined) {
                    $('.shop__toolbar').html('');
                } else {
                    let btn = loadMore.querySelector('.shop__btn');
                    $('.shop__toolbar').html(btn);
                }

                let pagination = gelEl('shop__navigation');

                if (pagination == undefined) {
                    $('.shop__navigation').html('');
                } else {
                    let block = pagination.querySelector('.pagination')
                    $('.shop__navigation').html(block);
                }

                toggleCounter();

                document.querySelector('.shop__items').classList.remove('m-load');

            },
            error: function (response) {
                document.querySelector('.shop__items').classList.remove('m-load');
            }
        });
    }

    function preRequest() {
        let retrievedObject = sessionStorage.getItem('filterState');
        let parent = filter.querySelector('.filter__selected');

        document.querySelector('.shop__items').classList.add('m-load');

        $.ajax({
            type: 'GET',
            data: JSON.parse(retrievedObject),
            url: '/shop/ajax.php',
            success: function (response) {
                console.log('Первичный-запрос:');
                console.log(this.url);
                // console.log(getValues());
                // console.log(response);

                let responceArr = $.parseHTML(response);

                function gelEl (el) {
                    for (let i = 0; i < responceArr.length; i++) {
                        if (el == responceArr[i].className) {
                            return responceArr[i];
                        }
                    }
                }

                let params = gelEl('shop__items').querySelector('.columns');

                if ($(response).find('.columns__column').length < 4) {
                    $('.shop__items .columns').html('<p style="margin-bottom:25px; text-align: center; width: 100%;">По вашему запросу ничего не найдено</p>');
                } else {
                    $('.shop__items .columns').html(params);
                }

                let loadMore = gelEl('shop__toolbar');

                if (loadMore == undefined) {
                    $('.shop__toolbar').html('');
                } else {
                    let btn = loadMore.querySelector('.shop__btn');
                    $('.shop__toolbar').html(btn);
                }

                let pagination = gelEl('shop__navigation');

                if (pagination == undefined) {
                    $('.shop__navigation').html('');
                } else {
                    let block = pagination.querySelector('.pagination')
                    $('.shop__navigation').html(block);
                }

                toggleCounter();

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
                let type = filter.elements['filter-type'].value;
                filter.reset();
                filter.elements['filter-type'].value = type;
                tags.innerHTML = '';
                window.priceSlider.noUiSlider.set([0, +filter.querySelector('#input-with-keypress-1').dataset.startValue]);
                window.weightSlider.noUiSlider.set([0, +filter.querySelector('#input-with-keypress-3').dataset.startValue]);
                window.heightSlider.noUiSlider.set([0, +filter.querySelector('#input-with-keypress-5').dataset.startValue]);
                // console.log(window.priceSlider.noUiSlider.set([0, this.parentNode.querySelectorAll('input')[1].dataset.startValue]))
                delete sessionStorage.filterState;
                delete sessionStorage.tags;
                delete sessionStorage.filterCheckboxes;
                setStatus(false);
                getRequest();
            });
        }
    }

    function toggleCounter() {

        let counter = document.querySelectorAll('.item-card__counter');

        for (let i = 0; i < counter.length; i++) {
            initToggleCounters(counter[i]);
        }

        function initToggleCounters(item) {
            let btnMinus = item.querySelector('.item-card__btn--minus');
            let btnPlus = item.querySelector('.item-card__btn--plus');
            let field = item.querySelector('.item-card__input');

            if (btnMinus && btnPlus && field) {
                btnMinus.addEventListener('click', remove);
                btnPlus.addEventListener('click', add);
            }

            function remove() {
                if (+field.value > 1) {
                    field.value--;
                }
            }

            function add() {
                field.value++;
            }
        }
    };

    toggleCounter();

    initFilter();

});
