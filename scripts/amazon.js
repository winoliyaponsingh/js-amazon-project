import {cart} from '../data/cart.js';
//import {cart as myCart} from '../data/cart.js'; can be used to avoid naming conflicts 

import {products} from '../data/products.js';

let productsHTML = '';

products.forEach((product) => {
productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>
            
         

          <div class="product-price">
          ${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id = ${product.id}>
            Add to Cart
          </button>
        </div>`
}
);


/*so here, is the code for adding data in our cart

1)we select add to cart button ny DOM
2)we make add to cart button go through loop using forEach and querySelectorAll

3)we assign the productId using |data-| attribute of HTML, (the kebab case turns into camelCase)

4)before going to if loop, we check whether the productId is in the cart array, if its present, we assign the object item

5)now if matchingItem has the object, its quantity will increase and if matchingItem doesnt have object,it will show falsy value and push the object in the cart

*/ 


document.querySelector('.js-product-grid').innerHTML = productsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
button.addEventListener('click', () =>
{
  const productId = button.dataset.productId;




  let matchingItem;


  cart.forEach((item) => {
    if (productId === item.productId)
    {
      matchingItem = item;
    }
  });


  if(matchingItem)
  {
    matchingItem.quantity += 1;
  }
  else
  {
    cart.push(
      {
        productId: productId,
        quantity:1
      });
  }


  // we updated cart quantity in our project
  let cartQuantity = 0;

  cart.forEach((item)=> {
    cartQuantity += item.quantity;
  })

  document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;

  console.log(cartQuantity);
  console.log(cart);
});

});