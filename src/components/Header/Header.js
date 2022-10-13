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
              <NavLink to="/">Topics</NavLink>
              {/* <NavLink className={({isActive}) => isActive ? 'active': undefined} to={'/blog'}>Blog </NavLink> */}
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/about">About</NavLink>
          </div>
        </nav>     
      </div>
  );
};

export default Header;