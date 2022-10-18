import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

export const Settings = () =>{
    let [min, setMin] = useState(0)
    let [max, setMax] = useState(0)

    const handlerInputMin = (e:ChangeEvent<HTMLInputElement>) =>{
        setMin(e.target.valueAsNumber)
    }
    const handlerInputMax = (e:ChangeEvent<HTMLInputElement>) =>{
        setMax(e.target.valueAsNumber)
    }
    const set = () =>{
        localStorage.setItem("minValue", JSON.stringify(min))
        localStorage.setItem("maxValue", JSON.stringify(max))
    }

    return (
        <>
            <input type={"number"} value={min} onChange={handlerInputMin}/>
            <input type={"number"} value={max} onChange={handlerInputMax}/>
            <Button name={"Set"} callBack={set} disabled={false}></Button>
        </>
    );
}
