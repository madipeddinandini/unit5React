import React from 'react';

function CharacterInput({ text, onTextChange }) {
  const handleChange = (e) => {
    onTextChange(e.target.value);
  };

  return (
    <div className="input-group">
      <textarea
        placeholder="Type something here..."
        value={text} 
        onChange={handleChange} 
        rows="6"
      />
    </div>
  );
}

export default CharacterInput;