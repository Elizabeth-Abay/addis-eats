// it will need to see how many items are in there
// it will need to use the context

import { CartContext } from "@/providers/CartProvider"
import { useContext } from "react"



export default function GurshaPackage(){
    let { state } = useContext(CartContext)
        
    return (
        <div className="gursha-package">
            <h1>Your Gursha Basket</h1>
            <h4>{state.cart.length || 0} Delicacies</h4>
        </div>
    )
}