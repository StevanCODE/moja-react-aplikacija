import React, {useState,useEffect} from 'react'
import { getStudent } from '../../services'
import { StudentDiv } from './StudentElements'

const StudentComponent = () => {
    const [student,setStudent] = useState({})
    const [placeOfBirth,setPlaceOfBirth] = useState({})
    useEffect(() => {
        getStudent().then(res => {
            setStudent(res.data)
        })
    },[])
    
    useEffect(() => {
         setPlaceOfBirth(student.placeOfBirth)
    },[student])

    const {name, lastName, age} = student
    let {city,country,zip} = ""
    if(placeOfBirth !== undefined) {
         city = placeOfBirth.city
         country = placeOfBirth.country
         zip = placeOfBirth.zip
    }
    
    console.log(placeOfBirth)

    
    return (
        <StudentDiv>
        <img style = {{width: "200px", position: "relative", bottom: "45px", backgroundColor: "transparent" }} src = "/neonstudent2.png"></img>
         <div>
            <p> Name: {name} </p>
            <p> Last Name: {lastName} </p>
            <p> Age:  {age} </p>
         </div>

       { placeOfBirth !== undefined ? <div>
            <p> Place of Birth :</p>
            <p> City: {city} </p>
            <p> Country: {country} </p>
            <p> Zip: {zip} </p>
        </div>  : <div> Waiting for Place of Birth.. </div>}
        </StudentDiv>
    )
}

export default StudentComponent
