'use client';

// remember info and display
// (built-in) hooks: functions starting with use
import { useState } from "react";

export default function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div >
    )
}


// convention: [something, setSomething]}
function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button className="round" onClick={handleClick}>
            Clicked {count} times
        </button>
    )
}