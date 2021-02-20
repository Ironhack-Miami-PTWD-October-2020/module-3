import "./App.css";

import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

import CounterWithHooks from "./components/CounterWithHooks";

import LikeButtonWithHooks from "./components/LikeButtonWithHooks";

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Counter />

        <br />

        <LikeButton />

        <br />

        <CounterWithHooks />

        <br />

        <LikeButtonWithHooks />
      </div>
    </div>
  );
}

export default App;
