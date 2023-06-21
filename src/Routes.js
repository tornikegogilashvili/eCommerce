import {Route , Routes} from "react-router-dom"
import { RegisterPage, HomePage, LoginPage, ProductFormPage, CategoryProductsPage, SingleProductPage ,  } from "./pages";
import { ProtectedRoute, isUserAdmin } from "./helper";
import { useUser } from "./hooks";


export const RouteComponent = () => {
    const {userInfo} = useUser();
    return (
    <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path="/login" element ={<LoginPage />} />
        <Route path="/register" element ={<RegisterPage />} />
        <Route path="/products/categories/:categoryName" element={<CategoryProductsPage  />}  
        />
        <Route path="/products/categories/:categoryName/:id" element={<SingleProductPage  />}  
        />
        <Route 
            path="/product/new" 
            element={
            <ProtectedRoute isAdmin={isUserAdmin(userInfo)} >
                <ProductFormPage />
            </ProtectedRoute>
            }
            />
        <Route 
            path="/product/:name/edit" 
            element={
            <ProtectedRoute isAdmin={isUserAdmin(userInfo)} >
                <ProductFormPage />
            </ProtectedRoute>
            }
    />
    </Routes>
    );
};