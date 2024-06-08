import React, { useState, useEffect } from 'react';

export default function BookShelf() {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBooks.filter(book => book));
    }, []);

    return (
        <div className="books">
            <h2>My Bookshelf</h2>
            {bookshelf.length > 0 ? (
                <div className="cards">
                    {bookshelf.map((book, index) => (
                        <div key={index} className="card">
                            <p className="title">Book Title: <span>{book.title}</span></p>
                            <p className="count">Edition Count: <span>{book.edition_count}</span></p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className='emptyBookshelf'>No books in your bookshelf</p>
            )}
        </div>
    );
}