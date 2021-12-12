import React, {useState} from 'react';
import './Counter.css';
import {DisplaySection} from "../DisplaySection/DisplaySection";
import {ButtonSection} from "../ButtonSection/ButtonSection";

type CounterPropsType = {
    maxValue: number
    startValue: number
    increment: () => void
    currentValue: number
    reset: () => void
}

export function Counter(props: CounterPropsType) {

    /*    const [value, setValue] = useState(0)
        const increment = () => {
            setValue(value + 1)
        }
        const reset = () => {
            setValue(0)
        }*/
    return (
        <div className="App">
            <div className='componentContainer'>
                <div>
                    <DisplaySection currentValue={props.currentValue} startValue={props.startValue}
                                    maxValue={props.maxValue}/>
                </div>
                <div>
                    <ButtonSection increment={props.increment} reset={props.reset} value={props.currentValue} maxValue={props.maxValue}/>
                </div>

            </div>
        </div>
    );
}
