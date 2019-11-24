import React, { useState, useEffect, useRef } from 'react';
export default function InputForm(props) {
    const [count, setCount] = useState(0);
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current = setInterval(() => {
            setCount(count => count + 1);
        }, 1000);

        return () => {
            clearInterval(inputRef.current);
        }
    }, [])
    return (
        <div>
            {count}
            <button onClick={() => clearInterval(inputRef.current)}>Stop</button>
        </div>
    );
}


