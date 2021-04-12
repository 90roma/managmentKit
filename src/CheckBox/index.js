import React from "react";
import './style.css';

const CheckBox = ({value, checkBoxCard}) => {

  const checkBoxClassTask = (value) => {
    switch (value) {
      case true:
        return "CheckBox__card_default CheckBox_active CheckBox__card_position";
      case false:
        return "CheckBox__card_default CheckBox__card_position";
    }
  }

  const checkBoxClass = (checkBoxCard) => {
    switch (checkBoxCard) {
      case false:
        return "CheckBox";
    }
  }
    return (
        <div>
          <div className={checkBoxClassTask(value)}/>
          <div className={checkBoxClass(checkBoxCard)}/>
        </div>
    );
}

export { CheckBox };