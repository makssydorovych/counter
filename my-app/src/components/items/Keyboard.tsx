import React, {useEffect, useState} from "react";
import {Button} from "./Button";


export const Keyboard = () => {



    let [minValue, setMinValue] = useState(0)
    let[maxValue, setMaxValue] = useState(5)
    let [number, setNumbers] = useState(minValue)
    let [error, setError] = useState("")
    useEffect(() => {
        let storageMin = localStorage.getItem("minValue")
        if(storageMin){
            let min = JSON.parse(storageMin)
            setMinValue(min)
            if(min < 0 ){
                setError("Error")
            }
        }
        let storageMax = localStorage.getItem("maxValue")
        if(storageMax){
            let max = JSON.parse(storageMax)
            setMaxValue(max)

        }
        })

    const count = () => {
        if (number < maxValue) {
            setNumbers(number + 1)

        }
    }
    const reset = () => {
        setNumbers(minValue)
        localStorage.setItem("minValue", JSON.stringify(minValue))


    }



    return (
        <>
            <div className={"text"}>{error && <p className={number === maxValue ? "red" : ''}>{number}</p>}
            </div>
            <Button disabled={number === maxValue} name={"count"} callBack={count}/>
            <Button disabled={number === minValue} name={"reset"} callBack={reset}/>

        </>
    )
}