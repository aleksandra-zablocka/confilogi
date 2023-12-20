import { Link } from 'react-router-dom';
import css from './HeaderMobile.module.scss';
import { ReactComponent as Logo } from '../../images/logo-bookmark.svg';
import { ReactComponent as Hamburger } from '../../images/icon-hamburger.svg';

export const HeaderMobile = () => {
  return (
    <div className={css.header__container}>
      <div>
        <Link to="/home" className={css.header__logo}>
          <Logo />
        </Link>
      </div>
      <Hamburger className={css.menu__icon} />
    </div>
  );
};
