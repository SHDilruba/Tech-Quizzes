import React, { useState } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import logo from '../../images/logo.svg'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Header.css'

const Header = () => {
  return (
    <div className='nav-container bg-warning header'>
     <nav class="navbar navbar-expand-lg bg-warning container">   
      <div className="container-fluid title">
      <div className='title'>
      <img id='logo' src={logo} alt="" />
      <h3 className="navbar-brand">Tech Quizzes</h3>
      </div>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>   
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="/">Topics</a>
        <a className="nav-link" href="/blog">Blog</a>
        <a className="nav-link" href="/statistics">Statistics</a>
        <a className="nav-link" href="/about">About</a>
      </div>
    </div>
  </div>
</nav>

        {/* <nav className='header'>
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
        </nav>  */}
     </div>    
  );
};

export default Header;