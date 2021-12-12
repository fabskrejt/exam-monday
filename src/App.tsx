import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterSettings} from "./CounterSettings/CounterSettings";

function App() {
    /*
        const [value, setValue] = useState(0)
        const increment = () => {
            setValue(value + 1)
        }
        const reset = () => {
            setValue(0)
        }*/

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)
    const [currentValue, setCurrentValue] = useState(startValue)


    console.log(startValue)
    console.log(maxValue)

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

            {/*            <div className='componentContainer'>
                <div>
                    <DisplaySection value={value}/>
                </div>
                <div>
                    <ButtonSection increment={increment} reset={reset} value={value}/>
                </div>
            </div>*/}
        </div>
    );
}

export default App;
