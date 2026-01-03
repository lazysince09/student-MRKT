import React from 'react';

function BookCard({ book }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px', width: '250px', display: 'inline-block' }}>
      <img src={book.image} alt={book.title} style={{ width: '100%', height: '150px' }} />
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Subject: {book.subject}</p>
      <p>Condition: {book.condition}</p>
      <p>Price: ${book.price}</p>
      <button style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px', border: 'none' }}>Buy Now</button>
    </div>
  );
}

export default BookCard;