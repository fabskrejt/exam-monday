import React from "react";
import {Button} from "../Button/Button";
import s from './ButtonSection.module.css'

export type ButtonSectionPropsType = {
    increment: () => void
    reset: () => void
    value: number
    maxValue:number
}

export const ButtonSection = (props: ButtonSectionPropsType) => {
    const increment = () => props.increment()
    const reset = () => props.reset()

    return (
        <div className={s.section}>
            <Button onClick={increment} disabled={props.value === props.maxValue} title={'inc'}/>
            <Button onClick={reset} disabled={props.value === 0} title={'reset'}/>
        </div>
    )
}