"use client";

import { useEffect, useState } from "react";
import {
  getAllAvailableBooks,
  getBooksByGenre,
} from "@/app/lib/api/bookApi";

import UserSidebar from "@/app/components/UserSidebar";

export default function UserDashboard() {
  const [books, setBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    fetchAvailableBooks();
  }, []);

  const fetchAvailableBooks = async () => {
    const data = await getAllAvailableBooks();
    setBooks(data);
  };

  const handleGenre = async (genre) => {
    const data = await getBooksByGenre(genre);
    setBooks(data);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <UserSidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Library Dashboard
        </h1>

        {/* Search */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search books..."
            className="flex-1 border border-gray-300 p-3 rounded-lg text-black"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-lg">
            Search
          </button>
        </div>

        {/* Genre Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={fetchAvailableBooks}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            All Books
          </button>

          <button
            onClick={() => handleGenre("FICTION")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Fiction
          </button>

          <button
            onClick={() => handleGenre("NON_FICTION")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Non Fiction
          </button>

          <button
            onClick={() => handleGenre("SCIENCE")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Science
          </button>

          <button
            onClick={() => handleGenre("HISTORY")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            History
          </button>

          <button
            onClick={() => handleGenre("TECHNOLOGY")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Technology
          </button>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book.book_Id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={
                  book.imageUrl ||
                  "https://via.placeholder.com/300x400?text=No+Image"
                }
                alt={book.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-4">
                <h2 className="font-bold text-xl text-gray-800">
                  {book.title}
                </h2>

                <p className="text-gray-500">
                  {book.author}
                </p>

                <p className="text-blue-600 mt-2">
                  {book.genre}
                </p>

                <p
                  className={`mt-2 font-semibold ${
                    book.status === "AVAILABLE"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {book.status}
                </p>

                {book.description && (
                  <p className="text-sm text-gray-600 mt-3 line-clamp-3">
                    {book.description}
                  </p>
                )}

                <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}