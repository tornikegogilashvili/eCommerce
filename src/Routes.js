import {Route , Routes} from "react-router-dom"
import { RegisterPage, HomePage, LoginPage, ProductFormPage ,  } from "./pages";
import { ProtectedRoute } from "./helper";


export const RouteComponent = () => {
    return (
    <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path="/login" element ={<LoginPage />} />
        <Route path="/register" element ={<RegisterPage />} />
        <Route 
            path="/product/new" 
            element={
            <ProtectedRoute isAdmin={true} >
                <ProductFormPage />
            </ProtectedRoute>
            }
    />
    </Routes>
    );
};