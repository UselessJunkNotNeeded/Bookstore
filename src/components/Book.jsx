import React from 'react';
import { useDispatch } from 'react-redux';
import classes from './Book.module.css';
import Progress from './Progress';
import { removeBook } from '../redux/books/books';

const Book = ({ data }) => {
  const { title, author, category, id, progress } = data;
  const dispatch = useDispatch();
  return (
    <div className={classes.book}>
      <div className={classes.info}>
        <div className={classes.bookinfo}>
          <p className={classes.category}>{category}</p>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.author}>{author}</p>
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
            <button
              type="button"
              className={classes.remove}
              onClick={() => dispatch(removeBook(id))}>
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
      <Progress progress={progress} id={id} />
    </div>
  );
};

export default Book;

