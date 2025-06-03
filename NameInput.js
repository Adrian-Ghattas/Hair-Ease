import React, { useState } from 'react';

function NameInput({ onNext, onSelect, initialName = '' }) {
  const [name, setName] = useState(initialName);

  const handleNext = () => {
    if (!name.trim()) {
      alert('Please enter your name.');
      return;
    }
    onSelect({ name });
    onNext();
  };

  return (
    <div className="card">
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default NameInput;


