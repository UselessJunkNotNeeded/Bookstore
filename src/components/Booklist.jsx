import React from 'react';
import Book from './Book';

import classes from './Booklist.module.css';

const Booklist = () => (
  <div className={classes.allbooks}>
    <div>
      <Book />
    </div>
  </div>
);

export default Booklist;
