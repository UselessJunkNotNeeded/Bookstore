import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'react-uuid';
import { addBook } from '../redux/books/books';
import classes from './Input.module.css';

const Input = () => {
  const dispatch = useDispatch();
  const title = useRef('');
  const author = useRef('');
  const [category, setCategory] = useState(null);
  const inputHandler = (e) => {
    e.preventDefault();

    dispatch(
      addBook({
        title: title.current.value,
        author: author.current.value,
        category,
        progress,
        id: uuid()
      })
    );
  };

  return (
    <div className={classes.formControl}>
      <h2>ADD NEW BOOk</h2>
      <form className={classes.form} onSubmit={inputHandler}>
        <input ref={title} type="text" placeholder="Book title" required />
        <input ref={author} type="text" placeholder="Author" required />
        <select
          name="category"
          id="category"
          defaultValue="DEFAULT"
          required
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="DEFAULT" disabled>
            Category
          </option>
          <option value="Action">Action</option>
          <option value="Economy">Economy</option>
          <option value="Fiction">Science Fiction</option>
          <option value="Adventure">Adventure</option>
        </select>
        <button type="submit" className={classes.addBtn}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Input;
