import React from 'react';
import ReactDOM from 'react-dom';
import ReactFCCtest from 'react-fcctest';

class App extends React.Component{
  render(){
    return(
      <div className="app__container">
        <ReactFCCtest />
      </div> 
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"))