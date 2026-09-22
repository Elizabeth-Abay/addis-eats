import { MenuContext } from "@/providers/MenuProvider";
import { useContext, useEffect } from "react";
import MenuBox from "./MenuBox";

export default function MenuContainer(){
    let { state , dispatch } = useContext(MenuContext);
    console.log(useContext(MenuContext));

    // run the menu loading only once when the container is rendered
    useEffect(
        () => {
            console.log('running the fetch')

            let getMenu = async() => {
                try{    
                    let result = await fetch('https://addis-eats-backend.onrender.com/menu/');

                    if (!result || !result.ok) return alert('Problem fetching the menu');

                    // else then you can dispatch the event to create the menu list
                    // when it first loads it will set the menu
                    let res = await result.json();

                    console.log('running get menu')
                    console.log('result is');
                    console.log(res.data);


                    console.log(typeof dispatch)

                    dispatch({type : 'add-menu' , menu : res.data })

                }catch(err){
                    console.error("Error fetching menu:", err);

                }
                
            }

            getMenu()
        } ,
        []

    
    )

    // then loop through the rendered items and then create the menuBox
    // console.log('menu , sta')
    // console.log(state)
    return (
        <div className="menu-container">
            {
                state?.rendered?.map(
                    item => <MenuBox key={item.id} dish={item}></MenuBox>
                )
            }
        </div>
    )
}