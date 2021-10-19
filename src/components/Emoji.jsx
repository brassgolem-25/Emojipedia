import React from "react";

function Dictionary(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.emoji}>
          {props.emoji}
        </span>
        <span>{props.emojiName}</span>
      </dt>
      <dd>{props.emojiText}</dd>
    </div>
  );
}

export default Dictionary;
