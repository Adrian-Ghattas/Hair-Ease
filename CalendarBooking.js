import React, { useState } from 'react';

function CalendarBooking({ onNext, onSelect }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // Generate time options from 9:00 to 17:00 (5pm) every 30 minutes
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 9; hour <= 17; hour++) {
      ['00', '30'].forEach((minute) => {
        if (hour === 17 && minute === '30') return; // Don't go past 5:00pm
        const time24 = `${hour.toString().padStart(2, '0')}:${minute}`;
        // Convert to 12-hour format for display
        const hour12 = hour % 12 === 0 ? 12 : hour % 12;
        const ampm = hour < 12 || hour === 24 ? 'AM' : 'PM';
        times.push({ value: time24, label: `${hour12}:${minute} ${ampm}` });
      });
    }
    return times;
  };

  const handleNext = () => {
    if (!date) {
      alert('Please choose a date.');
      return;
    }
    if (!time) {
      alert('Please choose a time.');
      return;
    }

    onSelect({ date, time });
    onNext();
  };

  const timeOptions = generateTimeOptions();

  return (
    <div className="card">
      <h2>Choose a Date & Time</h2>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">-- Select Time --</option>
        {timeOptions.map((t) => (
          <option key={t.value} value={t.value}>
            {t.label}
          </option>
        ))}
      </select>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default CalendarBooking;

