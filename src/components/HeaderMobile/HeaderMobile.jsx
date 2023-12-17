import css from './HeaderMobile.module.scss';
import sprite from 'images/icons.svg';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo-bookmark.svg';
import { ReactComponent as Hamburger } from '../../images/icon-hamburger.svg';

export const HeaderMobile = () => {
  return (
    <div>
      <div className={css.header__container}>
        <Link to="/home" className={css.header__logo}>
          <Logo />
        </Link>
        <Hamburger className={css.menu__icon} />
      </div>
    </div>
  );
};
