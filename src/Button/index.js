import React from "react";
import './style.css'

const getClass = (type) => {
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
  return (
    <div>
        <button className={getClass(props.type)}>
            {props.text}
        </button>
    </div>
  );
};


export { Button };
