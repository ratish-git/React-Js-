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

  componentDidMount(){
      setTimeout(()=>{
          this.setState({initial:"Value changed in componentDidMount"})
      },2000)
  }

  render() {
    return <h1>Rendering:: {this.state.initial}</h1>;
  }
}

export default App;
