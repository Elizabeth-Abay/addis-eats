import CategoryFilterContainer from '../components/CategoryFilterContainer';
import MenuContainer from '../components/MenuContainer';
import SearchBar from '../components/SearchBar';
import SelectedItemsContainer from '../components/SelectedItemsContainer';
import TraditionalGursha from '../components/TraditionalGurshaExperience';
import '../style/style.css';

export default function MenuPage(){
    return (
        <div>
            <SearchBar></SearchBar>
            <TraditionalGursha></TraditionalGursha>
            <CategoryFilterContainer></CategoryFilterContainer>
            <MenuContainer></MenuContainer>
            {/* then we will need the view basket button */}
            <SelectedItemsContainer></SelectedItemsContainer>
        </div>
    )

}