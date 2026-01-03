import React from 'react';
import { Link } from 'react-router';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', color: 'white', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
      <h2>Uni Marketplace</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '20px' }}>
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/search" style={{ color: 'white', textDecoration: 'none' }}>Search</Link></li>
        <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;