import React, { useState } from 'react';
import './Pages.css';

const AddPage = () => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Content submitted: ' + text);
    // In a real app, you would send this to your backend
    setText('');
  };

  return (
    <div className="page add-page">
      <h1>Add Content</h1>
      <p className="subtitle">Enter information to add to your database</p>
      
      <form onSubmit={handleSubmit}>
        <textarea
          className="large-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter names, details, notes, or any information you want to remember..."
          rows={10}
        />
        <button type="submit" className="submit-button">Save Information</button>
      </form>
    </div>
  );
};

export default AddPage;