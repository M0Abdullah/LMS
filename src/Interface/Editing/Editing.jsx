import React, { useState } from 'react';
import './Editing.css'; // Import CSS for styling
import Header from '../../Interface/Dashboard/Header/Header'
export default function Editing() {
  const [content, setContent] = useState('Initial content'); // State to hold the content being edited

  const handleChange = (event) => {
    setContent(event.target.value); // Update content state as user types
  };

  const handleSave = () => {
    // Handle save functionality here, for example, sending content to a server or updating state
    alert('Content saved: ' + content);
  };

  return (
    <div className="editing-container">
        <Header/>
      <div className="editing-header">
        <h2>Edit Content</h2>
      </div>
      <div className="editing-form">
        <textarea
          className="editing-textarea"
          value={content}
          onChange={handleChange}
          placeholder="Enter your content here..."
        />
        <div className="editing-buttons">
          <button className="save-button" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}
