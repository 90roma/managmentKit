import React from 'react';
import './style.css';

const CheckBox = ({value, checkBoxCard, onChange}) => {

    const checkBoxClassTask = (value) => {
        switch (value) {
            case true:
                return "CheckBox__card_default CheckBox_active";
            case false:
                return "CheckBox__card_default";
        }
    }

    const checkBoxClass = (checkBoxCard) => {
        switch (checkBoxCard) {
            case false:
                return "CheckBox";
            case true:
                return "CheckBox CheckBox_active";
        }
    }

    return (
        <div>
            <input type="checkbox" onChange={onChange} value={value}/>
            <div className={checkBoxClassTask(value)}/>
            <div className={checkBoxClass(checkBoxCard)}/>
        </div>
    );
}

export {CheckBox};
