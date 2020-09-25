import React from "react";
import "./App.css";

const LOCALSTORAGE_KEY="C:/Users/LENOVO-PC/Desktop/React practise/myproject.src/json/db.json";

class EnquiryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null,
      emailId: "",
      errormessage: "",
      
    };
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "age") {
      if (val !== "" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };

  validateJson(json) {
    let validJson;
    try {
      validJson = JSON.stringify(JSON.parse(this.state.json), null, 2);
    } catch (e) {
      throw e;
    }
    return validJson;
  }

  saveJson = () => {
    const validJson = this.validateJson(this.state.json);
    if (!validJson) return;
    window.localStorage.setItem(LOCALSTORAGE_KEY, validJson);
  };

  render() {
    return (
      <div className="App-header">
        <form>
          <div className="form-group">
            <h1>{this.state.username} we will get back to you..</h1>
            <p>Enter your name:</p>
            <input
              type="text"
              name="username"
              placeholder="Enter name"
              className="form-control"
              onChange={this.myChangeHandler}
            />
          </div>
          <div className="form-group">
            <p>Enter your email:</p>
            <input
              type="text"
              email="emailId"
              placeholder="Enter email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <p>Enter your age:</p>
            <input
              className="form-control"
              type="text"
              name="age"
              placeholder="Enter age"
              onChange={this.myChangeHandler}
            />
            {this.state.errormessage}
          </div>
          <div className="form-group">
            <p>Select your Course:</p>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Javascript</option>
              <option>Java</option>
              <option>Python</option>
            </select>
          </div>
          <div className="form-group">
            <p>Please Enter your detailed enquiry:</p>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            onClick={this.saveJson}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default EnquiryPage;
