import React, { useState } from 'react';

const App = () => {
  const [tags, setTags] = useState([]);

  // Add Tag
  const addTag = event => {
    if (event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  // Remove Tag
  const removeTag = indexToRemove => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="container">
      <h2># Tags Input</h2>
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span className="tag-close-icon" onClick={() => removeTag(index)}>x</span>
            </li>
          ))}
        </ul>
        <input type="text" placeholder="Press enter to add tag" onKeyUp={e => (e.key === "Enter" ? addTag(e) : null)} />
      </div>
    </div>
  );
}

export default App;
