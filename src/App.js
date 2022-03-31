import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import Categories from './components/Categories';
import { fetchData } from './redux/books/books';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData(), []);
  });
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Booklist />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
};
export default App;
