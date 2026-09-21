import CartItemContainer from "../components/CartItemContainer";
import CheckoutButton from "../components/CheckOutButton";
import DeliveryBanner from "../components/DeliveryBanner";
import DiningEtiquette from "../components/DiningEtiquette";
import GurshaPackage from "../components/GurshaPackage";
import PaymentInfo from "../components/PaymentINformation";

export default function StepOne(){
    return (
        <div>
            <GurshaPackage />
            <DeliveryBanner />
            <CartItemContainer />
            <CheckoutButton />
            <DiningEtiquette />
            <PaymentInfo/>
        </div>
    )
}