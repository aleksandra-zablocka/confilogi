import css from './BookmarkManager.module.scss';
import { Button } from 'components/Button/Button';

export const BookmarkManager = () => {
  return (
    <section className={css.container}>
      <div className={css.illustration} />
      <div className={css.text}>
        <h1>A Simple Bookmark Manager</h1>
        <p className={css.textLeft}>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className={css.buttons}>
          <Button>Get it on Chrome</Button>
          <Button>Get it on Firefox</Button>
        </div>
      </div>
    </section>
  );
};
