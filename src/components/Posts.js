import React, { useState } from 'react';
export default function Posts(props) {
    const [names, setNames] = useState([]);
    
    const addItem = (firstName, lastName) => {
        setNames([
            ...names, {
                firstName,
                lastName
            }
        ])
    }
    return (
        <div>
            <button onClick={() => addItem('Yadynesh', 'Desai')}>Add name</button>
            {names.map(name => {
                return <h5>{name.firstName} {name.lastName}</h5>
            })}
        </div>

        
    );
}
