import AdminSidebar from "@/app/components/AdminSidebar";

export default function UsersPage() {
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
        />

        <button className="bg-blue-500 text-white px-5 p-3  rounded">
          Search User
        </button>

        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            All Users
          </h2>

          <table className="w-full border">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3">User ID</th>
                <th className="border p-3">Username</th>
                <th className="border p-3">Email</th>
              </tr>
            </thead>

            <tbody>
              {/* Users data will come here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}