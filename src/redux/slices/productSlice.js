import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {axiosInstance} from "../../helper"



export const saveProduct = createAsyncThunk(
    "product/saveProduct",
    async ({product}) => {
        try {
            const {data} = await axiosInstance.post("/products", {product});
            return data;
        } catch (error) {
            
        }
    }
);


export const fetchHomePageProducts = createAsyncThunk(
    "product/fetchHomePageProducts",
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.get("/products");
            return data;
        } catch (error) {
            return rejectWithValue("could not fetch product");
        }
    }
);


export const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        error: null,
        homePageProducts: [],
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomePageProducts.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(fetchHomePageProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.homePageProducts = action.payload.products;
        });
        builder.addCase(fetchHomePageProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error=action.payload;
        });
    }
});

export const productReducer = productSlice.reducer;