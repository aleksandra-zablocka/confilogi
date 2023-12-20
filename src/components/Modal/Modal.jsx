import React, { useEffect } from 'react';
import css from './Modal.module.scss';
import { PopUp } from 'components/PopUp/PopUp';

export const Modal = ({ isOpen, onClose }) => {
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
        <PopUp />
        <button className={css.modal__contentButton} onClick={onClose} />
      </div>
    </div>
  ) : null;
};
