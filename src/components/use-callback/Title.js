import React from 'react';


function Title(props) {
    console.log('Rendering title: ' + props.title);
    return (
        <div>
            {props.title}
        </div>
    );
}

export default React.memo(Title);
