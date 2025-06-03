import React from 'react';

function BookingConfirmation({ booking }) {
  return (
    <div className="card">
      <h2>Booking Confirmed 🎉</h2>
      <p><strong>Name:</strong> {booking.name}</p>
      <p><strong>Service(s):</strong></p>
      <ul style={{ paddingLeft: '20px' }}>
        {Array.isArray(booking.service)
          ? booking.service.map((s, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>
                {s}
              </li>
            ))
          : <li>{booking.service}</li>
        }
      </ul>
      <p><strong>Date:</strong> {booking.date}</p>
      <p><strong>Time:</strong> {booking.time}</p>
      <p>Thank you for booking with HairEase!</p>
    </div>
  );
}

export default BookingConfirmation;
