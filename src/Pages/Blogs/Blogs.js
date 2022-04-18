import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
        <h1 className="mt-5">Question-1: Difference between Authentication and Authorization.</h1>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Authentication</th>
              <th>Authorization</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Authentication verifies who the user is.</td>
              <td>Authorization determines what resources a user can access.</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Authentication works through passwords, biometrics, one-time pins, or apps</td>
              <td>Authorization works through settings maintained by security teams</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Authentication is visible to the user.</td>
              <td>Authorization is not visible to the user.</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Authentication is Partially changeable by the user.</td>
              <td>Authorization is not changeable by the user.</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Authentication determines whether the person is user or not.</td>
              <td>While Authorization determines What permission do user have?.</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Blogs;
