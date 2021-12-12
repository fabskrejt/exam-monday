import React, {useState} from 'react';
import './App.css';
import {ButtonSection} from "./ButtonSection/ButtonSection";
import {DisplaySection} from "./DisplaySection/DisplaySection";
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
    return (
        <div className="App">
            <CounterSettings/>
            <Counter/>

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
