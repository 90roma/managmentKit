import React from "react";
import {Title} from "../Title";
import {Button} from "../Button";
import {CheckBox} from "../CheckBox";
import {Avatar} from "../Avatar";
import {Tag} from "../Tag";
import {File} from "../File";
import {Discussion} from "../Discussion";
import avatarAdd from "../Avatar/avatar-add.png";
import './style.css';

const Task = ({title, author, createdAt, asignTo, deadLine, tags, followers, description, discussion, avatar, files}) => {
    return (
        <div className="Task">
            <div className="Task__container">
                <div className="Task__title-wrapper">
                    <div>
                        <h2>{title}</h2>
                        <p className="text subtitle">{`Added by ${author} ${createdAt}`}</p>
                    </div>
                    <div className="Task__button-wrapper">
                        <div>
                            <CheckBox checkBoxCard={false}/>
                        </div>
                        <Button/>
                    </div>
                </div>
                <div className="Task__info">
                    <div className="Task__info__wrapper">
                        <Title headingUppercase="Asign To"/>
                        <div className="Task__info__asign-wrapper">
                            <Avatar url={avatar}/>
                            <p className="Task__info__text">{asignTo}</p>
                        </div>
                    </div>
                    <div className="Task__info__wrapper">
                        <Title headingUppercase="due on"/>
                        <p className="Task__info__text">{deadLine}</p>
                    </div>
                    <div className="Task__info__wrapper">
                        <Title headingUppercase="tag"/>
                        {tags.map((tag) => <Tag name={tag} key={tag}/>)}
                    </div>
                    <div className="Task__info__wrapper">
                        <Title headingUppercase="followers"/>
                        <div className="Task__info__followers-avatar">
                            {followers.map((follower) => <Avatar url={follower} key={follower}/>)}
                            <button className="Task__info__button"><Avatar url={avatarAdd}/></button>
                        </div>
                    </div>
                </div>
                <div className="Task__description">
                    <Title headingUppercase="description"/>
                    <p className="Task__text"> {description} </p>
                    <div className="Task__file">
                        {files.map((file) => <File
                            url={file.filePreview}
                            fileName={file.fileName}
                            size={file.fileSize}
                            type={file.fileType}
                        />)}
                    </div>
                </div>
                <div className="Task__discussion">
                    <Title headingUppercase="discussion"/>
                    {discussion.map((dis) => <Discussion
                            url={dis.avatar}
                            commentName={dis.name}
                            commentPosition={dis.position}
                            commentDate={dis.date}
                            commentText={dis.comment}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export {Task};