import React from "react";
import Greeting from "../Greeting";

const WelcomeBlock = () => {
  return (
    <div>
      <Greeting firstName='marcos' />
      <em> Welcome to this cool page! </em>
    </div>
  );
};

export default WelcomeBlock;
