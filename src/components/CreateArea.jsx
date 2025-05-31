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
export default CreateArea;