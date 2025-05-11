import React from 'react';

export default function SuccessPage() {
  return (
    <div className="success-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      textAlign: 'center',
    }}>
      <h1 style={{ marginBottom: '20px' }}>Payment Successful!</h1>
      <p style={{ marginBottom: '30px' }}>
        Thank you for your purchase. Your payment has been processed successfully.
      </p>
      <a 
        href="/"
        style={{
          padding: '10px 20px',
          backgroundColor: '#4CAF50',
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
