import { useRef } from "react";
import { HiUserGroup } from "react-icons/hi2";
import { RESERVE_FOR_FEAST } from "../../../constants/variables";
import ReserveButton from "./ReserveButton";
import SeatQuantifier from "./SeatQuantifier";

export default function ReserveTable() {
    let numberOfSeats = useRef(1);

    return (
        <div
        className="reserve-table-card"
        style={{
            maxWidth: "460px",
            borderRadius: "24px",
            overflow: "hidden",
            background:
            "linear-gradient(135deg, rgba(38, 20, 14, 0.95) 0%, rgba(18, 9, 5, 0.98) 100%)",
            border: "1px solid rgba(245, 158, 11, 0.25)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(12px)",
            color: "#ffffff",
        }}
        >
        {/* Hero Image Container */}
        <div
            className="image-container-feature"
            style={{
            position: "relative",
            width: "100%",
            height: "210px",
            overflow: "hidden",
            }}
        >
            <img
            src="https://share.google/5cWLhxE6Pv3qW5eoq"
            alt="Royal Feast Platter"
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
            }}
            />

            {/* Gradient Overlay for Text Contrast */}
            <div
            style={{
                position: "absolute",
                inset: 0,
                background:
                "linear-gradient(to top, rgba(18, 9, 5, 0.9) 0%, transparent 60%)",
            }}
            />

            {/* Glass Serving Badge */}
            <div
            className="feature-feed-pill"
            style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                borderRadius: "9999px",
                backgroundColor: "rgba(0, 0, 0, 0.55)",
                border: "1px solid rgba(245, 158, 11, 0.35)",
                backdropFilter: "blur(8px)",
            }}
            >
            <HiUserGroup size={18} color="#f59e0b" />
            <h3
                style={{
                margin: 0,
                fontSize: "12px",
                fontWeight: "600",
                letterSpacing: "0.5px",
                color: "#ffffff",
                }}
            >
                Feeds 2–4 People
            </h3>
            </div>
        </div>

        {/* Main Content Area */}
        <div style={{ padding: "24px" }}>
            <h1
            style={{
                margin: "0 0 10px 0",
                fontSize: "26px",
                fontWeight: "700",
                fontFamily: "'Playfair Display', 'Georgia', serif",
                color: "#ffffff",
                lineHeight: "1.25",
            }}
            >
            Royal Feast Platter
            </h1>

            <p
            style={{
                margin: "0 0 24px 0",
                fontSize: "14px",
                lineHeight: "1.6",
                color: "rgba(255, 255, 255, 0.8)",
                fontWeight: "400",
            }}
            >
            A circular tapestry of four signature highland stews, fresh gomen
            greens, organic boiled eggs and warm rolls of pure teff injera.
            </p>

            {/* Interactive Action Section */}
            <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                paddingTop: "20px",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            }}
            >
            {/* Seat Selector Row */}
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
                    color: "#fef08a",
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
                    Shared Platter
                </span>
                <span
                    style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    color: "#f59e0b",
                    }}
                >
                    ETB {RESERVE_FOR_FEAST}
                </span>
                </div>

                <ReserveButton type="feast" numberOfSeats={numberOfSeats} />
            </div>
            </div>
        </div>
        </div>
    );
}