import { FaCartShopping } from "react-icons/fa6";


// the cart will have a count passed to it
export default function CartButton({ count = 0 }) {
    return (
        <button
        style={{
            position: "relative",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
        }}
        >
        <FaCartShopping size={24} />

        {count > 0 && (
            <span
            style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                backgroundColor: "#ef4444", // Red badge color
                color: "#ffffff",
                fontSize: "11px",
                fontWeight: "bold",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: 1,
        }}
            >
            {count > 99 ? "99+" : count}
            </span>
        )}
        </button>
    );
}