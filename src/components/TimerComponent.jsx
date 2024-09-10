import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function TimerComponent() {
    const[dateTime, setDateTime] = useState(new Date);

    useEffect(() => {
        const timer = setInterval(() => {
            tick()
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log("timer telah hilang di dom");
        }
    },[]);

    const tick = () => {
        setDateTime(new Date());
    }

    return(
        <>
        <div className="text-center my-5">
            <h1>Realtime Clock</h1>
            <h2>{dateTime.toLocaleTimeString()}</h2>
        </div>
        </>
    )
}