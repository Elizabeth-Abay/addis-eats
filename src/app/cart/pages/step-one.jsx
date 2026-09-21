import CartItemContainer from "../components/step-one/CartItemContainer";
import CheckoutButton from "../components/step-one/CheckOutButton";
import DeliveryBanner from "../components/step-one/DeliveryBanner";
import DiningEtiquette from "../components/step-one/DiningEtiquette";
import GurshaPackage from "../components/step-one/GurshaPackage";
import PaymentInfo from "../components/step-one/PaymentINformation";

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