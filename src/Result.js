import React from "react";
import MyBooks from "./MyBooks";

const Result = (props) => {
  const { searchBooks, myBooks, onMove } = props;

  const updatedBooks = searchBooks.map((book) => {
    myBooks.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map((book) => (
          <MyBooks
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default Result;
