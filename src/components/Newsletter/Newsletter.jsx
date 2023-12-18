import css from './Newsletter.module.scss';
import { Button } from 'components/Button/Button';

export const Newsletter = () => {
  return (
    <section className={css.container}>
      <div className={css.text}>
        <p className={css.counter}>35,000+ already joined</p>
        <h2>Stay up-to-date with what we're doing</h2>
      </div>
      <form className={css.newsletter__form}>
        <input
          placeholder="Enter your email address"
          className={css.newsletter__input}
        ></input>
        <Button theme="orange">Contact Us</Button>
      </form>
    </section>
  );
};
