import { MenuContext } from "@/providers/MenuProvider";
import { useContext, useState } from "react";
import CategoryFilter from "./CategoryFilter";

export default function CategoryFilterContainer(){
    let {  dispatch } = useContext(MenuContext);
    let [activeCategory , setActiveCategory ] = useState('All');

    const categories = [
        { name: 'All', action: 'get_all' },
        { name: 'Traditional Stews & Wat', action: 'Traditional Stews & Wat' },
        { name: 'Tibs & Grills', action: 'Tibs & Grills' },
        { name: 'Raw & Cured Delicacies / Kitfo', action: 'Raw & Cured Delicacies / Kitfo' },
        { name: 'Fasting & Vegan / Tsom', action: 'Fasting & Vegan / Tsom' },
        { name: 'Beverages & Tej', action: 'Beverages & Tej' },
    ];

    const handleCategoryClick = (categoryName, actionType) => {
        setActiveCategory(categoryName);
        dispatch({ type: actionType });
    };
    
    return (
        <div className="category-filter-contaienr">
            {/* on click add active classtype to them  */}
            {
                categories.map(
                    cat => (
                        <CategoryFilter 
                            key={cat.name}
                            type={cat.name}
                            isActive={activeCategory === cat.name}
                            onClick={() => handleCategoryClick(cat.name, cat.action) }
                        ></CategoryFilter>
                    )
                )
            }
        </div>
    )
}