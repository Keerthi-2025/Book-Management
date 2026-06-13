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
    className="min-h-screen bg-cover justify-center"
      style={{
        backgroundImage: "url('/images/admin.jpg')",
        backgroundSize: "100% 100%"
      }}
      >
        <div className="w-[400px] p-8 rounded-xl shadow-lg bg-blue-400/10 mt-40 ml-80">
            <h1 className="text-3xl font-bold text-black mb-6  flex justify-center">Admin Signup</h1>

            <form onSubmit={handleSignup}> 

                <input
                type="text"
                placeholder="Username"
                className="w-full border p-3 rounded mb-4 text-black bg-white placeholder:text-black"
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                />


                <input
                type="email"
                placeholder="Email"
                className="text-black bg-white w-full p-3 rounded  mb-4 placeholder:text-black"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

               {error &&  <p className="text-red-500 ">{error}</p>}

               {success && <p>{success}</p>}


                <div className="justify-center">
                     <button 
                     type="submit"
                className="bg-black p-3 rounded mb-4 text-white w-full hover:bg-blue-500">Create Admin</button>
                </div>
               
               

            </form>
        </div>
    </div>
)
};

