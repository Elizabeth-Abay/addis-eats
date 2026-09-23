import { useRef } from "react";
import { LuCoffee } from "react-icons/lu";
import { RESERVER_FOR_COFFEE } from "../../../constants/variables";
import ReserveButton from "./ReserveButton";
import SeatQuantifier from "./SeatQuantifier";

export default function DailyRitual() {
  let numberOfSeats = useRef(1);

  return (
    <div
      className="daily-ritual-card"
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "26px",
        borderRadius: "24px",
        /* Deep emerald & forest glassmorphism gradient */
        background:
          "linear-gradient(135deg, rgba(20, 42, 31, 0.95) 0%, rgba(9, 22, 16, 0.98) 100%)",
        border: "1px solid rgba(16, 185, 129, 0.25)",
        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
        backdropFilter: "blur(12px)",
        color: "#ffffff",
        maxWidth: "480px",
      }}
    >
      {/* Subtle Emerald Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "-30px",
          right: "-30px",
          width: "160px",
          height: "160px",
          background:
            "radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, rgba(0,0,0,0) 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Header Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "18px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {/* Coffee Icon Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "14px",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              boxShadow: "0 0 12px rgba(16, 185, 129, 0.2)",
              color: "#34d399",
              flexShrink: 0,
            }}
          >
            <LuCoffee size={22} />
          </div>

          <div>
            <span
              style={{
                display: "block",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1.2px",
                color: "#a7f3d0",
                textTransform: "uppercase",
              }}
            >
              Daily Ritual
            </span>
          </div>
        </div>

        {/* Schedule Time Pill */}
        <span
          style={{
            fontSize: "11px",
            fontWeight: "700",
            letterSpacing: "0.5px",
            padding: "6px 14px",
            borderRadius: "9999px",
            backgroundColor: "rgba(245, 158, 11, 0.18)",
            color: "#fef08a",
            border: "1px solid rgba(245, 158, 11, 0.35)",
            whiteSpace: "nowrap",
          }}
        >
          4:00 PM Sharp
        </span>
      </div>

      {/* Title */}
      <h1
        style={{
          margin: "0 0 12px 0",
          fontSize: "24px",
          fontWeight: "700",
          fontFamily: "'Playfair Display', 'Georgia', serif",
          color: "#ffffff",
          lineHeight: "1.25",
        }}
      >
        Jebena Buna & Frankincense Ceremony
      </h1>

      {/* Description */}
      <p
        style={{
          margin: "0 0 22px 0",
          fontSize: "14px",
          lineHeight: "1.65",
          color: "rgba(255, 255, 255, 0.8)",
          fontWeight: "400",
        }}
      >
        Experience the three ceremonial pours —{" "}
        <span style={{ color: "#fef08a", fontWeight: "600" }}>
          Abol, Tona, Baraka
        </span>{" "}
        — roasted fresh with sweet popped sorghum (<em>fendisha</em>) and tendrils
        of sacred frankincense.
      </p>

      {/* Interactive Booking Controls */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          paddingTop: "18px",
          borderTop: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Seat Quantifier Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#a7f3d0",
            }}
          >
            Number of Guests
          </span>
          <SeatQuantifier numberOfSeats={numberOfSeats} />
        </div>

        {/* Pricing & CTA Button Row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <div>
            <span
              style={{
                display: "block",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
                color: "rgba(255, 255, 255, 0.55)",
              }}
            >
              Ceremony Pass
            </span>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#f59e0b",
              }}
            >
              ETB {RESERVER_FOR_COFFEE}{" "}
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "400",
                  color: "rgba(255, 255, 255, 0.6)",
                }}
              >
                / seat
              </span>
            </span>
          </div>

          <ReserveButton type="coffee" numberOfSeats={numberOfSeats} />
        </div>
      </div>
    </div>
  );
}