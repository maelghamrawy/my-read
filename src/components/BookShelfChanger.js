const BookShelfChanger = ({book, currentShelf, updateBook }) => {

  const options = [
    {label: "Currently Reading", value: "currentlyReading"},
    {label: "Want to Read", value: "wantToRead"},
    {label: "Read", value: "read"},
    {label: "None", value: "none"},
  ];
  
  const handleChange = (e) => {
    if (e.target.value !== currentShelf) {
      updateBook(book, e.target.value);
    }
  }
  
  return (
    <div className="book-shelf-changer">
      <select value={currentShelf} onChange={handleChange}>
        <option disabled>Move to...</option>
        {options.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}


export default BookShelfChanger;
