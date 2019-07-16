import React from "react";
import ReactDOM from "react-dom";
import ReactFCCtest from "react-fcctest";

import "./styles.css";

class App extends React.Component {
  state = {
    formula: "",
    currentValue: "",
    prevValue: "",
    currentOperator: "",
  };

  handleNumClick = e => {
    if(e.target.value === "0"){
      if(this.state.currentValue === "" || /^0/.test(this.state.currentValue)){
        return;
      }
    }

    this.setState({
      formula: this.state.formula + e.target.value,
      currentValue: this.state.currentValue + e.target.value,
    });
  };

  handleDecimal = e => {
    // check if the currentValue already includes a decimal point
    if(!this.state.currentValue.includes(".")){
      this.setState({
        formula: this.state.formula + e.target.value,
        currentValue: this.state.currentValue + e.target.value,
      });
    }

      //if you click a decimal point and there's no currentValue, add a zero before the decimal point
    if(this.state.currentValue === ""){
      this.setState({
        formula: "0" + e.target.value,
        currentValue: "0" + e.target.value,
      })
    }
  };

  handleOperator = e => {
    const endOperator = /[\+\*\/]$/;

    if(this.state.formula === "" && e.target.value !== "-"){
      return;
    }

    //If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign.
    if(endOperator.test(this.state.formula) && e.target.value !== "-"){
      this.setState({
        formula: this.state.formula.slice(0, -1) + e.target.value,
        currentOperator: e.target.value,
      })      
    } 

    else if(this.state.formula === "" && e.target.value === "-"){
      this.setState({
        formula: "-",
        currentValue: "-"
      })
    }

    else {
      this.setState({
        formula: this.state.formula + e.target.value,
        currentOperator: e.target.value,
        prevValue: this.state.currentValue,
        currentValue: "",
      });
    }


  };

  handleClear = () => {
    this.setState({
      formula: "",
      currentValue: "",
      prevValue: ""
    });
  };

  handleCalculation = () => {
    const result = eval(this.state.formula);

    this.setState({
      currentValue: result,
      formula: result,
      prevValue: result
    })
  };

  render() {
    return (
      <div className="app__container">
      {/* <ReactFCCtest /> */}
        <div id="display-formula">{this.state.formula}</div>
        <div id="display">
         {this.state.currentValue === "" ? 
         0 : this.state.currentValue}
        </div>
        <button id="clear" onClick={this.handleClear}>
          AC
        </button>
        <button
          id="divide"
          value="/"
          onClick={this.handleOperator}
          className="operator"
        >
          &divide;
        </button>
        <button
          id="multiply"
          value="*"
          onClick={this.handleOperator}
          className="operator"
        >
          &times;
        </button>
        <button id="seven" value="7" onClick={this.handleNumClick}>
          7
        </button>
        <button id="eight" value="8" onClick={this.handleNumClick}>
          8
        </button>
        <button id="nine" value="9" onClick={this.handleNumClick}>
          9
        </button>
        <button
          id="subtract"
          value="-"
          onClick={this.handleOperator}
          className="operator"
        >
          &minus;
        </button>
        <button id="four" value="4" onClick={this.handleNumClick}>
          4
        </button>
        <button id="five" value="5" onClick={this.handleNumClick}>
          5
        </button>
        <button id="six" value="6" onClick={this.handleNumClick}>
          6
        </button>
        <button
          id="add"
          value="+"
          onClick={this.handleOperator}
          className="operator"
        >
          +
        </button>
        <button id="one" value="1" onClick={this.handleNumClick}>
          1
        </button>
        <button id="two" value="2" onClick={this.handleNumClick}>
          2
        </button>
        <button id="three" value="3" onClick={this.handleNumClick}>
          3
        </button>
        <button id="zero" value="0" onClick={this.handleNumClick}>
          0
        </button>
        <button id="decimal" value="." onClick={this.handleDecimal}>
          .
        </button>
        <button
          id="equals"
          value="="
          onClick={this.handleCalculation}
          className="operator"
        >
          =
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
