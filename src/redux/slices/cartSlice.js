import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        loading: false,
        error: null,
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const {product} = action.payload;
            const {_id} = product;
            const itemInCart = state.cartItems.find(
                (item) => item.product._id === _id
            );

            if(itemInCart) { 
                const updatedCart = state.cartItems.map((item)=>
                item.product._id === _id ? {...item, quantity: item.quantity +1 }
                : item);
                state.cartItems = updatedCart;
            }else{
                state.cartItems.push({product, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            const itemInCart = state.cartItems.find((item) => item.product._id === id);
            if(itemInCart.quantity === 1){
                state.cartItems = state.cartItems.filter(
                    (item) => item.product._id !== id
                );
            }else {
                const updatedCart = state.cartItems.map((item)=>
                item.product._id === id ? {...item, quantity: item.quantity - 1 }
                : item);
                state.cartItems = updatedCart;
            }
        },
    },

});

export const cartReducer = cartSlice.reducer;

export const {addToCart, removeFromCart} = cartSlice.actions;