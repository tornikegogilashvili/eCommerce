import React from "react";
import { isUserAdmin } from "../../helper"
import { Button } from "../atoms"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct,setSelectedProduct } from "../../redux";



export const ProductCardActions = ({userInfo, product}) => {
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

    return <div>ProductCardActions</div>
}