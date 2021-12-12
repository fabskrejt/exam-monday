import React from "react";
import s from './DisplaySettingsSection.module.css'

export type DisplaySectionProps = {
    onChangeStartValue: (value: number) => void
    onChangeMaxValue: (value: number) => void
    startValue: number
    maxValue: number
}

export const DisplaySettingsSection = (props: DisplaySectionProps) => {

    return (
        <div className={s.section}>
            <div className={props.maxValue <= props.startValue ? s.red : s.default}>
                <div>
                    <span>max value:</span> <input
                    type={"number"}
                    value={props.maxValue}
                    onChange={(e) => props.onChangeMaxValue(+e.currentTarget.value)}
                />
                </div>
                <div className={props.startValue < 0 ? s.red : s.default}>
                    <span>start value:</span> <input
                    type={"number"}
                    value={props.startValue}
                    onChange={(e) => props.onChangeStartValue(+e.currentTarget.value)}/>
                </div>

                {/*    <span>{props.value}</span>*/}
            </div>
        </div>

    )
}