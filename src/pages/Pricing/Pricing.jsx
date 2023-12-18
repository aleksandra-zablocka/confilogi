import React from 'react';
import { Helmet } from 'react-helmet';
import css from './Pricing.module.scss';
import { ReactComponent as Construction } from '../../images/construction.svg';

export const Pricing = () => {
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
