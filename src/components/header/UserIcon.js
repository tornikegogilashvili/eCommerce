import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material"
import React, { useState } from "react"
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";


const StyledBox = styled(Box)(() => ({
    fidplsy: "flex",
    flexDirection: "column",
    borderRadius: 10,
}));

export const UserIcon = () => {
    const [anchor, setAnchor] = useState(null);

    

    const navigate = useNavigate();

    return(
        <Box>
            <IconButton  onClick={(e) => setAnchor(e.currentTarget
                )} >
                <Avatar>TG</Avatar>
            </IconButton>
            <Menu
                anchorEl={anchor}
                keepMounted
                open={Boolean(anchor)}
                onClose={() => {
                    setAnchor(null);
                }}
            >
                <StyledBox>
                    <MenuItem>
                        <Button onClick={() => navigate("/login")} >Login</Button>
                    </MenuItem>
                    <MenuItem>
                        <Button onClick={() => navigate("/register")} >Register</Button>
                    </MenuItem>
                </StyledBox>
            </Menu>
        </Box>
    )
}