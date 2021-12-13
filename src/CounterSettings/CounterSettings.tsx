import React, {useEffect, useState} from 'react';
import './CounterSettings.css';
import {ButtonSettingsSection} from "./ButtonSettingsSection/ButtonSettingsSection";
import {DisplaySettingsSection} from "./DisplaySettingsSection/DisplaySettingsSection";

type CounterSettingsPropsType = {
    onChangeMaxValue: (settingsValue: number) => void
    onChangeStartValue: (changeStartValue: number) => void
}

export function CounterSettings(props: CounterSettingsPropsType) {

    const [startValue, setStartValue] = useState(0)
    const [maxValue, setMaxValue] = useState(1)

    useEffect(()=>{
        let checkMaxValue = localStorage.getItem('maxValue')
        let checkStartValue = localStorage.getItem('startValue')
        if (checkMaxValue && checkStartValue) {
            let max =JSON.parse(checkMaxValue)
            let start =JSON.parse(checkStartValue)
            setMaxValue(max);
            setStartValue(start);
            setSettings()
    }},[])

    const onChangeStartValue = (value: number) => {
        setStartValue(value)
        console.log(value)
    }
    const onChangeMaxValue = (value: number) => {
        setMaxValue(value)
        console.log(value)
    }

    const setSettings = () => {
        props.onChangeMaxValue(maxValue)
        props.onChangeStartValue(startValue)

    }
    return (
        <div>
            <div className='componentContainer'>
                <div>
                    <DisplaySettingsSection
                        onChangeStartValue={onChangeStartValue}
                        startValue={startValue}
                        maxValue={maxValue}
                        onChangeMaxValue={onChangeMaxValue}
                    />
                </div>
                <div>
                    <ButtonSettingsSection setSettings={setSettings} reset={() => ('')}/>
                </div>

            </div>
        </div>
    );
}
