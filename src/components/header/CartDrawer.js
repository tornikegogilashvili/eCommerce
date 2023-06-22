import { Box, Drawer, styled } from "@mui/material";
import React from "react";
import { Button, Text } from "../atoms";
import { useCart, useUser, } from "../../hooks";
import { useDispatch } from "react-redux";
import {clearCart, saveCart} from "../../redux/slices"
import { clear } from "@testing-library/user-event/dist/clear";

const StyledCartItem = styled(Box)(() => ({
  width: 400,
  display: "flex",
  alignItems: "center",
  padding: "5px 10px",
  marginBottom: 20,
}));

const StyledButtonContainer = styled(Box)(({
    display: "flex",
    justifyContent: "center"
}))

const StyledImage = styled("img")(() => ({
    width: 70,
    height: 70,
    objectFit: "cover",
    borderRadius: 5,
  }));


export const CartDrawer = ({  isCartOpen, setIsCartOpen }) => {
    const {userInfo} = useUser();
    const dispatch = useDispatch();
    const {cartItems} = useCart();
  return (
    <Drawer
      open={isCartOpen}
      onClose={() => setIsCartOpen(false)}
      anchor="right"
    >
        {cartItems?.map((item) => {
            const {product, quantity} = item;
            const {price, name, _id, image} = product;
            return (
                <StyledCartItem key={_id}>
                    <StyledImage src={image} alt={`${name}-img`}/>
                    <Box sx={{paddingLeft: 5}} >
                        <Text>{name}</Text>
                        <Text>quantity: {quantity}</Text>
                        <Text>total: ${price * quantity}</Text>
                    </Box>
                </StyledCartItem>
            );
        })}
      

      <StyledButtonContainer>
        <Button onClick={() => {
            dispatch(clearCart());
            if(userInfo?._id){
                dispatch(saveCart({cartItems: [], userId: userInfo?._id}))
            }
            }} >clear cart</Button>
        {!!userInfo && (
        <Button
            onClick={() => 
                dispatch(saveCart({cartItems, userId:userInfo?._id}))
            }
        >
            save Cart
            </Button>
            )}
      </StyledButtonContainer>
    </Drawer>
  );
};