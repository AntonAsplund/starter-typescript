import React, { component, useState } from 'react';
import Display from '../components/Display';
import Numpad from './Numpad';
import OperatorButtons from './OperatorButtons';
import LightCharger from './LightCharger';

function Calculator() {

    const [counter, setCounter] = useState('');
    const [operator, setOperator] = useState('');
    const [oldValue, setOldValue] = useState('');
    const [operatorClicked, setOperatorClicked] = useState(false);

    const handleClick = (number) => {
        if (!operatorClicked) {
            setCounter(counter + String(number))
        } else {
            setOperatorClicked(false);
            setCounter('');
            setCounter(number);
        }
    };

    const handleClickReset = () => setCounter('');

    const handleOperatorClickChoice = (stringOperator) => {
        setOperatorClicked(true);
        setOperator(stringOperator);
        if (counter) {
            setOldValue(counter);
        } else {
            setCounter('');
        }        
    };

    const handleCalculateValue = () => {
        if (operator && counter ) {
            const result = applyOperatorAndReturnValue(operator, oldValue, counter);
            setOldValue(String(result));
            setCounter(String(result));
        } else {
            setCounter('');
        } 
    };

    return  (
        <div>
            <LightCharger />
            <Display displayValue={counter}/>
            <OperatorButtons onClickFunction={handleOperatorClickChoice}/>
            <Numpad onClickFunction={handleClick} onClickresetFunction={handleClickReset} onClickCalcFunction={handleCalculateValue}/>
        </div>
    );
}

function applyOperatorAndReturnValue(operator, oldValue, newValue) {
    if ('/' == operator) {
        return parseInt(oldValue) / parseInt(newValue);
    } else if ('*' == operator) {
        return parseInt(oldValue) * parseInt(newValue);
    } else if ('-' == operator) {
        return parseInt(oldValue) - parseInt(newValue);
    } else {
        return parseInt(oldValue) + parseInt(newValue);
    }
}

export default Calculator;