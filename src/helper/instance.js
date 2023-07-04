import axios from "axios";
import env from "react-dotenv";


const backendURL = process.env.REACT_APP_ECOMMERCEURL


export const axiosInstance = axios.create({
    baseURL: backendURL,
});



axiosInstance.interceptors.request.use((req) =>{
    const token = localStorage.getItem("token");
    req.headers.Authorization = `Bearer ${token}`;
    return req;
});


axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (response) => {
        console.log("error", response);
        const originalRequest = response.config;
        if(
            response.response.status === 401 && 
            response?.response?.data?.message === "token not valid" ) {
                const refreshToken = localStorage.getItem("refreshToken");
                axios.post("https://backend-fzwm.onrender.com/users/refresh", {
                    refresh_token: refreshToken,
                })
                .then(({ data }) => {
                    localStorage.setItem("token", data.token);
                    return axiosInstance(originalRequest)
                });
            }
    }
);
