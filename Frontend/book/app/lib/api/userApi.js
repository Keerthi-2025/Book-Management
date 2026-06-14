import axiosInstance from "@/app/utils/axiosInstance";

const getAllUsers = async () =>{
    try {
        const response = await axiosInstance.get("/User/v1/getAllUsers");
        return response.data;

        
    } catch (error) {
        return null;
        
    }
};

const getUserById = async () =>{
    try {
        const response = await axiosInstance.get("/User/v1/getUserById", {
            params:{
                user_Id: user_Id,
            },
        });
        return response.data;
        
    } catch (error) {
        return null;
        
    }
}

export {getAllUsers, getUserById};