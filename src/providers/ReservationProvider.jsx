import { Children, useContext, useState } from "react";

export const ReservationContext = useContext('null');

export default function ReservationProvider(){
    let [ reservation , setReservation ] = useState([]);

    return (
        <ReservationContext.Provider value = {{reservation , setReservation}}>
            {Children}
        </ReservationContext.Provider>
    )
}