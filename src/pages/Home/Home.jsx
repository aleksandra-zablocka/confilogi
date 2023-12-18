import { Extensions } from 'components/Extensions/Extensions';
import css from './Home.module.scss';

import { BookmarkManager } from 'components/BookmarkManager/BookmarkManager';
import { Features } from 'components/Features/Features';
import { OneClick } from 'components/OneClick/OneClick';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FAQ } from 'components/FAQ/FAQ';
import { Newsletter } from 'components/Newsletter/Newsletter';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={css.sections}>
        <BookmarkManager />
        <Features />
        <OneClick />
        <Extensions />
        <FAQ />
        <Newsletter />
      </div>
    </div>
  );
};
