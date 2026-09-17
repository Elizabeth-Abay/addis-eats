import { useState } from "react";
import { HiOutlineFire, HiOutlineUser } from "react-icons/hi2";
import { LuUtensilsCrossed } from "react-icons/lu";
import CartButton from "./CartButton";

export default function Footer(){
    const [activeTab, setActiveTab] = useState('specials');

    return (
        <div className="footer-nav">
            <button 
                className={`nav-link ${activeTab === 'specials' ? 'active' : ''}`}
                onClick={() => setActiveTab('specials')}
            >
                <HiOutlineFire className="nav-icon"></HiOutlineFire>
                <span>Specials</span>
            </button>
            
            <button 
                className={`nav-link ${activeTab === 'menu' ? 'active' : ''}`}
                onClick={() => setActiveTab('menu')}
            >
                <LuUtensilsCrossed className="nav-icon"></LuUtensilsCrossed>
                <span>Menu</span>
            </button>

            <button 
                className={`nav-link ${activeTab === 'cart' ? 'active' : ''}`}
                onClick={() => setActiveTab('cart')}
            >
                <CartButton className="nav-icon"></CartButton>
                <span>Cart</span>
            </button>

            <button
                className={`nav-link ${activeTab === 'account' ? 'active' : ''}`}
                onClick={() => setActiveTab('account')}
            >
                <HiOutlineUser className="nav-icon"></HiOutlineUser>
                <span>Account</span>
            </button>

        </div>
    )
}
