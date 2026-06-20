"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {

  const [user, setUser] = useState(null);

  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      {user && (
        <div className="bg-white text-black p-6 rounded-xl shadow w-96">

          <p>
            <strong>Name:</strong> {user.userName}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Role:</strong> {user.role}
          </p>

        </div>
      )}

    </div>
  );
}