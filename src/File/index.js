import React from "react";
import "./style.css";

const File = ({ url, size, fileName, removeFile, fileButton, id }) => {
  return (
    <div className="File">
      {Boolean(url) && (
        <img className="File__preview-url" src={url} alt="this picture" />
      )}
      <div className="File__info">
        {Boolean(fileName) && <span className="File__name">{fileName}</span>}
        <div className="File__info-text-wrapper">
          {Boolean(size) && <span className="File__size">{size}</span>}
          <button
            className="File__delete"
            onClick={() => removeFile(id)}
            key={id}
          >
            {fileButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export { File };
