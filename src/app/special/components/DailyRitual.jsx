import { useRef } from "react";
import { LuCoffee } from "react-icons/lu";
import { RESERVER_FOR_COFFEE } from "../../../constants/variables";
import ReserveButton from "./ReserveButton";
import SeatQuantifier from "./SeatQuantifier";

export default function DailyRitual(){
    let numberOfSeats = useRef(1)
    return (
        <div>
            <div style={{
                backgroundColor: '#1b4332',
                padding: '12px',
                borderRadius: '12px',
                display: 'inline-flex',
                color: '#fef3c7'
                }}>
                <LuCoffee size={24} />
                <h1>DAILY RITUAL</h1>

                <button className="slug">4:00 PM Sharp</button>
            </div>

            <h1>Jebena Buna & Frankincense Ceremony</h1>
            <p>
                Experience the three ceremonial pours-- Abol , Tona, Baraka--
                roasted fresh with sweet popped sorghum(fendisha) and tendrils
                of sacred frankincense.
            </p>

            <h2>ETB {RESERVER_FOR_COFFEE}/ seat</h2>

            <SeatQuantifier numberOfSeats={numberOfSeats}></SeatQuantifier>
            <ReserveButton type={'coffee'} numberOfSeats={numberOfSeats}></ReserveButton>
        </div>
    )
}