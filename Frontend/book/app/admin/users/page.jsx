"use client";

import AdminSidebar from "@/app/components/AdminSidebar";
import { useState } from "react";
import { getAllUsers, getUserById } from "@/app/lib/api/userApi";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState(null);
  const [user_Id, setUser_Id] = useState("");

  const handleSearch = async () => {
    const user = await getUserById(user_Id);

    if (user) {
      setSearchedUser(user);
    }
  };


//   const handleSearch = async () => {
//   console.log("Searching:", user_Id);

//   const user = await getUserById(user_Id);

//   console.log("Response:", user);

//   if (user) {
//     setSearchedUser(user);
//   }
// };

  const fetchUsers = async () => {
    const data = await getAllUsers();

    if (data) {
      setUsers(data);
    }
  };

  return (
    <div className="flex min-h-screen">
      <AdminSidebar />

      <div className="flex-1 p-10 bg-gray-600">
        <h1 className="text-3xl font-bold mb-6">
          User Management
        </h1>

        <div className="flex gap-3 mb-5">
          <input
            type="text"
            placeholder="Enter User UUID"
            className="border p-3 rounded w-full max-w-md text-white"
            value={user_Id}
            onChange={(e) => setUser_Id(e.target.value)}
          />

          <button
            className="bg-blue-500 text-white px-5 rounded"
            onClick={handleSearch}
          >
            Search User
          </button>

          <button
            className="bg-green-500 text-white px-5 rounded"
            onClick={fetchUsers}
          >
            View All Users
          </button>
        </div>

        {searchedUser && (
          <div className="border border-gray-400 rounded p-5 mb-6">
            <h2 className="text-2xl font-bold mb-3">
              User Details
            </h2>

            <p>
              <strong>User ID:</strong> {searchedUser.user_Id}
            </p>

            <p>
              <strong>Username:</strong> {searchedUser.userName}
            </p>

            <p>
              <strong>Email:</strong> {searchedUser.email}
            </p>
          </div>
        )}

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

            <tbody>
              {users.map((user) => (
                <tr key={user.user_Id}>
                  <td className="border p-3">
                    {user.user_Id}
                  </td>

                  <td className="border p-3">
                    {user.userName}
                  </td>

                  <td className="border p-3">
                    {user.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {users.length === 0 && (
            <p className="mt-4 text-gray-500">
              Click "View All Users" to load users.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}