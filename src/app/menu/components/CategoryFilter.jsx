export default function CategoryFilter({ type, count, isActive, onClick }) {
    return (
        <button 
        className={`category-filter-btn ${isActive ? 'active' : ''}`} 
        onClick={onClick}
        >
        <span>{type}</span>
        {count !== undefined && <span className="badge">{count}</span>}
        </button>
    );
}