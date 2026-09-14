import { HiOutlineFire, HiOutlineUser } from "react-icons/hi2";
import { LuUtensilsCrossed } from "react-icons/lu";
import CartButton from "../CartButton";

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-components">
                <HiOutlineFire></HiOutlineFire>
                <span>Specials</span>
            </div>
            
            <div className="footer-components">
                <LuUtensilsCrossed></LuUtensilsCrossed>
                <span>Menu</span>
            </div>

            <div className="footer-components">
                <CartButton></CartButton>
                <span>Cart</span>
            </div>

            <div className="footer-components">
                <HiOutlineUser></HiOutlineUser>
                <span>Account</span>
            </div>

        </div>
    )
}