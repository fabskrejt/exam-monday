import React from "react";
import {Button} from "../Button/Button";
import s from './ButtonSection.module.css'

export type ButtonSectionPropsType = {
    increment: () => void
    reset: () => void
    value: number
}

export const ButtonSection = (props: ButtonSectionPropsType) => {
    const increment = () => props.increment()
    const reset = () => props.reset()

    return (
        <div className={s.section}>
            <Button onClick={increment} disabled={props.value === 5} title={'inc'}/>
            <Button onClick={reset} disabled={props.value === 0} title={'reset'}/>

            {/*            <button disabled={props.value === 5} onClick={increment}>inc</button>
            <button disabled={props.value === 0} onClick={reset}>reset</button>*/}
        </div>
    )
}