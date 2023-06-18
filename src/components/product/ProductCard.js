import { Grid } from "@mui/material";
import React from "react"

export const ProductCard = ({ product }) => {
    const { name } = product;
    return (
        <Grid item xs={12} sn={12} md={4} lg={3}  >
            {name}
        </Grid>
    )
}