import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
import './Header.css'

const Header = () => {
  return (
    <div className='bg-warning'>
      <nav className='header container'>
         <div className='title'>
             <img id='logo' src={logo} alt="" />
             <h3>Tech Quizzes</h3>
         </div>
          <div>
              <NavLink to="/">Topics</NavLink>
              <NavLink to="/blog">Blog</NavLink>
              <NavLink to="/statistics">Statistics</NavLink>
              <NavLink to="/about">About</NavLink>
          </div>
      </nav> 
   </div>    
  );
};

export default Header;

   

