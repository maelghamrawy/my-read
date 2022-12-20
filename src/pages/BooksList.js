import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BookShelf from "../components/BookShelf";

const BooksList = ({books,currentlyReadingBooks, wantToReadBooks, readBooks, getBooks, updateBook}) => {

  useEffect(() => {
    getBooks();
  }, [])
  
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <BookShelf shelfTitle="Currently Reading" books={currentlyReadingBooks} updateBook={updateBook} />
          <BookShelf shelfTitle="Want to Read" books={wantToReadBooks} updateBook={updateBook} />
          <BookShelf shelfTitle="Read" books={readBooks} updateBook={updateBook} />
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
    </div>
  )
}

export default BooksList;
