import React from 'react';
import { Link } from 'react-router-dom';
import css from './NavigationMobile.module.scss';

export const NavigationMobile = ({ onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return (
    <nav>
      <ul className={css.navigation}>
        <li className={css.navigation__item}>
          <Link className={css.link} to="/features" onClick={handleClick}>
            FEATURES
          </Link>
        </li>
        <li className={css.navigation__item}>
          <Link className={css.link} to="/pricing" onClick={handleClick}>
            PRICING
          </Link>
        </li>
        <li className={css.navigation__item}>
          <Link className={css.link} to="/contact" onClick={handleClick}>
            CONTACT
          </Link>
        </li>
        <li className={css.navigation__item}>
          <Link className={css.link} to="/login" onClick={handleClick}>
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};
