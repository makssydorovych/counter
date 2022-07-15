import React from "react";
import s from "../Counter.module.css"
type ButtonType = {
    name: string
    callBack: () => void
    disabled: boolean
}
export const Button = (props: ButtonType) => {

    return (
        <button className={s.button} disabled={props.disabled} onClick={props.callBack}>{props.name} </button>
    )
}