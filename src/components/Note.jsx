import React from "react";
<<<<<<< HEAD
import DeleteIcon from "@mui/icons-material/Delete";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
          <DeleteIcon />
      </button>
=======

// Define Note component that accepts props
// Props include: title, content, id, and onDelete function
function Note(props) {
  // Render the note component
  return (
    // Main container div with "note" className for styling
    <div className="note">
      {/* Display the note title passed through props */}
      <h1>{props.title}</h1>
      
      {/* Display the note content passed through props */}
      <p>{props.content}</p>
      
      {/* Delete button with click handler */}
      <button
        onClick={() => {
            // Call the onDelete function passed from parent
            // with the note's id when button is clicked
            props.onDelete(props.id)
        }}
      >DELETE</button>
>>>>>>> origin/v2
    </div>
  );
}

<<<<<<< HEAD
export default Note;
=======
// Export the Note component as the default export
export default Note;
>>>>>>> origin/v2
