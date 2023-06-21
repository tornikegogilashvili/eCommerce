import React, { useEffect } from "react"
import { LoadingWrapper } from "../../atoms"
import { SingleProductCard } from "./SingleProductCard"
import { useProduct } from "../../../hooks";
import { useDispatch } from "react-redux";
import { fetchSingleProduct } from "../../../redux";
import { useParams } from "react-router-dom";


export const SingleProduct = () => {
    const { isProductLoading, singleProduct } = useProduct();
    const {category, id} = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSingleProduct({id,category}));
    }, [id, category]);
    return (
        <LoadingWrapper isLoading={isProductLoading} >
            <SingleProductCard product={singleProduct} />
        </LoadingWrapper>
    );
};
