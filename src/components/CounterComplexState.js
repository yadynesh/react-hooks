import React, { useState } from 'react';
export default function CounterComplexState(props) {
    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    });

    return (
        <div>
            <input
                value={name.firstName}
                onChange={(e) => {
                    setName({ ...name, firstName: e.target.value });
                }}
            ></input>
            <input
                value={name.lastName}
                onChange={(e) => {
                    setName({ ...name, lastName: e.target.value });
                }}
            ></input>
            <h1>h1{name.firstName} {name.lastName}</h1>
        </div>
    );
}

