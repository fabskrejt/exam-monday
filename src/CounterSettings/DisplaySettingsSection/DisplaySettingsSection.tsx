import React from "react";
import s from './DisplaySettingsSection.module.css'

export type DisplaySectionProps = {
    value: number
}

export const DisplaySettingsSection = (props: DisplaySectionProps) => {

    return (
        <div className={s.section}>
            <div className={props.value === 5 ? s.red : s.default}>
                <div>
                    <span>max value:</span> <input/>
                </div>
                <div>
                    <span>start value:</span> <input/>
                </div>

                {/*    <span>{props.value}</span>*/}
            </div>
        </div>

    )
}