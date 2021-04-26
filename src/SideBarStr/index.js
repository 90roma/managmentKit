import React from "react";
import './style.css';

const SideBarStr = ({text, icon, count, users = []}) => {
    return (
        <div>
            <div className="SideBarStr">
                {Boolean(icon) && <img className="SideBarStr__icon" src={icon}/>}
                {Boolean(text) && <p className="SideBarStr__text">{text}</p>}
                {Boolean(count) && <img className="SideBarStr__count" src={count}/>}
                {Boolean(users.length) && (
                    <div className="SideBarStr__users">{users.map((user) => <img className="SideBarStr__user" src={user} alt="userpic"/>)}</div>
                )}
            </div>
        </div>

    )
};

export {SideBarStr}
