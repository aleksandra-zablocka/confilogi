// import css from './Home.module.scss';

import { BookmarkManager } from 'components/BookmarkManager/BookmarkManager';
import { Features } from 'components/Features/Features';
import React from 'react';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BookmarkManager />
      <Features />
    </div>
  );
};
