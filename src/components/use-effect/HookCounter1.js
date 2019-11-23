import React, { useState, useEffect } from 'react';

function HookCounter1(props) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useEffect(() => {
        console.log('Updating document title');
        document.title = `Count: ${count}`;
    }, [count])
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            {count}
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default HookCounter1;
