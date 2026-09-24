'use client';
import React, {createContext, ReactNode, useState}  from 'react';

export const BooksContext = createContext({});

const BooksProvider = ({children}: {children: ReactNode }) => {
const [readBooks, setReadBooks] = useState([]);
const [wishListBooks, setWishList] = useState([]);

const shareData = {
    readBooks,
    setReadBooks,
    wishListBooks,
    setWishList,
};

    return (
    <BooksContext.Provider value={shareData}> {children} </BooksContext.Provider>
    );
};

export default BooksProvider;