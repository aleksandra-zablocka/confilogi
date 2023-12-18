import React from 'react';
import { useMediaQuery } from 'react-responsive';
import favicon from '../../images/favicon-32x32.png';
import { Helmet } from 'react-helmet';
import './SharedLayout.scss';

import { Header } from 'components/Header/Header';
import { HeaderMobile } from 'components/HeaderMobile/HeaderMobile';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 575 });

  return (
    <div>
      <Helmet>
        {' '}
        <link rel="icon" type="image/svg+xml" href={favicon} />
      </Helmet>
      {isMobile ? <HeaderMobile /> : <Header />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};
