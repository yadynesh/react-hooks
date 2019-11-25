import React, { useReducer } from 'react';

const initialCount = 0;
const reducer = (count, action) => {
    switch(action) {
        case 'increment':
            return count + 1;
        case 'decrement':
            return count - 1;
        case 'reset':
            return initialCount;
        default:
            return count;            
    }
}

// demonstrate simple state object in reducer
export default function CounterSimpleReducer(props) {
    const [count, dispatch] = useReducer(reducer, initialCount);
    return (
        <div>
            {count}
            <button onClick={() => dispatch('increment')}>
                Increment
            </button>
            <button onClick={() => dispatch('decrement')}>
                Decrement
            </button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    );
}
