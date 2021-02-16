import logo from "./logo.svg";
import "./App.css";

import User from "./components/User"; // 🚨🚨 must import component to use it 🚨🚨

const statement = <h1>Hello there, PTWD 10/2020 ♥️</h1>;

const ironhacker = {
  firstName: "sebastian",
  course: "web dev"
};

const { firstName, course } = ironhacker;

function capitalizeFirstLetter() {
  return `${firstName[0].toUpperCase() + firstName.slice(1)}`;
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {statement}
        <h3>
          hi, {ironhacker.firstName}. how's {ironhacker.course}?
        </h3>
        <h4> {capitalizeFirstLetter()} </h4>
        <hr />
        <h4>
          {firstName.toUpperCase()} is attending {course.toUpperCase()}
        </h4>
        <hr />
        <img src={logo} alt='react logo' width='200' />
        <hr />
        <User /> {/* 🚨🚨 use component as a self-closing tag unless it will receive children */}
      </header>
    </div>
  );
}

export default App;
