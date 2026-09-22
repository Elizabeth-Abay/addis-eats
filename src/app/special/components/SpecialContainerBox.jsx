// I gotta use Context of cart Provider
import { CartContext } from "@/providers/CartProvider"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"


export default function SpecialContainerBox({ container }){
    let { id , slug , nameEn , nameAm , category, priceETB , spiceLevel , isFasting , isSpecial , description ,ingredients , servings } = container

    let navigate = useNavigate()

    let { dispatch } = useContext(CartContext)

    return (
        // ! when this div gets clicked then I want it to push the new page on it
        <div className="food-card" onClick={
            () => {
                navigate(`/item/${id}`)
            }
        }>
            {/* in the quick add we will attach the id and have the onclick here */}
            <button className="category-pill">{category}</button>
            {isFasting ? <button className="category-pill">Tsom</button> : null}
            <button className="category-pill">{slug}</button>
            <h1>{nameEn}</h1>
            <h2>{nameAm}</h2>
            <p>{description}</p>

            <h3>{priceETB} / portion</h3>

            <p>{servings}</p>

            {/* addToCart({ id , name , amount , price , customOrder}) */}
            {/* when it gets clicked pass the given categories to a different page */}
            <button className="quick-add-btn" onClick={ ()=> dispatch({ type : 'add-to-cart' , dish : {id , name : nameEn , amount : 1 ,price : priceETB , customOrder : {} }})}> + Quick Add</button>
            {/* but when the whole div is clicked we gotta push some items on top */}

        </div>
    )
}