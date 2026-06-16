"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";
import {
  addBook,
  deleteBook,
  getAllBooks,
  searchBooks,
} from "@/app/lib/api/bookApi";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const data = await getAllBooks();

    if (data) {
      setBooks(data);
    }
  };

  const handleAddBook = async () => {
    const bookData = {
      title,
      author,
    };

    const result = await addBook(bookData);

    if (result) {
      setTitle("");
      setAuthor("");
      fetchBooks();
    }
  };

  const handleDelete = async (bookId: string) => {
    const result = await deleteBook(bookId);

    if (result) {
      fetchBooks();
    }
  };

  const handleSearch = async () => {
    if (!searchTitle.trim()) {
      fetchBooks();
      return;
    }

    const data = await searchBooks(searchTitle);

    if (data) {
      setBooks(data);
    }
  };

  return (
    <div className="flex">
      <AdminSidebar />

      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8">
          Book Management
        </h1>

        {/* Add Book */}

        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-black">
            Add Book
          </h2>

          <input
            type="text"
            placeholder="Book Title"
            className="w-full border p-3 rounded mb-3 text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Author"
            className="w-full border p-3 rounded mb-3 text-black"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <button
            onClick={handleAddBook}
            className="bg-blue-600 text-white px-6 py-2 rounded"
          >
            Add Book
          </button>
        </div>

        {/* Search */}

        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search Book"
            className="border p-3 rounded flex-1 text-black"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-5 rounded"
          >
            Search
          </button>
        </div>

        {/* Books Table */}

        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200 text-black">
              <tr>
                <th className="p-4 text-left">Book ID</th>
                <th className="p-4 text-left">Title</th>
                <th className="p-4 text-left">Author</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book: any) => (
                <tr
                  key={book.book_Id}
                  className="border-b text-black"
                >
                  <td className="p-4">{book.book_Id}</td>
                  <td className="p-4">{book.title}</td>
                  <td className="p-4">{book.author}</td>

                  <td className="p-4">
                    <button
                      onClick={() =>
                        handleDelete(book.book_Id)
                      }
                      className="bg-red-600 text-white px-4 py-2 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}