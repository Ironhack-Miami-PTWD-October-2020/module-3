import React from 'react'; // <== import React
import './app.css';  // <== import style sheet
 
const App = () => {
  return (
      <div className="appMain">
          <div className="topSection">
            <nav>
                <img src="/images/ironhack-logo.svg" />
                <img src="/images/menu-top.svg" />
            </nav>
            <div className="topSectionText">
                <h1>Say Hello to ReactJS</h1>
                <p>You will learn how to use <br /> the most popular frontend library, <br /> and become a Super ninja developer.</p>
                <button>Awesome!</button>
            </div>
          </div>
          <div className="bottomSection">

          </div>
      </div>
  )
};
 
export default App;