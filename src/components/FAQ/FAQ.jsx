import React, { useState } from 'react';
import css from './FAQ.module.scss';
import { Button } from 'components/Button/Button';

export const FAQ = () => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const handleClick = index => {
    setExpandedQuestion(prevIndex => (prevIndex === index ? null : index));
  };

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
        <li className={css.FAQItem}>
          <p
            onClick={() => handleClick(0)}
            className={`${css.question} ${
              expandedQuestion === 0 ? css.questionExpanded : ''
            }`}
          >
            What is Bookmark?
          </p>
          <p
            className={`${css.answerHidden} ${
              expandedQuestion === 0 ? css.answerVisible : ''
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            praesentium necessitatibus excepturi accusantium voluptatem odio sed
            maiores eligendi repudiandae omnis sapiente doloremque delectus
            esse, molestias in est. Molestias, quos temporibus?
          </p>
        </li>
        <li className={css.FAQItem}>
          <p
            onClick={() => handleClick(1)}
            className={`${css.question} ${
              expandedQuestion === 1 ? css.questionExpanded : ''
            }`}
          >
            How can I request a new browser?
          </p>
          <p
            className={`${css.answerHidden} ${
              expandedQuestion === 1 ? css.answerVisible : ''
            }`}
          >
            Officiis dicta commodi exercitationem numquam? Animi rem labore,
            possimus voluptas eos similique esse, doloribus unde, sapiente magni
            dolor quos voluptates obcaecati quis porro? Iusto, ea quasi! Fuga,
            ut. Dolorem, harum dolore porro expedita, est, obcaecati ea sapiente
            aliquam debitis odit corrupti molestias magnam nemo deserunt?
          </p>
        </li>
        <li className={css.FAQItem}>
          <p
            onClick={() => handleClick(2)}
            className={`${css.question} ${
              expandedQuestion === 2 ? css.questionExpanded : ''
            }`}
          >
            Is there a mobile app?
          </p>
          <p
            className={`${css.answerHidden} ${
              expandedQuestion === 2 ? css.answerVisible : ''
            }`}
          >
            Labore praesentium necessitatibus excepturi accusantium voluptatem
            odio sed maiores eligendi repudiandae omnis sapiente doloremque
            delectus esse, molestias in est. Molestias, quos temporibus?
            Perspiciatis itaque tempora velit ut. Odio laudantium quaerat in,
            recusandae rerum laboriosam illo officiis repellendus tenetur
            reprehenderit, doloremque voluptate voluptatum, neque sint
            veritatis. Consequatur unde, voluptatum voluptas dolores architecto
            quod id?
          </p>
        </li>
        <li className={css.FAQItem}>
          <p
            onClick={() => handleClick(3)}
            className={`${css.question} ${
              expandedQuestion === 3 ? css.questionExpanded : ''
            }`}
          >
            What about other Chromium browsers?
          </p>
          <p
            className={`${css.answerHidden} ${
              expandedQuestion === 3 ? css.answerVisible : ''
            }`}
          >
            Inventore, deserunt adipisci ducimus at quaerat perferendis cum
            quisquam vel accusamus, praesentium architecto, perspiciatis quis
            voluptas quae quidem quod deleniti accusantium?
          </p>
        </li>
      </ul>
      <Button theme="blue">More info</Button>
    </section>
  );
};
