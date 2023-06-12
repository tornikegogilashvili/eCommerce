import React from "react";
import { Alert, FormContainer } from "../atoms";
import {Input} from "../atoms/Input"
import { UseForm } from "../../hooks/UseForm";
import { generateRegisterFormValues } from "./generateRegisterFormValues";
import { Button } from "@mui/material";
import { authenticateUser } from "../../redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../hooks";


export const RegisterForm = () => {
    const {
        formValues: registerFormValues, 
        onFormChange, 
        isButtonDisabled,
     } = UseForm(generateRegisterFormValues());
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
     const { showAlert, alertState, handleClose} = useAlert()
    const onSubmit = () => {
        const firstName = registerFormValues.firstName.value;
        const lastName = registerFormValues.lastName.value;
        const email = registerFormValues.email.value;
        const password = registerFormValues.password.value;
        dispatch(
            authenticateUser({
                formValues: {firstName, lastName, email, password,},
                isLogin: false,
        })
    ).unwrap()
    .then(() => {
        navigate("/");
    })
    .catch((error) => {
        showAlert(error);
    });
    };



    return(
        <FormContainer>
            <Input name="firstName" label="firstName" value={registerFormValues.firstName.value}
            error={registerFormValues.firstName.error}
            onChange={onFormChange} />
            <Input name="lastName" label="lastName" value={registerFormValues.lastName.value}
            error={registerFormValues.lastName.error}
            onChange={onFormChange} />
            <Input name="email" label="email" value={registerFormValues.email.value} 
            error={registerFormValues.email.error}
            onChange={onFormChange} />
            <Input name="password" label="password" value={registerFormValues.password.value}
            error={registerFormValues.password.error}
            onChange={onFormChange} />
            <Button onClick={onSubmit} disabled={isButtonDisabled} >register</Button>

            <Alert {...alertState} handleClose={handleClose} />
        </FormContainer>
    );
};