import useCartStore from "@/stores/CartStore";
import { useState } from "react";
import { FaFire, FaMinus, FaPlus } from "react-icons/fa6";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function MenuBox({ dish }) {
  const {
    id,
    slug,
    nameEn,
    nameAm,
    category,
    priceETB,
    spiceLevel = 1,
    isFasting,
    isSpecial,
    description,
    image,
  } = dish;

  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [count, setCount] = useState(1);
  const [added, setAdded] = useState(false);
  const min = 1;

  // Prevent navigation when adjusting quantity
  const increment = (e) => {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };

  const decrement = (e) => {
    e.stopPropagation();
    setCount((prev) => (prev > min ? prev - 1 : min));
  };

  // Card click handler for details page
  const handleCardClick = () => {
    navigate(`/item/${id}`);
  };

  // Prevent navigation when adding to cart
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addItem({
      id,
      name: nameEn,
      amount: count,
      price: priceETB,
      customOrder: {},
    });
    
    // Quick micro-interaction feedback
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  // Dynamic spice level flame indicators
  const renderSpiceLevel = () => {
    const level = typeof spiceLevel === "number" ? spiceLevel : 1;
    return Array.from({ length: 3 }).map((_, i) => (
      <FaFire
        key={i}
        size={12}
        color={i < level ? "#ef4444" : "rgba(255, 255, 255, 0.2)"}
      />
    ));
  };

  return (
    <div
      className="dish-card"
      onClick={handleCardClick}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "20px",
        background:
          "linear-gradient(145deg, rgba(38, 20, 14, 0.9) 0%, rgba(20, 10, 6, 0.95) 100%)",
        border: "1px solid rgba(245, 158, 11, 0.2)",
        boxShadow: "0 12px 30px rgba(0, 0, 0, 0.35)",
        backdropFilter: "blur(10px)",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
        color: "#ffffff",
        position: "relative",
        margin : "10px"
      }}
    >
      {/* Top Image Banner */}
      <div style={{ position: "relative", height: "170px", overflow: "hidden" }}>
        {/* <img
          src={image || "/images/shiro-bozena.jpg"}
          alt={nameEn}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.4s ease",
          }}
        /> */}
        {/* Dark Vignette Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(20, 10, 6, 0.95) 0%, rgba(0, 0, 0, 0.1) 60%)",
          }}
        />

        {/* Status Badges */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            display: "flex",
            flexWrap: "wrap",
            gap: "6px",
            zIndex: 2,
          }}
        >
          {isSpecial && (
            <span
              style={{
                fontSize: "10px",
                fontWeight: "700",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: "9999px",
                backgroundColor: "#f59e0b",
                color: "#180c07",
                boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
              }}
            >
              Chef's Special
            </span>
          )}
          {isFasting && (
            <span
              style={{
                fontSize: "10px",
                fontWeight: "700",
                textTransform: "uppercase",
                padding: "4px 10px",
                borderRadius: "9999px",
                backgroundColor: "rgba(16, 185, 129, 0.85)",
                color: "#ffffff",
                backdropFilter: "blur(4px)",
              }}
            >
              Tsom / Vegan
            </span>
          )}
        </div>

        {/* Category Tag */}
        {category && (
          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              fontSize: "10px",
              fontWeight: "600",
              padding: "4px 10px",
              borderRadius: "9999px",
              backgroundColor: "rgba(0,0,0,0.5)",
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(4px)",
            }}
          >
            {category}
          </span>
        )}
      </div>

      {/* Main Details Body */}
      <div
        style={{
          padding: "18px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <div>
          {/* Header Row: Title & Amharic */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "8px",
              marginBottom: "8px",
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: "700",
                fontFamily: "'Playfair Display', serif",
                color: "#ffffff",
                lineHeight: "1.3",
              }}
            >
              {nameEn}
            </h3>
            {nameAm && (
              <span
                style={{
                  fontSize: "14px",
                  color: "#f59e0b",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                }}
              >
                {nameAm}
              </span>
            )}
          </div>

          {/* Description */}
          <p
            style={{
              margin: "0 0 16px 0",
              fontSize: "13px",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.5",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {description}
          </p>
        </div>

        {/* Footer Actions */}
        <div>
          {/* Spice & Price Info */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "14px",
            }}
          >
            {/* Dynamic Flames */}
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {renderSpiceLevel()}
            </div>

            {/* Price */}
            <div>
              <span
                style={{
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.5)",
                  marginRight: "4px",
                  fontWeight: "500",
                }}
              >
                ETB
              </span>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "800",
                  color: "#f59e0b",
                }}
              >
                {priceETB}
              </span>
            </div>
          </div>

          {/* Quantity Selector + Add Button Row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {/* Custom Glassmorphism Quantity Control */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                padding: "2px",
              }}
            >
              <button
                type="button"
                onClick={decrement}
                disabled={count <= min}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor:
                    count <= min ? "transparent" : "rgba(255,255,255,0.1)",
                  color: count <= min ? "rgba(255,255,255,0.2)" : "#ffffff",
                  cursor: count <= min ? "not-allowed" : "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaMinus size={10} />
              </button>

              <span
                style={{
                  width: "28px",
                  textAlign: "center",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#ffffff",
                }}
              >
                {count}
              </span>

              <button
                type="button"
                onClick={increment}
                style={{
                  width: "32px",
                  height: "32px",
                  border: "none",
                  borderRadius: "8px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaPlus size={10} />
              </button>
            </div>

            {/* Quick Add Button */}
            <button
              type="button"
              onClick={handleAddToCart}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "10px 14px",
                backgroundColor: added ? "#10b981" : "#f59e0b",
                color: "#180c07",
                border: "none",
                borderRadius: "12px",
                fontSize: "13px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: added
                  ? "0 4px 14px rgba(16, 185, 129, 0.4)"
                  : "0 4px 14px rgba(245, 158, 11, 0.3)",
                transition: "all 0.2s ease",
              }}
            >
              <HiOutlineShoppingCart size={16} />
              <span>{added ? "Added!" : "Quick Add"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}