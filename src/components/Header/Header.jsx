import { Link } from 'react-router-dom';
import css from './Header.module.scss';
import { Navigation } from 'components/Navigation/Navigation';
import { ReactComponent as Logo } from '../../images/logo-bookmark.svg';

export const Header = () => {
  return (
    <div className={css.header__container}>
      <Link to="/home" className={css.header__logo}>
        <Logo />
      </Link>
      <Navigation theme="row" />
    </div>
  );
};
