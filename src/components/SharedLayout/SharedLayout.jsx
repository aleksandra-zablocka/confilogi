import React from 'react';
import { useMediaQuery } from 'react-responsive';
// import favicon from '../../images/bookmark.svg';
import favicon from '../../images/favicon-32x32.png';

import { Header } from 'components/Header/Header';
import { HeaderMobile } from 'components/HeaderMobile/HeaderMobile';
import { Helmet } from 'react-helmet';

export const SharedLayout = () => {
  // const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1279 });

  return (
    <div>
      <Helmet>
        {' '}
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      {isTablet ? <HeaderMobile /> : <Header />}
    </div>
  );
};
