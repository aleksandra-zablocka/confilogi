import { Button } from 'components/Button/Button';
import css from './FAQ.module.scss';

export const FAQ = () => {
  return (
    <section className={css.container}>
      <div className={css.text}>
        <h2>Frequently Asked Questions</h2>
        <p className={css.textCenter}>
          Here is some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <ul className={css.FAQList}>
        <li className={css.FAQItem}>What is Bookmark?</li>
        <li className={css.FAQItem}>How can I request a new browser?</li>
        <li className={css.FAQItem}>Is there a mobile app?</li>
        <li className={css.FAQItem}>What about other Chromium browsers?</li>
      </ul>
      <Button theme="blue">More info</Button>
    </section>
  );
};
