import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('');
  const [condition, setCondition] = useState('');

  const handleSearch = () => {
    onSearch({ query, subject, condition });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '200px', marginRight: '10px' }}
      />
      <select value={subject} onChange={(e) => setSubject(e.target.value)} style={{ padding: '10px', marginRight: '10px' }}>
        <option value="">All Subjects</option>
        <option value="Computer Science">Computer Science</option>
        <option value="Math">Math</option>
        <option value="Physics">Physics</option>
      </select>
      <select value={condition} onChange={(e) => setCondition(e.target.value)} style={{ padding: '10px', marginRight: '10px' }}>
        <option value="">All Conditions</option>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
      </select>
      <button onClick={handleSearch} style={{ padding: '10px' }}>Search</button>
    </div>
  );
}

export default SearchBar;