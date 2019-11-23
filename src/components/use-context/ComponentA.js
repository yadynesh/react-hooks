import React, {  } from 'react';
import ComponentB from './ComponentB'

export const NameContext = React.createContext();
export default function ComponentA(props) {
    return (
        <NameContext.Provider value='yadynesh'>
            <ComponentB />
        </NameContext.Provider>
    );
}


