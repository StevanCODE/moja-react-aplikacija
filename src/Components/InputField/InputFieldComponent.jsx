import React, {useState} from 'react'
import CharComponent from '../CharComponent/CharComponent'
import ValidationComponent from '../ValidationComponent/ValidationComponent'
import { Input, InputDiv } from './InputFieldElements'


const InputFieldComponent = () => {
    const [input,setInput] = useState("")
    const [clicked,setClicked] = useState(false)

    const handleClick = () => {
        setClicked(true)
    }
    const handleInput = (e) => {
        setInput(e.target.value.toUpperCase())
    }
    return (
        <InputDiv>
            <Input type = "text"  name = "input" onClick = {handleClick} placeholder = {clicked == false ? "Click Me!" : "Type Here"} onChange = {handleInput} value = {input}/>
            <p>  Input Length: {input.length} </p>
            <ValidationComponent input = {input} />
            <CharComponent input = {input} setInput = {setInput}/>
        </InputDiv>
    )
}

export default InputFieldComponent
