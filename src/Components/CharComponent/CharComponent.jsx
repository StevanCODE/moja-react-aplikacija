import React, {useState,useEffect} from 'react'
import {CharDiv,CharWrap} from "./CharComponentElements"

const CharComponent = ({input,setInput}) => {
    const [chars, setChars] = useState([])
    useEffect(() =>{
        setChars(input.split(""))
    },[input])

    useEffect(() => {
       setInput(chars.join("")) 
    },[chars,setInput])

    const deleteChar = (el) => {
        let index = chars.indexOf(el.target.textContent.trim(""))
       setChars((chars.filter((char,i) => i !== index)))
    }
    
    return (
     <>
     <CharWrap>
      {chars.map((el,i) => {
          return (
              <CharDiv key = {i} onClick = {deleteChar}> {el} </CharDiv>
          )
      })}
      </CharWrap>
     </>
    )
}

export default CharComponent
