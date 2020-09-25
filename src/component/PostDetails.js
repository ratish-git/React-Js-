import React from "react";

const PostDetails = (props) => {
  return (
    <div className="panel panel-warning">
      <div className="panel-heading">
        <h3> PostDetails Page</h3>
      </div>
      <div className="panel-body">
        <div className="jumbotron"><h1>{props.match.params.course}</h1></div>
      </div>
    </div>
  );
};

export default PostDetails;
