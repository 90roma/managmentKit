import React from 'react';
import {UserInfo} from '../UserInfo';
import {TaskSummary} from '../TaskSummary';
import {SidebarList} from '../SidebarList';
import sidebarLogo from '../Avatar/sidebar-logo.png';
import sidebarSearch from '../Avatar/search.png';
import userNameAvatar from "../Avatar/avatar-preview.png"
import avatarDev from "../Avatar/avatar-dev.png";
import avatarMark from "../Avatar/avatar-mark.png";
import avatarDes from "../Avatar/avatar-des.png";
import sideBarStrIcon from '../Avatar/sideBarStr-Icon.png';
import sideBarStrIcon1 from '../Avatar/sideBarStr-Icon1.png';
import sideBarStrIcon2 from '../Avatar/sideBarStr-Icon2.png';
import sideBarStrIcon3 from '../Avatar/sideBarStr-Icon3.png';
import './style.css';

const MENU_LIST = [{text: "Home"}, {text: "My Tasks"}, {text: "Notifications", count: 3}]
const PROJECTS_LIST = [{text: "Dashboard UI Kit", icon: sideBarStrIcon}, {
    text: "CRM System",
    icon: sideBarStrIcon1
}, {text: "Website Redesign", icon: sideBarStrIcon2}]
const TEAMS_LIST = [{text: "Design", users: [avatarDev, avatarMark]}, {
    text: "Backend",
    users: [avatarDev, avatarMark]
}, {text: "Frontend", users: [avatarDev, avatarMark]}]

const Sidebar = ({title}) => {
    return (
        <div className="Sidebar">
            <div className="Sidebar__title-wrapper">
                <img src={sidebarLogo}/>
                <h3 className="Sidebar__title">{title}</h3>
                <img src={sidebarSearch}/>
            </div>
            <div className="Sidebar__user-info">
                <UserInfo
                    avatarPreview={userNameAvatar}
                    userName="Emilee Simchenko"
                    position="Product Owner"
                />
                <div className="Sidebar__task-summary">
                    <TaskSummary
                        countDescription="Completed Tasks"
                        count={372}
                    />
                    <TaskSummary
                        countDescription="Open Tasks"
                        count={11}
                    />
                </div>
                <div className="Sidebar__sidebar-list">
                    <SidebarList
                        title="Menu"
                        list={MENU_LIST}
                    />
                    <SidebarList
                        title="Projects"
                        list={PROJECTS_LIST}
                        buttonText="+ Add a Project"
                    />
                    <SidebarList
                        title="teams"
                        list={TEAMS_LIST}
                        buttonText="+ Add a Team"
                    />
                </div>
            </div>
            <div className="Sidebar__footer">
                <p className="Sidebar__footer-text"><a href="#" className="Sidebar__footer-link">Invite your
                    team</a> and start collaborating!</p>
            </div>

        </div>
    );
}

export {Sidebar}