// the cartbox- holds the cart item
// and + and - buttons to change the value of the cart items
// { id , name , amount , price , customOrder }
// this will be sent from the cart container

import { useState } from "react";


import useCartStore from "@/stores/CartStore";

export default function CartBox({item}){
    let addItem = useCartStore(
        state => state.addItem
    )
    let updateCart = useCartStore(
        state => state.updateCart
    )

    let removeItem = useCartStore(
        state => state.removeItem
    )

    // this is the thing that is obtained from the cart
    let { id , name , amount , price , customOrder } = item
    let { spiceLevel  , injera , sideAccents } = customOrder;

    let min = 1
    
    // initially the amount will be that
    let [ numItem , setNumItem] = useState(amount);
    // then the + and - buttons will do 2 things
    // once is change the displayed + the items state as well

    let increment = ()=>{
        setNumItem( prev => prev + 1)
        // dispatch for the cart to be updated

        // the updated
        updateCart({ id , customOrder , amount : numItem, price})
        // ! one thing to work on is if the user wants to edit the custom Order as well
        // customOrder Holder pass id - state and the customOrder - update the state
    
    }

    let decrement = ()=>{
        setNumItem( prev => prev - 1)
        updateCart({ id , customOrder , amount : numItem, price}) 
    }

    let handleRemove = ()=> {
        // to remove item from cart
        removeItem({ id , customOrder});
    }

    let toyKey = 1;

    return (
        <div className="cart-card">
            <div className="cart-card-body">
            {/* Left: Image with Spicy Badge */}
                <div className="cart-img-wrapper">
                    <img
                    // image is undefined
                    src={"image" || "https://via.placeholder.com/100"}
                    alt={name}
                    className="cart-img"
                    />
                    {spiceLevel && <span className="cart-badge"> SpiceLevel {spiceLevel}</span>}
                </div>

                {/* Right Top: Title, Subtext, Delete Icon */}
                <div className="cart-info">
                    <div className="cart-header">
                    <h3 className="cart-title">{name}</h3>
                    <button
                        type="button"
                        className="cart-remove-btn"
                        onClick={handleRemove}
                        aria-label="Remove item"
                    >
                        ✕
                    </button>
                    </div>

                    <p className="cart-subtext"> Injera - {injera}</p>
                    <p className="cart-subtext"> Side Accents</p>
                    {
                        sideAccents.map(
                            item => <p key={toyKey++} className="cart-subtext">{item}</p>
                        )
                    }
                </div>
            </div>


            {/* Bottom Row: Price & Quantity Pill */}
            {/* this button is used for changing the amount - which will update the grand total */}
            <div className="cart-card-footer">
                <div className="cart-price">ETB {price}</div>

                <div className="cart-qty-pill">
                    <button 
                        type="button"
                        onClick={decrement}
                        disabled={numItem <= min}
                        style={{ width: '36px', height: '36px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '18px' }}
                    >
                        −
                    </button>

                    <input
                        type="number"
                        value={numItem}
                        className="qty-val"
                        // if i set a value then there should be onChange to allow the user to change the value
                        readOnly
                        // but I want the buttons to be the one changing the value
                        min={min}
                        style={{ width: '48px', height: '36px', textAlign: 'center', border: 'none', outline: 'none' }}
                    />

                    <button 
                        type="button"
                        onClick={increment}
                        style={{ width: '36px', height: '36px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '18px' }}
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );

}