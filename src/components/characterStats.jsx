import React, { useState, useEffect } from 'react';

function CharacterStats({ text }) {
  const [count, setCount] = useState(0);

  // Use useEffect to handle updating count as a side effect
  useEffect(() => {
    setCount(text.length);
  }, [text]); 

  return (
    <div className="stats-container">
      <p className="stat-text">
        Character Count: <strong>{count}</strong>
      </p>

      {count > 100 && (
        <div className="warning-message">
          {"Warning: You have exceeded the 100 character limit!"}
        </div>
      )}
    </div>
  );
}

export default CharacterStats;