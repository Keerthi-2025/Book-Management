// "use client";

// import { useEffect, useState } from "react";
// import AdminSidebar from "@/app/components/AdminSidebar";
// import {
//   getAllBooks,
//   addBook,
//   deleteBook,
//   searchBooks,
// } from "@/app/lib/api/bookApi";

// export default function AdminBooks() {
//   const [books, setBooks] = useState([]);
//   const [searchTitle, setSearchTitle] = useState("");

//   const [title, setTitle] = useState("");
//   const [author, setAuthor] = useState("");

//   useEffect(() => {
//     fetchBooks();
//   }, []);

//   const fetchBooks = async () => {
//     const data = await getAllBooks();

//     if (data) {
//       setBooks(data);
//     }
//   };

//   const handleAddBook = async () => {
//     if (!title.trim() || !author.trim()) {
//       alert("Title and Author are required");
//       return;
//     }

//     const bookData = {
//       title,
//       author,
//     };

//     const result = await addBook(bookData);

//     if (result) {
//       alert("Book Added Successfully");

//       setTitle("");
//       setAuthor("");

//       fetchBooks();
//     } else {
//       alert("Failed to add book");
//     }
//   };

//   const handleDelete = async (bookId) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this book?"
//     );

//     if (!confirmDelete) return;

//     const result = await deleteBook(bookId);

//     if (result) {
//       alert("Book Deleted Successfully");
//       fetchBooks();
//     } else {
//       alert("Failed to delete book");
//     }
//   };

//   const handleSearch = async () => {
//     if (!searchTitle.trim()) {
//       fetchBooks();
//       return;
//     }

//     const data = await searchBooks(searchTitle.trim());

//     if (data) {
//       setBooks(data);
//     } else {
//       setBooks([]);
//     }
//   };

//   return (
//     <div className="flex min-h-screen">
//       <AdminSidebar />

//       <div className="flex-1 p-8">
//         <h1 className="text-4xl font-bold mb-8">
//           Book Management
//         </h1>

//         {/* Add Book */}
//         <div className="bg-white p-6 rounded-lg shadow mb-8">
//           <h2 className="text-2xl font-semibold text-black mb-4">
//             Add Book
//           </h2>

//           <input
//             type="text"
//             placeholder="Book Title"
//             className="w-full border p-3 rounded mb-3 text-black"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <input
//             type="text"
//             placeholder="Author"
//             className="w-full border p-3 rounded mb-4 text-black"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//           />

//           <button
//             onClick={handleAddBook}
//             disabled={!title.trim() || !author.trim()}
//             className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
//           >
//             Add Book
//           </button>
//         </div>

//         {/* Search */}
//         <div className="flex gap-3 mb-6">
//           <input
//             type="text"
//             placeholder="Search by title"
//             className="flex-1 border p-3 rounded text-white"
//             value={searchTitle}
//             onChange={(e) => setSearchTitle(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handleSearch();
//               }
//             }}
//           />

//           <button
//             onClick={handleSearch}
//             className="bg-green-600 text-white px-5 rounded hover:bg-green-700"
//           >
//             Search
//           </button>

//           <button
//             onClick={() => {
//               setSearchTitle("");
//               fetchBooks();
//             }}
//             className="bg-gray-600 text-white px-5 rounded hover:bg-gray-700"
//           >
//             Reset
//           </button>
//         </div>

//         {/* Books Table */}
//         <div className="bg-white rounded-lg shadow overflow-hidden">
//           <table className="w-full">
//             <thead className="bg-gray-200 text-black">
//               <tr>
//                 <th className="p-4 text-left">Book ID</th>
//                 <th className="p-4 text-left">Title</th>
//                 <th className="p-4 text-left">Author</th>
//                 <th className="p-4 text-left">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {books.length > 0 ? (
//                 books.map((book) => (
//                   <tr
//                     key={book.book_Id}
//                     className="border-b text-black"
//                   >
//                     <td className="p-4">{book.book_Id}</td>
//                     <td className="p-4">{book.title}</td>
//                     <td className="p-4">{book.author}</td>

