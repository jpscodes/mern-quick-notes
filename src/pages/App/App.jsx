import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NotePage from '../NotePage/NotePage'
import NewNotePage from '../NewNotePage/NewNotePage'
import * as notesAPI from '../../utilities/notes-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [notes, setNotes] = useState([])

  useEffect(function() {
    async function getNotes() {
      const notes = await notesAPI.getAll(); 
      setNotes(notes);
    }
    getNotes();
  }, [user]);

  async function addNote(data) {
    const newData = { text: data }
    const newNote = await notesAPI.addNoteToDB(newData);
    setNotes([...notes, newNote])
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<NotePage notes={notes}/>} />
            </Routes>
            <NewNotePage addNote={addNote}/>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}

