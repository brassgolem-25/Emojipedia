import React from "react";
import emojipedia from "../emojipedia";
import Emoji from "./Emoji";

function CreateEmoji(emojis) {
  return (
    <Emoji
      key={emojis.id}
      emoji={emojis.emoji}
      emojiName={emojis.name}
      emojiText={emojis.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia </span>
      </h1>

      <dl className="dictionary">{emojipedia.map(CreateEmoji)}</dl>
    </div>
  );
}

export default App;
