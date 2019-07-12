import React from 'react';
import ReactDOM from 'react-dom';
import ReactFCCtest from 'react-fcctest';

import "./styles.css";

class App extends React.Component{
  render(){
    return(
      <div className="app__container">
        <ReactFCCtest />
        <div id="display">0</div>
        <button id="clear">AC</button>
        <button id="divide">&divide;</button>
        <button id="multiply">&times;</button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="subtract">&minus;</button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="add">&plus;</button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="equals">=</button>
        <button id="zero">0</button>
        <button id="decimal">.</button>
      </div> 
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))