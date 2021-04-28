import React from "react";
import "./style.css";


const UserInfo = ({userName, position, avatarPreview}) => {
    return (
        <div className="User-info">
            <img src={avatarPreview} alt="user name avatar"/>
            <div className="User-info__user-name-wrapper">
                <p className="User-info__user-name">{userName}</p>
                <p className="User-info__user-position">{position}</p>
            </div>
            <button className="Button User-info__button"/>
        </div>
    )
}

export {UserInfo}