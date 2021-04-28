import React from "react";
import "./style.css";

const SidebarList = ({title, buttonText, list = []}) => {

    return (
        <div className="SidebarList">
            {Boolean(title) && <div className="SidebarList__title">{title}</div>}
            {Boolean(list?.length) && list.map((listItem) => {
                return (
                    <div className="SidebarList__items">
                        {Boolean(listItem?.icon) && <img className="SidebarList__icon" src={listItem.icon} alt="icon"/>}
                        {Boolean(listItem?.text) && <p className="SidebarList__text">{listItem.text}</p>}
                        {Boolean(listItem?.count) &&
                        <div className="SidebarList__count" alt="icon count">{listItem.count}</div>}
                        {Boolean(listItem?.users?.length) && (
                            <div className="SidebarList__users">{listItem.users.map((user) => <img
                                className="SidebarList__user" src={user} alt="user avatar"/>)}</div>
                        )}
                    </div>
                )
            })}
            {Boolean(buttonText) && <button className="SidebarList__button">{buttonText}</button>}
        </div>

    )
}

export {SidebarList}