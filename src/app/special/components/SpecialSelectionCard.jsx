import { LuUtensils } from "react-icons/lu";

export default function SpecialSelectionCard() {
    return (
        <div
        style={{
            background: "linear-gradient(145deg, #6c1200 0%, #460900 100%)",
            borderRadius: "20px",
            padding: "24px 28px",
            color: "#ffffff",
            maxWidth: "480px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            fontFamily: "system-ui, -apple-system, sans-serif",
        }}
        >
        {/* Top Header Row */}
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "16px",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span
                style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#f59e0b",
                borderRadius: "50%",
                display: "inline-block",
                }}
            />
            <span
                style={{
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "1px",
                color: "#fef08a",
                textTransform: "uppercase",
                }}
            >
                Special Selection
            </span>
            </div>

            {/* Decorative Graphic Element */}
            <div style={{ display: "flex", gap: "3px", opacity: 0.6 }}>
            {[...Array(6)].map((_, i) => (
                <div
                key={i}
                style={{
                    width: "3px",
                    height: "14px",
                    backgroundColor: "#ffffff",
                    borderRadius: "1px",
                }}
                />
            ))}
            </div>
        </div>

        {/* Main Serif Title */}
        <h2
            style={{
            fontFamily: "'Georgia', 'Playfair Display', serif",
            fontSize: "28px",
            fontWeight: "700",
            lineHeight: "1.2",
            margin: "0 0 14px 0",
            color: "#ffffff",
            }}
        >
            Communal Warmth,
            <br />
            Slow-Cooked Heritage
        </h2>

        {/* Description Text */}
        <p
            style={{
            fontSize: "14px",
            lineHeight: "1.5",
            color: "rgba(255, 255, 255, 0.85)",
            margin: "0 0 24px 0",
            }}
        >
            Gather around our handwoven mesob for time-honored wots, sizzling clay
            stoves, and authentic Gursha sharing.
        </p>

        {/* Footer Row */}
        <div
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LuUtensils size={18} color="#f59e0b" />
            <span
                style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#fef08a",
                }}
            >
                Table-side Warm Bread Refills
            </span>
            </div>

            <button
            style={{
                backgroundColor: "rgba(255, 255, 255, 0.18)",
                color: "#ffffff",
                border: "none",
                borderRadius: "20px",
                padding: "8px 16px",
                fontSize: "13px",
                fontWeight: "600",
                cursor: "pointer",
                backdropFilter: "blur(4px)",
            }}
            >
            Today's Batch
            </button>
        </div>
        </div>
    );
}