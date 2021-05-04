import React from 'react';
import Button from './Button';

function OperatorButtons(props) {

    return  (
        <div className='operatorNumpad'>
            <Button onButtonClick={props.onClickFunction} valueToDisplay='/' valueToCalculate='/' classes='btn operatorBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay='*' valueToCalculate='*' classes='btn operatorBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay='-' valueToCalculate='-' classes='btn operatorBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay='+' valueToCalculate='+' classes='btn operatorBtn'/>

        </div>
    );

}

export default OperatorButtons;