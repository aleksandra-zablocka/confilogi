import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import css from './Home.module.scss';

import { Extensions } from 'components/Extensions/Extensions';
import { BookmarkManager } from 'components/BookmarkManager/BookmarkManager';
import { Features } from 'components/Features/Features';
import { OneClick } from 'components/OneClick/OneClick';
import { FAQ } from 'components/FAQ/FAQ';
import { Newsletter } from 'components/Newsletter/Newsletter';
import { Modal } from 'components/Modal/Modal';

export const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      openModal();
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className={css.sections}>
        <div>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
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
