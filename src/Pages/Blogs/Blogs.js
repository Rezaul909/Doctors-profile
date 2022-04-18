import React from "react";
import { Table } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container">
        
      <div className="fs-5">
        <h1 className="mt-5">Question-1: Difference between Authentication and Authorization.</h1>
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

      <div className="mt-5">
        <h2>Question-2: why we use firebase? What are the other options to implement authentication?</h2>
        <p className="fs-4">Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. Firebase provides tools for tracking analytics, reporting and fixing app crashes, creating marketing and product experiment.</p>
        <p className="fs-4">The other options to implement authentication without firebase are Parse, Back4App, AWS Amplify, Kuzzle, Couchbase, NativeScript etc. </p>
      </div>

      
    </div>
  );
};

export default Blogs;
