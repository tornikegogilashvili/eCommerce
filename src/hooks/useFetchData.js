import React, { useState } from "react"
import { axiosInstance } from "../helper";



export const useFetchData = () => {
    const [state, setState] = useState({
        loading: false,
        data: {},
        error: null,
    });

const getData = async (url) => {
    try {
        setState((prev) => ({...prev, loading: true}));
        const {data} = await axiosInstance.get(url);
        setState((prev) => ({...prev, loading: false, data}));

    }catch (error) {
        setState((prev) => ({...prev, loading: false, error: error?.message}));
    }
};

return{
    ...state,
    getData,
    setState,
};
};