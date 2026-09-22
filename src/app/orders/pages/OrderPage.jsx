import { MenuContext } from "@/providers/MenuProvider";
import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomizeOrder from "../components/CustomizeOrder";
import TitleContainer from "../components/TitleContainer";
import "../styles/styles.css";


export default function OrderPage(){
    let navigate = useNavigate()
    // when this page gets created 
    // first we get the item id
    const { itemId } = useParams();
    // once we find the item id get the thing from the menu
    let { state } = useContext(MenuContext);

    let { all } = state;
    let itemFound = all.find(
        menu => menu.id === itemId
    )

    if (!itemFound) return navigate('/item-not-found')

    let item = { id : itemFound.id ,name : itemFound.nameEn , description : itemFound.description  , price : itemFound.priceETB }


    return (
        <div>
            <TitleContainer item={item}/>
            <CustomizeOrder item={item}/>
        </div>
    )

}