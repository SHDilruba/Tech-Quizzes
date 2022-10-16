import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'


import './Header.css'

const Header = () => {
  return (
    <div className='bg-warning'>
        <nav className='header '>
         <div className='title'>
             <img id='logo' src={logo} alt="" />
             <h2>Tech Quizzes</h2>
         </div>
          <div>
              <Link to="/">Topics</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/statistics">Statistics</Link>
              <Link to="/about">About</Link>
          </div>
        </nav>     
      </div>
  );
};

export default Header;