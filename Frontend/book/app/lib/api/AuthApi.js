import axiosInstance from "@/app/utils/axiosInstance";

const login = async (data) =>{
    try {

        const response = await axiosInstance.post("/User/v1/login", data);
        return response.data;
        
    } catch (error) {
        return null;
        
    }
}


const signup = async (data) =>{
    try {
        const response = await axiosInstance.post("/User/v1/signup", data);
        return response.data;
        
    } catch (error) {
        return null;
        
    }
}

export {login, signup};