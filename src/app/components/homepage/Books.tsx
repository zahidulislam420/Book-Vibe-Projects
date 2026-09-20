// import React from 'react';

// const getBooks = async () => {
//   const response = await fetch('http://localhost:3000/booksData.json');
//   const data = await response.json();
//   return data;
// };

// const Books = async () => {
//   const booksData = await getBooks();
//   console.log(booksData, "booksData");

//   return (
//     <section className="container mx-auto my-[70px]">
//     Books
//     {
//         booksData.map((book, ind) => {
//             return <div key={ind}>{book.bookName}</div>
//         })
//     }


//     </section>
//   );
// };

// export default Books;



import Image from "next/image";
import React from "react";

const getBooks = async () => {
  const response = await fetch("http://localhost:3000/booksData.json");
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-[70px] px-4">
      {/* Section Title */}
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Explore Our Books
        </h2>
        <p className="mt-3 text-gray-500">
          Discover your next favorite book from our collection.
        </p>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.map((book) => (
          <div
            key={book.bookId}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-72 overflow-hidden bg-gray-100">
              <Image
                src={book.image}
                alt={book.bookName}
                width={800}
                height={600}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Category */}
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-800 shadow">
                {book.category}
              </span>

              {/* Rating */}
              <div className="absolute right-4 top-4 rounded-full bg-black/75 px-3 py-1 text-sm font-semibold text-white">
                ⭐ {book.rating}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
                {book.bookName}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                by {book.author}
              </p>

              {/* Book Info */}
              <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
                <span>📖 {book.totalPages} pages</span>
                <span>📅 {book.yearOfPublishing}</span>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {book.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Review */}
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                {book.review}
              </p>

              {/* Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <p className="text-xs text-gray-400">Publisher</p>
                  <p className="text-sm font-semibold text-gray-700">
                    {book.publisher}
                  </p>
                </div>

                <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-700">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Books;
