import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const colors = ["yellow", "orange", "green", "purple", "blue", "lime"];
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  function fetchNotes() {
    axios.get("http://localhost:3000/api/notes").then((res) => {
      setNotes(res.data.notes);
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;

    if (!title.value.trim() || !description.value.trim()) {
      alert("Title and Description should be filled!");
      title.value = "";
      description.value = "";
      return;
    }

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
        title.value = "";
        description.value = "";
      });
  }

  function handleDelete(noteId) {
    axios.delete("http://localhost:3000/api/notes/" + noteId).then((res) => {
      console.log(res.data);
      fetchNotes();
    });
  }

  function handleUpdate(noteId) {
    const title = prompt("update title");
    const description = prompt("update description");

    axios
      .patch("http://localhost:3000/api/notes/" + noteId, {
        title,
        description,
      })
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      });
  }

  return (
    <div className="app">

      {/* Main */}
      <main className="main">
        
        <h1>Notes</h1>
        <div className="form-search">
          {/* Form */}
          <form className="note-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter title" name="title" />
            <input
              type="text"
              placeholder="Enter description"
              name="description"
            />
            <button>Add</button>
          </form>

          {/* search */}
          <div className="top-bar">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        </div>

        {/* Notes Grid */}
        <div className="notes-grid">
          {notes
            .filter((note) => {
              return (
                note.title.toLowerCase().includes(search.toLowerCase()) ||
                note.description.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((note, idx) => (
              <div
                key={idx}
                className={`note-card ${colors[idx % colors.length]}`}
              >
                <h3>{note.title}</h3>
                <p>{note.description}</p>

                <div className="note-actions">
                  <button onClick={() => handleDelete(note._id)}>🗑</button>
                  <button onClick={() => handleUpdate(note._id)}>✏️</button>
                </div>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default App;
