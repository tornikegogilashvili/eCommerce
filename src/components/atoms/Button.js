import React from "react";
import {Button as MUIbutton} from '@mui/material';


export const Button = ({children, onClick, ...rest}) => {
    return(
         <MUIbutton onClick={onClick} {...rest} >
            {children}
         </MUIbutton> 
    );
};