"use client";
import { BooksContext } from '@/context/BooksContext';
import { IBook } from '@/types/books.types';
import React, { useContext } from 'react';

const ReadButton = ({ book }: {book: IBook }) => {
const {readBooks, setReadBooks} = useContext(BooksContext)

// console.log(booksProvider, "booksProvider");

    const handleReadBook = () => {
        console.log("read book btn triggered", book);

        setReadBooks([...readBooks, book]);
        alert(`You have read "${book.bookName}"`);
    };
    return (
       <button className="btn btn-primary px-8" onClick={() => handleReadBook()}>
            Read
          </button>
    );
};

export default ReadButton;