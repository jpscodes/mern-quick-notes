export default function NotePage({notes}) {
  console.log(new Date(notes[0].createdAt).toLocaleString(), 'Where are my timestamps')
  return (
    <div>
      
      {notes.length === 0 ? 
        <p>No Notes Yet!</p>
        :
        <ul>
          { notes.map((note) => <li>{note.text} - {new Date(note.createdAt).toLocaleString()}</li>) }
        </ul>        
      }            
    </div>
  );

}

