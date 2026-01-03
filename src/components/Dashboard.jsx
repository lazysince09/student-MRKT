import React, { useState } from 'react';

function Dashboard({ addBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');
  const [subject, setSubject] = useState('');
  const [condition, setCondition] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author, price: parseFloat(price), subject, condition, image });
    alert('Book added!');
    // Reset form
    setTitle(''); setAuthor(''); setPrice(''); setSubject(''); setCondition(''); setImage('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Admin Dashboard - Upload Book</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }} />
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }} />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }} />
        <select value={subject} onChange={(e) => setSubject(e.target.value)} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }}>
          <option value="">Select Subject</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Math">Math</option>
          <option value="Physics">Physics</option>
        </select>
        <select value={condition} onChange={(e) => setCondition(e.target.value)} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }}>
          <option value="">Select Condition</option>
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Fair">Fair</option>
        </select>
        <input type="url" placeholder="Image URL" value={image} onChange={(e) => setImage(e.target.value)} required style={{ display: 'block', marginBottom: '10px', padding: '10px', width: '100%' }} />
        <button type="submit" style={{ padding: '10px', width: '100%', backgroundColor: '#333', color: 'white' }}>Upload Book</button>
      </form>
    </div>
  );
}

export default Dashboard;