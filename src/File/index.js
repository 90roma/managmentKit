import React from "react";
import './style.css';

const File = ({url, size, fileName, removeFile, fileButton, id}) => {
    return (
        <div className="File">
            {Boolean(url) && <img className="File__preview-url" src={url} alt="this picture"/>}
            <div className="File__info">
                {Boolean(fileName) && <p className="File__name">{fileName}</p>}
                <div className="File__info-text-wrapper">
                    {Boolean(size) && <p className="File__size">{size}</p>}
                    <button className="File__delete"
                            onClick={() => removeFile(id)}
                            key={id}>
                        {fileButton}
                    </button>
                </div>
            </div>
        </div>
    );
};

export {File};


