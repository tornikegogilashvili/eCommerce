import React from "react";
import { isUserAdmin } from "../../helper"
import { Button, Text } from "../atoms"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart, deleteProduct,removeFromCart,setSelectedProduct } from "../../redux";
import { Box } from "@mui/material";



export const ProductCardActions = ({userInfo, product, cartItems }) => {
    const {name, _id} = product;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if ( isUserAdmin(userInfo)) {
        return (
            <>
                <Button 
                    onClick={() => {
                        dispatch(setSelectedProduct(product));
                    navigate(`/product/${name}/edit`);
                }} 
                >
                    edit
                </Button>
                <Button onClick={() => {
                    dispatch(deleteProduct(_id))
                }} 
                >delete</Button>
            </>
        );
    }


    const productInCart = cartItems?.find((item) => item.product._id === _id)
    return (
    <Box>
        {productInCart ? (
            <Box sx={{ 
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
             }} >
                <Button onClick={() => dispatch(removeFromCart(_id))} >-</Button>
                <Text>{productInCart?.quantity}</Text>
                <Button onClick={() => dispatch(addToCart({product}))}>+</Button>
            </Box>
        ):(

        <Button onClick={() => dispatch(addToCart({product}))} >add to cart</Button>
        )}
    </Box>
    )
}