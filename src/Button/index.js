import React from 'react';
import './style.css';

const getClass = (type) => {
  switch (type) {
    case 'warning':
      return 'Button Button_warning';
    case 'success':
      return 'Button Button_success';
    default:
      return 'Button';
  }
};

const Button = ({ text, type }) => {
  return <button className={getClass(type)}>{text}</button>;
};

export { Button };
