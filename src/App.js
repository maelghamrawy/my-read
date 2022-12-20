import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as booksApi from "./utils/BooksAPI";
import BooksList from "./pages/BooksList"
import BooksSearch from "./pages/BooksSearch";

function App() {

  const [books, setBooks] = useState([]);
  const [currentlyReadingBooks, setCurrentlyReadingBook] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [readBooks, setReadBook] = useState([]);
  
  const getBooks = async () => {
    const res = await booksApi.getAll();
    (res) ? setBooks(res) : setBooks([]);
  }
  
  const updateBook = async (book, shelf) => {
    const res = await booksApi.update(book, shelf)
    if (shelf === 'none') {
      setBooks(books.filter(b => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setBooks(books.filter(b => b.id !== book.id).concat(book))
    }
  }
  
  useEffect(() => {
    setCurrentlyReadingBook(books.filter(book => book.shelf === 'currentlyReading'));
    setWantToReadBooks(books.filter(book => book.shelf === 'wantToRead'));
    setReadBook(books.filter(book => book.shelf === 'read'));
  }, [books]);
  
  return (
    <Routes>
      <Route path="/" element={<BooksList books={books} currentlyReadingBooks={currentlyReadingBooks} wantToReadBooks={wantToReadBooks} readBooks={readBooks} getBooks={getBooks}  updateBook={updateBook} />} />
      <Route path="/search" element={<BooksSearch currentlyReadingBooks={currentlyReadingBooks} wantToReadBooks={wantToReadBooks} readBooks={readBooks} getBooks={getBooks} updateBook={updateBook}/>} />
    </Routes>
  )
}

export default App;
