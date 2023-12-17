import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.scss';

export const Loader = ({ isVisible = true }) => {
  return (
    <Hourglass
      height="80"
      width="80"
      className={css.loader}
      visible={isVisible}
      ariaLabel="hourglass-loading"
      colors={['#000000', '#ed9f72']}
    />
  );
};
