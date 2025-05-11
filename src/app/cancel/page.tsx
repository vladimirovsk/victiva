import React from 'react';

export default function CancelPage() {
  return (
    <div className="cancel-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
    }}>
      <h1 style={{ marginBottom: '20px' }}>Payment Cancelled</h1>
      <p style={{ marginBottom: '30px' }}>
        Your payment process has been cancelled. No charges have been made.
      </p>
      <a 
        href="/"
        style={{
          padding: '10px 20px',
          backgroundColor: '#f44336',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px',
        }}
      >
        Return to Home
      </a>
    </div>
  );
}
