import { useContext } from "react";
import { RESTAURANT_NAME } from "../../constants/variables";
import { CartContext } from "../../providers/CartProvider";
import CartButton from "../CartButton";


// will need access to the cart State
// the whole app is wrapped with the cart provider so we can use the context
export default function Header() {
    let { cart } = useContext(CartContext);

    return (
        // the header will have 
        <div>
            {/* horizontal div  that has name and cart part*/}
            <h1>{RESTAURANT_NAME}</h1>
            <CartButton count={cart ? cart.length : 0}></CartButton>
            {/* in the header if the user is registered then have the initial name icon */}
            {/* else have anonymous user icon */}
        </div>
    )

}