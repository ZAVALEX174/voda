// let cards = document.querySelectorAll('.main-sell-cart');
//
// let yacheikas = document.querySelectorAll('.body-row-tablet-yacheika');
// let yacheikasTitle = document.querySelectorAll('.header-row-table-yacheika');
// console.log(yacheikasTitle);
//
// for (let cardItem of cards) {
//     cardItem.addEventListener('click', () => {
//         console.log('jfkl');
//         for (let yacheika of yacheikas) {
//             let cl = yacheika.classList.contains('body-row-tablet-yacheika-sel');
//             if (!cl) {
//                 yacheika.classList.add('body-row-tablet-yacheika-sel');
//             } else {
//                 yacheika.classList.remove('body-row-tablet-yacheika-sel');
//             }
//
//         }
//
//         for (let yacheikaTitle of yacheikasTitle) {
//             let cl = yacheikaTitle.classList.contains('body-row-tablet-yacheika-sel');
//             if (!cl) {
//                 yacheikaTitle.classList.add('body-row-tablet-yacheika-sel');
//             } else {
//                 yacheikaTitle.classList.remove('body-row-tablet-yacheika-sel');
//             }
//             // yacheikaTitle.classList.toggle('body-row-tablet-yacheika-sel');
//         }
//     })
// }

let cart1 = document.querySelector('[data-js-cart-item1]');
let cart2 = document.querySelector('[data-js-cart-item2]');
let cart3 = document.querySelector('[data-js-cart-item3]');
let cart4 = document.querySelector('[data-js-cart-item4]');

let tables1 = document.querySelectorAll('[data-js-table-yach1]');
let tables2 = document.querySelectorAll('[data-js-table-yach2]');
let tables3 = document.querySelectorAll('[data-js-table-yach3]');
let tables4 = document.querySelectorAll('[data-js-table-yach4]');

cart1.addEventListener("mouseover", function (event) {
    event.preventDefault();
    tables1.forEach((table1) => {
        // table1.style.backgroundColor = "rgba(10, 165, 240, 0.1)";
        table1.classList.add('body-row-tablet-yacheika-sel')
    });
})
cart1.addEventListener("mouseout", function (event) {
    event.preventDefault();
    tables1.forEach((table1) => {
        table1.classList.remove('body-row-tablet-yacheika-sel')
    });
})

cart2.addEventListener("mouseover", function (event) {
    event.preventDefault();
    tables2.forEach((table2) => {
        table2.classList.add('body-row-tablet-yacheika-sel')
    });
})
cart2.addEventListener("mouseout", function (event) {
    event.preventDefault();
    tables2.forEach((table2) => {
        table2.classList.remove('body-row-tablet-yacheika-sel')
    });
})

cart3.addEventListener("mouseover", function (event) {
    event.preventDefault();
    tables3.forEach((table3) => {
        table3.classList.add('body-row-tablet-yacheika-sel')
    });
})
cart3.addEventListener("mouseout", function (event) {
    event.preventDefault();
    tables3.forEach((table3) => {
        table3.classList.remove('body-row-tablet-yacheika-sel')
    });
})

cart4.addEventListener("mouseover", function (event) {
    event.preventDefault();
    tables4.forEach((table4) => {
        table4.classList.add('body-row-tablet-yacheika-sel')
    });
})
cart4.addEventListener("mouseout", function (event) {
    event.preventDefault();
    tables4.forEach((table4) => {
        table4.classList.remove('body-row-tablet-yacheika-sel')
    });
})
