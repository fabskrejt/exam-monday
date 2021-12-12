import React from "react";
import s from './ButtonSettingsSection.module.css'
import {Button} from "../../Button/Button";

export type ButtonSectionPropsType = {
    increment: () => void
    reset: () => void
    value: number
}

export const ButtonSettingsSection = (props: ButtonSectionPropsType) => {
    const increment = () => props.increment()
    const reset = () => props.reset()

    return (
        <div className={s.section}>
            <Button onClick={increment} disabled={props.value === 5} title={'set'}/>
        </div>
    )
}