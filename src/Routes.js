import {Route , Routes} from "react-router-dom"
import { RegisterPage, HomePage, LoginPage, ProductFormPage ,  } from "./pages";
import { ProtectedRoute, isUserAdmin } from "./helper";
import { useUser } from "./hooks";


export const RouteComponent = () => {
    const {userInfo} = useUser();
    return (
    <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path="/login" element ={<LoginPage />} />
        <Route path="/register" element ={<RegisterPage />} />
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