import { useRef } from "react"
import { HiUserGroup } from "react-icons/hi2"
import { RESERVE_FOR_FEAST } from "../../../constants/variables"
import ReserveButton from "./ReserveButton"
import SeatQuantifier from "./SeatQuantifier"

export default function ReserveTable(){
    let numberOfSeats = useRef(1)
    return (
        <div className="reserve-table-card">
            <div className="image-container-feature">
                {/*  */}
                <img src="https://share.google/5cWLhxE6Pv3qW5eoq" alt="food-image"></img>
                <span></span>
                <div className="feature-feed-pill">
                    <HiUserGroup size={20} />
                    <h3>Feeds 2-4 People </h3>
                </div>
            </div>

            <h1>Royal Feast Platter</h1>
            <p>
                A circular tapestry of four signature highland stews,
                fresh gomen greens, organic boiled eggs and warm
                rolls of pure teff injera.
            </p>

            {/* <input type='' is used to set up the number of seats to be reserved*/}
            <SeatQuantifier numberOfSeats={numberOfSeats}></SeatQuantifier>
            {/* maybe passing the ref as the number of things is good */}
            {/* we gotta have the price here */}
            <h1>Shared Platter - ETB {RESERVE_FOR_FEAST}</h1>
            <ReserveButton type='feast' numberOfSeats={numberOfSeats}></ReserveButton>
            
        </div>

    )
}