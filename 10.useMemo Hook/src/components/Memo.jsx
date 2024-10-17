import React from 'react'
import { useState, useMemo } from 'react'


const slowFunction = (num) => {
    console.log(`Calling slow function...`);
    for (let i=0; i<1000000000; i++) {}
    return num*2;
}

const Memo = () => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const doubleNumber = useMemo( () => {
        return slowFunction(number);
    }, [number])

  return (
    <div>
        <h1>useMemo example</h1>
        <input type="number" value={number} onChange={
            (e) => setNumber(parseInt(e.target.value))
        } />

        <p>Calculated Value: {doubleNumber}</p>
    </div>
  )
}

export default Memo