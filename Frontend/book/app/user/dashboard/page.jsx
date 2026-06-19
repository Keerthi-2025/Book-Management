"use client";

import { useEffect, useState } from "react";
import { getAllAvailableBooks, getBooksByGenre } from "@/app/lib/api/bookApi";


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

  const handleSearch = async () => {
    if (!searchTitle.trim()) {
      fetchAvailableBooks();
      return;
    }

    const data = await searchBooks(searchTitle);
    setBooks(data);
  };

  const handleGenre = async (genre) => {
    const data = await getBooksByGenre(genre);
    setBooks(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <h1 className="text-3xl font-bold mb-6 text-black">
        Library Dashboard
      </h1>

      {/* Search */}

      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search Books..."
          className="border p-3 rounded w-full text-black"
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-5 rounded"
        >
          Search
        </button>
      </div>

      {/* Genres */}

      <div className="flex gap-3 flex-wrap mb-8">

        <button
          onClick={fetchAvailableBooks}
          className="bg-gray-700 text-white px-4 py-2 rounded"
        >
          All Available
        </button>

        <button
          onClick={() => handleGenre("FICTION")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Fiction
        </button>

        <button
          onClick={() => handleGenre("NON_FICTION")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Non Fiction
        </button>

        <button
          onClick={() => handleGenre("SCIENCE")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Science
        </button>

        <button
          onClick={() => handleGenre("HISTORY")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          History
        </button>

        <button
          onClick={() => handleGenre("TECHNOLOGY")}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Technology
        </button>
      </div>

      {/* Books Grid */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        {books.map((book) => (

          <div
            key={book.book_Id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
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

              <h2 className="font-bold text-xl text-black">
                {book.title}
              </h2>

              <p className="text-gray-600">
                {book.author}
              </p>

              <p className="mt-2 text-sm text-blue-600">
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
                <p className="mt-3 text-sm text-gray-700">
                  {book.description}
                </p>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}