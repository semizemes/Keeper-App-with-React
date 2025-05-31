<<<<<<< HEAD
// Import necessary dependencies from React and Material-UI
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

// CreateArea component that takes props as a parameter
function CreateArea(props) {
  // State for managing note data with title and content
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  // State for managing input field visibility
  const [inputBool, showInput] = useState(false);

  // Function to show the title input field when textarea is clicked
  function inputStatus() {
    showInput(true);
  }

  // Function to handle changes in input fields
  function handleChange(event) {
    // Destructure name and value from the event target
    const { name, value } = event.target;

    // Update note state while preserving other fields
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value  // Dynamically update either title or content based on input name
      };
    });
  }

  // Function to handle note submission
  function submitNote(event) {
    props.onAdd(note);  // Call the onAdd function passed from parent with current note
    // Reset the note state to empty values
    setNote({
      title: "",
      content: ""
    });
    showInput(false);  // Hide the title input field
    event.preventDefault();  // Prevent form submission default behavior
  }

  // Render the component
  return (
      <div>
        <form className="create-note">
          {/* Conditional rendering of title input based on inputBool state */}
          {inputBool ? <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
          /> : null}
          {/* Textarea for note content */}
          <textarea
              onClick={inputStatus}
              name="content"
              onChange={handleChange}
              value={note.content}
              placeholder="Take a note..."
              rows={inputBool ? '3' : '1'}  // Dynamic rows based on input state
          />
          {/* Zoom animation wrapper for the Add button */}
          <Zoom in={inputBool}>
            <Fab onClick={submitNote}>
              <AddIcon />  {/* Material-UI add icon */}
            </Fab>
          </Zoom>
        </form>
      </div>
  );
}

// Export the component for use in other parts of the application
=======
import React from "react";

// Define CreateArea component that takes props as a parameter
function CreateArea(props) {
    // Initialize state using useState hook for managing note data
    // note contains title and content as empty strings initially
    const [note, setNote] = React.useState({
        title: '',
        content: ''
    });

    // Event handler function for input changes
    function noteHandler(event) {
        // Destructure name and value from the event target (input/textarea)
        const {name, value} = event.target;

        // Update note state using the previous state
        setNote(prevNotes => {
            return {
                // Spread operator to keep all existing note properties
                ...prevNotes,
                // Dynamic property update using computed property name
                [name]: value
            }
        });
    };

    // Function to handle adding a new note
    function addArray() {
        // Call the onAdd prop function passed from parent with current note
        props.onAdd(note);
        // Reset the note state to empty values after adding
        setNote({
            title: '',
            content: ''
        });
    }

    // Render the component's UI
    return (
        <div>
            <form>
                {/* Input field for note title */}
                <input
                    name="title"
                    onChange={noteHandler}
                    value={note.title}
                    placeholder="Title"
                />
                {/* Textarea for note content */}
                <textarea
                    name="content"
                    onChange={noteHandler}
                    value={note.content}
                    placeholder="Take a note..."
                    rows="3"
                />
                {/* Button to add the note */}
                <button
                    onClick={addArray}
                    type='button'
                >Add</button>
            </form>
        </div>
    );
}

// Export the CreateArea component as the default export
>>>>>>> origin/v2
export default CreateArea;