//                     <td className="p-4">
//                       <button
//                         onClick={() =>
//                           handleDelete(book.book_Id)
//                         }
//                         className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td
//                     colSpan="4"
//                     className="p-4 text-center text-black"
//                   >
//                     No books found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useState } from "react";
import AdminSidebar from "@/app/components/AdminSidebar";
import {
  getAllBooks,
  addBook,
  deleteBook,
  searchBooks,
} from "@/app/lib/api/bookApi";

export default function AdminBooks() {
  const [books, setBooks] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("TECHNOLOGY");
  const [image, setImage] = useState(null);

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
    if (
      !title.trim() ||
      !author.trim() ||
      !genre ||
      !image
    ) {
      alert("Please fill all fields");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("author", author);
    formData.append("genre", genre);
    formData.append("image", image);

    const result = await addBook(formData);

    if (result) {
      alert("Book Added Successfully");

      setTitle("");
      setAuthor("");
      setGenre("TECHNOLOGY");
      setImage(null);

      fetchBooks();
    } else {
      alert("Failed to add book");
    }
  };

  const handleDelete = async (bookId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (!confirmDelete) return;

    const result = await deleteBook(bookId);

    if (result) {
      alert("Book Deleted Successfully");
      fetchBooks();
    } else {
      alert("Failed to delete book");
    }
  };

  const handleSearch = async () => {
    if (!searchTitle.trim()) {
      fetchBooks();
      return;
    }

    const data = await searchBooks(searchTitle.trim());

    if (data) {
      setBooks(data);
    } else {
      setBooks([]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />

      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-8 text-black">
          Book Management
        </h1>

        {/* Add Book */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">
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

          <select
            className="w-full border p-3 rounded mb-3 text-black"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="FICTION">Fiction</option>
            <option value="NON_FICTION">Non Fiction</option>
            <option value="SCIENCE">Science</option>
            <option value="HISTORY">History</option>
            <option value="TECHNOLOGY">Technology</option>
          </select>

          <input
  type="file"
  accept="image/*"
  className="w-full border p-3 rounded mb-4 text-black"
  onChange={(e) => setImage(e.target.files[0])}
/>

          <button
            onClick={handleAddBook}
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Add Book
          </button>
        </div>

        {/* Search */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by title"
            className="flex-1 border p-3 rounded text-black bg-white"
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />

          <button
            onClick={handleSearch}
            className="bg-green-600 text-white px-5 rounded hover:bg-green-700"
          >
            Search
          </button>

          <button
            onClick={() => {
              setSearchTitle("");
              fetchBooks();
            }}
            className="bg-gray-600 text-white px-5 rounded hover:bg-gray-700"
          >
            Reset
          </button>
        </div>

        {/* Books Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-200 text-black">
              <tr>
                <th className="p-4">Image</th>
                <th className="p-4">Title</th>
                <th className="p-4">Author</th>
                <th className="p-4">Genre</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {books.length > 0 ? (
                books.map((book) => (
                  <tr
                    key={book.book_Id}
                    className="border-b text-black"
                  >
                    <td className="p-4">
                      <img
                        src={
                          book.imageUrl
                            ? `http://localhost:8080${book.imageUrl}`
                            : "https://via.placeholder.com/80x100"
                        }
                        alt={book.title}
                        className="w-16 h-20 object-cover rounded"
                      />
                    </td>

                    <td className="p-4">{book.title}</td>
                    <td className="p-4">{book.author}</td>
                    <td className="p-4">{book.genre}</td>

                    <td className="p-4">
                      <button
                        onClick={() =>
                          handleDelete(book.book_Id)
                        }
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="p-4 text-center text-black"
                  >
                    No books found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}