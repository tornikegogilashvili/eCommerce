// import React from "react"


// export const CategoryProductsList = () => {
//     return (
//         <div>CategoryProductList</div>
//     )
// }

import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchCategoryProducts } from "../../../redux/slices";
import { useParams } from "react-router-dom";
import { GridContainer, Loading, LoadingWrapper }  from "../../atoms"
import { Box, styled } from "@mui/material";
import { ProductCard } from "../ProductCard"
import { useProduct } from "../../../hooks";

const Container = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
}));

export const CategoryProductsList = () => {
    const dispatch = useDispatch();
    const {isProductLoading, categoryProducts} = useProduct();
    const {categoryName} = useParams();
    useEffect(() => {
        dispatch(
            fetchCategoryProducts(`${categoryName}?size=1&sort=price,asc&page=1`))
    },[]);

    return (
        <LoadingWrapper isLoading={isProductLoading}>
            <Container>
                <GridContainer>
                    {categoryProducts?.map((product) => {
                        return <ProductCard key={product._id} product={product}  />
                    })}
                </GridContainer>
            </Container>
        </LoadingWrapper>
)}
