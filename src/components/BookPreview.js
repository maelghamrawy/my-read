import BookShelfChanger from "./BookShelfChanger";

const BookPreview = ({ book, currentlyReadingBooks, wantToReadBooks, readBooks, updateBook }) => {
  
  const bookImage = `url("${book?.imageLinks?.thumbnail}")`
  const bookAuthors = (book.authors) ? book.authors.toString() : "Unknown"

  const getCurrentShelf = (book) => {
    if (book.shelf) {
      return book.shelf
    }

    if (currentlyReadingBooks.some(b => b.id === book.id)) {
      return 'currentlyReading'
    }
    
    if (wantToReadBooks.some(b => b.id === book.id)) {
      return 'wantToRead'
    }
    
    if (readBooks.some(b => b.id === book.id)) {
      return 'read'
    }
    return 'none';
  }
  
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: bookImage }}></div>
        <BookShelfChanger book={book} currentShelf={getCurrentShelf(book)} updateBook={updateBook} />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{bookAuthors}</div>
    </div>
  )
}

export default BookPreview;
