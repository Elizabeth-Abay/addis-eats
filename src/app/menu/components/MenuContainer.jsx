import { MenuContext } from "@/providers/MenuProvider";
import { useContext, useEffect } from "react";
import MenuBox from "./MenuBox";

export default function MenuContainer(){
    let { state , dispatch } = useContext(MenuContext);

    // run the menu loading only once when the container is rendered
    useEffect(
        () => {
            let getMenu = async() => {
                let result = await fetch('https://addis-eats-backend.onrender.com/menu/');

                if (!result || !result.ok) return alert('Problem fetching the menu');

                // else then you can dispatch the event to create the menu list
                dispatch({type : 'add-menu' , menu : result.data })

            }

            getMenu()
        } ,
        []
    )

    // then loop through the rendered items and then create the menuBox
    return (
        <div className="menu-container">
            {
                state.rendered.map(
                    item => <MenuBox dish={item}></MenuBox>
                )
            }
        </div>
    )
}