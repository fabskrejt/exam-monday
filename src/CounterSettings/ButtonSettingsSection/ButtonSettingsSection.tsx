import React from "react";
import s from './ButtonSettingsSection.module.css'
import {Button} from "../../Button/Button";

export type ButtonSectionPropsType = {
    setSettings: () => void
    reset: () => void
}

export const ButtonSettingsSection = (props: ButtonSectionPropsType) => {
    const setSettings = () => props.setSettings()
    const reset = () => props.reset()

    return (
        <div className={s.section}>
            <Button onClick={setSettings} disabled={false} title={'set'}/>
        </div>
    )
}