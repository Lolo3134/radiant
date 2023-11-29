import React from 'react';

import { Link } from 'react-router-dom';

import arrow from '../../../Assets/icon/Arrow4.svg';

import s from './Footer.module.scss';

export const Footer = () => (
  <footer>
    <hr className={s.bigLine} />
    <div className={s.column1}>
      <p className={s.logo}>Radiant</p>
      <nav className={s.nav}>
        <Link className={s.nav_link} to="/services">Services</Link>
        <Link className={s.nav_link} to="/about-us">About Us</Link>
        <Link className={s.nav_link} to="/salons">Salons</Link>
        <Link className={s.nav_link} to="/contacts">Contacts</Link>
      </nav>
    </div>
    <div className={s.column2}>
      <div className={s.wrapper}>
        <Link target="_blank" to="/inst">Instagram</Link>
        <Link target="_blank" to="/tiktok">TikTok</Link>
        <Link target="_blank" to="/locations">Locations</Link>
      </div>
      <div className={s.page}>
        Developed by /
        {' '}
        <Link
          className={s.page__wrapper}
          target="_blank"
          to="https://offthegridlab.com/"
        >
          OffTheGrid Lab
        </Link>
      </div>
    </div>
    <div className={s.column3}>
      <div className={s.subscribe_title}>
        Let&apos;s keep in
        <span className={s.subscribe_title__wrapper}>(touch)</span>
      </div>
      <p className={s.subscribe_subtitle}>Sign-up for 10% off your first online book</p>
      <form className={s.form}>
        <input placeholder="Email" type="email" />
        <hr />
        <button type="submit">
          subscribe
          <img src={arrow} />
        </button>
      </form>
      <hr />
    </div>
  </footer>
);
