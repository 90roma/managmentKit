import React from 'react';
import './style.css';

const Discussion = ({ authorName, position, date, authorAvatarUrl, comment }) => {
  return (
    <div className='Discussion'>
      <div className='Discussion__avatar'>
        <img src={authorAvatarUrl} alt='comment avatar' />
      </div>
      <div className='Discussion__wrapper'>
        <div className='Discussion__info'>
          <span className='Discussion__name'>{authorName}</span>
          <span className='Discussion__position'>{position}</span>
          <span className='Discussion__date'>{date}</span>
        </div>
        <p className='Discussion__comment-text'>{comment}</p>
      </div>
    </div>
  );
};

export { Discussion };
