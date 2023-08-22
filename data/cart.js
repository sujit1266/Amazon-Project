export const cart2=[{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity: 2
},
{
  productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
  quantity: 1
}
];



export function addtoCart(productId) {
    let matchingItem;
  
    cart2.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      }
    });
  
    const quantitySelector = Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
  
  
    document.querySelector(`.product-spacer-${productId}`).innerHTML = '<div><img class="js-checkmark-image" src="images/icons/checkmark.png"></img><p class="js-add">Added</p></div>';
  
    setTimeout(() => {
      document.querySelector(`.product-spacer-${productId}`).innerHTML = '';
    }, 1500);
  
    if (matchingItem) {
      matchingItem.quantity += 1;
      matchingItem.quantity += quantitySelector;
    }
    else {
      cart2.push({
        productId: productId,
        quantity: 1,
        quantity: quantitySelector
      });
    }
  }