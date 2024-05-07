import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";
// import initialNotes from "../notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5001/notes')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(err => console.error('Error fetching notes', err));
  }, []);

  function addNote(newNote) {
    fetch('http://localhost:5001/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
    .then(response => response.json())
    .then(data => setNotes(prevNotes => [...prevNotes, data]))
    .catch(err => console.error('Error adding note', err));
  }

  function deleteNote(id) {
    fetch(`http://localhost:5001/notes/${id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(() => setNotes(prevNotes => prevNotes.filter(note => note._id !== id)))
      .catch(err => console.error('Error deleting note', err));
  }

  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      {notes.map((note) => (
  <Note
    key={note._id}
    id={note._id}
    title={note.title}
    content={note.content}
    onDelete={deleteNote}
  />
))}

      <Footer />
    </div>
  );
}

export default App;
