import { createContext, useReducer, useState } from "react";


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

        let [ globalPrice , setGlobalPrice ] = useState(state.totalPrice);
        

        switch (act){
            case 'add-to-cart':{
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

                let newTotalPrice = state.totalPrice + totalPriceAdded

                return {
                    ...state,
                    totalPrice : newTotalPrice,
                    cart : added ? final : [...cart , { id , name , amount , price , customOrder }],
                    grandTotal : newTotalPrice

            }}
            case 'remove-from-cart':{
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

                let newTotalPrice = state.totalPrice - priceReduced
                return {
                    ...state,
                    totalPrice : newTotalPrice,
                    grandTotal : newTotalPrice,
                    cart : cart.filter(
                        // the id wld be different or the custom order wld be different
                        item => !(item.id === id && safeStringify(item.customOrder) === safeCustomOrder)
                    )
            }}

            case 'update-cart':{
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

                let newFinalPrice = state.totalPrice - oldPrice + newPrice

                return {
                    ...state,
                    totalPrice : newFinalPrice,
                    grandTotal : newFinalPrice,
                    cart : cart.map(
                    // the id wld be different or the custom order wld be different
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            return {...item , amount : amount , price : price}
                        }
                        
                    }
                )
            }}

            case 'clear-cart':{
                return {
                    ...state,
                    totalPrice : 0,
                    grandTotal : 0,
                    cart : []
                }
            }

            // when changing the cart states - grandTotal is same as total
            // delivery and total will change that
            case 'update-grand-total':{
                let amount = Number(action.amount);
                let sign = action.sign
                let percentage = action.percentage || false; // if it is percentage then set this true

                switch (sign){
                    case 'minus':
                        return {
                            ...state ,
                            grandTotal : percentage ? state.grandTotal - state.grandTotal * amount :  state.grandTotal - amount
                        }
                    case 'plus':
                        return {
                            ...state ,
                            grandTotal : percentage ? state.grandTotal + state.grandTotal * amount :  state.grandTotal + amount
                        }
                }

                

            }

        }
    }
    // but in the cart we will have to know the total price too
    // i wld have to update the totals too
    // this will be the state of the cart
    // when creating context 
    // first create context using null and 
    // then create a component to hold the values since context is only a channel

    let [ state , dispatch] = useReducer(reducer , 
        { total : 0 , cart : [
            // { id , name , amount , price , customOrder }
        ]}
    )




    return (
        // this provider will
        // pass the value - to automatically notify the components to rerender when cart state changes
        <CartContext.Provider value={ { state , dispatch} }>
            {/* to consume the values useContext(context) */}
            {/* for the whole childern */}
            {children}
        </CartContext.Provider>
    )
}