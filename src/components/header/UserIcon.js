import { Avatar, Box, IconButton, Menu, MenuItem, styled } from "@mui/material"
import React, { useState } from "react"
import { Button } from "../atoms";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux";
import { getUserInitials, isUserAdmin } from "../../helper";


const StyledBox = styled(Box)(() => ({
    fidplsy: "flex",
    flexDirection: "column",
    borderRadius: 10,
}));

export const UserIcon = () => {
    const [anchor, setAnchor] = useState(null);
    const {userInfo} = useUser();
    

    const navigate = useNavigate();
    const dispatch = useDispatch();
    return(
        <Box>
            <IconButton  onClick={(e) => setAnchor(e.currentTarget
                )} >
                <Avatar>{getUserInitials(userInfo)}</Avatar>
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
                    {!userInfo ? (
                        <>
                        
                    <MenuItem>
                        <Button onClick={() => navigate("/login")} >Login</Button>
                    </MenuItem>
                    <MenuItem>
                        <Button onClick={() => navigate("/register")} >Register</Button>
                    </MenuItem>
                        </>
                    ) : (
                        <>
                        <MenuItem>
                            <Button onClick={() => 
                                dispatch(logoutUser())
                            } >logout</Button>
                        </MenuItem>
                        </>
                    )}
                    {isUserAdmin(userInfo) && (
                        <Button onClick={()=>navigate("/product/new")} >add product</Button>
                    ) }
                </StyledBox>
            </Menu>
        </Box>
    )
}