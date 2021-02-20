import React from 'react'

// in order to destructure the props coming into the component, you can add {} around the parameters of the function if it is a functional component

// when you export and dont use default, you will have to call the function/class name in {} in the file you are importing it too.
export function IdCard({lastName, firstName, gender, height, birth, picture}) {
    return (
        <div className="idCardContainer">
           <img src={picture} /> 
           <div>
               <h3> First Name: {firstName} </h3>
               <h3> Last Name: {lastName} </h3>
               <h3> Gender: {gender} </h3>
               <h3> Height: {height/100}m </h3>
               <h3> Birth: {birth.toDateString()} </h3>
           </div>
        </div>
    )
}
