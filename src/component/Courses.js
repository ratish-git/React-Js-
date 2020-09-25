import React from "react";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="panel panel-success">
      <div className="panel-heading">
        <h3> Course Details</h3>
      </div>
      <div className="panel-body">
        <div className="jumbotron">
          <h3>Javascript</h3>
          <Link to="post/javascript">Details</Link>
          <br />
          <Link to="post/javascript/enquiry">Enquire now</Link>
          <h3>Java</h3>
          <Link to="post/java">Details</Link>
          <br />
          <Link to="post/java/enquiry">Enquire now</Link>
          <h3>Python</h3>
          <Link to="post/python">Details</Link>
          <br />
          <Link to="post/python/enquiry">Enquire now</Link>
        </div>
      </div>
    </div>
  );
};

export default Courses;
