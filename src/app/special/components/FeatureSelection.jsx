import CategoryResultContainer from "./CategoryResultContainer";
import DailyRitual from "./DailyRitual";
import FeatureHead from "./FeatureHead";
import ReserveTable from "./ReserveTable";
import SpecialSelectionCard from "./SpecialSelectionCard";
import SpiritOfGursha from "./SpiritOfGursha";


export default function FeatureSelection(){
    // ! add the order and add to cart buttons at top
    // we pass that to the input 
    return (
        <div className="feature-section">
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