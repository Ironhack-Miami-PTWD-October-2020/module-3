import React from "react";

// function Greeting() {
//   const message = "Hello Ana";

//   return <div> {message} </div>;
// }

const Greeting = (props) => {
  return <div> {props.firstName} </div>;
};

export default Greeting;
