// will consume the reservation context
// will use the handler functions from reserve handler
import { ReservationContext } from "../../../providers/ReservationProvider";

export default function ReserveButton({text}){
    // since this will be the one updating the reserving 
    // we use it for both the coffee and the dinner reservation pages
    // it will need to access the reservation context
    let { reservation , setReservation } = useContext(ReservationContext);

    return (
        <button>
            {/* add the information coming from the container to the  */}


        </button>
    )
}