// the provider will keep the state and give out the 

import { createContext, useReducer } from "react";

// item itself and things that can add it to the cart
export const MenuContext = createContext('null')

export default function MenuProvider({childern}){
    // we use useState for this
    // all the filters will have to access this reducer
    // for the category buttons
    let menuReducer = ( state , action) => {
        let act = action.type.toLowerCase();
        switch (act){
            case 'add-menu':
                return {all : action.menu , rendered : action.menu}
            case 'traditional stews & wat':
                return { 
                    ...state , rendered : state.all.filter(
                    (item) => item.category.toLowerCase().trim() === 'traditional stews & wat'
                )}
            case 'tibs & grills':
                return { 
                    ...state , rendered : state.all.filter(
                    (item) => item.category.toLowerCase().trim() === 'tibs & grills'
                )}
            case 'raw & cured delicacies / kitfo':
                return { 
                    ...state , rendered : state.all.filter(
                    (item) => item.category.toLowerCase().trim() === 'raw & cured delicacies / kitfo'
                )}
            case 'fasting & vegan / tsom':
                return { 
                    ...state , rendered : state.all.filter(
                    (item) => item.category.toLowerCase().trim() === 'fasting & vegan / tsom'
                )}
                
            case 'beverages & tej':
                return { 
                    ...state , rendered : state.all.filter(
                    (item) => item.category.toLowerCase().trim() === 'beverages & tej'
                )}
            case 'get_all':
                return {
                    ...state , rendered : state.all
                }

            case 'search_name':
                let userInput = action.input;
                const escapedInput = userInput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                // Create a case-insensitive regex that matches anywhere in the string
                const searchRegex = new RegExp(escapedInput, 'i');
                return {
                    ...state , rendered : state.all.filter(
                        item => searchRegex.test(item.nameEn)
                    )
                }
            default:
                return state
        
            
        }

    }

    // this will contain the useReducer
    let [ state , dispatch] = useReducer(menuReducer , {
        all : [],
        rendered : []
    })

    // then pass the menu through the context
    // it will also need to have a filter components
    // there are 2 things - one that captures all
    // and one that captures the one being rendered on the screen
    // search bar - filter by the name
    // the category filter by catregory
    // in the category part there wld be amount there
    return (
        <MenuContext.Provider value = {{ state , dispatch}}>
            {/* all the childern can see this and have a rerender possible */}
            {childern}
        </MenuContext.Provider>
    )

}