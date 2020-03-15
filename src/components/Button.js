import React from 'react';

const Button = props => {
    return (
        <div className="btn">
            <button onClick={() => { props.onClick(props.value) }}>{props.value}</button>
        </div>
    )
}

export default Button;