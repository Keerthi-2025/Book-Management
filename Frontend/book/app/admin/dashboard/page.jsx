import AdminSidebar from "@/app/components/AdminSidebar";

import { getUserCount } from "@/app/lib/api/userApi";
import { useEffect, useState } from "react";

export default function AdminDashboard() {

  const[userCount, setuserCount] = useState(0);


  useEffect(()=>{

    fetchCounts();

  }, [])

  const fetchCounts = async () =>{
    const users = await getUserCount();
  }


  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              Total Users
            </h2>
            <p className="text-3xl mt-2">0</p>
          </div>

          <div className="bg-green-500 text-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">
              Total Books
            </h2>
            <p className="text-3xl mt-2">0</p>
          </div>
        </div>
      </div>
    </div>
  );
}