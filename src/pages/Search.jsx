import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookCard from '../components/BookCard';

function Search({ books }) {
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleSearch = ({ query, subject, condition }) => {
    let results = books;
    if (query) results = results.filter(book => book.title.toLowerCase().includes(query.toLowerCase()));
    if (subject) results = results.filter(book => book.subject === subject);
    if (condition) results = results.filter(book => book.condition === condition);
    setFilteredBooks(results);
  };

  return (
    <div>
      <h1>Search Books</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {filteredBooks.map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
}

export default Search;