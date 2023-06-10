import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helper"


export const authenticateUser = createAsyncThunk("user/authenticateUser",
async ({formValues, isLogin}) => {
    try {
        const route = `/users/${isLogin ? "login" : "register"}`;
        const {data} = await axiosInstance.post(route,formValues);
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        return  data;
    } catch (error) {
        
    }
})
const userSlice = createSlice({
    name: "user",
    initialState:{
        userInfo:null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authenticateUser.pending, (state) => {state.loading = true
        });
        builder.addCase(authenticateUser.fulfilled, (state, action) => {
            state.loading = true;
            state.userInfo = action.payload.user;
        });
    },
});


export const userReducer = userSlice.reducer;