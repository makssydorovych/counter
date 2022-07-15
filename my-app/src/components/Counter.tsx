import React from "react";
import {Keyboard} from "./items/Keyboard";
import s from "./Counter.module.css"

export const Counter = () => {
    return (
        <div className={s.counter}>
            <Keyboard />
        </div>
    )

}