import { Box, styled } from "@mui/material"
import React from "react"
import { SingleProduct } from "./SingleProduct";
import { Text } from "../../atoms";
import { useCart, useUser } from "../../../hooks";
import { ProductCardActions } from "../ProductCardActions";



const Container = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
}));

const StyledImage = styled("img")(() => ({
    width: "350px",
    display: "350px",
    objectFit: "cover",
}));

const Description = styled("div")(() => ({
    display: "flex",
    alignItems: "center",
    marginBottom: "15px",
}));

export const SingleProductCard = ({product}) => {
    const {userInfo} = useUser();
    const {cartItems} = useCart();
    const { image, name, brand, description } = product;
    console.log(product);
    return (
        <Container>
            <StyledImage src={image}  />
            <Box>
                <Description>
                    <Text variant="h4" >პროდუქტის დასახელება:</Text>
                    <Text variant="h4" >{name}</Text>
                    
                </Description>
                <Text></Text>
                <Description>
                    <Text variant="h4" >ბრენდი:</Text>
                    <Text variant="h4" >{brand}</Text>
                </Description>

                <Description>
                    <Text variant="h4" >აღწერა:</Text>
                    <Text variant="h4" >{description}</Text>
                </Description>
                <ProductCardActions 
                    
                    userInfo={userInfo}
                    product={product} 
                    cartItems={cartItems}
                />
            </Box>
        </Container>
    );
}