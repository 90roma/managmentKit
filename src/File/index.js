import React from "react";
import './style.css';

const File = ({ url, size, fileName}) => {
  return (
      <div className="File">
        <img className="File__preview-url" src={url} alt="this picture" />
          <div className="File__info">
              <p className="File__name">{fileName}</p>
              <div className="File__info-text-wrapper">
                <p className="File__size">{size}</p>
                <button className="File__delete">Delete</button>
              </div>
          </div>
      </div>
      );
};

export { File };
