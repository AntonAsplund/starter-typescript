import React from 'react';

function Numpad(props) {
    return (
        <button className={props.classes} onClick={() => props.onButtonClick(props.valueToCalculate)}>
            <span>{props.valueToDisplay}</span>
        </button>
    );
    
}

export default Numpad;