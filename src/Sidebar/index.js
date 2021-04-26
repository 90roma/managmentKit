import React from 'react';
import {UserInfo} from '../UserInfo';
import {TaskSummary} from '../TaskSummary';
import {SidebarList} from '../SidebarList';
import {SideBarStr} from '../SideBarStr';
import count from '../Avatar/count.png';
import sidebarLogo from '../Avatar/sidebar-logo.png';
import sidebarSearch from '../Avatar/search.png';
import userNameAvatar from "../Avatar/avatar-preview.png"
import sideBarStrIcon from '../Avatar/sideBarStr-icon.png';
import sideBarStrIcon1 from '../Avatar/sideBarStr-icon1.png';
import sideBarStrIcon2 from '../Avatar/sideBarStr-icon2.png';
import sideBarStrIcon3 from '../Avatar/sideBarStr-icon3.png';
import './style.css';

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
                        sidebarList={[<SideBarStr text="Home"/>,
                            <SideBarStr text="My Tasks"/>,
                            <SideBarStr text="Notification" count={count}/>,
                        ]}
                    />
                    <SidebarList
                        title="projects"
                        sidebarList={[<SideBarStr text="Dashboard UI Kit" icon={sideBarStrIcon}/>,
                            <SideBarStr text="CRM System" icon={sideBarStrIcon1}/>,
                            <SideBarStr text="Website Redesign" icon={sideBarStrIcon2}/>,
                            <SideBarStr text="Communication Tool" icon={sideBarStrIcon3}/>
                        ]}
                        button="+ Add a Project"
                    />
                    <SidebarList
                        title="projects"
                        sidebarList={[<SideBarStr text="Design"/>,
                            <SideBarStr text="Backend" />,
                            <SideBarStr text="Frontend"/>,
                        ]}
                        button="+ Add a Team"
                    />
                </div>
            </div>
            <div className="Sidebar__footer">
                <p className="Sidebar__footer-text"><a href="#" className="Sidebar__footer-link">Invite your team and</a> start collaborating!</p>
            </div>

        </div>
    );
}

export {Sidebar}