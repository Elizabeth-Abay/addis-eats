import { Children, useContext, useState } from "react";

export const CartContext = useContext(null);


export default function CartProvider(){
    let [ cart , setCart ] = useState([]);
    // this will be the state of the cart
    // when creating context 
    // first create context using null and 
    // then create a component to hold the values since context is only a channel

    return (
        // this provider will
        <CartContext.Provider value={ {cart , setCart} }>
            {/* to consume the values useContext(context) */}
            {/* for the whole childern */}
            {Children} 
        </CartContext.Provider>
    )
}