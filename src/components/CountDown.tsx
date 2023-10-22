"use client"
import React, { useState, useEffect } from "react";

const CountDown = () => {

    let difference = +new Date(`01/10/2024`) - +new Date();
    const [delay, setDelay] = useState(difference);
    const [days, setDays] = useState(0)
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        // SETTING THE VALUES INSIDE USEEFFECT BECAUSE OF NEXT HYDRATION ISSUE        
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
        setHours(Math.floor((difference / (1000 * 60 * 60)) % 24))
        setMinutes(Math.floor((difference / 1000 / 60) % 60))
        setSeconds(Math.floor((difference / 1000) % 60))

        const timer = setInterval(() => {
            setDelay(delay - 1);
        }, 1000);

        if (delay === 0) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };
    }, [difference, delay, days, hours, minutes, seconds]);
    return (
        <span className="font-bold text-5xl text-yellow-300">
            {days}:{hours}:{minutes}:{seconds}
        </span>
    );
};

export default CountDown;