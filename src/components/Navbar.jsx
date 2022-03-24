import React from 'react';
import { IoIosContact } from 'react-icons/io';
import { Link } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => (
  <>
    <nav className={classes.navbar}>
      <div className={classes.nav}>
        <h2 className={classes.logo}>Bookstore CMS</h2>
        <ul>
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/categories">CATEGORIES</Link>
          </li>
        </ul>
      </div>
      <div className={classes.icon}>
        <IoIosContact />
      </div>
    </nav>
  </>
);
export default Navbar;
