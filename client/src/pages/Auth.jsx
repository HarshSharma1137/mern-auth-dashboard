import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Default Login dikhega

  return (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center',
    minHeight: '100vh', // Poori screen ki height lega
    width: '100vw',
    // Niche wali line mein apni image ka URL dalein
    backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?q=80&w=2070&auto=format&fit=crop")', 
    backgroundSize: 'cover', // Image poori screen par fail jayegi
    backgroundPosition: 'center', // Image center mein rahegi
    backgroundRepeat: 'no-repeat'
  }}>
    {/* Form Container with Glass Effect */}
    <div style={{ 
      border: '1px solid rgba(255, 255, 255, 0.2)', 
      padding: '40px', 
      borderRadius: '20px', 
      background: 'rgba(0, 0, 0, 0.7)', // Thoda transparent black background
      backdropFilter: 'blur(10px)', // Glass-morphism effect
      color: 'white',
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8)'
    }}>
      
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        {isLogin ? "Welcome Back!" : "Create Account"}
      </h2>
      
      {isLogin ? <Login /> : <Signup />}

      <p style={{ marginTop: '20px', textAlign: 'center' }}>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <span 
          onClick={() => setIsLogin(!isLogin)} 
          style={{ color: '#00d4ff', cursor: 'pointer', fontWeight: 'bold' }}
        >
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  </div>
);
};

export default Auth;