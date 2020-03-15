import React from 'react';

const Row = props => {
    return (
        <div className="keypad__row">
            {props.children}
        </div>
    )
}

export default Row;