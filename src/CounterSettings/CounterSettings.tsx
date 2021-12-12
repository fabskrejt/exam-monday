import React, {useState} from 'react';
import './CounterSettings.css';
import {ButtonSettingsSection} from "./ButtonSettingsSection/ButtonSettingsSection";
import {DisplaySettingsSection} from "./DisplaySettingsSection/DisplaySettingsSection";

export function CounterSettings() {

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
                    <DisplaySettingsSection value={4}/>
                </div>
                <div>
                    <ButtonSettingsSection increment={increment} reset={reset} value={value}/>
                </div>

            </div>
        </div>
    );
}
