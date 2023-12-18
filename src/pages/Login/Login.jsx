import React from 'react';
import { Helmet } from 'react-helmet';
import css from './Login.module.scss';
import { ReactComponent as Construction } from '../../images/construction.svg';

export const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className={css.container}>
        <Construction />
        Page under construction. Please come back later.
      </div>
    </div>
  );
};
