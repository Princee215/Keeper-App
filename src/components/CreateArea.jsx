import React, { useState } from "react";

function CreateArea(props) {
  const [entry, setEntry] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setEntry((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.addItem(entry);
    setEntry({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={entry.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={entry.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
