import React from 'react';
import classes from './Book.module.css';
import Progress from './Progress';

const Book = () => (
  <div className={classes.book}>
    <div className={classes.info}>
      <div className={classes.bookinfo}>
        <p className={classes.category}>Action</p>
        <h3 className={classes.title}>The Hunger Games</h3>
        <p className={classes.author}>Suzanne Collins</p>
      </div>
      <ul className={classes.btn}>
        <li>
          <button type="button" className={classes.comment}>
            Comments
          </button>
        </li>
        <li>
          <div className={classes.vl} />
        </li>
        <li>
          <button type="button" className={classes.remove}>
            Remove
          </button>
        </li>
        <li>
          <div className={classes.vl} />
        </li>
        <li>
          <button type="button" className={classes.edit}>
            Edit
          </button>
        </li>
      </ul>
    </div>
    <Progress />
  </div>
);

export default Book;
