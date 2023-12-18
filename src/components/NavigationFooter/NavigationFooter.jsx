// import React from 'react';
// import css from './NavigationFooter.module.scss';
// import ActiveNavLinkFooter from '../NavigationFooter/ActiveNavLinkFooter';

// export const NavigationFooter = () => {
//   return (
//     <nav>
//       <ul className={css.navigation}>
//         <li>
//           <ActiveNavLinkFooter to="/features">FEATURES</ActiveNavLinkFooter>
//         </li>
//         <li>
//           <ActiveNavLinkFooter to="/pricing">PRICING</ActiveNavLinkFooter>
//         </li>
//         <li>
//           <ActiveNavLinkFooter to="/contact">CONTACT</ActiveNavLinkFooter>
//         </li>
//         <li>
//           <ActiveNavLinkFooter to="/login">LOGIN</ActiveNavLinkFooter>
//         </li>
//       </ul>
//     </nav>
//   );
// };

import React from 'react';
import css from './NavigationFooter.module.scss';
import { Link } from 'react-router-dom';

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
