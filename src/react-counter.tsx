// Implement a Counter component with two buttons:
// “Increase” and “Decrease”, which displays the current counter value.
import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prev => prev + 1);
    }

    const decrement = () => {
        setCount(prev => prev - 1);
    }
    return (<>
        <h1>{count}</h1>
        <button onClick={increment}>Increase</button>
        <button onClick={decrement}>Decrease</button>
    </>)
}

export default Counter