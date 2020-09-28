import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { initial: "1st value of state from Constructor" };
  }

  //to be used when value is passed as props in main componet
  //   static getDerivedStateFromProps(props, state) {
  //     return { initial: props.Second };
  //   }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ initial: "Value changed in componentDidMount" });
    }, 2000);
  }
  change = () => {
    this.setState({ initial: "Value changed on Click" });
  };

  // if this is specified as false value of a component will not update
  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("CON1").innerHTML =
      "Before Update the value was--->>>> " + prevState.initial;
  }

  componentDidUpdate() {
    document.getElementById("CON").innerHTML =
      "The updated value is --->>>> " + this.state.initial;
  }

  render() {
    return (
      <div>
        <h1>Rendering:: {this.state.initial}</h1>
        <button type="button" onClick={this.change}>
          Change
        </button>
        <div id="CON1"></div>
        <div id="CON"></div>
      </div>
    );
  }
}

export default App;
