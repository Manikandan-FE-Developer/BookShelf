import React, { useState, useEffect } from 'react';

export default function Book({ searchQuery }) {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [addedBooks, setAddedBooks] = useState([]);

    useEffect(() => {
        const query = searchQuery || 'bestsellers';
        setIsLoading(true);
        fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
            .then((res) => res.json())
            .then((data) => {
                setBooks(data.docs);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
            });
        const storedBooks = JSON.parse(localStorage.getItem('addedBooks')) || [];
        setAddedBooks(storedBooks);
    }, [searchQuery]);

    const addToBookshelf = (book) => {
        const existingBooks = JSON.parse(localStorage.getItem('bookshelf')) || [];
        localStorage.setItem('bookshelf', JSON.stringify([...existingBooks, book]));
        
        setAddedBooks([...addedBooks, book.key]);
        localStorage.setItem('addedBooks', JSON.stringify([...addedBooks, book.key]));
    };

    const isBookAdded = (book) => {
        return addedBooks.includes(book.key);
    };

    return isLoading ? (
        <img className="loading" src='images/loading.svg' alt='loading'/>
    ) : (
        <div className="Books">
            <div className="cards">
                {books.map((book) => (
                    <div key={book.key} className="card">
                        <p className="title">Book Title: {book.title}</p>
                        <p className="count">Edition Count: {book.edition_count}</p>
                        {!isBookAdded(book) && (
                            <button className="btn btn-success" onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
