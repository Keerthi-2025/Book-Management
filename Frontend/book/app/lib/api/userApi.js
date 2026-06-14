import axiosInstance from "@/app/utils/axiosInstance";

const getAllUsers = async () =>{
    try {
        const response = await axiosInstance.get("/User/v1/getAllUsers",  data);
        return response.data;

        
    } catch (error) {
        return null;
        
    }
}

export {getAllUsers};