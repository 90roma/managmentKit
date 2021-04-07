import React from "react";

const Tag = (props) => {
    const tagClass = (name) => {
        switch (name) {
            case "development":
                return "Tag Tag_orange";
            case "marketing":
                return "Tag Tag_purple";
            case "design":
                return "Tag Tag_blue";
            default:
                return "Tag Tag_default";
        }
    }
  return (
    <div className={tagClass(props.name)}>
      <p>{props.name}</p>
    </div>
  );
};

export { Tag };
