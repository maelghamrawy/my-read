import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as booksApi from "../utils/BooksAPI";
import BookPreview from "../components/BookPreview";

const BooksSearch = ({currentlyReadingBooks, wantToReadBooks, readBooks, getBooks, updateBook}) => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const searchBooks = async query => {
    const res = await booksApi.search(query, 10);
    (res) ? setResults(res) : setResults([]);
  }

  const renderBooks = () => {
    return (results.length) ? results.map(book => (
      <li key={book.id}><BookPreview book={book} currentlyReadingBooks={currentlyReadingBooks} wantToReadBooks={wantToReadBooks} readBooks={readBooks} updateBook={updateBook} /></li>)
    ) : (
      <p>No Results</p>
    )
  }
  
  useEffect(() => {
    getBooks();
    if (query) {
      searchBooks(query);
    }
  }, [query]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title, author, or ISBN" value={query} onChange={handleChange} />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {renderBooks()}
        </ol>
      </div>
    </div>
  )
}

export default BooksSearch;
