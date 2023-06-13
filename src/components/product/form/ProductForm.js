import { useState } from "react"
import {UseForm} from "../../../hooks"
import { Button, FormContainer, Input } from "../../atoms"
import {getProductFormValues} from "./generateProductFormValues"
import FileBase64 from "react-filebase64"



export const ProductForm = () => {
    const [image, setImage] =useState("");
    const {formValues: productFormValues, onFormChange: onProductFormChange, isButtonDisabled} = UseForm(getProductFormValues())


    const onSaveProduct = () =>{
        const name = productFormValues.name.value;
        const description = productFormValues.description.value;
        const brand = productFormValues.brand.value;
        const category = productFormValues.category.value;
        const price = productFormValues.price.value;
        console.log(name, description, price);
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