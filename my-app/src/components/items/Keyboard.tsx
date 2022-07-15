import React, {useState} from "react";
import {Button} from "./Button";


export const Keyboard = () => {
    const minValue = 0
    const maxValue = 5
    let [number, setNumbers] = useState(minValue)
    const count = () => {
        if (number < maxValue) {
            setNumbers(number + 1)
        }
    }
    const reset = () => {
        setNumbers(0)

    }

    return (
        <>
            <p className={number === maxValue ? "red" : ''}>{number}</p>
            <Button disabled={number === maxValue} name={"count"} callBack={count}/>
            <Button disabled={number === minValue} name={"reset"} callBack={reset}/>
        </>
    )
}