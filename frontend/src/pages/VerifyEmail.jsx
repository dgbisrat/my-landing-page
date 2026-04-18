import React, { useEffect, useState } from 'react';

const VerifyEmail = () => {
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verify = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      
      if (!token) {
        setStatus('error');
        setMessage('No verification token found');
        return;
      }

      try {
        const response = await fetch(`http://localhost:5000/api/auth/verify-email?token=${token}`);
        
        if (response.ok) {
          setStatus('success');
          setMessage('Email verified successfully! Redirecting to login...');
          setTimeout(() => {
            window.location.href = '/login';
          }, 3000);
        } else {
          const errorText = await response.text();
          setStatus('error');
          setMessage(errorText || 'Verification failed');
        }
      } catch (error) {
        setStatus('error');
        setMessage('Connection error. Make sure backend is running on port 5000');
      }
    };
    
    verify();
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '40px',
        textAlign: 'center',
        maxWidth: '400px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      }}>
        {status === 'verifying' && (
          <>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>⏳</div>
            <h2>Verifying your email...</h2>
            <p>Please wait while we verify your account.</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div style={{ fontSize: '50px', marginBottom: '20px', color: 'green' }}>✅</div>
            <h2 style={{ color: 'green' }}>Email Verified!</h2>
            <p>{message}</p>
          </>
        )}
        {status === 'error' && (
          <>
            <div style={{ fontSize: '50px', marginBottom: '20px', color: 'red' }}>❌</div>
            <h2 style={{ color: 'red' }}>Verification Failed</h2>
            <p>{message}</p>
            <button 
              onClick={() => window.location.href = '/signup'}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
            >
              Go to Sign Up
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;