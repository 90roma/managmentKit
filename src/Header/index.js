import React, { useState } from "react";
import { Button } from "../Button";
import { Avatar } from "../Avatar";
import logo from "../Avatar/SideBarStr-Icon.png";
import btnChatIcon from "../Avatar/btn-chat-icon.png";
import avatarDev from "../Avatar/avatar-dev.png";
import avatarMark from "../Avatar/avatar-mark.png";
import avatarDes from "../Avatar/avatar-des.png";
import "./style.css";

const HEADER_ITEM = ["Tasks", "Kanban", "Activity", "Calendar", "Files"];

const Header = ({ title, onItemClick }) => {
  const [isSelect, setIsSelect] = useState(false);

  const getHeaderClass = (item) => {
    return item === isSelect
      ? "Header__navigation Header__navigation_selected"
      : "Header__navigation";
  };

  return (
    <div className="Header">
      <div className="Header__wrapper">
        <img className="Header__logo" src={logo} alt="header logo" />
        <h1 className="Header__title">{title}</h1>
        <Button />
        <div className="Header__info">
          <Avatar users={[avatarDev, avatarMark, avatarDes]} />
          <button className="Button Header__button">Share</button>
          <button className="Button Header__button-chat">
            <img
              className="Header__button-chat-icon"
              src={btnChatIcon}
              alt="bnt icon"
            />
            Chat
          </button>
        </div>
      </div>
      {HEADER_ITEM.map((item) => (
        <div
          onClick={() => {
            {
              onItemClick(item);
            }
            {
              setIsSelect(item);
            }
          }}
          className={getHeaderClass(item)}
          key={item}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export { Header };
