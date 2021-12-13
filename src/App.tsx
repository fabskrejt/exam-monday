import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterSettings} from "./CounterSettings/CounterSettings";

function App() {

/*    let initialState = () => {
        let checkMaxValue = localStorage.getItem('maxValue')
        let checkStartValue = localStorage.getItem('startValue')
        let maxValue: number;
        let startValue: number;
        if (checkMaxValue && checkStartValue) {
            maxValue = JSON.parse(checkMaxValue);
            startValue = JSON.parse(checkStartValue);
            return {maxValue, startValue}
        } else return {maxValue: 1, startValue: 0}


        /!*        if (checkMaxValue) {
                    maxValue = JSON.parse(checkMaxValue);
                }
                if (checkStartValue) {
                    startValue = JSON.parse(checkStartValue);
                }*!/
        /!*return {maxValue, startValue}*!/

        /!*        let startValue = localStorage.getItem('startValue');
                return maxValue && startValue ? {maxValue, startValue} : {maxValue: 1, startValue: 0}*!/
    }*/
    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const [currentValue, setCurrentValue] = useState(1)

    useEffect(() => {
        let checkMaxValue = localStorage.getItem('maxValue')
        let checkStartValue = localStorage.getItem('startValue')
        if (checkMaxValue && checkStartValue) {
            let max =JSON.parse(checkMaxValue)
            let start =JSON.parse(checkStartValue)
            debugger
            setMaxValue(max);
            setStartValue(JSON.parse(start));

        }
    }, [startValue])

    const increment = () => {
        setCurrentValue(currentValue + 1)
    }
    const reset = () => {
        setCurrentValue(startValue)
    }

    const onChangeMaxValue = (changeMaxValue: number) => {
        setMaxValue(changeMaxValue)
        localStorage.setItem('maxValue', JSON.stringify(changeMaxValue))
    }
    const onChangeStartValue = (changeStartValue: number) => {
        setStartValue(changeStartValue)
        setCurrentValue(changeStartValue)
        localStorage.setItem('startValue', JSON.stringify(changeStartValue))
    }
    return (
        <div className="App">
            <CounterSettings
                onChangeMaxValue={onChangeMaxValue}
                onChangeStartValue={onChangeStartValue}
            />
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                increment={increment}
                currentValue={currentValue}
                reset={reset}
            />
        </div>
    );
}

export default App;
