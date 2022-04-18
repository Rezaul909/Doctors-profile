import React, { useState } from "react";
import { Button, Form, Toast, ToastContainer } from "react-bootstrap";
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = event => {
      setName(event.target.value);
  }
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleToggleForm = (event) => {
    setRegistered(event.target.checked);
  };
  const handleFormSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    setValidated(true);

    if (registered) {
      signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          setError(error.massage);
          console.log(error);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setEmail("");
          setPassword("");
          verifyEmail();
          setUserName();
        })
        .catch((error) => {
          setError(error.massage);
        });
    }
    event.preventDefault();
  };
  const setUserName = () =>{
    updateProfile(auth.currentUser, {
        displayName: name
    })
    .then(() =>{
        console.log("Update user name");
    })
    .catch(error =>{
        setError(error.massage);
    })
  }
  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      console.log("email sent");
    });
  };
  const handleResetPassword = () =>{
      sendPasswordResetEmail(auth, email)
      .then(() => {
          console.log("reset mail sent");
      })
  }
  return (
    <div>
      <h1 className="text-primary mt-5">
        Please {registered ? "Login" : "Register"}..
      </h1>
      <div className="mt-5 w-25 mx-auto">
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          {!registered ? 
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Enter your name</Form.Label>
                <Form.Control
                onBlur={handleNameBlur}
                type="text"
                placeholder="Enter name"
                required
                />
            </Form.Group> : ''
          } 

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onBlur={handleEmailBlur}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onBlur={handlePasswordBlur}
              type="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleToggleForm}
              type="checkbox"
              label="Already registered?"
            />
          </Form.Group>
          <div>
            {registered ? 
                <ToastContainer>
                <Toast>
                    <Toast.Header>
                    <strong onClick={handleResetPassword} className="me-auto ">
                        Forgat password?
                    </strong>
                    <small className="text-muted">just now</small>
                    </Toast.Header>
                </Toast>
                </ToastContainer> : ''
            }
          </div>
          <p className="text-danger">{error}</p>
          <Button variant="primary" type="submit">
            {registered ? "Login" : "Register"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
