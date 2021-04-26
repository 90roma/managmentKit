import React from "react";
import './style.css';

const SideBarStr = ({text, icon, count}) => {
    return (
        <div>
            <div className="SideBarStr">
                {Boolean(icon) && <img className="SideBarStr__icon" src={icon}/>}
                {Boolean(text) && <p className="SideBarStr__text">{text}</p>}
                {Boolean(count) && <img className="SideBarStr__count" src={count}/>}
            </div>
        </div>

    )
};

export {SideBarStr}