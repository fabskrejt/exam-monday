import React, {useState} from 'react';
import './App.css';
import {ButtonSection} from "./ButtonSection/ButtonSection";
import {DisplaySection} from "./DisplaySection/DisplaySection";

function App() {

    const [value, setValue] = useState(0)
    const increment = () => {
        setValue(value + 1)
    }
    const reset = () => {
        setValue(0)
    }
    return (
        <div className="App">
            <div className='componentContainer'>
                <div>
                    <DisplaySection value={value}/>
                </div>
                <div>
                    <ButtonSection increment={increment} reset={reset} value={value}/>
                </div>

            </div>
        </div>
    );
}

export default App;
