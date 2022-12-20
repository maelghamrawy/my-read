import BookPreview from "./BookPreview";

const BookShelf = ({ shelfTitle, books, updateBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (<li key={book.id}><BookPreview book={book} updateBook={updateBook} /></li>))}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;
