import React, { useState } from 'react';
import css from './Newsletter.module.scss';
import { Button } from 'components/Button/Button';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (!email.includes('@') || email === '') {
      setError("Whoops, make sure it's an email");
    } else {
      setError('');
    }

    setEmail('');
  };

  return (
    <section className={css.container}>
      <div className={css.text}>
        <p className={css.counter}>35,000+ already joined</p>
        <h2>Stay up-to-date with what we're doing</h2>
      </div>
      <form className={css.newsletter__form}>
        <div>
          <input
            placeholder="Enter your email address"
            className={css.newsletter__input}
            value={email}
            onChange={handleEmailChange}
          />
          {error && <p className={css.error}>{error}</p>}
        </div>
        <Button type="submit" theme="orange" onClick={handleSubmit}>
          Contact Us
        </Button>
      </form>
    </section>
  );
};
