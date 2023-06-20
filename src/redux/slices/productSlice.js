import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {axiosInstance} from "../../helper"




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


export const saveProduct = createAsyncThunk(
    "product/saveProduct",
    async ({product, productId}, {dispatch, rejectWithValue}) => {
        try {
            const endpoint = productId ? `/products/${productId}` : "/products";
            const method = productId ? "put" : "post";
            const {data} = await axiosInstance[method](endpoint,  {product});
            dispatch(fetchHomePageProducts());
            return data;
        } catch (error) {
            return rejectWithValue("could not save product");
        }
    }
);


export const deleteProduct = createAsyncThunk("product/deleteProduct", async (id, {dispatch}) => {
    try {
        const {data} =await axiosInstance.delete(`/products/${id}`);
        dispatch(fetchHomePageProducts());
        return data;
    } catch (error) {
        
    }
})

export const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        error: null,
        homePageProducts: [],
        selectedProduct: null,
        homePageCategories: [],
    },
    
    
    reducers: {
        setSelectedProduct: (state,action) => {
            state.selectedProduct = action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchHomePageProducts.pending, (state)=>{
            state.loading = true;
        });
        builder.addCase(fetchHomePageProducts.fulfilled, (state, action)=>{
            state.loading = false;
            state.homePageProducts = action.payload.products;
            state.categories = action.payload.categories;
        });
        builder.addCase(fetchHomePageProducts.rejected, (state, action)=>{
            state.loading = false;
            state.error=action.payload;

        });
        builder.addCase(saveProduct.fulfilled, (state) => {
            state.selectedProduct = null;
        });
    }
});

export const {setSelectedProduct} = productSlice.actions;

export const productReducer = productSlice.reducer;