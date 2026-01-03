import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Search from './pages/Search';
import Login from './pages/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: 'Introduction to Algorithms', author: 'Carmen', price: 50, subject: 'Computer Science', condition: 'Good', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Calculus', author: 'Stewart', price: 30, subject: 'Math', condition: 'Excellent', image: 'https://via.placeholder.com/150' },
  ]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Home books={books} />} />
            <Route path="/search" element={<Search books={books} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard addBook={addBook} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;