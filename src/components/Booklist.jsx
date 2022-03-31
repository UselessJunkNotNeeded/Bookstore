import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Input from './Input';
import { fetchData } from '../redux/books/books';

import classes from './Booklist.module.css';

const Booklist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const data = useSelector(({ bookReducer }) => bookReducer);

  if (data.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '5rem' }}>
        <h3>No books added yet</h3>
        <Input />
      </div>
    );
  }

  return (
    <section className={classes.library}>
      <div className={classes.allbooks}>
        {data.map((book) => (
          <Book key={book.id} data={book} />
        ))}
      </div>
      <Input />
    </section>
  );
};

export default Booklist;
