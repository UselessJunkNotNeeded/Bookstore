import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Categories from './components/Categories';

const App = () => (
  <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Booklist />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);
export default App;
