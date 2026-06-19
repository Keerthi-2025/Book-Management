import axiosInstance from "@/app/utils/axiosInstance"
import axios from "axios";

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

const addBook = async (bookData) =>{
    try {
        const response = await axiosInstance.post("/Book/v1/addBook", bookData);
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}

const deleteBook = async (bookId) =>{
    try {

        const response = await axiosInstance.delete(`Book/v1/deleteBook?book_Id=${bookId}`);
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }
}

const searchBooks = async (title) =>{
    try {
        const response = await axiosInstance.get(`/Book/v1/searchBooks?title=${title}`);
        return response.data;
        
    } catch (error) {
        console.log(error);
        return null;
        
    }

    const getAllAvailableBooks = async ()=>{
        try {
            const respose = await axiosInstance.get("/User/v1/getAllAvailableBooks");
            return respose.data;
            
        } catch (error) {
            console.log(error);
            return null;
            
        }

    }
    
    }


export {getBookCount, getAllBooks, addBook, deleteBook,searchBooks, getAllAvailableBooks};