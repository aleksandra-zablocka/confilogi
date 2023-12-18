import { useMediaQuery } from 'react-responsive';
import css from './OneClick.module.scss';
import { Button } from 'components/Button/Button';

export const OneClick = () => {
  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <section className={css.container}>
      <div className={css.illustration} />
      <div className={css.info}>
        <div className={css.text}>
          <h2>Bookmark in one click</h2>
          <p className={css.textLeft}>
            Organize your bookmarks however you like. Our simple drag-and-drop
            interface gives you complete control over how you manager your
            favorite sites.
          </p>
        </div>
        {!isMobile && (
          <div>
            <Button theme="blue">More info</Button>
          </div>
        )}
      </div>
    </section>
  );
};
