import axiosInstance from "@/app/utils/axiosInstance";

const getAllUsers = async () =>{
    try {
        const response = await axiosInstance.get("/User/v1/getAllUsers");
        return response.data;

        
    } catch (error) {
        return null;
        
    }
};

const getUserById = async (userId) =>{
    try {
        const response = await axiosInstance.get("/User/v1/getUserById", {
            params:{
                user_Id: userId,
            },
        });
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}


const getUserCount = async () =>{
    try {
        const response = await axiosInstance.get("/User/ve/userCount");
        return response.data;

    } catch (error) {
        return null;
        
    }
}

export {getAllUsers, getUserById, getUserCount};