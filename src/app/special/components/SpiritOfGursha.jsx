import { CartContext } from "@/providers/CartProvider";
import { useContext } from "react";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi2";
import { PRICE_OF_INJERA } from "../../../constants/variables";


export default function SpiritOfGursha(){
    let { addToCart} = useContext(CartContext)
    return (
        <div className="spirit-of-gursha">
            <div style={{
                backgroundColor: '#fde68a',
                padding: '12px',
                borderRadius: '12px',
                display: 'inline-flex',
                color: '#78350f'
                }}>
                <FaHandHoldingHeart size={28} />
                <h1>The Spirit of Gursha</h1>
            </div>

            <p>
                In Ethiopian culture, dining is an act of love.
                When you feed someone with your own hand--*a gursha*-- you cement bonds
                of friendship , family and shared respect.
            </p>


            {/* when the heart gets clicked then in the cart add injera to the order */}
            <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px', 
                backgroundColor: '#fdf2f0', 
                padding: '12px 16px', 
                borderRadius: '8px',
                color: '#701a06' 
                }}>
                <HiOutlineHeart size={20} onClick={
                    () => addToCart({ id : 'extra-teff-wraps' , name : 'injera for gursha' , amount : 1, price : PRICE_OF_INJERA , customOrder : ''})
                } />
                <span>Ask our team for extra teff wraps for shared Gursha</span>
            </div>



        </div>
    )
}