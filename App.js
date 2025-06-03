import React, { useState } from 'react';
import NameInput from './components/NameInput';
import ServiceSelection from './components/ServiceSelection';
import CalendarBooking from './components/CalendarBooking';
import BookingConfirmation from './components/BookingConfirmation';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [bookingInfo, setBookingInfo] = useState({});

  const nextStep = () => setStep((prev) => prev + 1);
  const updateBooking = (data) => setBookingInfo({ ...bookingInfo, ...data });

  return (
    <div className="app-wrapper">
      <header>
        <h1>HairEase</h1>
        <p>Your friendly neighborhood barber shop</p>
      </header>
      <main className="app-container">
        {step === 1 && (
          <NameInput onNext={nextStep} onSelect={updateBooking} initialName={bookingInfo.name || ''} />
        )}
        {step === 2 && (
          <ServiceSelection onNext={nextStep} onSelect={updateBooking} />
        )}
        {step === 3 && (
          <CalendarBooking onNext={nextStep} onSelect={updateBooking} />
        )}
        {step === 4 && <BookingConfirmation booking={bookingInfo} />}
      </main>
      <footer style={{ backgroundColor: '#f8f9fa', padding: '1rem', textAlign: 'center', marginTop: '2rem' }}>
        <p>© {new Date().getFullYear()} HairEase. All rights reserved.</p>
        <p><strong>Phone:</strong> (555) 123-4567 | <strong>Email:</strong> contact@hairease.com</p>
        <p><strong>Location:</strong> Downtown Ottawa, ON</p>
        <p style={{ fontStyle: 'italic' }}>Designed by Adrian Ghattas and the HairEase Team</p>
      </footer>
    </div>
    
  );
}

export default App;

