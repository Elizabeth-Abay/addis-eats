import { useContext } from "react";
import { CartContext } from "../providers/CartProvider";

// we will write the add , remove and clear cart logics in here
let { cart , setCart } = useContext(CartContext);


// in the cart - final calculation i wld need - 
// name , amount , price , some customized order , image - lets remove it
export function addToCart({ id , name , amount , price , customOrder}){
    setCart(
        previous => {
            let added = false
            previous.forEach(
                item => {
                    // bc if it is a different order then it will be different
                    if (item.id === id && item.customOrder === customOrder){
                        // means add the amount only
                        added = true
                        item.amount += amount
                    }
                }

            )

            if (!added) previous.push(
                { id , name , amount , price , customOrder}
            )

            return previous;
        }
    )

}


// ! in the cart item container we need delete button
export function removeFromCart({ id , customOrder}){
    // used to remove some item from the cart
    setCart(
        previous => {
            return previous.filter(
                // the id wld be different or the custom order wld be different
                item => !(item.id === id && item.customOrder === customOrder)
            )
        }
    )


}

export function updateCart({ id , customOrder , amount}){
    setCart(
        previous => {
            return previous.forEach(
                // the id wld be different or the custom order wld be different
                item => {
                    if (item.id === id && item.customOrder === customOrder){
                        item.amount = amount
                    }
                    
                }
            )
        }
    )

}


export function clearCart(){
    setCart([])

}