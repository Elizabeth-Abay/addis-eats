import CategoryResultContainer from "../components/CategoryResultContainer";
import DailyRitual from "../components/DailyRitual";
import FeatureHead from "../components/FeatureHead";
import ReserveTable from "../components/ReserveTable";
import SpecialSelectionCard from "../components/SpecialSelectionCard";
import SpiritOfGursha from "../components/SpiritOfGursha";


export default function SpecialPage(){
    // ! add the order and add to cart buttons at top
    // we pass that to the input 
    return (
        <div className="feature-section"
        style={
            {
                display : "flex",
                flexDirection : "column"
            }
        }>
            <SpecialSelectionCard></SpecialSelectionCard>
            <FeatureHead></FeatureHead>
            {/* we will need the category and filter containers */}
            <ReserveTable></ReserveTable>
            <CategoryResultContainer></CategoryResultContainer>
            <SpiritOfGursha></SpiritOfGursha>
            <DailyRitual></DailyRitual>

        </div>
    )
}