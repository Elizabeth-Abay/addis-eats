import { RESERVER_FOR_COFFEE, RESERVE_FOR_FEAST } from "@/constants/variables";
import { createContext, useState } from "react";

export const ReservationContext = createContext('null');

// the provider is the one that defines the state and 
// also defines functions that manipulates the things
// export let addReservation = undefined;
// export let clearReservation = undefined;
// export let removeReservation = undefined;
// export let editReservation = undefined;
// export let getReservation = undefined;

export default function ReservationProvider({children}){
    let [ reservation , setReservation ] = useState([]);
    // reservation is working
    // //console.log('reservation added');
    // //console.log(reservation)


    // price cld be set up and be constant instead of sthg passed from outside
    const addReservation = ({ type , numOfSeats }) =>{
        // add the reservation with id
        let pricePerSeat = (type === 'coffee') ? RESERVER_FOR_COFFEE : RESERVE_FOR_FEAST
        setReservation( (previous) => {
            // it is an array of objects
            // { type , numOfSeats , pricePerSeat }
            let added = false;
            let finalArray = previous.map(
                item => {
                    if (item.type === type) {
                        added = true;
                        item.numOfSeats += numOfSeats
                    }
                    return item
                }
            )
        
            return (added) ? finalArray : [ ...previous , { type , numOfSeats , pricePerSeat } ]
            
        })
    }

    const clearReservation = () =>{
        setReservation([]);
    }

    const removeReservation = ( type ) =>{
        // u can remove the whole reservation for a type
        setReservation( (previous) => {
            // it is an array of objects
            // { type , numOfSeats , pricePerSeat }
            return previous.filter(
                item => item.type !== type
            );        
        })
    }

    const editReservation =({ type , numOfSeats }) =>{
        setReservation(
            previous => {
                previous.forEach(item => {
                    if (item.type === type) return item.numOfSeats = numOfSeats
                });
            }

        )
    }

    const getReservation = ()=>{
        return reservation;
    }


    return (
        <ReservationContext.Provider value = {{reservation , addReservation , editReservation , clearReservation , removeReservation }}>
            {children}
        </ReservationContext.Provider>
    )
}