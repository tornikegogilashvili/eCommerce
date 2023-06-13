import { productReducer, userReducer } from "./slices"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        user:userReducer,
        product:productReducer,
    },
});