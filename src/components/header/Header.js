import { AppBar, Toolbar, styled, Box,  } from "@mui/material";
import { UserIcon } from "./UserIcon";
import { Link } from "react-router-dom";


const StyledAppBar = styled(AppBar)(() => ({
    backgroundColor: "#131921",
    padding: "0 37px 0 30px",
    margin: "0 0 100px"
}));

const StyledToolBar = styled(Toolbar)(() => ({
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 8,
    paddingBottom: 8,
}));

export const Header = () => {
    return (
    <Box>
        <StyledAppBar>
            <StyledToolBar>
                <Link to="/">home</Link>
                <Box sx={{display:"flex"}} >
                    <UserIcon />
                </Box>
            </StyledToolBar>
        </StyledAppBar> 
    </Box>)
};