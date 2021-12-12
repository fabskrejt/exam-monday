import React from "react";
import s from './DisplaySection.module.css'

export type DisplaySectionProps = {
    startValue: number
    maxValue: number
    currentValue:number
}

export const DisplaySection = (props: DisplaySectionProps) => {

    return (
        <div className={s.section}>
            <div className={props.currentValue === props.maxValue ? s.red : s.default}>
                <span>{props.currentValue}</span>
            </div>
        </div>

    )
}