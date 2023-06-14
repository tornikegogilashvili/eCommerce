import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/"
});



axiosInstance.interceptors.request.use((req) =>{
    const token = localStorage.getItem("token");
    req.headers.Authorization = `bearer ${token}`;
});
