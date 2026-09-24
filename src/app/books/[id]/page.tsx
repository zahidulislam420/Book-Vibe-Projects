import ReadButton from '@/app/components/BookDetails/ReadButton';
import { IBook } from '@/types/books.types';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}


const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();
  return data;
};



const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
    const { id } = await params;
    const booksData = await getBooks();
    const book = booksData.find(
        (book: IBook) => String(book.bookId) === String(id),
        ) as IBook;

   console.log(book, "Book details");
   return (
  <div className="container mx-auto px-4 py-10">
    <div className="card card-side bg-base-100 shadow-xl border border-base-200 overflow-hidden">
      
      {/* Book Image */}
      <figure className="w-1/2 bg-base-200 p-6">
        <Image
          src={book.image}
          alt={book.bookName}
          width={500}
          height={300}
          className="w-full h-[450px] object-contain rounded-xl"
        />
      </figure>

      {/* Book Details */}
      <div className="card-body w-1/2 p-8">
        
        <div>
          <span className="badge badge-primary badge-outline mb-3">
            {book.category}
          </span>

          <h2 className="text-3xl font-bold leading-tight">
            {book.bookName}
          </h2>

          <p className="text-base-content/60 mt-2">
            by <span className="font-semibold text-base-content">
              {book.author}
            </span>
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-3 mt-3">
          <div className="rating rating-sm">
            <input
              type="radio"
              className="mask mask-star-2 bg-orange-400"
              checked
              readOnly
            />
          </div>

          <span className="font-semibold">
            {book.rating}
          </span>

          <span className="text-base-content/50">
            • {book.totalPages} pages
          </span>
        </div>

        {/* Review */}
        <div className="mt-5">
          <h3 className="font-semibold text-lg mb-2">
            About this book
          </h3>

          <p className="text-base-content/70 leading-7">
            {book.review}
          </p>
        </div>

        {/* Book Information */}
        <div className="grid grid-cols-2 gap-4 mt-5">
          <div className="bg-base-200 rounded-lg p-3">
            <p className="text-sm text-base-content/50">
              Publisher
            </p>
            <p className="font-semibold mt-1">
              {book.publisher}
            </p>
          </div>

          <div className="bg-base-200 rounded-lg p-3">
            <p className="text-sm text-base-content/50">
              Published
            </p>
            <p className="font-semibold mt-1">
              {book.yearOfPublishing}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-5">
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-ghost"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="card-actions justify-end mt-6">
          <ReadButton book={book} />
          <button className="btn btn-primary px-8">
            Wishlist
          </button>
        </div>

      </div>
    </div>
  </div>
);
};

export default BookDetailsPage;