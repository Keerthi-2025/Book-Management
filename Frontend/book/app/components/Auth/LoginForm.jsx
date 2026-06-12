import { login } from "@/app/lib/api/AuthApi";
import { useState } from "react";



export default function Login() {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[error, setError] = useState("");
    const[loading, setLoading] = useState(false);



const handleLogin = async (e)=>{
    e.preventDefault();


    if(!email){
        setError("Please enter a valid email address");
    }

    if(!password){
        setError("Please enter password");
    }

    setError("");
    setLoading(true);

   
}
}