import React from "react";
import './style.css';

const File = ({ url, size, fileHeader, buttonDelete}) => {
  return (
      <div className="File">
        <img className="Preview-url" src={url} alt="this picture" />
          <div className="File__info File__info_position">
              <p className="File__header">{fileHeader}</p>
              <div className="File__image-info">
                <p className="Size">{size}</p>
                <button className="Delete File__delete">{buttonDelete}</button>
              </div>
          </div>
      </div>
      );
};

export { File };
