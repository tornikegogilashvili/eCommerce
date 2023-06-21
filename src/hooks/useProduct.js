import { useSelector } from "react-redux"

export const useProduct = () => {
    const homePageProducts = useSelector(
        (state) => state.product.homePageProducts
    );


    const selectedProduct = useSelector((state) => state.product.selectedProduct);


    const isProductLoading = useSelector((state) => state.product.loading);


    const productCategories = useSelector((state) => state.product.categories)

    

    const singleProduct = useSelector((state) => state.product.singleProduct);

    return {
        homePageProducts,
        selectedProduct,
        isProductLoading,
        productCategories,
        singleProduct,
    };
};