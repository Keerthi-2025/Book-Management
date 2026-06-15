"use client";

import AdminSidebar from "@/app/components/AdminSidebar";
import { useState } from "react";
import { useEffect } from "react";

import { getAllUsers, getUserById } from "@/app/lib/api/userApi";

export default function UsersPage() {

  
    const [users, setUsers] = useState([]);
    const [searchedUser, setSearchedUser] = useState(null);


    const handleSearch = async () =>{
      const user = await getUserById(user_Id);

      if(user){
        setSearchedUser(user);
      }
    }
    

    useEffect(()=>{
      fetchUsers();
    }, []);

    const fetchUsers = async () =>{
        const data = await getAllUsers();

        if(data){
            setUsers(data);
        }
    };

    
  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-3xl font-bold mb-6">
          User Management
        </h1>

        <input
          type="text"
          placeholder="Enter User UUID"
          className="border p-3 rounded w-full max-w-md mb-4"
          value={user_Id}
          onChange={(e)=> setSearchedUser(e.target.value)}
        />

        <button 
        className="bg-blue-500 text-white px-5 p-3  rounded"
        onClick={handleSearch}
        >
          Search User
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            All Users
          </h2>

          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200 text-black">
                <th className="border p-3">User ID</th>
                <th className="border p-3">Username</th>
                <th className="border p-3">Email</th>
              </tr>
            </thead>

            <tbody className="text-white">
              {/* Users data will come here */}
              {users.map((user) => (
                <tr key={user.user_Id}>
                  <td className="border p-3">{user.user_Id}</td>
                  <td className="border p-3">{user.userName}</td>
                  <td className="border p-3">{user.email}</td>

                </tr>

             ) )}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}