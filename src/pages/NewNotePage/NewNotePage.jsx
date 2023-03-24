import { useState, useEffect } from 'react';

export default function NewNotePage({ addNote }) {
  const [formData, setFormData] = useState('');

  function handleSubmit(evt) {
    evt.preventDefault();
    addNote(formData)
    setFormData('')
  }
    
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={formData} onChange={(evt) => setFormData(evt.target.value)}/>
        <button type='submit'>Add Note</button>
      </form>
      New Notes Here
    </div>
  );

}