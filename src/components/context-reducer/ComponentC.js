import React, { useContext } from 'react';
import { CountContext } from './ComponentA';

export default function ComponentC(props) {
    const countContext = useContext(CountContext);
    return (
        <div>
            {countContext.count}
            <button onClick={() => countContext.dispatch({ type: 'increment', value: 1 })}>
                Increment
            </button>
            <button onClick={() => countContext.dispatch({ type: 'decrement', value: 1 })}>
                Decrement
            </button>
            <button onClick={() => countContext.dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}
