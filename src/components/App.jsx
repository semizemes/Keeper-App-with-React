<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> origin/v2
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
<<<<<<< HEAD
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
=======

    const [notesArray, setArray] = React.useState([]);

    //part that work with CreateArea.JSX
    function addNote(notes) {
        console.log(notes);
        setArray((prevValues) => {
            const newArray = [...prevValues, notes];
            console.log(newArray)
            return newArray;
        });
    }


      //Note.jsx qismi
        function deleteNote(id) {
            setArray((prevArr) => {
                return prevArr.filter((item, index) => {
                    return index !== id;
                })
            })
        }
    //Note.JSX oxiri

    console.log("App.jsx: ", notesArray)
>>>>>>> origin/v2

  return (
    <div>
      <Header />
<<<<<<< HEAD
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
=======
      <CreateArea
        onAdd={addNote}
      />
        {notesArray.map((i, index) => {
            return (
                <Note
                    key={index}
                    id={index}
                    title={i.title}
                    content={i.content}
                    onDelete={deleteNote}
                />
            )
        })}
>>>>>>> origin/v2
      <Footer />
    </div>
  );
}

<<<<<<< HEAD
export default App;
=======
export default App;
>>>>>>> origin/v2
