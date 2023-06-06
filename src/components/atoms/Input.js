import { TextField } from "@mui/material";
import React from "react";

export const Input = ({
    type = "text", 
    name, 
    label,
    onChange,
    error,
    value,
    }) => {
    return(
        <TextField 
        type={type}
        name={name} 
        label={label}
        value={value}
        onChange={onChange}
        error={Boolean(error)} 
        helperText={error}
        sx={{
            marginTop:2,
            "& fieldset": {
                borderRadius: '20px'
            },
        }}
        />
    );
};