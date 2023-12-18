import { Navigation } from 'components/Navigation/Navigation';
import css from './Header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo-bookmark.svg';

export const Header = () => {
  return (
    <div>
      <div className={css.header__container}>
        <Link to="/home" className={css.header__logo}>
          <Logo />
        </Link>
        <Navigation />
      </div>
    </div>
  );
};
