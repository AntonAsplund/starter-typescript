import React from 'react';

function Display(props) {

    return  (
        <div>
            <input type="text" readOnly className="CalcField" value={props.displayValue}></input>
        </div>
    );

}

export default Display;