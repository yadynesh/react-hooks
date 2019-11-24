import React, { useEffect, useRef } from 'react';
export default function InputForm(props) {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return (
        <div>
            <input ref={inputRef}></input>
        </div>
    );
}


