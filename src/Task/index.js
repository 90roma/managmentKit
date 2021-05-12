import React, {useState} from "react";
import {Title} from "../Title";
import {Button} from "../Button";
import {CheckBox} from "../CheckBox";
import {Avatar} from "../Avatar";
import {Tag} from "../Tag";
import {File} from "../File";
import {Discussion} from "../Discussion";
import userNameAvatar from "../Avatar/avatar-preview.png"
import avatarAdd from "../Avatar/avatar-add.png";
import './style.css';

const Task = ({
                  title,
                  author,
                  createdAt,
                  asignTo,
                  deadLine,
                  tags,
                  followers,
                  description,
                  discussion,
                  avatar,
                  files,
              }) => {
    const [comments, setComments] = useState(discussion)
    const [newComment, setNewComment] = useState('')
    const [buttonState, setButtonState] = useState(true)
    const [taskFile, setTaskFile] = useState(files)

    const removeFile = (id) => {
        setTaskFile(prevState => prevState.filter(el => el.id !== id))
    }

    const changeButtonState = (buttonState) => {
        setButtonState(!buttonState)
    }

    const addComment = (newComment) => {
        const newComments = [{
            avatar: userNameAvatar,
            name: "Emilee Simchenko",
            position: "Web developer",
            comment: newComment,
            date: "Yesterday at 12:37pm"
        }, ...comments]
        setComments(newComments)
    }

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
                        <div className="Task__followers">
                            {followers.map((follower) => <Avatar url={follower} key={follower}/>)}
                            <button className="Task__info__button"><Avatar url={avatarAdd}/></button>
                        </div>
                    </div>
                </div>
                <div className="Task__description">
                    <Title headingUppercase="description"/>
                    <p className="Task__text"> {description} </p>
                    <div className="Task__file">
                        {taskFile.map((file) => <File
                            url={file.filePreview}
                            fileName={file.fileName}
                            size={file.fileSize}
                            type={file.fileType}
                            id={file.id}
                            fileButton={file.fileButton}
                            removeFile={removeFile}
                        />)}
                    </div>
                </div>
                <div className="Task__discussion">
                    <Title headingUppercase="discussion"/>
                    <div className="Task__textarea-wrapper">
                        <img className="Task__discussion__avatar" src={userNameAvatar} alt="user avatar"/>
                        <textarea className="Task__discussion__textarea" placeholder="Add a comment..."
                                  value={newComment}
                                  maxLength="250"
                                  onChange={(event) => {
                                      setNewComment(event.target.value)
                                      changeButtonState(event.target.value.length >= 2)
                                  }
                                  }
                        />
                    </div>
                    <button disabled={buttonState} onClick={() => addComment(newComment)}>Send</button>
                    {comments.map((dis) => <Discussion
                            authorAvatarUrl={dis.avatar}
                            authorName={dis.name}
                            position={dis.position}
                            date={dis.date}
                            comment={dis.comment}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export {Task};