import "./import/modules";

window.addEventListener('load', function(){
    newFunc();
});

function newFunc() {


    (function toggleCounter() {
        const counter = document.querySelectorAll('.item-card__counter');

        for (let i = 0; i < counter.length; i++) {
            initToggleCounters(counter[i]);
        }

        function initToggleCounters(item){
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
        };

    })();

    (function toggleModalCounter() {
        const counter = document.querySelectorAll('.counter');

        for (let i = 0; i < counter.length; i++) {
            initToggleCounters(counter[i]);
        }

        function initToggleCounters(item){
            let btnMinus = item.querySelector('.counter__btn--minus');
            let btnPlus = item.querySelector('.counter__btn--plus');
            let field = item.querySelector('.counter__input');
            
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
        };

    })();

    (function toggleSubtabs(){
        const link = document.querySelectorAll('a[data-subtabs-link]');
        const block = document.querySelectorAll('div[data-subtabs-content]');
        const select = document.querySelectorAll('.subtabs__mob-nav');

        if (link.length > 0 && link.length === block.length) {
            for (let i = 0; i < link.length; i++) {
                link[i].addEventListener('click', function(e){
                    e.preventDefault();
                    let activeItem = this.getAttribute('data-subtabs-link');
                    toggle(activeItem);
                });
            }

            for (let i = 0; i < select.length; i++) {
                select[i].addEventListener('change', function(e){
                    let activeItem = this.options[this.selectedIndex].value;
                    toggle(activeItem);
                });
            }
        }

        function toggle(index) {

            for (let i = 0; i < link.length; i++) {
                link[i].classList.remove('subtabs__link--active');
            }

            link[index].classList.add('subtabs__link--active');

            for (let i = 0; i < block.length; i++) {
                if (index == block[i].getAttribute('data-subtabs-content')) {
                    block[i].classList.add('subtabs__content--active');
                } else {
                    block[i].classList.remove('subtabs__content--active');
                }
            }
        }
    })();
}

