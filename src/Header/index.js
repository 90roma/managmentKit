import React from "react";
import {Button} from "../Button";
import sideBarStrIcon1 from '../Avatar/sideBarStr-Icon1.png';
import btnChatIcon from '../Avatar/btn-chat-icon.png';
import "./style.css";
import {Avatar} from "../Avatar";
import avatarDev from "../Avatar/avatar-dev.png";
import avatarMark from "../Avatar/avatar-mark.png";
import avatarDes from "../Avatar/avatar-des.png";

const Header = ({title}) => {
    return (
        <div className="Header">
            <div className="Header__wrapper">
                <img className="Header__logo" src={sideBarStrIcon1} alt="header logo"/>
                <h1 className="Header__title">{title}</h1>
                <Button/>
                <div className="Header__info">
                    <Avatar users={[avatarDev, avatarMark, avatarDes]}/>
                    <button className="Button Header__button">Share</button>
                    <button className="Button Header__button-chat">
                        <img className="Header__button-chat-icon" src={btnChatIcon} alt="bnt icon"/>Chat
                    </button>
                </div>

            </div>
        </div>
    )
}

export {Header}