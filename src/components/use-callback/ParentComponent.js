import React, { useState, useCallback } from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

// parent component to demonstrate useCallback
export default function ParentComponent(props) {
    const [age, setAge] = useState(3);
    const [salary, setSalary] = useState(2000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1);
    }, [salary])

    return (
        <div>
            <Title title='Age'/>
            <Count count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Title title='Salary'/>
            <Count count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    );
}
