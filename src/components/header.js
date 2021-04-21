import React from 'react';
import LogIn from './login';
import Navigation from './navigation';

import {Link} from 'react-router-dom';

import './header.css';


export default function Header() {
  return (
    <header className="header">

      <div className="header__logo">
        <Link to='/'>
          <div>
            Smart Logistics
          </div>
        </Link>
      </div>

      <Navigation />

      <LogIn />

    </header>
  )
}