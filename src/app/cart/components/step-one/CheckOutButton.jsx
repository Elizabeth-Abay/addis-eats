import { CartContext } from "@/providers/CartProvider";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export default function CheckoutButton() {
  let navigate = useNavigate();

  const { state } = useContext(CartContext);

  console.log('state loaded for checkout');
  console.log(state)
  const price = state.total;

  const formattedPrice = Number(price).toLocaleString('en-US');
  console.log(`price is ${price} , formatted price is ${formattedPrice} `);

  return (
    <button className="checkout-btn" onClick={
        () =>navigate('/checkout-page')
    } type="button">
      {/* Left section: Cloche Icon + Text */}
      <div className="checkout-btn-left">
        <svg
          className="cloche-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Food Cover / Cloche Icon */}
          <path d="M12 4v2" />
          <path d="M4 18h16a1 1 0 0 0 1-1 8 8 0 0 0-18 0 1 1 0 0 0 1 1z" />
          <path d="M2 20h20" />
        </svg>
        <span className="checkout-text">Proceed to Checkout</span>
      </div>

      {/* Right section: Price + Arrow */}
      <div className="checkout-btn-right">
        <span className="checkout-price">ETB {formattedPrice}</span>
        <svg
          className="arrow-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="M12 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}