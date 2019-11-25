import React, { useState, useEffect } from 'react';

// demonstrate componentWillUnmount with useEffect
export default function HookMouse(props) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const changeCoords = e => {
        console.log('Mouse event');
        setX(e.clientX);
        setY(e.clientY);
    };

    useEffect(() => {
        console.log('Use effect');
        window.addEventListener('mousemove', changeCoords);

        return () => {
            window.removeEventListener('mousemove', changeCoords);
        }
    }, []);

    return (
        <div>
            X: {x}, Y: {y}
        </div>
    );
}
