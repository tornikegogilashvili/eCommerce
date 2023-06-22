import { AppBar, Toolbar, styled, Box,  } from "@mui/material";
import { UserIcon } from "./UserIcon";
import { ProductCategories } from "./ProductCategories";
import { Button, Link } from "../atoms";
import {CiHome} from "react-icons/ci"
import {BsFillCartCheckFill} from "react-icons/bs"
import { useState } from "react";
import { CartDrawer } from "./CartDrawer";
import { SearchBar } from "./SearchBar";


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
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
    <Box>
        <StyledAppBar>
            <StyledToolBar>
                <Link to="/">
                    <CiHome  size={30} color="#fff" />
                </Link>
                <SearchBar />
                <Box sx={{display: "flex"}} >

                    <Button onClick={(() =>setIsCartOpen(true))} >
                        <BsFillCartCheckFill size={35} color="#fff" />
                    </Button>
                    <Box sx={{display:"flex"}} >
                        <UserIcon />
                    </Box>
                </Box>
            </StyledToolBar>
            <ProductCategories   />
        </StyledAppBar>
        <CartDrawer isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} /> 
    </Box>)
};