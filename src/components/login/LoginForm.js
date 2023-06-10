import React from "react";
import { Button, FormContainer, Input } from "../atoms";
import { generateLoginFormValues } from "./generateLoginFormValues";
import { UseForm } from "../../hooks/UseForm";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../redux";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const {formValues: loginFormValues, onFormChange:onLoginFormChange} = UseForm(generateLoginFormValues());

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogin = () => {
        const email = loginFormValues.email.value;
        const password = loginFormValues.password.value;
        dispatch(
            authenticateUser({
                formValues: {email, password},
                isLogin: true,
            }),
        ).unwrap()
        .then(() => {
            navigate("/")
        })
    };

    return(
        <FormContainer>
            <Input 
                name="email"
                label="email"
                value={loginFormValues.email.value}
                onChange={onLoginFormChange}
                error={loginFormValues.email.error}
            />
            <Input 
                name="password"
                label="password"
                value={loginFormValues.password.value}
                onChange={onLoginFormChange}
                error={loginFormValues.password.error}
                type="password"
            />
            <Button onClick={onLogin} >Login</Button>
        </FormContainer>

    )
    
}