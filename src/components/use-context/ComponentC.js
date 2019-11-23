import React, { useContext } from 'react';
import { NameContext } from './ComponentA';

export default function ComponentC(props) {
    const name = useContext(NameContext);
    return (
        <div>{name}</div>
    );
}


