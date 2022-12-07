import React, { useState } from 'react'

export default function App() {
    const [count, setCount] = useState(0);

    const updateCount = (diff) => {
        if (count === 0 && diff === -1) return;
        setCount(prevCount => prevCount + diff)
    }

    return (
        <div>
            <button data-testid="decrement-button" onClick={() => updateCount(-1)}>-</button>
            <button data-testid="increment-button" onClick={() => updateCount(1)}>+</button>
            <p>clicked: {count}</p>
        </div>
    )
}