import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3001/"
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
                axios.post("http://localhost:3001/users/refresh", {
                    refresh_token: refreshToken,
                })
                .then(({ data }) => {
                    localStorage.setItem("token", data.token);
                    return axiosInstance(originalRequest)
                });
            }
    }
);
