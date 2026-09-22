import { HiOutlineFire, HiOutlineUser } from "react-icons/hi2";
import { LuUtensilsCrossed } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import CartButton from "./CartButton";

export default function Footer() {
  return (
    <div className="footer-nav">
      <NavLink 
        to="/" 
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        end
      >
        <HiOutlineFire className="nav-icon" />
        <span>Specials</span>
      </NavLink>

      <NavLink 
        to="/menu" 
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        <LuUtensilsCrossed className="nav-icon" />
        <span>Menu</span>
      </NavLink>

      <NavLink 
        to="/cart" 
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        <CartButton className="nav-icon" />
        <span>Cart</span>
      </NavLink>

      <NavLink 
        to="/my-account" 
        className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
      >
        <HiOutlineUser className="nav-icon" />
        <span>Account</span>
      </NavLink>
    </div>
  );
}