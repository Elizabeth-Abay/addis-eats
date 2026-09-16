// it will use a state passed to it at different moment
// since it is a parent thing then it will need to have sthg in the useRef 
// i dont want the reserve button to be redrawn at all the things
// so I gotta use useRef to store the amount in there to access that when i click the reserve button
// but I want the number in the input , so when it gets changed it will update the value in the input

import { useState } from "react";

// input lay - + and - button will update the useRef value
// when the reserve button is clicked i will determine the onClick there
export default function SeatQuantifier({ numberOfSeats , min = 1 , max = 10 }){
    let [ count , setCount ] = useState(numberOfSeats.current)
    const increment = () => {
        if (numberOfSeats.current < max)  {
            numberOfSeats.current += 1
            setCount(numberOfSeats.current)
        } 
        else alert('Cant go more than maximum');

    }
    const decrement = () => {
        if (numberOfSeats.current > min)  {
            numberOfSeats.current -= 1 
            setCount(numberOfSeats.current)
        } 
        else alert('Cant lower than 1');
    }

    return (
        <div style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '6px', overflow: 'hidden' }}>
            <button 
                type="button"
                onClick={decrement}
                disabled={count <= min}
                style={{ width: '36px', height: '36px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '18px' }}
            >
                −
            </button>

            <input
                type="number"
                value={count}
                min={min}
                max={max}
                style={{ width: '48px', height: '36px', textAlign: 'center', border: 'none', outline: 'none' }}
            />

            <button 
                type="button"
                onClick={increment}
                disabled={count >= max}
                style={{ width: '36px', height: '36px', border: 'none', background: '#f3f4f6', cursor: 'pointer', fontSize: '18px' }}
            >
                +
            </button>
        </div>
    )

}