import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterSettings} from "./CounterSettings/CounterSettings";

function App() {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const [currentValue, setCurrentValue] = useState(startValue)

    const increment = () => {
        setCurrentValue(currentValue + 1)
    }
    const reset = () => {
        setCurrentValue(startValue)
    }

    const onChangeMaxValue = (changeMaxValue: number) => {
        setMaxValue(changeMaxValue)
    }
    const onChangeStartValue = (changeStartValue: number) => {
        setStartValue(changeStartValue)
        setCurrentValue(changeStartValue)
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
