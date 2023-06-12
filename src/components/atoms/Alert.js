import { Snackbar, Alert as MUIAlert } from "@mui/material";


export const Alert = ({open, handleClose, severity, message}) => {
    <Snackbar anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
    }}
    open={open}
    autoHideDuration={3000}
    onClose={handleClose}
    >
        <MUIAlert 
        open={open} 
        duration={3000} 
        severity={severity} 
        >
            {message}
        </MUIAlert>
    </Snackbar>
    };