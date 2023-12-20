import React from 'react';
import './Button.scss';
import classNames from 'classnames';

export const Button = ({
  children,
  type = 'button',
  theme = 'grey',
  onClick,
}) => {
  const buttonClasses = classNames('button', {
    'blue-theme': theme === 'blue',
    'grey-theme': theme === 'grey',
    'orange-theme': theme === 'orange',
  });
  return (
    <button className={buttonClasses} type={type} onClick={onClick}>
      {' '}
      {children}
    </button>
  );
};
