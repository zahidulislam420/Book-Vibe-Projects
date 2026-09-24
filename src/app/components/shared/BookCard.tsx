import Image from 'next/image';
import { IBook } from '@/types/books.types';
import Link from 'next/link';

interface BookCardProps {
  book: IBook;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="relative h-[300px] overflow-hidden bg-gray-100">
        <Image
          src={book.image}
          alt={book.bookName}
          width={800}
          height={600}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-indigo-600 shadow backdrop-blur">
          {book.category}
        </span>

        <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white backdrop-blur">
          <span className="text-yellow-400">★</span>
          {book.rating}
        </div>
      </div>

      <div className="p-5">
        <h3 className="line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          by <span className="font-medium text-gray-700">{book.author}</span>
        </p>

        <div className="mt-4 flex items-center justify-between border-y border-gray-100 py-3 text-sm">
          <div>
            <p className="text-gray-400">Pages</p>
            <p className="font-semibold text-gray-800">{book.totalPages}</p>
          </div>

          <div>
            <p className="text-gray-400">Published</p>
            <p className="font-semibold text-gray-800">
              {book.yearOfPublishing}
            </p>
          </div>

          <div>
            <p className="text-gray-400">Publisher</p>
            <p className="max-w-[100px] truncate font-semibold text-gray-800">
              {book.publisher}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-500">
          {book.review}
        </p>

      <Link href={`/books/${book.bookId}`}>
          <button className="mt-5 w-full rounded-xl bg-indigo-600 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700">
          View Details
        </button>
      </Link>



      </div>
    </article>
  );
};

export default BookCard;
