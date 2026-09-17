import { createContext, useState } from "react";


export const CartContext = createContext(null);

// export let addToCart = undefined;
// export let removeFromCart = undefined;
// export let updateCart = undefined;
// export let clearCart = undefined;
// export things via context provider not outside
// all cart methods shld be passed through the value object of CartContext.provider
// ! so the value of providers is to set the state
// create the functions that interact with the state 
// and pass that using the value 

const normalizeCustomOrder = (obj) => {
    return Object.keys(obj)
        .sort()
        .reduce((acc, key) => {
        const val = obj[key];
        // Strip whitespace and lower-case strings; leave numbers/booleans as-is
        acc[key] = typeof val === "string" ? val.trim().toLowerCase() : val;
        return acc;
        }, {});
};


const safeStringify = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;

    // sort the object with its keys sorted and values normalized
    return JSON.stringify(normalizeCustomOrder(obj));
}



export default function CartProvider({children}){
    let [ cart , setCart ] = useState([]);
    // this will be the state of the cart
    // when creating context 
    // first create context using null and 
    // then create a component to hold the values since context is only a channel

    const addToCart = ({ id , name , amount , price , customOrder}) =>{
        let safeCustomOrder  =safeStringify(customOrder)
        // customOrder will be an object
        // spiceLevel : 'sthg' , injeraBase : 'teff and barley' , = ayib : 0 , gomen : 0 , awaze : 0 , egg : 40
        // tej : 350 , timatim_fitfit : 180 , buna : 70
        setCart(
            previous => {
                let added = false
                let newCart = previous.map(
                    item => {
                        // bc if it is a different order then it will be different
                        // since customOrder is an object
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            // means add the amount only
                            added = true
                            return { ...item ,amount : item.amount + amount }
                        }
                        return item
                    }

                )

                return added ? newCart : [ ...previous , { id , name , amount , price , customOrder} ]

            }
        )

    }


// ! in the cart item container we need delete button
    const removeFromCart = ({ id , customOrder}) =>{
        let safeCustomOrder  = safeStringify(customOrder);
        // used to remove some item from the cart
        setCart(
            previous => {
                return previous.filter(
                    // the id wld be different or the custom order wld be different
                    item => !(item.id === id && safeStringify(item.customOrder) === safeCustomOrder)
                )
            }
        )


    }

    const updateCart = ({ id , customOrder , amount}) =>{
        let safeCustomOrder  =safeStringify(customOrder);

        setCart(
            previous => {
                return previous.map(
                    // the id wld be different or the custom order wld be different
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            return {...item , amount : amount}
                        }
                        
                    }
                )
            }
        )

    }


    const clearCart = () => setCart([])




    return (
        // this provider will
        // pass the value - to automatically notify the components to rerender when cart state changes
        <CartContext.Provider value={ { cart , addToCart , removeFromCart , updateCart , clearCart} }>
            {/* to consume the values useContext(context) */}
            {/* for the whole childern */}
            {children}
        </CartContext.Provider>
    )
}