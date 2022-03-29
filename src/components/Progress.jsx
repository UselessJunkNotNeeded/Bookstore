import React from 'react';
import { useDispatch } from 'react-redux';
import { updateBook } from '../redux/books/books';
import classes from './Progress.module.css';

const Progress = ({ progress, id }) => {
  const dispatch = useDispatch();
  const handleUpdate = () => {
    let rand = Math.floor(Math.random() * 10) + 1;
    if (progress + rand > 100) rand = 100 - progress;

    dispatch(updateBook({ id, rand }));
  };
  return (
    <div className={classes.progress}>
      <div className={classes.status}>
        <div className={classes.circle}>
          <svg>
            <circle cx="30" cy="30" r="30" />
            <circle
              style={{ strokeDashoffset: 190 - (190 * `${progress}`) / 100 }}
              cx="30"
              cy="30"
              r="30"
            />
          </svg>
        </div>
        <div className={classes.progressReport}>
          <h2>
            {progress}
            <span>%</span>
          </h2>
          <p>completed</p>
        </div>
      </div>
      <div className={classes.vl} />
      <div className={classes.progressUpdate}>
        <p className={classes.chapter}>Current Chapter</p>
        <p className={classes.chapterTitle}>Chapter 17</p>
        <button
          type="button"
          disabled={progress == 100 ? true : false}
          className={classes.progressBtn}
          onClick={handleUpdate}>
          Update Progress
        </button>
      </div>
    </div>
  );
};

export default Progress;
