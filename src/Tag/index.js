import React from 'react';
import './style.css';

const Tag = ({ name }) => {
  const tagClass = (name) => {
    switch (name) {
      case 'development':
        return 'Tag Tag_orange';
      case 'marketing':
        return 'Tag Tag_purple';
      case 'design':
        return 'Tag Tag_blue';
      default:
        return 'Tag Tag_default';
    }
  };
  return (
    <div className={tagClass(name)}>
      <span>{name}</span>
    </div>
  );
};

export { Tag };
