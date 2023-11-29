import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import s from './Header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.wrapper}>
      <Link className={s.logo} to="/" onClick={() => setIsOpen(false)}>Radiant</Link>
      <nav className={s.nav}>
        <Link className={s.nav_link} to="/services">Services</Link>
        <Link className={s.nav_link} to="/about-us">About Us</Link>
        <Link className={s.nav_link} to="/salons">Salons</Link>
        <Link className={s.nav_link} to="/contacts">Contacts</Link>
      </nav>
      <div className={s.menu_mobile}>
        <button
          className={s.menu_button}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </button>
        <nav className={`${s.nav}  ${isOpen && s.active}`}>
          <Link
            className={s.nav_link}
            to="/services"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            className={s.nav_link}
            to="/about-us"
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link
            className={s.nav_link}
            to="/salons"
            onClick={() => setIsOpen(false)}
          >
            Salons
          </Link>
          <Link
            className={s.nav_link}
            to="/contacts"
            onClick={() => setIsOpen(false)}
          >
            Contacts
          </Link>
        </nav>
      </div>
    </header>
  );
};
