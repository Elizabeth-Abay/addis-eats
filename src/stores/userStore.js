import { create } from 'zustand';

let userStore = create(
    (set , get)=> {
        return {
            userIn : false,
            phoneNumber : '',
            email : '',
            password : '',
            setPasswordAndPhone : ({passwordNew , phoneNew}) => {
                let { phoneNumber , password } = get()
                
                set(
                    state =>{
                        return {
                        ...state,
                        userIn : true,
                        phoneNumber : phoneNew,
                        password : passwordNew
                    }}
                )
            },
            setPasswordAndemail : ({passwordNew , emailNew}) => {
                let { email , password } = get()
                
                set(
                    state =>{
                        return {
                        ...state,
                        userIn : true,
                        email : emailNew,
                        password : passwordNew
                    }}
                )
            }
        }
    }
)


export default userStore;