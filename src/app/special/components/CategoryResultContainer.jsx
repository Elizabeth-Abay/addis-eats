import { useEffect, useReducer, useState } from "react";
import { FaRegCircleStar } from "react-icons/fa6";
import CategoryFilter from "./CategoryFilter";
import SpecialContainerBox from "./SpecialContainerBox";

// the state would be the result of using useEffect
let [ specials , setSpecials ] = useState([])


// now i have the whole specials loaded once
useEffect(
    async () =>{
        try{
            let res = await fetch('https://addis-eats-backend.onrender.com/menu/specials')

            if (!res.ok) throw Error('Problem while fetching')
            
            let result = await res.json();

            setSpecials(result.data)

        } catch (err){
            console.log(`Error while calling useEffect in  CategoryResultContainer ${err.message}`)
        }
    } , []
)


const [displayedSpecials , setDisplayedSpecials] = useState(specials);



const filterCategory = (state ,  action) => {
    // the state here will be the specials box
    // action.type = will be the type passed when u first create the item
    switch (action.type.toLowerCase()){
        case 'traditional stews & wat':
            setDisplayedSpecials(state.filter(
                (item) => item.category.toLowerCase().trim() === 'traditional stews & wat'
            ))
        case 'tibs & grills':
            setDisplayedSpecials(state.filter(
                (item) => item.category.toLowerCase().trim() === 'tibs & grills'
            ))
        case 'raw & cured delicacies / kitfo':
            setDisplayedSpecials(state.filter(
                (item) => item.category.toLowerCase().trim() === 'raw & cured delicacies / kitfo'
            ))
        case 'fasting & vegan / tsom':
            setDisplayedSpecials(state.filter(
                (item) => item.category.toLowerCase().trim() === 'fasting & vegan / tsom'
            ))
            
        case 'beverages & tej':
            setDisplayedSpecials(state.filter(
                (item) => item.category.toLowerCase().trim() === 'beverages & tej'
            ))
        default:
            setDisplayedSpecials(state)
    }

}


export default function CategoryResultContainer(){
    const [ state , dispatch ] = useReducer( filterCategory , specials);

    return (
        <div>
                <h1>Curated Categories</h1>
                <h2>8 Specials Live</h2>

                {/* what can I do with the displayed specials */}
                <div className="selection-buttons">
                    <CategoryFilter type={'Traditional Stews & Wat'} dispatch={dispatch}></CategoryFilter>
                    <CategoryFilter type={'Tibs & Grills'} dispatch={dispatch}></CategoryFilter>
                    <CategoryFilter type={'Raw & Cured Delicacies / Kitfo'} dispatch={dispatch}></CategoryFilter>
                    <CategoryFilter type={'Fasting & Vegan / Tsom'} dispatch={dispatch}></CategoryFilter>
                    <CategoryFilter type={'Beverages & Tej'} dispatch={dispatch}></CategoryFilter>
                </div>

                <div className="todays-specials" style={{ color: "#8B5A2B", display: "inline-flex" }}>
                    <FaRegCircleStar size={24} />
                    <h1>Today's Kitchen Highlight</h1>
                    <h6>Simmered Fresh</h6>

                    {/* for every item in displayed Special create a special container */}
                    {/* whenever the category gets clicked then it will update the displayed things which intern wld update the view */}
                    {
                        displayedSpecials.forEach(
                            item => <SpecialContainerBox container={item}></SpecialContainerBox>
                        )
                    }
                </div>



            </div>
    )
}