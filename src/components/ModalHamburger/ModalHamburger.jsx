import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './ModalHamburger.module.scss';
import { ReactComponent as Logo } from '../../images/logo-bookmark-white.svg';
import { NavigationMobile } from 'components/NavigationMobile/NavigationMobile';
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg';

export const ModalHamburger = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleOverlayClick = e => {
      if (isOpen && e.target.classList.contains(css.modal__overlay)) {
        onClose();
      }
    };

    const handleKeyPress = e => {
      if (isOpen && e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleOverlayClick);
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('click', handleOverlayClick);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, onClose]);

  return isOpen ? (
    <div className={css.modal__overlay}>
      <div className={css.modal__content} onClick={e => e.stopPropagation()}>
        <button className={css.modal__contentButton} onClick={onClose} />
        <Link to="/home" className={css.modal__logo} onClick={onClose}>
          <Logo />
        </Link>
        <NavigationMobile />
        <div className={css.icons}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
        </div>
      </div>
    </div>
  ) : null;
};
