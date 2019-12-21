import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../../context/auth/authContext";
import AlertContext from "../../../context/alert/alertContext";
import { Form, Input, Button } from 'antd';
import './Login.css'

const Login = props => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const { setAlert } = alertContext;
  const { login, error, clearErrors, isAuthenticated } = authContext;
  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/account");
    }

    if (error === 'Invalid Credentials') {
      setAlert(error, "danger");
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      login({
        email,
        password
      })
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>
      <Form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>
        <Button type="primary" htmlType="submit"
          block
        >Login</Button>
      </Form>
    </div>
  );
};

export default Login;
