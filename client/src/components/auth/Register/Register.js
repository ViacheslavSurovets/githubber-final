import React, {useState, useContext, useEffect} from "react";
import AlertContext from "../../../context/alert/alertContext";
import AuthContext from '../../../context/auth/authContext';
import {Form,  Input, Button} from 'antd';

import './Register.css'


const Register = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const {register, error, clearErrors, isAuthenticated} = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/account')
        }

        if (error === 'User already exists') {
            setAlert(error, 'error');
            clearErrors();
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    });

    const {name, email, password, password2} = user;

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        if (name === "" || email === "") {
            setAlert("Please enter all fields", "error");
        } else if (password !== password2) {
            setAlert("Passwords don`t match", "error");
        } else {
            register({
                name,
                email,
                password
            })
        }
    };

    return (
        <div className="form">
            <h1>
                Account <span className="form__title">Register</span>
            </h1>
            <Form onSubmit={onSubmit}>
                <div className="form__item">
                    <label htmlFor="name">Name</label>
                    <Input type="text" name="name" value={name} onChange={onChange} required/>
                </div>
                <div className="form__item">
                    <label htmlFor="email">Email Address</label>
                    <Input type="email" name="email" value={email} onChange={onChange} required/>
                </div>
                <div className="form__item">
                    <label htmlFor="password">Password</label>
                    <Input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        minLength="6"
                    />
                </div>
                <div className="form__item">
                    <label htmlFor="password2">Confirm Password</label>
                    <Input
                        type="password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                </div>
                <Button
                    type="primary"
                    htmlType="submit"
                    value="Register"
                    block>
                  Register
                </Button>
            </Form>
        </div>
    );
};

export default Register;
