import { createContext, useReducer } from "react";

export const OrderContext = createContext('null');

export default function OrderProvider({children}){
    let reducer = (state , action) =>{
        let act = action.type.toLowerCase().trim();

        switch (act){
            case 'set-receipient-info':{
                let { fullName, phone} = action.item 
                return {
                    ...state,
                    recipientContact : {
                        // name , phone number
                        name : fullName,
                        phone
                    }
                    
                }
            }
            case 'set-delivery-destination':{
                let {  subCity ,houseNo , landmark  } = action.item;
                return {
                    ...state ,
                    deliveryLocation : { 
                        // subCity , houseNo , landMark
                        subCity ,houseNo , landmark
                    } ,
                }

            }
            case 'set-payment-method':{
                // chosenType - name  , information - sthg in the input
                let { name , value } = action.item;

                return {
                    ...state , 
                    paymentMethod : {
                        chosenType : name,
                        information : value
                    }
                }

            }
        }
    }

    let [state , dispatch] = useReducer( reducer , {
        // location , receipients name will be here
        deliveryLocation : { 
            // subCity , houseNo , landMark
        } ,
        recipientContact : {
            // name , phone
        },
        paymentMethod : {
            // chosenType  , information
        }
    })

    
    

    return (
        <OrderContext.Provider value={{state , dispatch}}>
            {children}
        </OrderContext.Provider>
    )
}