import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './HeaderMobile.module.scss';
import { ReactComponent as Logo } from '../../images/logo-bookmark.svg';
import { ReactComponent as Hamburger } from '../../images/icon-hamburger.svg';
import { ModalHamburger } from 'components/ModalHamburger/ModalHamburger';

export const HeaderMobile = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={css.header__container}>
      <div>
        <Link to="/home" className={css.header__logo}>
          <Logo />
        </Link>
      </div>
      <Hamburger className={css.menu__icon} onClick={openModal} />
      <ModalHamburger isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};
