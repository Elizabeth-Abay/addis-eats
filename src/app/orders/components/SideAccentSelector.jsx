// UI Config for Side Accent Metadata
import { SIDE_ACCENTS_CONFIG } from "@/constants/variables";

export default function SideAccentsSelector({
    updateSideAccents,
    updateTotal,
    sideAccents,
    maxAllowed = 2,
}) {
    // const [selectedItems, setSelectedItems] = useState([]);

    const handleToggle = (type) => {
        const isSelected = selectedItems.includes(type);
        // selectedItems - will include the items that are ticked
        const itemPrice = sideAccents[type] ?? 0; // get the price

        // if the maximum items is reached then u can't select any more than that
        if (!isSelected && selectedItems.length >= maxAllowed && itemPrice === 0) {
        return alert('You can only select 2 free items ');
        }

        const willBeAdded = !isSelected; // willBeAdded - true means add it in there

        // 1. Update internal state
        const nextSelected = willBeAdded
        ? [...selectedItems, type]
        : selectedItems.filter((id) => id !== type);

        // setSelectedItems(nextSelected);

        // 2. Call parent state updater - which will also update the child state when it gets rerendered
        updateSideAccents({ type, added: willBeAdded });
        

        // 3. Call updateTotal ONLY if item price > 0
        if (itemPrice > 0) {
            const priceDelta = willBeAdded ? itemPrice : -itemPrice;
            updateTotal(priceDelta);
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
            Up to {maxAllowed} chosen ({selectedItems.length}/{maxAllowed})
            </span>
        </div>

        {/* Options List */}
        <div className="options-list">
            {SIDE_ACCENTS_CONFIG.map((item) => {
            const isChecked = selectedItems.includes(item.id);
            const price = sideAccents[item.id] ?? 0;
            const isDisabled = !isChecked && selectedItems.length >= maxAllowed;

            return (
                <div
                key={item.id}
                className={`side-card ${isChecked ? "selected" : ""} ${
                    isDisabled ? "disabled" : ""
                }`}
                onClick={() => handleToggle(item.id)}
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
                    <span
                    className={`price-label ${price === 0 ? "free" : "paid"}`}
                    >
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