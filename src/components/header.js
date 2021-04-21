import React from 'react';
import LogIn from './login';

import './header.css';

function Navigation() {
  return (
    <ul className="header__nav">
      <li>
        <a href="/">Грузоотправителям</a>
      </li>
      <li>
        <a href="/">Грузоперевозчикам</a>
      </li>
      <li>
        <a href="/">Отслеживание</a>
      </li>
      <li>
        <a href="/">Помощь</a>
      </li>
      <li>
        <a href="/">Информационный центр</a>
      </li>
    </ul>
  )
}

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Smart Logistics</div>
      <Navigation />
      <div className="header__city">
        <span>@ </span>
        <span className="city__name">Нур-Султан</span>
      </div>
      <div className="header__lang">RU / KZ</div>
      <div className="header__login">
        <LogIn />
      </div>
    </header>
  )
}