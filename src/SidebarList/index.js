import React from "react";
import "./style.css";

const SidebarList = ({title, sidebarList, button}) => {

    return (
        <div className="SidebarList">
            <p className="SidebarList__title">{title}</p>
            {sidebarList}
            {Boolean(button) && <button className="SidebarList__button">{button}</button>}
        </div>
    )
}

export {SidebarList}