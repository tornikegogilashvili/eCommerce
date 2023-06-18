import { Box, Card, Grid, styled } from "@mui/material";
import React from "react"
import { Link, Text } from "../atoms";


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
    const { name, image, category, price } = product;
    return (
        <Grid item xs={12} sn={12} md={4} lg={3}  >
            <Card sx={{borderRadius: 10}} >
                <Link to="singleProductPage" >
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
            </Card>
        </Grid>
    )
}