import { paymentMethods } from "@/constants/variables";
import ConfirmOrderAndaPay from "../components/step-two/ConfirmOrder";
import DeliveryDestination from "../components/step-two/DeliveryDestination";
import OrderItems from "../components/step-two/OrderItems";
import PaymentMethodBox from "../components/step-two/PaymentMethod";
import RecipientContact from "../components/step-two/RecipientContact";
import "../styles/styles.css";


export default function StepTwo(){
    return (
        <div>
            <RecipientContact />
            <DeliveryDestination/>
            <ConfirmOrderAndaPay />
            {/* loop through payment methods  */}
            {
                paymentMethods.map(
                    paymentMethod => <PaymentMethodBox key={paymentMethod.id} item={paymentMethod}/>
                )
            }
            <OrderItems/>
        </div>
        

    )
}
