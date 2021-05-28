import React, { useState } from 'react';
import './style.css';
import { CheckBox } from '../CheckBox';
import { Tag } from '../Tag';
import { Avatar } from '../Avatar';
import { Title } from '../Title';

const TaskCard = ({ header, avatarUrl, tag, isSelect }) => {
  const [isCompleted, setCompleted] = useState(false);

  const taskCardClassName = isSelect
    ? 'card card__wrapper card__wrapper_selected'
    : 'card card__wrapper';

  return (
    <div className={taskCardClassName}>
      <div className='card__heading-wrapper'>
        <CheckBox
          onChange={() => setCompleted(!isCompleted)}
          // value={isCompleted}
          smallCheckbox
          checked={isCompleted}
        />
        <Title header={header} />
      </div>
      <div className='card__department-wrapper'>
        <Avatar url={avatarUrl} />
        <Tag name={tag} />
      </div>
    </div>
  );
};

export { TaskCard };
