import React, { useState, Fragment } from 'react';
import Book from "../components/Book";
import Header from "../components/Header";

export default function Home(){
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <Header onSearch={setSearchQuery} />
                </div>
                <div className="row">
                    <Book searchQuery={searchQuery} />
                </div>
            </div>
        </Fragment>
    );
}