// import React, { useState, useEffect } from 'react';
// import css from './Newsletter.module.scss';
// import { Button } from 'components/Button/Button';

// export const Newsletter = () => {
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [counter, setCounter] = useState(35000);

//   const handleEmailChange = event => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (!email.includes('@') || email === '') {
//       setError("Whoops, make sure it's an email");
//     } else {
//       setError('');
//     }

//     setEmail('');
//   };

//   useEffect(() => {
//     let interval;

//     const startCountdown = () => {
//       interval = setInterval(() => {
//         setCounter(prevCounter => (prevCounter > 100 ? prevCounter - 100 : 0));
//       }, 10);
//     };

//     const timeout = setTimeout(() => {
//       startCountdown();
//     }, 5000);

//     return () => {
//       clearTimeout(timeout);
//       clearInterval(interval);
//     };
//   }, []);

//   const formattedCounter = counter.toLocaleString('en-US', {
//     style: 'decimal',
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   });

//   return (
//     <section className={css.container}>
//       <div className={css.text}>
//         <p className={css.counter}>{formattedCounter}+ already joined</p>
//         <h2>Stay up-to-date with what we're doing</h2>
//       </div>
//       <form className={css.newsletter__form}>
//         <div>
//           <input
//             placeholder="Enter your email address"
//             className={css.newsletter__input}
//             value={email}
//             onChange={handleEmailChange}
//           />
//           {error && <p className={css.error}>{error}</p>}
//         </div>
//         <Button type="submit" theme="orange" onClick={handleSubmit}>
//           Contact Us
//         </Button>
//       </form>
//     </section>
//   );
// };

import React, { useState, useEffect } from 'react';
import css from './Newsletter.module.scss';
import { Button } from 'components/Button/Button';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [counter, setCounter] = useState(35000);

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

  useEffect(() => {
    let interval;

    const startCountdown = () => {
      const startTime = new Date().getTime();

      interval = setInterval(() => {
        const elapsedTime = new Date().getTime() - startTime;
        const remainingTime = Math.max(20000 - elapsedTime, 0);
        const calculatedCounter = Math.floor((remainingTime / 20000) * 35000);

        setCounter(calculatedCounter);
      }, 100);
    };

    startCountdown();

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedCounter = counter.toLocaleString('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <section className={css.container}>
      <div className={css.text}>
        <p className={css.counter}>{formattedCounter}+ already joined</p>
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
