const addToCartButtons = document.querySelectorAll('.addToCart');
const shoppinCart = document.querySelector('.carrito')

addToCartButtons.forEach((button)=>{
    button.addEventListener('click', agregarItem);
});


function agregarItem(event){
    const boton = event.target;
    const item = boton.closest('.item')
    const item_title = item.querySelector(".title").textContent;
    const item_price = item.querySelector(".precio").textContent;
    


    addItemToShoppingCart(item_title,item_price);
}

function addItemToShoppingCart(item_title,item_price){

    const shoppingCartRow = document.createElement('div')
    const shoppinCartContent = `
    <div class="row m-4 shoppingCartItem">

                <div class="col-4 col-lg-6">
                    <div class="shopping-cart-item d-flex align-items-center h-100 ">
                        <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate">
                            ${item_title}
                        </h6>

                    </div>

                </div>

                <div class="col-4 col-lg-2 ">
                    <div class="sopping-cart-price w-100 d-flex align-items-center h-100 ">
                        <p class="item-price  mb-0 shoppingCartItemPrice">
                        ${item_price}
                        </p>
                    </div>
                </div>

                <div class="col-4">
                    <div class="shopping-cart-quantity d-flex  justify-content-between align-items-center">
                        <input  type="number" class="shopping-cart-quantity-input w-auto text-center shoppingCartItemQuantity" value="1">
                        <button class="btn ms-4 btn-danger buttonDelete" type="button" >
                            x
                        </button>
                    </div>

                </div>

            </div>
    `;

    shoppingCartRow.innerHTML = shoppinCartContent;
    shoppinCart.append(shoppingCartRow)
    updateShoppingCartTotal()
    shoppingCartRow.querySelector('.buttonDelete').addEventListener('click',removeShoppingCartItem);
    $("#informacion").hide()
    $("#tabla").show()
    

}

const updateShoppingCartTotal = ()=>{

    let total = 0;
    const shoppingCartTotal = document.querySelector('.shoppingCartTotal')
    const shoppingCartItems = document.querySelectorAll('.shoppingCartItem')

    shoppingCartItems.forEach(shoppingCartItems =>{
        const shoppingCartItemPriceElement = shoppingCartItems.querySelector('.shoppingCartItemPrice');
        const shoppingCartItemPrice= Number(shoppingCartItemPriceElement.textContent.replace('$',''))
        const shoppingCartItemQuantityElement=shoppingCartItems.querySelector('.shoppingCartItemQuantity')
        const shoppingCartItemQuantityValue = Number(shoppingCartItemQuantityElement.value)
        total = total + shoppingCartItemPrice * shoppingCartItemQuantityValue

        
        
    })

    shoppingCartTotal.innerHTML =`Total: $${total}`
    
    
}

const removeShoppingCartItem = (event)=>{

    const buttonClicked = event.target
    buttonClicked.closest('.shoppingCartItem').remove()
    updateShoppingCartTotal()


}


//validacion de formulario


