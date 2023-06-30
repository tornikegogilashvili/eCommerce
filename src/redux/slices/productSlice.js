import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {axiosInstance} from "../../helper"
import { SingleProduct } from "../../pages";




export const fetchHomePageProducts = createAsyncThunk(
    "product/fetchHomePageProducts",
    async (_, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.get("https://backend-fzwm.onrender.com/products");
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
            const endpoint = productId ? `https://backend-fzwm.onrender.com/products/${productId}` : "https://backend-fzwm.onrender.com/products";
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
        const {data} =await axiosInstance.delete(`https://backend-fzwm.onrender.com/products/${id}`);
        dispatch(fetchHomePageProducts());
        return data;
    } catch (error) {
        
    }
})

// export const fetchCategoryProducts = createAsyncThunk(
//     "product/fetchCategoryProducts",
//     async (url) => {
//         try {
//             const {data} = await axiosInstance.get(`/products/categories/${url}`);
//             return data;
//         }catch (error) {}
//     }
// )


export const fetchSingleProduct = createAsyncThunk(
    "product/fetchSingleProduct",
    async ({ id, category}, {rejectWithValue}) => {
        try {
            const { data } = await axiosInstance.get(
                `https://backend-fzwm.onrender.com/products/category/${category}/${id}`
            );
            return data;
        }catch (error) {
            return rejectWithValue("could not fetch product");
        }
    }
);


const pendingReducer = (state) => {
    state.loading = true;
};

const rejectedReducer = (state, action) => {
    state.loading = false;
    state.error = action.payload;
};



export const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: false,
        error: null,
        homePageProducts: [],
        selectedProduct: null,
        categories: [],
        singleProduct: {},
    },
    
    
    reducers: {
        setSelectedProduct: (state,action) => {
            state.selectedProduct = action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchHomePageProducts.pending, pendingReducer);


        
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


        
        builder.addCase(fetchSingleProduct.pending, pendingReducer);
        builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.singleProduct = action.payload.product;
        } );
        builder.addCase(fetchSingleProduct.rejected, rejectedReducer);

    },
});

export const {setSelectedProduct} = productSlice.actions;

export const productReducer = productSlice.reducer;