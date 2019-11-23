import React, { useState, useEffect } from 'react';
export default function HookCounterInterval(props) {
    const [count, setCount] = useState(0)

    const tick = () => {
        console.log('tick');
        setCount(count => count + 1);
    }
    useEffect(() => {
        console.log('use effect');
        const counter = setInterval(tick, 1000);

        return () => {
            clearInterval(counter);
        }
    }, []);

    return (
        <div>
            {count}
        </div>
    );
}
