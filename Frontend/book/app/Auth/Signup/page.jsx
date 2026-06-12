"use client";


import { signup } from "@/app/lib/api/authApi";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Signup() {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!userName) {
      setError("Enter username");
      return;
    }

    if (!email) {
      setError("Enter email");
      return;
    }

    if (!password) {
      setError("Enter password");
      return;
    }

    setError("");

    const response = await signup({
      userName,
      email,
      password,
    });

    if (!response) {
      setError("Signup failed");
      return;
    }

    router.push("/auth/login");
  };

  return (
    <div className="min-h-screen flex items-center  justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/signup.jpg')",
      backgroundSize: "100% 100%"
    }}
    
    >

    
    <div className=" flex items-center justify-center pr-110">
      <div className="w-[400px] bg-white/40  rounded-xl p-8">

        <h1 className="text-3xl font-bold mb-6 text-black text-center">
         SignUp
        </h1>

        <form onSubmit={handleSignup}>

          <input
            type="text"
            placeholder="Username"
            className="w-full border  p-3 rounded mb-4 placeholder-black"
            value={userName}
            onChange={(e) =>
              setUserName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4 placeholder-black"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4 placeholder-black"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          {error && (
            <p className="text-red-500 mb-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-green-600 hover:text-black hover:font-bold "
          >
            Signup
          </button>

          <p className="mt-4 text-center text-black">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="text-blue-600 underline"
            >
              Login
            </Link>
          </p>

        </form> 

      </div>
    </div>
    </div>
  );
}