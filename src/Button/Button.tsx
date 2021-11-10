import React from "react";
import s from './Button.module.css'
export type ButtonPropsType = {
    onClick: () => void
    disabled: boolean
    title: string
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => props.onClick()

    return (
        <div className={s.button}>
            <button disabled={props.disabled} onClick={onClickHandler}>{props.title}</button>
        </div>

    )
}