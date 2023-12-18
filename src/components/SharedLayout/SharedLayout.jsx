import React from 'react';
import { useMediaQuery } from 'react-responsive';
import favicon from '../../images/favicon-32x32.png';
import { Helmet } from 'react-helmet';
import './SharedLayout.scss';

import { Header } from 'components/Header/Header';
import { HeaderMobile } from 'components/HeaderMobile/HeaderMobile';

export const SharedLayout = () => {
  const isMobile = useMediaQuery({ maxWidth: 775 });

  return (
    <div>
      <Helmet>
        {' '}
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      {isMobile ? <HeaderMobile /> : <Header />}
    </div>
  );
};
