import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
            
            // ⭐ Sabse Important Line: User data ko browser mein save karna
            // Hum 'user' naam se data save kar rahe hain taaki Dashboard ise read kar sake
            localStorage.setItem('user', JSON.stringify(res.data.user)); 

            alert("Login Successful! 🎉");
            console.log("User Data Saved:", res.data.user);
            
            navigate('/dashboard'); 
        } catch (err) {
            // Agar backend se koi error message aata hai toh wo dikhayega
            const errorMsg = err.response?.data?.message || err.response?.data || "Invalid Credentials";
            alert("Error: " + errorMsg);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ color: 'white', marginBottom: '20px' }}>Login</h2>
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '15px' }}>
                <input 
                    type="email" 
                    placeholder="Email Address" 
                    style={inputStyle}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    style={inputStyle}
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit" style={buttonStyle}>
                    Sign In
                </button>
            </form>
        </div>
    );
};

// Simple Styles
const inputStyle = {
    padding: '12px',
    borderRadius: '5px',
    border: '1px solid #444',
    background: '#333',
    color: 'white'
};

const buttonStyle = {
    padding: '12px',
    background: '#646cff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold'
};

export default Login;