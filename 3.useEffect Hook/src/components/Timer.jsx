import React from 'react'
import { useState, useEffect } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds+1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <h1>Seconds: {seconds}</h1>
}

export default Timer