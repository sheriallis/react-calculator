import React from "react";
import ReactDOM from "react-dom";
import ReactFCCtest from "react-fcctest";

import "./styles.css";

class App extends React.Component {
  state = {
    sum: "",
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
      sum: this.state.sum + e.target.value,
      currentValue: this.state.currentValue + e.target.value,
    });
  };

  handleDecimal = e => {
    // check if the currentValue already includes a decimal point
    if(!this.state.currentValue.includes(".")){
      this.setState({
        sum: this.state.sum + e.target.value,
        currentValue: this.state.currentValue + e.target.value,
      });
    }

      //if you click a decimal point and there's no currentValue, add a zero before the decimal point
    if(this.state.currentValue === ""){
      this.setState({
        sum: "0" + e.target.value,
        currentValue: "0" + e.target.value,
      })
    }
  };

  handleOperator = e => {
    this.setState({
      sum: this.state.sum + e.target.value,
      currentOperator: e.target.value,
      prevValue: this.state.currentValue,
      currentValue: "",
    });
  };

  handleClear = () => {
    this.setState({
      sum: "",
      currentValue: "",
      prevValue: ""
    });
  };

  handleCalculation = () => {
    if (this.state.currentOperator === "+") {
      this.add();
    }
    if (this.state.currentOperator === "-") {
      this.subtract();
    }
    if (this.state.currentOperator === "*") {
      this.multiply();
    }
    if (this.state.currentOperator === "/") {
      this.divide();
    }
  };

  add = () => {
    this.setState({
      currentValue:
        parseFloat(Number(this.state.prevValue)) +
        parseFloat(Number(this.state.currentValue))
    });
  };
  subtract = () => {
    this.setState({
      currentValue:
        parseFloat(Number(this.state.prevValue)) -
        parseFloat(Number(this.state.currentValue))
    });
  };

  multiply = () => {
    this.setState({
      currentValue:
        parseFloat(Number(this.state.prevValue)) *
        parseFloat(Number(this.state.currentValue))
    });
  };

  divide = () => {
    this.setState({
      currentValue:
        parseFloat(Number(this.state.prevValue)) /
        parseFloat(Number(this.state.currentValue))
    });
  };

  render() {
    return (
      <div className="app__container">
        <ReactFCCtest />
        <div id="display-sum">{this.state.sum}</div>
        <div id="display">{this.state.currentValue === "" ? 0 : this.state.currentValue}</div>
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
