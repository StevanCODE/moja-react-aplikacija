import React, {useState} from 'react'
import InputFieldComponent from '../../Components/InputField/InputFieldComponent'
import StudentComponent from '../../Components/Student/StudentComponent'
import { AudioI, HomePageDiv, Video } from './HomePageElements'


const HomePage = () => {
    const [aud, setAud] = useState(false)
    const handleAud = () => {
        setAud(true)
    }
    return (
        <>
        <iframe src="/KingoftheStreets.mp3" allow="autoplay" style={{display: "none"}} id="iframeAudio">
        </iframe> 
        <AudioI autoPlay = {aud} loop = {true}  id="playAudio">
        <source src="/KingoftheStreets.mp3"/>
        </AudioI>
        <Video src = "/PexelsVideos2759484.mp4" loop = {true} autoPlay = {true} ></Video>
        <HomePageDiv onClick = {handleAud}>
            <InputFieldComponent/>
            <StudentComponent/>
        </HomePageDiv>
        </>
    )
}

export default HomePage
