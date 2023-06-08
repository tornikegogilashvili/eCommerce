import React from "react";
import { FormContainer } from "../atoms";
import {Input} from "../atoms/Input"
import { UseForm } from "../../hooks/UseForm";
import { generateRegisterFormValues } from "./generateRegisterFormValues";


export const RegisterForm = () => {
    const {formValues: registerFormValues, onFormChange} = UseForm(generateRegisterFormValues());
    console.log("formValues", registerFormValues);
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
        </FormContainer>
    )
}