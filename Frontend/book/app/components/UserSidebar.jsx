"use client";

import Link from "next/link";

export default function UserSidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-black p-6 shadow-xl">
      <h2 className="text-3xl font-bold mb-10 border-b border-slate-700 pb-4">
        📚 Library
      </h2>

      <nav className="flex flex-col gap-3">
        <Link
          href="/user/dashboard"
          className="p-3 rounded-lg hover:bg-slate-700 transition"
        >
          Dashboard
        </Link>

        

        <Link
          href="/user/profile"
          className="p-3 rounded-lg hover:bg-slate-700 transition"
        >
          Profile
        </Link>

        <Link
          href="/auth/login"
          className="mt-8 p-3 rounded-lg bg-red-600 hover:bg-red-700 transition text-center"
        >
          Logout
        </Link>
      </nav>
    </aside>
  );
}