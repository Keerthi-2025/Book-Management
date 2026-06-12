import axiosInstance from "@/app/utils/axiosInstance";

const login = async (data) =>{
    try {

        const response = await axiosInstance.post("/web/api/User/v1/login", data);
        return response.data;
        
    } catch (error) {
        return null;
        
    }
}