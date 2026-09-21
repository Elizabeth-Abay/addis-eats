import { CartContext } from "@/providers/CartProvider";
import { useContext } from "react";
import CartBox from "./CartBox";

export default function CartItemContainer(){
    let { state } = useContext(CartContext);

    let { cart } = state

    return(
        <div className="scroll-container">
            {cart.map((item) => (
                <CartBox className="scroll-item" key={item.id} item={item}/>
            ))}
        </div>
    )
}