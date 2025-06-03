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

        {/* Contact Info Section */}
        <section id="contact" style={{ padding: "2rem", backgroundColor: "#f8f9fa", marginTop: "2rem" }}>
          <h2>Contact Us</h2>
          <p><strong>Phone:</strong> (555) 123-4567</p>
          <p><strong>Email:</strong> contact@hairease.com</p>
          <p><strong>Location:</strong> Downtown Ottawa, ON</p>
        </section>

        {/* Designed By */}
        <div style={{ textAlign: "center", marginTop: "1rem", fontStyle: "italic" }}>
          <p>Designed by Adrian Ghattas</p>
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} HairEase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;


