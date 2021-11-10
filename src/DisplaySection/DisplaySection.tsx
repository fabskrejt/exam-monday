import React from "react";
import s from './DisplaySection.module.css'

export type DisplaySectionProps = {
    value: number
}

export const DisplaySection = (props: DisplaySectionProps) => {

    return (
        <div className={s.section}>
            <div className={props.value === 5 ? s.red : s.default}>
                <span>{props.value}</span>
            </div>
        </div>

    )
}