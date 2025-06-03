import React, { useState } from 'react';

function ServiceSelection({ onNext, onSelect, initialServices = [] }) {
  const [service, setService] = useState(initialServices);

  const toggleService = (serviceName) => {
    if (service.includes(serviceName)) {
      setService(service.filter(s => s !== serviceName));
    } else {
      setService([...service, serviceName]);
    }
  };

  const handleNext = () => {
    if (service.length === 0) {
      alert('Please select at least one service.');
      return;
    }
    onSelect({ service });
    onNext();
  };

  const serviceStyle = {
    border: '2px solid black',  // black border
    borderRadius: '8px',
    padding: '10px 15px',
    marginBottom: '12px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between', // text left, checkbox right
    alignItems: 'center',
    userSelect: 'none',
  };

  return (
    <div className="card">
      <h2>Select Service(s)</h2>
      
      <div style={serviceStyle} onClick={() => toggleService('Short Haircut')}>
        <span>Short Haircut ($20)</span>
        <input
          type="checkbox"
          checked={service.includes('Short Haircut ($20)')}
          onChange={() => toggleService('Short Haircut ($20)')}
        />
      </div>

      <div style={serviceStyle} onClick={() => toggleService('Beard Trim')}>
        <span>Beard Trim ($15)</span>
        <input
          type="checkbox"
          checked={service.includes('Beard Trim ($15)')}
          onChange={() => toggleService('Beard Trim ($15)')}
        />
      </div>

      <div style={serviceStyle} onClick={() => toggleService('Hair Dye')}>
        <span>Hair Dye ($50)</span>
        <input
          type="checkbox"
          checked={service.includes('Hair Dye ($50)')}
          onChange={() => toggleService('Hair Dye ($50)')}
        />
      </div>

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ServiceSelection;



