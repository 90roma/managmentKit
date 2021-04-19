import React from 'react';
import './style.css';


const Discussion = ({commentName, commentPosition, commentDate, url, commentText}) => {
    return (
        <div className="Comment">
            <div className="Comment__avatar">
                <img src={url} alt="comment avatar"/>
            </div>
            <div className="Comment__text-wrapper">
                <p className="Comment__name">{commentName}</p>
                <p className="Comment__position">{commentPosition}</p>
                <p className="Comment__date">{commentDate}</p>
                <p className="Comment__comment-text">{commentText}</p>
            </div>

        </div>
    );
}

export { Discussion }