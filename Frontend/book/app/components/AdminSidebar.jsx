"use client";

import Link from "next/link";

export default function AdminSidebar() {
  return (

    
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-4">
       

        <Link
          href="/admin/book"
          className="hover:bg-gray-700 p-3 rounded"
        >
          Books
        </Link>

        <Link
          href="/auth/login"
          className="hover:bg-red-600 p-3 rounded mt-8"
        >
          Logout
        </Link>
      </nav>
    </div>
  );
}