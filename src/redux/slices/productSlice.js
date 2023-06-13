import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {axiosInstance} from "../../helper"



export const saveProduct = createAsyncThunk(
    "product/saveProduct",
    async ({product}) => {
        try {
            const {data} = await axiosInstance("/products", {product});
            return data;
        } catch (error) {
            
        }
    }
);

export const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        error: null,
    },
});

export const productReducer = productSlice.reducer;