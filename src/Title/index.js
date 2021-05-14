import React from "react";
import "./style.css";

const Title = ({ title, headingUppercase, subtitle, header }) => {
  return (
    <div>
      {Boolean(title) && <h2>{title}</h2>}
      {Boolean(headingUppercase) && (
        <h3 className="text header-uppercase">{headingUppercase}</h3>
      )}
      {Boolean(subtitle) && <span className="text subtitle">{subtitle}</span>}
      {Boolean(header) && <h3 className="text card-header">{header}</h3>}
    </div>
  );
};

export { Title };
