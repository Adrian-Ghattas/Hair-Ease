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

  return (
    <div className="card">
      <h2>Select Service(s)</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={service.includes('Short Haircut')}
            onChange={() => toggleService('Short Haircut')}
          />
          Short Haircut
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={service.includes('Beard Trim')}
            onChange={() => toggleService('Beard Trim')}
          />
          Beard Trim
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={service.includes('Hair Dye')}
            onChange={() => toggleService('Hair Dye')}
          />
          Hair Dye
        </label>
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default ServiceSelection;


