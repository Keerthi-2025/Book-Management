"use client";

import { login } from "@/app/lib/api/authApi";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter email");
      return;
    }

    if (!password) {
      setError("Please enter password");
      return;
    }

    setError("");

    try {
      const response = await login({
        email,
        password,
      });

      if (!response) {
        setError("Invalid email or password");
        return;
      }

      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response));

      router.push("/admin/dashboard");   //this works for admin also modify for user
    } catch (error) {
      console.error(error);
      setError("Login failed");
    }
  };

  return (

    <div className=" min-h-screen flex items-center justify-center bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/login.jpeg')",
      backgroundSize: "100% 100%"
      
    }}>

   
    <div className=" flex items-center justify-center ml-100">
      <div className="w-[390px] bg-black shadow-lg rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border p-3 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 mb-3">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-3  rounded hover:bg-green-500"
          >
            Login
          </button>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link
              href="/auth/signup"
              className="text-green-600 underline"
            >
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
}
