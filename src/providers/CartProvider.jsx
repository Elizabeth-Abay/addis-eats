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



// we need to calculate the total as well
// { total : amount , orders : []}
export default function CartProvider({children}){
    let reducer = (action , state) => {
        let act = action.toLowerCase().trim();

        switch (act){
            case 'add-to-cart':
                let added = false;
                let { id , name , amount , price , customOrder} = action.dish;
                // the price wld need to include the custom ordered items as well
                let totalPriceAdded = amonut * price;


                let safeCustomOrder  = safeStringify(customOrder)
                
                // we will update the orders part in the cart
                // search for the object in the cart
                // if addded then update that in place
                let { cart } = state;

                let final = cart.map(
                    (item) => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                                // means add the amount only
                                added = true
                                return { ...item ,amount : item.amount + amount }
                        }
                    }
                )

                return {
                    ...state,
                    totalPrice : totalPrice + totalPriceAdded,
                    cart : added ? final : [...cart , { id , name , amount , price , customOrder }]
            }
            case 'remove-from-cart':
                let {id , customOrder} = action.dish;

                let safeCustomOrder  = safeStringify(customOrder);

                let { cart} = state;
        
                let priceReduced = 0;

                cart.forEach(
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            priceReduced = itemRemoved.amount * itemRemoved * price;
                        }
                    }
                )

                return {
                    ...state,
                    totalPrice : totalPrice - priceReduced,
                    cart : cart.filter(
                        // the id wld be different or the custom order wld be different
                        item => !(item.id === id && safeStringify(item.customOrder) === safeCustomOrder)
                    )
            }

            case 'update-cart':
                let  { id , customOrder , amount , price} = action.dish;
                let newPrice = amount * price;
                let oldPrice = 0

                let safeCustomOrder  =safeStringify(customOrder);

                // update the total price and also the
                // subtract the total amount and then add the new
                let { cart } = state;
                cart.forEach(
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            oldPrice = item.amonut * item.price;
                        }
                    }
                    

                )

                return {
                    ...state,
                    totalPrice : totalPrice - oldPrice + newPrice,
                    cart : cart.map(
                    // the id wld be different or the custom order wld be different
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            return {...item , amount : amount , price : price}
                        }
                        
                    }
                )
            }

            case 'clear-cart':
                return {
                    ...state,
                    totalPrice : 0,
                    cart : []
                }


        }
    }
    // but in the cart we will have to know the total price too
    // i wld have to update the totals too
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