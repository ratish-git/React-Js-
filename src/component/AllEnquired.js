import React, { Component } from "react";
import JSON from "../json/db.json";
import Display from "./Display";

class AllEnquired extends Component {
  constructor(props) {
    super();

    this.state = {
      details: JSON,
    };
  }
  render() {
    return <Display details={this.state.details} />;
  }
}

export default AllEnquired;
