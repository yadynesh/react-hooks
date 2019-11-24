import React from 'react';

function Count(props) {
    console.log('Count rendered:' + props.count)
    return (
        <div>
            {props.count}
        </div>
    );
}

export default React.memo(Count);
