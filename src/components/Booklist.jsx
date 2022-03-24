import React from 'react';
import Book from './Book';
import Input from './Input';

import classes from './Booklist.module.css';

const Booklist = () => (
  <section className={classes.library}>
    <div className={classes.allbooks}>
      <div>
        <Book />
      </div>
    </div>
    <Input />
  </section>
);

export default Booklist;
