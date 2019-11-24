import React, { useReducer  } from 'react';
import ComponentB from './ComponentB'


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
export const CountContext = React.createContext();
export default function ComponentA(props) {
    const [count, dispatch] = useReducer(reducer, initialCount);
    return (
        <CountContext.Provider value={{count: count, dispatch: dispatch}}>
            <ComponentB />
        </CountContext.Provider>
    );
}


