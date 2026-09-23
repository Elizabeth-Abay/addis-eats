// this button calls add to cart
// will be stateful because it
export default function AddToCart({ total , onClick }){
    return (
        <button className="add-to-basket-btn" onClick={onClick}>
            <div className="btn-left">
                <svg
                className="bag-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="btn-label">Add to Basket</span>
            </div>

            <span className="btn-price">
                ETB {typeof total === "number" ? total.toLocaleString() : total}
            </span>
        </button>
    );


}