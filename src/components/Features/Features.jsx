import React, { useState } from 'react';
import css from './Features.module.scss';
import { Modal } from 'components/Modal/Modal';

export const Features = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleClick = index => {
    setActiveItem(index);
  };

  return (
    <section className={css.container}>
      <div className={css.text}>
        <h2>Features</h2>
        <p className={css.textCenter}>
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <ul className={css.featuresList}>
        <li
          className={activeItem === 0 ? css.isActive : css.featuresItem}
          onClick={() => handleClick(0)}
        >
          Simple Bookmarking
        </li>
        <li
          className={activeItem === 1 ? css.isActive : css.featuresItem}
          onClick={() => {
            handleClick(1);
            openModal();
          }}
        >
          Speedy Searching
        </li>
        <li
          className={activeItem === 2 ? css.isActive : css.featuresItem}
          onClick={() => handleClick(2)}
        >
          Easy Sharing
        </li>
      </ul>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};
