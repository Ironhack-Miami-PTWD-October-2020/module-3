import logo from "./logo.svg";
import "./App.css";

import Greeting from "./components/Greeting";

import WelcomeBlock from "./components/WelcomeBlock";

import User from "./components/User";

import UsersList from "./components/UsersList";

import Color from "./components/Color";

// we can also use components pre-made for us

import ReactPlayer from "react-player";

// Inside the App.js, create a variable and assign it a value equal to your full name.

const name = "sebastian montoya";

// display your name
// capitalize both first and last name
// create and invoke a function that will return just capitalized first letters of your fist and last name.
// utilize image logo and display it.

function capitalize() {
  const upper = name
    .split(" ")
    .map((el) => el.charAt(0).toUpperCase() + el.slice(1))
    .join(" ");

  return upper;
}

// background-color ==> backgroundColor
// onclick ==> onClick

function App() {
  return (
    <div className='App'>
      <div>
        <h2> {name} </h2>

        <h3> {name.toUpperCase()} </h3>

        <h4> {capitalize()} </h4>

        <img src={logo} alt='log' width='200' />

        <Color favColor='pink ' />

        <Greeting firstName='ida' />

        <Color favColor='orange' />

        <WelcomeBlock />

        <hr style={{ border: "5px solid red" }} />

        <User fullName='ana ortez' bootcamp='web dev' />

        <UsersList location='miami'>
          <User fullName='Anna' bootcamp='web dev' />
          <User fullName='Rachel' bootcamp='ux' />
          <User fullName='Sebastian' bootcamp='data' />
          <User fullName='Michael' bootcamp='cyber' />
          <User fullName='Christian' bootcamp='web dev' />
        </UsersList>

        <hr />
        <Color favColor='blue' />

        <hr />

        <ReactPlayer url='https://www.youtube.com/watch?v=jEnd8JIMii4' playing volume='0' />
      </div>
    </div>
  );
}

export default App;
