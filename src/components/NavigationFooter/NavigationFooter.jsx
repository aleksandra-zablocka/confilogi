import React from 'react';
import { Link } from 'react-router-dom';
import css from './NavigationFooter.module.scss';

export const NavigationFooter = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <Link className={css.link} to="/features">
            FEATURES
          </Link>
        </li>
        <li>
          <Link className={css.link} to="/pricing">
            PRICING
          </Link>
        </li>
        <li>
          <Link className={css.link} to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
};
