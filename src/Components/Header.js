import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header id='header' className='header d-flex align-items-center'>
        <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
          <Link to='/' className='logo d-flex align-items-center'>
            {/* Uncomment the line below if you also wish to use an image logo */}
            <img src='assets/img/logo.png' alt='' />
            <h1>
              UpConstruction<span>.</span>
            </h1>
          </Link>
          <i className='mobile-nav-toggle mobile-nav-show bi bi-list' />
          <i className='mobile-nav-toggle mobile-nav-hide d-none bi bi-x' />
          <nav id='navbar' className='navbar'>
            <ul>
              <li>
                <Link to='/' className='active'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/services'>Services</Link>
              </li>
              <li>
                <Link to='/projects'>Projects</Link>
              </li>
              <li>
                <Link to='/blog'>Blog</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
          {/* .navbar */}
        </div>
      </header>
    </div>
  );
}

export default Header;
