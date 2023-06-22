import { Box, Card, CardActions, Grid, styled } from "@mui/material";
import React from "react"
import { Link, Text } from "../atoms";
import { ProductCardActions } from "./ProductCardActions";
import { useCart, useUser } from "../../hooks";


const StyledImage = styled("img")(() => ({
        objectFit: "cover",
        width: "100%",
        height: "270px",
}));


const StyledInfoContainer = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px 20px",
}))

export const ProductCard = ({ product }) => {
    const { name, image, category, price, _id } = product;
    const {userInfo} = useUser();
    const {cartItems} = useCart();
    return (
        <Grid item xs={12} sn={12} md={4} lg={3}  >
            <Card sx={{borderRadius: 8}} >
                <Link to={`/products/categories/${category}/${_id}`} >
                <StyledImage 
                    src={image}
                    alt={`${category}-${name}`}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "270px",
                    }}
                />
                <StyledInfoContainer>
                    <Text>{name}</Text>
                    <Text>${price}</Text>
                </StyledInfoContainer>
                </Link>
                <CardActions>
                    <ProductCardActions userInfo={userInfo} product={product} cartItems={cartItems} />
                </CardActions>
            </Card>
        </Grid>
    )
}