import React from "react";
import './style.css'

const getClass = (type) => {
    // console.log(type)
    switch (type) {
        case "warning":
            return "Button Button_warning";
        case "success":
            return "Button Button_success";
        default:
            return "Button";
    }
}

const Button = (props) => {
    // console.log('button props', props.type);
  return (
    <button className={getClass(props.type)}>
        {props.text}
    </button>
  );
};


export { Button };
