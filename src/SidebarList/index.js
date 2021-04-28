import React from "react";
import "./style.css";

const SidebarList = ({title, button, icon, text, count, users=[]}) => {

    return (
        <div>
            {Boolean(title)&& <div className="SidebarList__title-wrapper"><p className="SidebarList__title">{title}</p></div>}
            <div className="SidebarList">
                {Boolean(icon) && <img className="SidebarList__icon" src={icon} alt="icon"/>}
                {Boolean(text) && <p className="SidebarList__text">{text}</p>}
                {Boolean(count) && <div className="SidebarList__count" alt="icon count">{count}</div>}
                {Boolean(users.length) && (
                    <div className="SidebarList__users">{users.map((user) => <img className="SidebarList__user" src={user} alt="user avatar"/>)}</div>
                )}
            </div>
            {Boolean(button) && <button className="SidebarList__button">{button}</button>}
        </div>

    )
}

export {SidebarList}