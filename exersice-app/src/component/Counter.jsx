import React, { useState} from 'react';

function Counter () {
    const [count, setCount] = useState(0);

    const handleClickIncrement = () => {
        setCount(count + 1);
    };

    const handleClickDecrement = () => {
        setCount(count -1);
    };

    return (
        <div>
            <p>Current Count: {count}</p>
            <button onClick={handleClickIncrement} className="bg-yellow-300 p-1 m-2 font-mono text-[10px]">Increment</button>
            <button onClick={handleClickDecrement} className="bg-green-300 p-1 m-2 font-mono text-[10px]">Decrement</button>
        </div>
    );
}

export default Counter;