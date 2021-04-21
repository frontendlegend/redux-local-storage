import React from 'react';
import appstore from '../img/appstore.png';
import googleplay from '../img/googleplay.png';

import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">

      <div></div>

      <ul className="footer__links">
        <li>
          <a href="/">Грузоотправителям</a>
        </li>
        <li>
          <a href="/">Грузоперевозчиками</a>
        </li>
        <li>
          <a href="/">Отслеживание</a>
        </li>
        <li>
          <a href="/">Помощь</a>
        </li>
        <li>
          <a href="/">Информационный портал</a>
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