// (function toggleCounter() {
//     let counter = document.querySelectorAll('.item-card__counter');

//     for (let i = 0; i < counter.length; i++) {
//         initToggleCounters(counter[i]);
//     }

//     function initToggleCounters(item) {
//         let btnMinus = item.querySelector('.item-card__btn--minus');
//         let btnPlus = item.querySelector('.item-card__btn--plus');
//         let field = item.querySelector('.item-card__input');

//         if (btnMinus && btnPlus && field) {
//             btnMinus.addEventListener('click', remove);
//             btnPlus.addEventListener('click', add);
//         }

//         function remove() {
//             if (+field.value > 1) {
//                 field.value--;
//             }
//         }

//         function add() {
//             field.value++;
//         }
//     }
// })();