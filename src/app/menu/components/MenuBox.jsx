import useCartStore from "@/stores/CartStore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuBox({ dish }) {
    let {id , slug , nameEn , nameAm , category , priceETB , spiceLevel , isFasting , isSpecial , description , ingeredients } = dish;

    let navigate = useNavigate()

    // this function is used to add a cart 
    // we will also need to use the useCartStore instead of the context
    let addItem = useCartStore(state => state.addItem)

    let [ count , setCount ] = useState(1);
    
    // the minimum number of items to be ordered
    let min = 1;


    const increment = () => setCount(prev => prev + 1)
    const decrement = () => setCount(prev => prev - 1)

    let onAddToCart = () => {
        addItem({ id , name : nameEn , amount : count , price : priceETB , customOrder : {}})

    }

    // I wanted to add a seat quantifier in there
    // to have a number and then have buttons to add and reduce

    return (
        <div className="dish-card" onClick={
            () =>{
                navigate(`/item/${id}`)
            }
        }>
            {/* Left: Image Container with Badge */}
            <div className="dish-image-container">
                <span className="dish-badge-category">{category}</span>
            <span className="dish-badge">{slug}</span>
            {isSpecial ? <span className="dish-badge">Chef special</span> : null}
            {isFasting ? <span className="dish-badge">Fasting</span> : null}
            <img 
                src="/images/shiro-bozena.jpg" 
                alt="Clay-pot Shiro Bozena" 
                className="dish-image" 
            />
            </div>

            {/* Right: Content & Actions */}
            <div className="dish-content">
            <div className="dish-header">
                <h3 className="dish-title">{nameEn}</h3>
                <h4 className="dish-title">{nameAm}</h4>
                
                {/* Custom ethnic pattern / indicator bars */}
                <div className="dish-pattern-bars">
                <span>||</span> <span>|||</span> <span>||||</span>
                </div>
                
                <p className="dish-description">
                {description}
                </p>
            </div>

            <div className="dish-footer">
                <div className="dish-info">
                {/* Spice indicator */}
                <div className="spice-level">
                    <span className="flame filled">🔥</span>
                    <span className="flame filled">🔥</span>
                    <span className="flame outline">🔥</span>
                    <span className="spice-label">{spiceLevel}</span>
                </div>

                {/* Price display */}
                <div className="dish-price">
                    <span className="currency">ETB</span>
                    <span className="amount">{priceETB}</span>
                </div>
                </div>

                
                {/* this is used to increase the amount of food ordered */}
                <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '6px', overflow: 'hidden' }}>
                    <button 
                        type="button"
                        onClick={decrement}
                        disabled={count <= min}
                        style={{ width: '36px', height: '36px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '18px' }}
                    >
                        −
                    </button>

                    <input
                        type="number"
                        value={count}
                        // if i set a value then there should be onChange to allow the user to change the value
                        readOnly
                        // but I want the buttons to be the one changing the value
                        min={min}
                        style={{ width: '48px', height: '36px', textAlign: 'center', border: 'none', outline: 'none' }}
                    />

                    <button 
                        type="button"
                        onClick={increment}
                        style={{ width: '36px', height: '36px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '18px' }}
                    >
                        +
                    </button>
                </div>
                {/* Add button */}
                <button 
                className="add-to-cart-btn" 
                onClick={onAddToCart}
                aria-label="Add to order"
                >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="plus-icon"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                </button>
            </div>
            </div>
        </div>
    );
}