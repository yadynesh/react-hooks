import React, { useState, useMemo } from 'react';


// parent component to demonstrate useCallback
export default function ParentComponent(props) {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(1);

    const incrementCount1 = () => {
        setCount1(count1 + 1);
    }

    const incrementCount2 = () => {
        setCount2(count2 + 1);
    }

    const isEven = useMemo(() => {
        console.log('isEven');
        let i = 0;
        while ( i < 1000000000) i++;
        return count1 % 2 === 0
    }, [count1])

    return (
        <div>
            <div>{count1}</div>
            {isEven ? 'Even': 'Odd'}
            <button onClick={incrementCount1}>Increment</button>
            <div>{count2}</div>
            <button onClick={incrementCount2}>Increment</button>
        </div>
    );
}
