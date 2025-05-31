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
export default CreateArea;