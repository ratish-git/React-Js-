import React, { Fragment } from "react";

const Display = (props) => {
  const renderWholeList = props.details.map((user) => {
    return (
      <table className="table table-dark" key ={user.id}>
      <tbody>
        <tr>
          <th scope="row">{user.id}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.age}</td>
          <td>{user.course}</td>
          <td>{user.details}</td>
        </tr>
      </tbody>
      </table>
    );
  });

  return (
    <Fragment>
      <hr />
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            <th scope="col">Details</th>
          </tr>
        </thead>
      </table>
      {renderWholeList}
      <hr />
    </Fragment>
  );
};

export default Display;
