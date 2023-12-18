import css from './Features.module.scss';
import { useState } from 'react';

export const Features = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = index => {
    setActiveItem(index);
  };

  return (
    <section className={css.container}>
      <div className={css.text}>
        <h2>Features</h2>
        <p>
          Our aim is to make it quick and easy for you to access your favorite
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
          onClick={() => handleClick(1)}
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
    </section>
  );
};
