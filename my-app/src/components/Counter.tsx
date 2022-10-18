import React from "react";
import {Keyboard} from "./items/Keyboard";
import s from "./Counter.module.css"
import {Settings} from "./items/Settings";

export const Counter = () => {
    return (
        <div className={s.wrap}>
            <div className={s.counter}>
            <Keyboard />
            </div>
            <div className={s.counter}>
            <Settings />
            </div>
        </div>

    )

}