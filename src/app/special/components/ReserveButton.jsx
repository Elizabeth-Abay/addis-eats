// will consume the reservation context through handler functions from reserve handler
import { ReservationContext } from "@/providers/ReservationProvider";
import { useContext } from "react";


export default function ReserveButton({type , numberOfSeats}){
    let { addReservation} = useContext(ReservationContext);
    // since this will be the one updating the reserving 
    // we use it for both the coffee and the dinner reservation pages
    // it will need to access the reservation context
    let text = (type === 'coffee') ? 'Reserve Ceremony Spot' : 'Reserve For Table'

    let numOfSeats = numberOfSeats.current

    return (
        <button onClick={
            () => addReservation({type , numOfSeats})
        }>
            {/* add the information coming from the container to the  */}
            {text}
        </button>
    )
}