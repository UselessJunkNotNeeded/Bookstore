import React from 'react';
import classes from './Input.module.css';

const Input = () => (
  <div className={classes.formControl}>
    <h2>ADD NEW BOOk</h2>
    <form className={classes.form}>
      <input type="text" placeholder="Book title" required />
      <input type="text" placeholder="Author" required />
      <select name="category" id="category" defaultValue="DEFAULT" required>
        <option value="DEFAULT" disabled>
          Category
        </option>
        <option value="Action">Action</option>
        <option value="Economy">Economy</option>
        <option value="Fiction">Science Fiction</option>
        <option value="Adventure">Adventure</option>
      </select>
      <button type="button" className={classes.addBtn}>
        Add Book
      </button>
    </form>
  </div>
);

export default Input;
