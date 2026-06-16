import axiosInstance from "@/app/utils/axiosInstance"

const getBookCount = async () =>{
    try {
        const response = await axiosInstance.get("/Book/v1/bookCount");
        return response.data;
    } catch (error) {
        return null;
        
    }
}

const getAllBooks = async () =>{
    try {
        const response = await axiosInstance.get("/Book/v1/getAllBooks");
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}
export {getBookCount};