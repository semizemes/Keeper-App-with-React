import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

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

  return (
    <div>
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;