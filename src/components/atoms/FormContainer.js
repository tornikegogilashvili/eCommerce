import { FormControl } from "@mui/material";
import React from "react";

export const FormContainer = ({children}) => {
    return (
        <FormControl fullWidth sd={{marginTop: "15px"}} >
            {children}
        </FormControl>
    );
}