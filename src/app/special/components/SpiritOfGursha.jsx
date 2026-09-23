import useCartStore from "@/stores/CartStore";
import { FaHandHoldingHeart } from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi2";
import { PRICE_OF_INJERA } from "../../../constants/variables";

export default function SpiritOfGursha() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddInjera = () => {
    addItem({
      id: "extra-teff-wraps",
      name: "Injera for Gursha",
      amount: 1,
      price: PRICE_OF_INJERA,
      customOrder: "",
    });
  };

  return (
    <div
      className="gursha-card"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "26px",
        borderRadius: "24px",
        background:
          "linear-gradient(135deg, rgba(38, 20, 14, 0.95) 0%, rgba(18, 9, 5, 0.98) 100%)",
        border: "1px solid rgba(245, 158, 11, 0.25)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(12px)",
        color: "#ffffff",
        maxWidth: "480px",
      }}
    >
      {/* Subtle Warm Red Glow Overlay */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "160px",
          height: "160px",
          background:
            "radial-gradient(circle, rgba(239, 68, 68, 0.18) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Header Row: Icon + Title */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginBottom: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "48px",
            height: "48px",
            borderRadius: "16px",
            backgroundColor: "rgba(245, 158, 11, 0.15)",
            border: "1px solid rgba(245, 158, 11, 0.3)",
            boxShadow: "0 0 12px rgba(245, 158, 11, 0.2)",
            color: "#f59e0b",
            flexShrink: 0,
          }}
        >
          <FaHandHoldingHeart size={24} />
        </div>

        <div>
          <span
            style={{
              display: "block",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "1px",
              color: "#fde047",
              textTransform: "uppercase",
              marginBottom: "2px",
            }}
          >
            Cultural Tradition
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: "22px",
              fontWeight: "700",
              fontFamily: "'Playfair Display', 'Georgia', serif",
              color: "#ffffff",
              lineHeight: "1.2",
            }}
          >
            The Spirit of Gursha
          </h1>
        </div>
      </div>

      {/* Story Description */}
      <p
        style={{
          margin: "0 0 22px 0",
          fontSize: "14px",
          lineHeight: "1.65",
          color: "rgba(255, 255, 255, 0.8)",
          fontWeight: "400",
        }}
      >
        In Ethiopian culture, dining is an act of love. When you feed someone
        with your own hand —{" "}
        <em style={{ color: "#fef08a", fontStyle: "italic" }}>a gursha</em> — you
        cement bonds of friendship, family, and shared respect.
      </p>

      {/* Interactive Action Banner */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
          padding: "14px 16px",
          borderRadius: "16px",
          backgroundColor: "rgba(239, 68, 68, 0.1)",
          border: "1px solid rgba(239, 68, 68, 0.25)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <HiOutlineHeart size={22} color="#f87171" style={{ flexShrink: 0 }} />
          <span
            style={{
              fontSize: "12px",
              lineHeight: "1.4",
              color: "#fecaca",
              fontWeight: "500",
            }}
          >
            Ask our team for extra teff wraps for shared Gursha
          </span>
        </div>

        <button
          onClick={handleAddInjera}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            backgroundColor: "#ef4444",
            color: "#ffffff",
            border: "none",
            borderRadius: "12px",
            padding: "8px 12px",
            fontSize: "12px",
            fontWeight: "700",
            cursor: "pointer",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
          }}
        >
          + Injera (ETB {PRICE_OF_INJERA})
        </button>
      </div>
    </div>
  );
}