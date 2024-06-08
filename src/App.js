import './App.css';
import React, { useState } from 'react';
import Home from './pages/Home';
import BookShelf from './pages/BookShelf';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [bookshelf, setBookshelf] = useState([]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home setBookshelf={setBookshelf} bookshelf={bookshelf} />} />
          <Route path="/bookshelf" element={<BookShelf bookshelf={bookshelf} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;