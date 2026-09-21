import { CartContext } from "@/providers/CartProvider";
import { useContext } from "react";
import OrderBox from "./OrderBox";

export default function OrderItems(){
    let { state } = useContext(CartContext);
            
    let { cart , grandTotal , deliveryFee , totalPrice } = state
    return (
        <div>
            <div className="scroll-container">
                {cart.map((item) => (
                    <OrderBox key={item.id} item={item}/>
                ))}
            </div>
            
            <div className="payment-holder">
                <h3>Items Subtotal</h3>
                <h2>{totalPrice}</h2>
            </div>
        </div>
    )
}