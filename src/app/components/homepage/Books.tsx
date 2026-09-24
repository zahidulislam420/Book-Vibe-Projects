// import React from 'react';
// import Image from 'next/image';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/books.types';

const getBooks = async () => {
  const response = await fetch('http://localhost:3000/booksData.json');
  const data = await response.json();
  return data;
};

const Books = async () => {
  const booksData = await getBooks();
  console.log(booksData, "booksData");

  return (
    <section className="container mx-auto my-[70px]">
    Books
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
         {booksData.map((book:IBook, ind:number) => {
          return <BookCard key={ind} book={book} />;
         })}
      </div>
    </section>
  );
};

export default Books;



