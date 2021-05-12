import React from 'react';
import './style.css';


const Discussion = ({authorName, position, date, authorAvatarUrl, comment}) => {
    return (
        <div className="Discussion">
            <div className="Discussion__avatar">
                <img src={authorAvatarUrl} alt="comment avatar"/>
            </div>
            <div className="Discussion__wrapper">
                <div className="Discussion__info">
                    <p className="Discussion__name">{authorName}</p>
                    <p className="Discussion__position">{position}</p>
                    <p className="Discussion__date">{date}</p>
                </div>
                <p className="Discussion__comment-text">{comment}</p>
            </div>
        </div>
    );
}

export { Discussion }