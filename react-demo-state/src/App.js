import "./App.css";

import Counter from "./components/Counter";
import LikeButton from "./components/LikeButton";

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <Counter />

        <br />

        <LikeButton />
      </div>
    </div>
  );
}

export default App;
