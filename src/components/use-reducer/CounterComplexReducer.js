import React, { useReducer } from 'react';

const initialCount = 0;
const reducer = (count, action) => {
    switch(action.type) {
        case 'increment':
            return count + action.value;
        case 'decrement':
            return count - action.value;
        case 'reset':
            return initialCount;
        default:
            return count;            
    }
}

// demonstrate complex state object in reducer
export default function CounterComplexReducer(props) {
    const [count, dispatch] = useReducer(reducer, initialCount);
    return (
        <div>
            {count}
            <button onClick={() => dispatch({type: 'increment', value: 1})}>
                Increment
            </button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>
                Decrement
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

    
            <button onClick={() => dispatch({type: 'increment', value: 5})}>
                Increment
            </button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>
                Decrement
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}
