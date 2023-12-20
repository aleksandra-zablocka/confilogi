import { Link } from 'react-router-dom';
import css from './Footer.module.scss';
import { ReactComponent as Logo } from '../../images/logo-bookmark-white.svg';
import { ReactComponent as Facebook } from '../../images/icon-facebook.svg';
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg';
import { NavigationFooter } from 'components/NavigationFooter/NavigationFooter';

export const Footer = () => {
  return (
    <div className={css.footer__container}>
      <div className={css.logoAndNav}>
        <Link to="/home" className={css.footer__logo}>
          <Logo />
        </Link>
        <NavigationFooter />
      </div>
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
  );
};
