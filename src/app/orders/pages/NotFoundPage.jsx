import { Link } from "react-router-dom";
import "../styles/styles.css";

export default function ItemNotFound() {
    return (
        <div className="not-found-container">
        <div className="not-found-card">
            {/* Icon Header */}
            <div className="icon-badge-wrapper">
            <div className="icon-circle">
                <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7D1204"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" />
                </svg>
            </div>
            </div>

            {/* Text Content */}
            <span className="not-found-label">404 • DISH NOT FOUND</span>
            <h1 className="not-found-title">Item Unavailable</h1>
            <p className="not-found-text">
            We couldn't find the dish or beverage you requested. It may have been sold out, moved, or removed from our menu.
            </p>

            {/* Action Button */}
            <Link to="/menu" className="back-menu-btn">
            <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Return to Menu</span>
            </Link>
        </div>
        </div>
    );
}