import React, { component, useState } from 'react';
import Display from '../components/Display';
import Numpad from './Numpad';
import OperatorButtons from './OperatorButtons';
import LightCharger from './LightCharger';

function Calculator() {

    const [counter, setCounter] = useState('');
    const [operator, setOperator] = useState('');
    const [oldValue, setOldValue] = useState('');

    const handleClick = (number) => {
        setCounter(counter + number)
    };

    const handleClickReset = () => setCounter('');

    const handleOperatorClickChoice = (stringOperator) => {
        console.log(stringOperator);
        setOperator(stringOperator);
        setOldValue(counter);
        setCounter('');
    };

    const handleCalculateValue = () => {
        if (operator && counter ) {
            console.log(operator);
            console.log(counter);
            const result = applyOperatorAndReturnValue(operator, oldValue, counter);
            setOldValue(String(result));
            setCounter(String(result));
        } else {
            setCounter('');
            console.log('Counter reset');
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