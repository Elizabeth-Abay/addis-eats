export default function CategoryFilter({type , dispatch }){
    // we will need its name here
    // when clicked I want it to dispatch sthg
    // then that sthg will be used for filtering
    return (
        <button className="category-filter" onClick={
            () =>{
                dispatch(
                    { type }
                )
            }
        }>
            {type}
        </button>
    )
}