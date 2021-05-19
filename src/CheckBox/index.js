import React from "react";
import "./style.css";

const CheckBox = ({ value, onChange, bigCheckbox, smallCheckbox }) => {
  return (
    <div>
      {Boolean(smallCheckbox) && (
        <div>
          <input
            id="checkbox"
            type="checkbox"
            className="CheckBox"
            onChange={onChange}
            value={value}
          />
          <label htmlFor="checkbox" />
        </div>
      )}
      {Boolean(bigCheckbox) && (
        <div>
          <input
            id="checkbox"
            type="checkbox"
            className="CheckBox CheckboxBig"
            onChange={onChange}
            value={value}
          />
          <label htmlFor="checkbox" />
        </div>
      )}
    </div>
  );
};

export { CheckBox };
