export const RESTAURANT_NAME =  'addis-eats'

export const RESERVER_FOR_COFFEE = 120
export const RESERVE_FOR_FEAST = 1280


export const PRICE_OF_INJERA = 40

export const PRICE_OF_INSULATED_CLAY_BOX = 40


export let PROMO_CODE_ARRAY = [ '1111' , '2222' , '3333' , '4444']

export const SUB_CITIES = {
    'Addis Ketema' : 120,
    'Akaki Kaliti' : 170,
    'Arada' : 80 ,
    'Bole' : 0,
    'Gulele' : 60,
    'Kirkos' : 0 ,
    'Kolfe Keranio' : 100,
    'Lemi Kura' : 200,
    'Lideta' : 50,
    'Nifas Silk-Lafto' : 30,
    'Yeka' : 50
}

export const paymentMethods = [
    // an array of payment method objects
    // { name , logo , description , requiredElts })
    // let { text , placeholder } = requiredElts;
    {
        id : 1,
        name : "Telebirr",
        logo : "",
        description : "Instant app push & SMS confirmation",
        requiredElts : {
            text : "Telebirr registered Mobile No.",
            placeholder : "+251 9-00-00-00-00"
        }
    } ,
    {
        id : 2,
        name : "CBE Birr",
        logo : "",
        description : "Commercial Bank of Ethiopia Direct Deposit",
        requiredElts : {
            text : "Account that pays",
            placeholder : "1000 -00-00-00-000"
        }
    } ,
    {
        id : 3,
        name : "Cash/Wireless POS",
        logo : "",
        description : "Rider carriers portable card terminal",
        requiredElts : {
            text : "Enter POS number",
            placeholder : "xyz"
        }
    } ,
    {
        id : 4,
        name : "Amole/Awash Birr",
        logo : "",
        description : "Awash Bank digital payment gateway",
        requiredElts : {
            text : "Account that pays",
            placeholder : "1000 -00-00-00-000"
        }
    } 
]