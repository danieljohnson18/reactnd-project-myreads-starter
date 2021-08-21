import React, { Component } from "react";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import Result from "./Result";

class Search extends Component {
  render() {
    const {
      searchBooks,
      myBooks,
      onSearch,
      onResetSearch,
      onMove,
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <SearchInput onSearch={onSearch} />
        </div>
        <Result searchBooks={searchBooks} myBooks={myBooks} onMove={onMove} />
      </div>
    );
  }
}

export default Search;
