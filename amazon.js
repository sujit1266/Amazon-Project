let cart=JSON.parse(localStorage.getItem('cart'));

const Element=document.querySelectorAll('.add-to-cart-button');
Element.forEach((button, index)=>{
    button.addEventListener('click', ()=>{
        cart+=1;
        document.querySelector('.cart-quantity').innerHTML=`
        ${cart}
        `;
        localStorage.setItem('cart',JSON.stringify(cart));
    })
})
document.querySelector('.cart-quantity').innerHTML=`
        ${cart}
        `;

// Element.addEventListener('click', ()=>{
//     cart+=1;
//     // console.log(cart);
//     console.log(document.querySelectorAll('.cart-quantity'));
// })

