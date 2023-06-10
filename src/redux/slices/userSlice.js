import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helper"

export const authenticateUser = createAsyncThunk("user/authenticateUser",
async ({formValues, isLogin}) => {
    try {
        const route = `/users/${isLogin ? "login" : "register"}`;
        const {data} = await axiosInstance.post(route,formValues);
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        return 
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
        builder.addCase(authenticateUser.pending)
    }
});


export const userReducer = userSlice.reducer;