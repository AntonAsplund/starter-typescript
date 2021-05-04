import React from 'react';
import Button from './Button';

function Numpad(props) {
    return (
        <div className="numpad"> 
            <Button onButtonClick={props.onClickFunction} valueToDisplay={1} valueToCalculate={1} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={2} valueToCalculate={2} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={3} valueToCalculate={3} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={4} valueToCalculate={4} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={5} valueToCalculate={5} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={6} valueToCalculate={6} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={7} valueToCalculate={7} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={8} valueToCalculate={8} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={9} valueToCalculate={9} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickFunction} valueToDisplay={0} valueToCalculate={0} classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickresetFunction} valueToDisplay='Reset' valueToCalculate='' classes='btn numberBtn'/>
            <Button onButtonClick={props.onClickCalcFunction} valueToDisplay='Calc' valueToCalculate='' classes='btn numberBtn'/>
        </div>
    );
    
}

export default Numpad;