import React from 'react';
import BookCard from '../components/BookCard';

function Home({ books }) {
  return (
    <div>
      <h1>Welcome to Uni Marketplace</h1>
      <h2>Featured Books</h2>
      <div>
        {books.slice(0, 4).map(book => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
}

export default Home;