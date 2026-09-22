import { SIDE_ACCENTS_CONFIG, sideAccentsPrice } from "@/constants/variables";

export default function SideAccentsSelector({
    updateSideAccents,
    updateTotal,
    sideAccents = [], // Default to empty array to prevent undefined errors
    maxAllowed = 2,
}) {
    const handleToggle = (type) => {
        const isSelected = sideAccents.includes(type);
        const itemPrice = sideAccentsPrice?.[type] ?? 0;

        // Prevent selecting more than the allowed maximum
        if (!isSelected && sideAccents.length >= maxAllowed) {
            alert(`You can only select up to ${maxAllowed} side accents.`);
            return;
        }

        const willBeAdded = !isSelected;

        // 1. Notify parent state updater
        updateSideAccents?.({ type, added: willBeAdded });

        // 2. Call updateTotal only if item has a price
        if (itemPrice > 0 && updateTotal) {
            const operation = willBeAdded ? "plus" : "minus";
            updateTotal({ amount: itemPrice, type: operation });
        }
    };

    return (
        <div className="sides-selector-container">
            {/* Header */}
            <div className="sides-header">
                <div className="title-group">
                    <span className="step-label">COMMUNAL ACCOMPANIMENTS</span>
                    <h2 className="section-title">Side Accents</h2>
                </div>
                <span className="select-badge">
                    Up to {maxAllowed} chosen ({sideAccents.length}/{maxAllowed})
                </span>
            </div>

            {/* Options List */}
            <div className="options-list">
                {SIDE_ACCENTS_CONFIG.map((item) => {
                    const isChecked = sideAccents.includes(item.id);
                    // Fixed: Reading from sideAccentsPrice instead of sideAccents array
                    const price = sideAccentsPrice?.[item.id] ?? 0;
                    const isDisabled = !isChecked && sideAccents.length >= maxAllowed;

                    return (
                        <div
                            key={item.id}
                            role="checkbox"
                            aria-checked={isChecked}
                            tabIndex={isDisabled ? -1 : 0}
                            className={`side-card ${isChecked ? "selected" : ""} ${
                                isDisabled ? "disabled" : ""
                            }`}
                            onClick={() => handleToggle(item.id)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleToggle(item.id);
                                }
                            }}
                        >
                            {/* Custom Checkbox Box */}
                            <div className={`checkbox-box ${isChecked ? "active" : ""}`}>
                                {isChecked && (
                                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                        <path
                                            d="M1.5 5L4.5 8L10.5 1.5"
                                            stroke="#FFFFFF"
                                            strokeWidth="2.2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </div>

                            {/* Content Details */}
                            <div className="side-content">
                                <span className="side-title">{item.title}</span>
                                <p className="side-description">{item.description}</p>
                            </div>

                            {/* Price / Free Tag */}
                            <div className="price-tag-container">
                                <span className={`price-label ${price === 0 ? "free" : "paid"}`}>
                                    {price === 0 ? "Free" : `+ETB ${price}`}
                                </span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}