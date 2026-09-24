import CategoryResultContainer from "../components/CategoryResultContainer";
import FeatureHead from "../components/FeatureHead";
import ReserveTable from "../components/ReserveTable";
import SpecialSelectionCard from "../components/SpecialSelectionCard";


export default function SpecialPage(){
    // ! add the order and add to cart buttons at top
    // we pass that to the input 
    return (
        <div className="feature-section"
        style={
            {
                display : "flex",
                flexDirection : "column",
                width: "100%",
                gap: "24px",
            }
        }>
            <SpecialSelectionCard></SpecialSelectionCard>
            <FeatureHead></FeatureHead>
            {/* we will need the category and filter containers */}
            <ReserveTable></ReserveTable>
            <CategoryResultContainer></CategoryResultContainer>
            {/* <SpiritOfGursha></SpiritOfGursha> */}
            {/* <DailyRitual></DailyRitual> */}

        </div>
    )
}