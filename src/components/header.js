import React from 'react';
import LogIn from './login';
import Navigation from './navigation';

import './header.css';


export default function Header() {
  return (
    <header className="header">

      <div className="header__logo">Smart Logistics</div>

      <Navigation />

      <LogIn />

    </header>
  )
}