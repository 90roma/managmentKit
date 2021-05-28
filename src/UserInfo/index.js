import React from 'react';
import './style.css';

const UserInfo = ({ userName, position, avatarPreview }) => {
  return (
    <div className='User-info'>
      <img src={avatarPreview} alt='user name avatar' />
      <div className='User-info__user-name-wrapper'>
        <span className='User-info__user-name'>{userName}</span>
        <span className='User-info__user-position'>{position}</span>
      </div>
      <button className='Button User-info__button' />
    </div>
  );
};

export { UserInfo };
