import { useMediaQuery } from 'react-responsive';
import css from './PopUp1.module.scss';
import { Button } from 'components/Button/Button';

export const PopUp1 = () => {
  const isMobile = useMediaQuery({ maxWidth: 375 });

  return (
    <section className={css.container}>
      <div className={css.illustration} />
      <div className={css.info}>
        <div className={css.text}>
          <h2>Intelligent search</h2>
          <p className={css.textLeft}>
            Our powerful search feature will help you find saved sites in no
            time at all. No need to trawl through all of your bookmarks.
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
