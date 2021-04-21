import React from 'react';
import {Link} from 'react-router-dom';

import './footer.css';

import appstore from '../img/appstore.png';
import googleplay from '../img/googleplay.png';

export default function Footer() {
  return (
    <footer className="footer">

      <div></div>

      <ul className="footer__links">
        <li>
          <Link to='/newpage/1'>Грузоотправителям</Link>
        </li>
        <li>
          <Link to='/newpage/2'>Грузоперевозчикам</Link>
        </li>
        <li>
          <Link to='/newpage/3'>Отслеживание</Link>
        </li>
        <li>
          <Link to='/newpage/4'>Помощь</Link>
        </li>
        <li>
          <Link to='/newpage/5'>Информационный центр</Link>
        </li>
      </ul>
      
      <div className="footer__about">
        <p className="about__text">"Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
        <p className="about__author">
          <a href="/">Smart Logistics</a>
        </p>
        <p className="about__author">2021</p>
      </div>

      <div className="footer__icons">
        <img className="footer__icon googleplay" src={googleplay} alt="" />
        <img className="footer__icon appstore" src={appstore} alt="" />
      </div>
    </footer>
  )
}