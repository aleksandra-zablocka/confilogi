// import css from './Home.module.scss';

import { BookmarkManager } from 'components/BookmarkManager/BookmarkManager';
import React from 'react';
import { Helmet } from 'react-helmet';

export const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BookmarkManager />
    </div>
  );
};
