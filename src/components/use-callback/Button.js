import React from 'react';

function Button(props) {
    console.log('Rendering Button: ' + props.children);
    return (
        <button onClick={props.handleClick}>
            {props.children}
        </button>
    );
}

export default React.memo(Button);
