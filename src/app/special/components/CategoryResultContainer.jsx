import { useEffect, useReducer } from "react";
import { FaRegStar } from "react-icons/fa6";
import CategoryFilter from "../../../components/CategoryFilter";
import SpecialContainerBox from "./SpecialContainerBox";

// ! sthg i learnt hooks are always supposed to be called inside components




// react state updates are async and scoped to the current render's snapshot
// it schedules a state update for the next render -  not override the current one immediately
// state values are snapshot values - initially - they are  []
// so it will need to rerender that is when the value gets updated for the scope of useEffect it will remain to be []

export default function CategoryResultContainer(){
    // useReducer is used for having one state instead of 2 separate things
    // the state would be the result of using useEffect
    


        // state and action 
    // state here is the thing that u passed
    // in ts - define the values u want in there { count : number , error : string }
    // and action will be used to create things - {type : 'increment' | 'decrement'}
    const filterCategory = (state ,  action) => {
        console.log('state in filter categoryy')
        console.log(state)
    // the state here will be the specials box
    // action.type = will be the type passed when u first create the item
    // it will return the state with its properties updated
    const { type} = action;
    switch (type.toLowerCase()){
        case 'set_all':
            // this will set the all
            return {
                all : action.data,
                filtered : action.data
            }

        case 'traditional stews & wat':
            return { 
                ...state , filtered : state.all.filter(
                (item) => item.category.toLowerCase().trim() === 'traditional stews & wat'
            )}
        case 'tibs & grills':
            return { 
                ...state , filtered : state.all.filter(
                (item) => item.category.toLowerCase().trim() === 'tibs & grills'
            )}
        case 'raw & cured delicacies / kitfo':
            return { 
                ...state , filtered : state.all.filter(
                (item) => item.category.toLowerCase().trim() === 'raw & cured delicacies / kitfo'
            )}
        case 'fasting & vegan / tsom':
            return { 
                ...state , filtered : state.all.filter(
                (item) => item.category.toLowerCase().trim() === 'fasting & vegan / tsom'
            )}
            
        case 'beverages & tej':
            return { 
                ...state , filtered : state.all.filter(
                (item) => item.category.toLowerCase().trim() === 'beverages & tej'
            )}
        case 'get_all':
            return {
                ...state , filtered : state.all
            }
        default:
            return state
    }


    }

    // state object and a dispatch function used to update the state
    // args are - reducer function  - action and state will be taken in and based on that action it will do somethings to the state which will override the state
    // so no in place changing
    // initial value - required
    const [ state , dispatch ] = useReducer( filterCategory , {
        all : [],
        filtered : []
        // so the action will change the state of filtered
        // filtered will be the one that is visible
    });
    // so adding sthg to the cart means the total price will increase


    // now i have the whole specials loaded once
    useEffect(
        // the callback passed to useEffect must return either a cleanup function or undefined
        () =>{
            const getSpecials = async () => {
                try{
                    let res = await fetch('https://addis-eats-backend.onrender.com/menu/specials')

                    if (!res.ok) throw Error('Problem while fetching')
                    
                    let result = await res.json();

                    // this will fetch the things first and then emit the data with set_all
                    // which the dispatch will listen to and set the state correctly
                    dispatch({type : 'set_all' , data : result.data})


                } catch (err){
                    console.log(`Error while calling useEffect in  CategoryResultContainer ${err.message}`)
                }
            }

            getSpecials()

        } , []
    )

    





    // useReducer meaning
    // just like useState it is used to manage and update states
    // redux - state object with lots of properties
    // reducer takes that state and action u do - it will do an action on that state
    // reducer takes state and action and do things to the state will do things to the state and returns a brand new copy of the state
    // immutability - means we are not changing the state directly but working with the copy which will override



    return (
        <div className="category-container">
                <h1>Curated Categories</h1>
                <h2>8 Specials Live</h2>

                {/* what can I do with the displayed specials */}
                <div className="selection-buttons">
                    <CategoryFilter type='All' onClick={ () => dispatch({type : 'get_all'})}></CategoryFilter>
                    <CategoryFilter type='Traditional Stews & Wat' onClick ={ () => dispatch({type: 'Traditional Stews & Wat'})}></CategoryFilter>
                    <CategoryFilter type='Tibs & Grills' onClick ={ () => dispatch({type: 'Tibs & Grills'})}  ></CategoryFilter>
                    <CategoryFilter type='Raw & Cured Delicacies / Kitfo' onClick ={ () => dispatch({type: 'Raw & Cured Delicacies / Kitfo'})} ></CategoryFilter>
                    <CategoryFilter type='Fasting & Vegan / Tsom' onClick ={ () => dispatch({type: 'Fasting & Vegan / Tsom'})}></CategoryFilter>
                    <CategoryFilter type='Beverages & Tej' onClick ={ () => dispatch({type: 'Beverages & Tej'})} ></CategoryFilter>
                </div>

                <div className="todays-specials" style={{ color: "#8B5A2B", display: "inline-flex" }}>
                    <FaRegStar size={24} />
                    <h1>Today's Kitchen Highlight</h1>
                    <h6>Simmered Fresh</h6>

                    {/* for every item in displayed Special create a special container */}
                    {/* whenever the category gets clicked then it will update the displayed things which intern wld update. */}
                    {
                        // for each returns undefined use map
                        state.filtered.map(
                            item => <SpecialContainerBox key={item.id}container={item}></SpecialContainerBox>
                        )
                    }
                </div>



            </div>
    )
}