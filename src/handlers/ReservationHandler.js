// we will write the add , remove and clear reservation logics in here
import { useContext } from "react";
import { ReservationContext } from "../providers/ReservationProvider";

let { reservation , setReservation } = useContext(ReservationContext);


// when they add reservation then they will have to have total price too
// what if we also add the price to whenever they click - 2 things add the reservation and also update the total price
// ! maybe have a state for that as well


export function addReservation({ type , numOfSeats , pricePerSeat }){
    // add the reservation with id
    setReservation( (previous) => {
        // it is an array of objects
        // { type , numOfSeats , pricePerSeat }
        let added = false;
        for (item of previous){
            if (item.type === type) {
                item.numOfSeats += numOfSeats
                added = true
            }
        }
        
        // if it is not found in there
        if (!added) setReservation( (previous) => {
            [ ...previous , { type , numOfSeats , pricePerSeat } ]
        })
        
    })

}

export function clearReservation(){
    setReservation([]);
}


export function removeReservation( type ){
    // u can remove the whole reservation for a type
    setReservation( (previous) => {
        // it is an array of objects
        // { type , numOfSeats , pricePerSeat }
        let final = previous.filter(
            item => item.type !== type
        );

        return final
        
    })
}

export function editReservation({ type , numOfSeats }){
    setReservation(
        previous => {
            previous.forEach(item => {
                if (item.type === type) return item.numOfSeats = numOfSeats
            });
        }

    )
}

export function getReservation(){
    return reservation;
}