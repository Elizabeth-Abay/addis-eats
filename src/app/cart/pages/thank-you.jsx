import { CartContext } from "@/providers/CartProvider"; // Adjust import path if needed
import { OrderContext } from "@/providers/OrderProvider"; // Adjust import path if needed
import { useContext } from "react";
import "../styles/styles.css";

export default function ThankYouPage({ onBackToHome }) {
    const cartContext = useContext(CartContext);
    const orderContext = useContext(OrderContext);

    // Extract states with safe fallback values
    const cartState = cartContext?.state || {};
    const orderState = orderContext?.state || {};

    const {
        cart = [],
        totalPrice = 0,
        deliveryFee = 0,
        grandTotal = 0,
    } = cartState;

    const {
        deliveryLocation = {},
        recipientContact = {},
        paymentMethod = {},
    } = orderState;

    // Helper to format custom order options into readable text
    const renderCustomOptions = (customOrder) => {
        if (!customOrder || typeof customOrder !== "object") return null;
        const entries = Object.entries(customOrder);
        if (entries.length === 0) return null;

        return entries.map(([key, val]) => `${key}: ${val}`).join(" • ");
    };

    // Generate order metadata
    const orderNumber = `ETH-${Math.floor(10000 + Math.random() * 90000)}`;
    const orderDate = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="thank-you-page">
        {/* Header Banner */}
        <div className="thank-you-banner">
            <div className="success-badge">
            <span className="check-mark">✓</span>
            </div>
            <h1 className="banner-title">አመሰግናለሁ! Thank You!</h1>
            <p className="banner-subtitle">
            Your order is on the way! Our kitchen is preparing your meal with care.
            </p>
            <div className="eta-badge">
            <span>⏱️ Estimated Delivery: 35 – 45 mins</span>
            </div>
        </div>

        {/* Receipt Paper Card */}
        <div className="receipt-card">
            {/* Receipt Header */}
            <div className="receipt-header">
            <h2 className="restaurant-brand">Habesha Bites</h2>
            <p className="receipt-type">OFFICIAL ORDER RECEIPT</p>
            <div className="receipt-meta">
                <span>Order #: <strong>{orderNumber}</strong></span>
                <span>Date: {orderDate}</span>
            </div>
            </div>

            <div className="receipt-divider-dashed"></div>

            {/* Ordered Items List */}
            <div className="receipt-items">
            <h3 className="receipt-section-title">Order Details</h3>
            {cart.length === 0 ? (
                <p className="empty-cart-msg">No items found in cart.</p>
            ) : (
                cart.map((item, index) => {
                const customText = renderCustomOptions(item.customOrder);
                const itemTotal = (item.price || 0) * (item.amount || 1);

                return (
                    <div key={index} className="receipt-item-row">
                    <div className="item-info">
                        <div className="item-main">
                        <span className="item-qty">{item.amount || 1}x</span>
                        <span className="item-name">{item.name}</span>
                        </div>
                        {customText && (
                        <span className="item-custom">{customText}</span>
                        )}
                    </div>
                    <div className="item-price">
                        ETB {itemTotal.toLocaleString()}
                    </div>
                    </div>
                );
                })
            )}
            </div>

            <div className="receipt-divider-dashed"></div>

            {/* Financial Summary */}
            <div className="receipt-totals">
            <div className="summary-row">
                <span>Subtotal</span>
                <span>ETB {(totalPrice || 0).toLocaleString()}</span>
            </div>
            <div className="summary-row">
                <span>Delivery Fee</span>
                <span>
                {deliveryFee > 0
                    ? `ETB ${deliveryFee.toLocaleString()}`
                    : "Free"}
                </span>
            </div>
            <div className="summary-row grand-total-row">
                <span>Total Amount Paid</span>
                <span>ETB {(grandTotal || totalPrice + deliveryFee).toLocaleString()}</span>
            </div>
            </div>

            <div className="receipt-divider-dashed"></div>

            {/* Delivery & Customer Info */}
            <div className="receipt-info-grid">
            {/* Recipient Details */}
            <div className="info-block">
                <span className="info-block-label">Recipient</span>
                <p className="info-block-value">
                {recipientContact.name || "Customer"}
                </p>
                {recipientContact.phone && (
                <p className="info-block-sub">{recipientContact.phone}</p>
                )}
            </div>

            {/* Delivery Location */}
            <div className="info-block">
                <span className="info-block-label">Delivery Destination</span>
                <p className="info-block-value">
                {deliveryLocation.subCity || "Local Delivery"}
                </p>
                {deliveryLocation.houseNo && (
                <p className="info-block-sub">House No: {deliveryLocation.houseNo}</p>
                )}
                {deliveryLocation.landmark && (
                <p className="info-block-sub">Near: {deliveryLocation.landmark}</p>
                )}
            </div>

            {/* Payment Method */}
            <div className="info-block">
                <span className="info-block-label">Payment Method</span>
                <p className="info-block-value">
                {paymentMethod.chosenType || "Mobile Payment"}
                </p>
                {paymentMethod.information && (
                <p className="info-block-sub">Ref: {paymentMethod.information}</p>
                )}
            </div>
            </div>

            {/* Receipt Bottom Cut Decorative Jagged Edge */}
            <div className="receipt-bottom-pattern"></div>
        </div>

        {/* Action Navigation Button */}
        <div className="thank-you-actions">
            <button
            className="back-home-btn"
            onClick={onBackToHome || (() => (window.location.href = "/"))}
            >
            Back to Menu & Home
            </button>
        </div>
        </div>
    );
}