import css from './Footer.module.scss';
import sprite from 'images/icons.svg';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div>
      <div className={css.header__container}>
        <Link to="/home" className={css.header__logo}>
          <div className={css.logo__iconBg}>
            <svg className={css.logo__icon} width="15px" height="15px">
              <use href={`${sprite}#icon-bookmark`}></use>
            </svg>
          </div>
          <p className={css.header__title}>BOOKMARK</p>
        </Link>
        <Navigation />
      </div>
    </div>
  );
};
