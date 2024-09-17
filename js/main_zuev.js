// const cardProductsList = document.querySelector('.main-sell-slide-list');
// const cardProducts = cardProductsList.children;
// console.log(cardProducts);
//
// const tableHaractreristics = document.querySelectorAll('.body-row-tablet-yacheika');
//
// cardProducts[0].addEventListener('mouseover', (e) => {
//     console.log('Ghbfdth');
//     tableHaractreristics[0].style.backgroundColor = 'green';
// })
// body-row-tablet-yacheika

let cards = document.querySelectorAll('.main-sell-cart');
// let card = cards.children;

let yacheikas = document.querySelectorAll('.body-row-tablet-yacheika');

for (let cardItem of cards) {
    cardItem.addEventListener('mouseover', () => {
        console.log('jfkl');
        for (let yacheika of yacheikas) {
            yacheika.classList.toggle('body-row-tablet-yacheika-sel');
        }
    })
}