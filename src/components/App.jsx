import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [entry, setEntry] = useState([]);

  function newEntry(note) {
    setEntry((prev) => {
      return [...prev, note];
    });
  }

  function deleteNode(id) {
    setEntry((prevItems) => {
      return prevItems.filter((item, i) => {
        return i !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={newEntry} />
      {entry.map((noteItem, i) => {
        return (
          <Note
            key={i}
            id={i}
            title={noteItem.title}
            content={noteItem.content}
            deleteItem={deleteNode}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
