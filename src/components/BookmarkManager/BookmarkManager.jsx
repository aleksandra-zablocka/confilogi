import { Button } from 'components/Button/Button';
import css from './BookmarkManager.module.scss';

export const BookmarkManager = () => {
  return (
    <section className={css.container}>
      <div className={css.heroIllustration} />
      <div className={css.text}>
        <h2>A Simple Bookmark Manager</h2>
        <p>
          A clean and simple interface to organize your favorite websites. Open
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
