export default function CategoryFilter({type ,onClick}){
    // we will need its name here
    // when clicked I want it to dispatch sthg
    // then that sthg will be used for filtering
    return (
        <button className="category-filter-btn active" onClick={onClick}>
            {type}
        </button>
    )
}