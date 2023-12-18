import { Button } from 'components/Button/Button';
import css from './Extensions.module.scss';

export const Extensions = () => {
  return (
    <section className={css.container}>
      <div className={css.text}>
        <h2>Download the extension</h2>
        <p className={css.textCenter}>
          We' ve got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <ul className={css.extensionsList}>
        <li className={css.extensionsItem}>
          <figure className={css.browser}>
            <div className={`${css.browser__img} ${css.chrome}`} />
            <div className={css.browser__description}>
              <h3>Add to Chrome</h3>
              <p>Minimum version 62</p>
            </div>
            <div className={css.dots} />
            <Button theme="blue">Add & Install Extension</Button>
          </figure>
        </li>
        <li className={css.extensionsItem}>
          <figure className={css.browser}>
            <div className={`${css.browser__img} ${css.firefox}`} />
            <div className={css.browser__description}>
              <h3>Add to Firefox</h3>
              <p>Minimum version 55</p>
            </div>
            <div className={css.dots} />
            <Button theme="blue">Add & Install Extension</Button>
          </figure>
        </li>
        <li className={css.extensionsItem}>
          <figure className={css.browser}>
            <div className={`${css.browser__img} ${css.opera}`} />
            <div className={css.browser__description}>
              <h3>Add to Opera</h3>
              <p>Minimum version 46</p>
            </div>
            <div className={css.dots} />
            <Button theme="blue">Add & Install Extension</Button>
          </figure>
        </li>
      </ul>
    </section>
  );
};
