import React, {useState,useEffect} from 'react'
import { Validiv } from './ValidationComponentElements'

const ValidationComponent = ({input}) => {
    let [styles, setStyles] = useState(false)
    useEffect(() => {
        input.length <= 5 ? setStyles(true) : input.length >= 20 ? setStyles(true) : setStyles(false)
    },[input])
    return (
        <Validiv styles = {styles}>
            <p> {input.length <= 5 ? "Text too short" : input.length >= 20 ? "Text too long" : "Perfect"} </p>
        </Validiv>
    )
}

export default ValidationComponent
