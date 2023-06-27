const quantityButtons = Array.from(document.getElementsByClassName('product__quantity-control'));
const productAddButtons = Array.from(document.getElementsByClassName('product__add'));
const cartProducts = document.querySelector('.cart__products');

quantityButtons.forEach(element => {
  element.addEventListener('click', () => {
    const p = element.closest('.product__quantity-controls');
    const count = p.querySelector('.product__quantity-value');

    if (element.classList.contains('product__quantity-control_inc')) {
      count.textContent++;
    } else if (element.classList.contains('product__quantity-control_dec') && count.textContent > 1) {
      count.textContent--;
    }
  })
})

productAddButtons.forEach(element => {
  element.addEventListener('click', () => {
    const p = element.closest('.product');
    const count = p.querySelector('.product__quantity-value');
    const srcImage = p.querySelector('.product__image').src;
    const id = p.getAttribute('data-id');

    const productsId = Array.from(cartProducts.children).find(i => i.getAttribute('data-id') === id);

    if (!productsId) {
      cartProducts.insertAdjacentHTML(
        'beforeEnd',
        `<div class="cart__product" data-id="${id}"><img class="cart__product-image" src=${srcImage}><div class="cart__product-count">${count.textContent}</div></div>`);
    } else {
      const cartProductCount = productsId.querySelector('.cart__product-count'); 
      cartProductCount.textContent = +cartProductCount.textContent + +count.textContent;
    }
  })
})
