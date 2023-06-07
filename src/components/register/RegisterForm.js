import React from "react";
import { FormContainer } from "../atoms";
import {Input} from "../atoms/Input"


export const RegisterForm = () => {
    return(
        <FormContainer>
            <Input name="firstName" label="firstName" />
            <Input name="lastName" label="lastName" />
            <Input name="email" label="email" />
            <Input name="password" label="password" />
        </FormContainer>
    )
}