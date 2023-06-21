import React, { useEffect } from "react"
import { useParams } from "react-router-dom";
import { GridContainer, Loading, LoadingWrapper }  from "../../atoms"
import { Box, styled } from "@mui/material";
import { ProductCard } from "../ProductCard"
import { useProduct, useQueryParams } from "../../../hooks";
import { Paginate } from "./Paginate";
import { useFetchData } from "../../../hooks/useFetchData";
import { Sort } from "./Sort";


const Container = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
}));

export const CategoryProductsList = () => {
    const {categoryName} = useParams();
    const {value: page, changeQuery: changePage} = useQueryParams("page");
    const {value: sort, changeQuery: changeSort} = useQueryParams("sort")
    const {getData, loading, data} = useFetchData();
    const {products, totalPages} = data;


    useEffect(() => {
        getData(`products/categories/${categoryName}?size=1&sort=${sort}&page=${page}`);
    },[page, sort]);


    useEffect(() => {
        changePage("page", 1)
    },[sort])

    

    return (
        <LoadingWrapper isLoading={loading}>

            <Container>
                <Sort sort={sort} changeSort={changeSort} />
                <GridContainer>
                    {products?.map((product) => {
                        return <ProductCard key={product._id} product={product}  />
                    })}
                </GridContainer>
                <Paginate total={totalPages} page={page} changePage={changePage} />
            </Container>
        </LoadingWrapper>
)}
