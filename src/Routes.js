import {Route , Routes} from "react-router-dom"
import { RegisterPage, HomePage, LoginPage ,  } from "./pages";


export const RouteComponent = () => {
    return (
    <Routes>
        <Route path="/" element ={<HomePage />} />
        <Route path="/login" element ={<LoginPage />} />
        <Route path="/register" element ={<RegisterPage />} />
    </Routes>
    );
};