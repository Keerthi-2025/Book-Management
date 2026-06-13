"use client";
import { adminSignup } from "@/app/lib/api/authApi";
import { useRouter } from "next/navigation";
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

        const response = await adminSignup({userName, email,password});

        if(!response){
            setError("Admin signup failed");
        }

        setsuccess("Admin created successfully");

        setTimeout(() => {
            router.push("/auth/login");
            
        }, 1500);

    }

    return(
        <div
    className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/login.jpeg')",
      }}
      >
        <div className="w-[400px] p-8 rounded-xl shadow-lg bg-blue-400 mt-40 ml-100">
            <h1 className="text-3xl font-bold text-white flex justify-center">Admin Signup</h1>

            <form onSubmit={handleSignup}> 

                <input
                type="text"
                placeholder="Username"
                className="w-full border p-3 rounded mb-4 text-black bg-white"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />


                <input
                type="email"
                placeholder="Email"
                className="text-black bg-white w-full p-3 rounded  mb-4"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

               {error &&  <p className="text-red-500 ">{error}</p>}

               {success && <p>{success}</p>}


                <div className="justify-center">
                     <button 
                     type="submit"
                className="bg-white p-3 rounded mb-4 text-black w-full ">Create Admin</button>
                </div>
               
               

            </form>
        </div>
    </div>
)
};

