import { CartContext } from "@/providers/CartProvider";
import { useContext } from "react";

export default function SelectedItemsContainer(){
    // we will need the total selected items and total price
    // and when the viewBasket gets clicked then go to cart

    let { cart } = useContext(CartContext);
    // we can have a total calculator and also have the number = cart.length
}