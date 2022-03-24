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
      <div className={classes.progress}>
        <h2>10%</h2>
        <p>completed</p>
      </div>
    </div>
  </div>
);

export default Progress;
