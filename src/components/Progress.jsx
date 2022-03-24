import React from 'react';
// import { GiCircle } from 'react-icons/gi';
import classes from './Progress.module.css';

const progress = 30;
const Progress = () => (
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
      <button type="button" className={classes.progressBtn}>
        Update Progress
      </button>
    </div>
  </div>
);

export default Progress;
