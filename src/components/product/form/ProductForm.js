import { useEffect, useState } from "react"
import {UseForm, useProduct} from "../../../hooks"
import { Button, FormContainer, Input } from "../../atoms"
import {getProductFormValues} from "./generateProductFormValues"
import FileBase64 from "react-filebase64"
import { useDispatch } from "react-redux"
import { saveProduct, setSelectedProduct} from "../../../redux"
import { Navigate, useNavigate } from "react-router-dom"


export const ProductForm = () => {
    const [image, setImage] =useState("");
    const {formValues: productFormValues, onFormChange: onProductFormChange, isButtonDisabled, setFormValues: setProductFormValues,} = UseForm(getProductFormValues())

    const {selectedProduct} = useProduct();
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if(selectedProduct) {
            setProductFormValues(getProductFormValues(selectedProduct));
            setImage(selectedProduct?.image);
        }
    },[selectedProduct]);

    const onSaveProduct = () =>{
        const name = productFormValues.name.value;
        const description = productFormValues.description.value;
        const brand = productFormValues.brand.value;
        const category = productFormValues.category.value;
        const price = productFormValues.price.value;
        dispatch(saveProduct({
            product: {
                name,
                description,
                brand,
                category,
                price,
                image,
            },
            productId: selectedProduct?._id,
        })
    ).unwrap().then(() => {
        navigate("/");
    });
    }


    return <FormContainer>
        <Input 
            name="name"
            value={productFormValues.name.value}
            onChange={onProductFormChange}
            error={productFormValues.name.error}
            label="Product name"
        />
        <Input 
            name="description"
            value={productFormValues.description.value}
            onChange={onProductFormChange}
            error={productFormValues.description.error}
            label="Product description"
        />
            <Input 
                name="category"
                value={productFormValues.category.value}
                onChange={onProductFormChange}
                error={productFormValues.category.error}
                label="Product category"
            />
        <Input 
            name="brand"
            value={productFormValues.brand.value}
            onChange={onProductFormChange}
            error={productFormValues.brand.error}
            label="Product brand"
        />
        <Input 
            name="price"
            value={productFormValues.price.value}
            onChange={onProductFormChange}
            error={productFormValues.price.error}
            label="Product price"
        />
        <FileBase64 
        type="file" 
        multiple={false} 
        onDone={({base64})=>{
            console.log(base64);
            setImage(base64)
        }} />
        <Button onClick={onSaveProduct} disabled={isButtonDisabled} >Save Product</Button>
    </FormContainer>
}