import { useSelector } from "react-redux"


export const useCart = () => {
    const loading = useSelector((state) => state.cart.loading);
    const cartItems = useSelector((state) => state.cart.cartItems);
    
    return {
        loading,
        cartItems,
    };
};