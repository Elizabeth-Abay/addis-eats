// make it stateful and also add the add to basket button here
// props drilling is ok here

import { CartContext } from "@/providers/CartProvider";
import { useContext, useState } from "react";
import AddToCart from "./AddToCart";
import AmountSetter from "./AmountSetter";
import InjeraBaseSelector from "./InjeraSelector";
import SideAccentsSelector from "./SideAccentSelector";
import SpiceLevelSelector from "./SpiceSelector";
// we use the chosen side Accents in the receipt
// but we need to include that in the sideAccents
// in the order - it is used to include the order
// but total price will also be updated


export default function CustomizeOrder({item }){
    let {id , name ,  price} = item;
    let { dispatch } = useContext(CartContext)
     // what do i want 
    // to store the custom order in some object and then when that changes
    // to update the price , the tick parts they will be handled by the elt itself
    let  [customOrder , setCustomOrder ] = useState({
        spiceLevel : '', // mid, traditional , fiery awaze
        injera : '' ,// standard , brown-teff - will also add price to the cart
        sideAccents : [], // will contain the additional items
        // so input will have a name
        // when it gets clicked then it will add its price to the total
    });

    let [ totalPrice , setTotalPrice ] = useState(price)

    let [ amount , setAmount ] = useState(1);

    let onSpiceChange = (chosenLevel)=> {
        setCustomOrder(
            prev => {
                return { ...prev , spiceLevel : chosenLevel}
            }
        ) 
    }

    let onInjeraChange = (chosenType) => {
        setCustomOrder(
            prev => {
                return { ...prev , injera : chosenType }
            }
        ) 
    }
    

    let updateTotalPrice = ({ amount , type})=>{
        let newTotal = (type === 'plus') ? totalPrice + amount : totalPrice - amount

        setTotalPrice(newTotal)
    }

    const updateSideAccents = ({ type, added }) => {
        setCustomOrder((prev) => {
            const currentAccents = prev.sideAccents || [];
            const updatedAccents = added
            ? [...currentAccents, type]
            : currentAccents.filter((id) => id !== type);

            return { ...prev, sideAccents: updatedAccents };
        });
    };


    const onAddToCart = () => {
        dispatch({
            type : 'add-to-cart',
            dish : { id , name , amount  , price : totalPrice , customOrder}
        })


    }

    return (
        <div>
            <SpiceLevelSelector onSpiceChange={onSpiceChange} /> 
            <InjeraBaseSelector onInjeraChange={onInjeraChange} />
            <SideAccentsSelector updateSideAccents={updateSideAccents} updateTotal={updateTotal}  sideAccents={customOrder.sideAccents} />
            <AmountSetter amount={amount} setAmount={setAmount}/>
            <AddToCart onClick={onAddToCart} total={totalPrice}/>
            
        </div>
    )
}

