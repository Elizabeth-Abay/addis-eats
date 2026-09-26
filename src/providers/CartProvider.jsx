import { createContext, useReducer } from "react";


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
    let reducer = (state , action) => {
        let act = action.type.toLowerCase().trim();

        // let [ globalPrice , setGlobalPrice ] = useState(state.totalPrice);
        

        switch (act){
            case 'add-to-cart':{
                let added = false;
                let { id , name , amount , price , customOrder} = action.dish;
                //console.log('adding items to cart');
                //console.log({ id , name , amount , price , customOrder})
                // the price wld need to include the custom ordered items as well
                let totalPriceAdded = Number(amount) * Number(price);


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
                                return { ...item ,amount : Number(item.amount) + amount }
                        }

                        return item;
                    }
                )

                let newTotalPrice = Number(state.total) + totalPriceAdded

                return {
                    ...state,
                    total : Number(newTotalPrice),
                    cart : added ? final : [...cart , { id , name , amount , price , customOrder }],
                    grandTotal : Number(newTotalPrice) 
                    // the difference between total and grandTotal - is grandTotal will include the delivery fee

            }}
            case 'remove-from-cart':{
                let {id , customOrder} = action.dish;

                let safeCustomOrder  = safeStringify(customOrder);

                let { cart} = state;
        
                let priceReduced = 0;

                cart.forEach(
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            // when removed we gotta see the total price of the item removed
                            // 
                            priceReduced = Number(item.amount) * Number(item.price);
                        }
                    }
                )

                let newTotalPrice = Number(state.total) - priceReduced
                return {
                    ...state,
                    total : Number(newTotalPrice),
                    grandTotal : Number(newTotalPrice),
                    cart : cart.filter(
                        // the id wld be different or the custom order wld be different
                        item => !(item.id === id && safeStringify(item.customOrder) === safeCustomOrder)
                    )
            }}

            case 'update-cart':{
                let  { id , customOrder , amount , price} = action.dish;
                //console.log('updating the cart state');
                let newPrice = Number(amount) * Number(price);
                let oldPrice = 0

                let safeCustomOrder  =safeStringify(customOrder);

                // update the total price and also the
                // subtract the total amount and then add the new
                let { cart } = state;
                cart.forEach(
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) == safeCustomOrder){
                            // we will find the difference between the price
                            oldPrice = Number(item.amount) * Number(item.price);
                            //console.log('Old price is updated');
                            //console.log(oldPrice)
                        }

                        // * there are 3 prices 
                        // * the cart item's price
                        // * the total price without the delivery fee
                        // * the grand total that the person will get charged with
                        // * so the plus will change the total and grandTotal
                    }
                    

                )

                let newFinalPrice = Number(state.total) - oldPrice + newPrice
                //console.log('Calculating the new Final price');
                //console.log(newFinalPrice)

                return {
                    ...state,
                    total : Number(newFinalPrice),
                    grandTotal : Number(newFinalPrice),
                    cart : cart.map(
                    // the id wld be different or the custom order wld be different
                    item => {
                        if (item.id === id && safeStringify(item.customOrder) === safeCustomOrder){
                            return {...item , amount : amount , price : price}
                        }

                        return item;
                        
                    }
                )
            }}

            case 'clear-cart':{
                return {
                    ...state,
                    total : 0,
                    grandTotal : 0,
                    cart : []
                }
            }

            // when changing the cart states - grandTotal is same as total
            // delivery and total will change that
            case 'update-grand-total':{
                let amount = Number(action.amount);
                let sign = action.sign.toLowerCase().trim();
                let percentage = action.percentage || false; // if it is percentage then set this true

                switch (sign){
                    case 'minus':
                        return {
                            ...state ,
                            grandTotal : percentage ? Number(state.grandTotal - state.grandTotal * amount) :  Number(state.grandTotal - amount)
                        }
                    case 'plus':
                        return {
                            ...state ,
                            grandTotal : percentage ? Number(state.grandTotal + state.grandTotal * amount) :  Number(state.grandTotal + amount)
                        }
                }

                

            }

            case 'set-delivery-fee':{
                let deliveryFee = action.deliveryFee


                return {
                            ...state ,
                            grandTotal : Number(state.grandTotal + deliveryFee),
                            deliveryFee : Number(deliveryFee)

                }

            }


            // case 'update-custom-order':{
            //     // used for updating the custom order only
            //     let { id , customOrder } = action.dish;

            //     let { cart } = state;

            //     let finalCart = cart.map(
            //         item => {
            //             if (item.id === id){
            //                 // edit the cart item in there
            //                 item.customOrder = customOrder;
            //             }

            //             return item
            //         }
            //     )

            //     return {
            //         ...state,
            //         cart : finalCart
            //     }
            // }

        }
    }
    // but in the cart we will have to know the total price too
    // i wld have to update the totals too
    // this will be the state of the cart
    // when creating context 
    // first create context using null and 
    // then create a component to hold the values since context is only a channel

    let [ state , dispatch] = useReducer(reducer , 
        { 
            total : 0 ,
            cart : [
            // { id , name , amount , price , customOrder }
            ] , 
            grandTotal : 0,
            deliveryFee : 0
        }
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