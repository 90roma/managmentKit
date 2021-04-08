import React from "react";
import './style.css';

const avatarCard = (card) => {
  switch (card) {
    case true:
      return "avatar card__avatar";
  }
}

const Avatar = ({url}) => {
  return <img className="avatar card__avatar" src={url} alt="user avatar" />;
};

export { Avatar };
