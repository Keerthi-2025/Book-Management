import { useRouter } from "next/router";
import { useState } from "react";


export default function AdminSignup() {
    const router = useRouter();

    const [userName, setUserName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const[error, setError] = useState("");
    const [success, setsuccess] = useState("");

    const handleSignup = async (e) =>{
        e.preventDefault();

        if(!userName || !email || !password){
            setError("All fields are required");
        }

        
    }
}