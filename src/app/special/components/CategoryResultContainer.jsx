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
        <div 
            className="category-container"
            style={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100vh - 100px)", /* Fills majority of screen height */
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: "24px",
                boxSizing: "border-box",
            }}
        >
            
            <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "12px" }}>
            <h1
                style={{
                margin: 0,
                fontSize: "28px",
                fontFamily: "'Playfair Display', serif",
                color: "#ffffff",
                }}
            >
                Curated Categories
            </h1>
            <span
                style={{
                fontSize: "13px",
                fontWeight: "600",
                color: "#f59e0b",
                }}
            >
                {state.filtered.length} Specials Live
            </span>
        </div>

                {/* what can I do with the displayed specials */}
                <div className="selection-buttons" style={{
            display: "flex",
            gap: "10px",
            overflowX: "auto",
            padding: "16px 0 8px 0",
            scrollbarWidth: "none", /* Firefox hide scrollbar */
          }}>
                    <CategoryFilter key ='All' type='All' onClick={ () => dispatch({type : 'get_all'})}></CategoryFilter>
                    <CategoryFilter key ='Wat' type='Traditional Stews & Wat' onClick ={ () => dispatch({type: 'Traditional Stews & Wat'})}></CategoryFilter>
                    <CategoryFilter key ='Tibs' type='Tibs & Grills' onClick ={ () => dispatch({type: 'Tibs & Grills'})}  ></CategoryFilter>
                    <CategoryFilter key ='Raw' type='Raw & Cured Delicacies / Kitfo' onClick ={ () => dispatch({type: 'Raw & Cured Delicacies / Kitfo'})} ></CategoryFilter>
                    <CategoryFilter key ='Tsom' type='Fasting & Vegan / Tsom' onClick ={ () => dispatch({type: 'Fasting & Vegan / Tsom'})}></CategoryFilter>
                    <CategoryFilter key ='Beverage' type='Beverages & Tej' onClick ={ () => dispatch({type: 'Beverages & Tej'})} ></CategoryFilter>
                </div>

                <div className="specials-scroll-area" 
                style={{
                    flex: 1, /* Takes up remaining height in flex container */
                    overflowY: "auto", /* Enables vertical scrolling */
                    paddingRight: "8px", /* Space for custom scrollbar */
                    }}
                >
                    <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "20px",
                        color: "#f59e0b",
                    }}
                    >
                    <FaRegStar size={22} />
                    <h2
                        style={{
                        margin: 0,
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#ffffff",
                        }}
                    >
                        Today's Kitchen Highlights
                    </h2>

                    <h6>Simmered Fresh</h6>

                    </div>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                            gap: "20px",
                            paddingBottom: "24px",
                        }}
                    >
                        {state.filtered.length > 0 ? (
                            state.filtered.map((item) => (
                            <SpecialContainerBox key={item.id} container={item} />
                            ))
                        ) : (
                            <p style={{ color: "rgba(255,255,255,0.6)", gridColumn: "1 / -1" }}>
                            No items available for this category.
                            </p>
                        )}
                    </div>

                    {/* for every item in displayed Special create a special container */}
                    {/* whenever the category gets clicked then it will update the displayed things which intern wld update. */}
                    
                </div>



            </div>
            </div>
    )
}