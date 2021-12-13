import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterSettings} from "./CounterSettings/CounterSettings";

function App() {


    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const [currentValue, setCurrentValue] = useState(startValue)

    useEffect(()=>{
        let checkMaxValue = localStorage.getItem('maxValue')
        let checkStartValue = localStorage.getItem('startValue')
        if (checkMaxValue && checkStartValue) {
            let max =JSON.parse(checkMaxValue)
            let start =JSON.parse(checkStartValue)
            setMaxValue(max);
            setStartValue(start);
        }},[])

    useEffect(()=>{
        //localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setCurrentValue(startValue)
    },[startValue])
    useEffect(()=>{
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },[maxValue])


    const increment = () => {
        setCurrentValue(currentValue + 1)
    }
    const reset = () => {
        setCurrentValue(startValue)
    }

    const onChangeMaxValue = (changeMaxValue: number) => {
        setMaxValue(changeMaxValue)
        /*localStorage.setItem('maxValue', JSON.stringify(changeMaxValue))*/
    }
    const onChangeStartValue = (changeStartValue: number) => {
        setStartValue(changeStartValue)
        setCurrentValue(changeStartValue)
    /*    localStorage.setItem('startValue', JSON.stringify(changeStartValue))*/
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
