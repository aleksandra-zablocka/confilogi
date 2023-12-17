import React from 'react';
import css from './Navigation.module.scss';
import ActiveNavLink from './ActiveNavLink';

export const Navigation = () => {
  return (
    <nav>
      <ul className={css.navigation}>
        <li>
          <ActiveNavLink to="/features">FEATURES</ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink to="/pricing">PRICING</ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink to="/contact">CONTACT</ActiveNavLink>
        </li>
        <li>
          <ActiveNavLink to="/login">LOGIN</ActiveNavLink>
        </li>
      </ul>
    </nav>
  );
};
