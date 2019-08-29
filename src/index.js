// checkbox

const checkboxes = document.querySelectorAll('.filter-check_checkbox');

checkboxes.forEach(function (elem) {
    elem.addEventListener('change', function () {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
            console.log('class added');
        } else {
            this.nextElementSibling.classList.remove('checked');
            console.log('class removed');
        }
    });
});

// end checkbox

// cart

const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const closeModalCart = modalCart.querySelector('.cart-close');

btnCart.addEventListener('click', function () {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

closeModalCart.addEventListener('click', function () {
    modalCart.style.display = '';
    document.body.style.overflow = '';
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' || event.keyCode === 27){
        modalCart.style.display = '';
        document.body.style.overflow = '';
    }
});

// end cart

// add position to cart

const cards = document.querySelectorAll('.goods .card');
const cartWrapper = document.querySelector('.cart-wrapper');
const emptyCart = document.getElementById('cart-empty');
const countCardsInCart = document.querySelector('.counter');

cards.forEach(function (card) {
   const btn = card.querySelector('button');
   btn.addEventListener('click', function () {
       const cardClone = card.cloneNode(true);
       cartWrapper.appendChild(cardClone);
       emptyCart.remove();
       showData();
   });
});

function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countCardsInCart.textContent = cardsCart.length;
}
// end add position to cart