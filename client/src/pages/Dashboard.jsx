import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Aapka purana safe data nikalne ka tarika
  const getSavedUser = () => {
    try {
      const savedData = localStorage.getItem('user');
      return savedData ? JSON.parse(savedData) : null;
    } catch (err) {
      console.error("Error parsing user data", err);
      return null;
    }
  };

  const user = getSavedUser();

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/auth'; // Hard refresh for safety
  };

  return (
    <div style={pageContainer}>
      {/* --- Sidebar (Left side) --- */}
      <div style={sidebarStyle}>
        <div style={logoArea}>🚀 MyPanel</div>
        <div style={navLinks}>
          <div style={activeNavItem}>🏠 Overview</div>
          <div style={navItem}>📊 Statistics</div>
          <div style={navItem}>👤 Profile</div>
        </div>
        <button onClick={handleLogout} style={logoutBtn}>Logout</button>
      </div>

      {/* --- Main Content (Right side) --- */}
      <div style={contentArea}>
        <header style={headerStyle}>
          <h2 style={{margin: 0}}>Dashboard Overview</h2>
          <div style={userHeaderBadge}>
            <div style={onlineStatus}></div> 
            {user ? (user.username || user.email) : "Guest"}
          </div>
        </header>

        {/* Welcome Section */}
        {user ? (
          <div style={welcomeCard}>
            <div style={{flex: 1}}>
              <h1 style={{margin: '0 0 10px 0'}}>Welcome back, {user.username || "User"}! 👋</h1>
              <p style={{opacity: 0.9}}>Aapka system bilkul sahi kaam kar raha hai aur database se connected hai.</p>
            </div>
            <div style={statusBadge}>Active</div>
          </div>
        ) : (
          <div style={welcomeCard}>
            <h1>No Session Found! ⚠️</h1>
            <p>Please login to access your data.</p>
            <button onClick={() => navigate('/auth')} style={loginBtn}>Go to Login</button>
          </div>
        )}

        {/* Stats Grid */}
        <div style={gridArea}>
          <div style={infoBox}>
            <p style={labelStyle}>Registered Email</p>
            <h3 style={valueStyle}>{user ? user.email : "N/A"}</h3>
          </div>
          <div style={infoBox}>
            <p style={labelStyle}>Connection Status</p>
            <h3 style={{...valueStyle, color: '#22c55e'}}>Online</h3>
          </div>
          <div style={infoBox}>
            <p style={labelStyle}>Server Region</p>
            <h3 style={valueStyle}>Localhost:5000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- ✨ High-Quality UI Styles (CSS-in-JS) ---

const pageContainer = { display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', fontFamily: 'Arial, sans-serif' };

const sidebarStyle = { width: '240px', backgroundColor: '#1e293b', padding: '30px 20px', display: 'flex', flexDirection: 'column', borderRight: '1px solid #334155' };

const logoArea = { fontSize: '1.6rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '40px' };

const navLinks = { display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 };

const navItem = { padding: '12px', borderRadius: '10px', color: '#94a3b8', cursor: 'pointer' };

const activeNavItem = { ...navItem, backgroundColor: '#334155', color: 'white', fontWeight: 'bold' };

const contentArea = { flex: 1, padding: '40px', overflowY: 'auto' };

const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid #1e293b' };

const userHeaderBadge = { backgroundColor: '#1e293b', padding: '8px 16px', borderRadius: '25px', display: 'flex', alignItems: 'center', gap: '10px', border: '1px solid #334155' };

const onlineStatus = { width: '10px', height: '10px', backgroundColor: '#22c55e', borderRadius: '50%' };

const welcomeCard = { background: 'linear-gradient(135deg, #38bdf8 0%, #1d4ed8 100%)', padding: '40px', borderRadius: '24px', display: 'flex', alignItems: 'center', marginBottom: '30px', boxShadow: '0 10px 20px rgba(0,0,0,0.2)' };

const statusBadge = { backgroundColor: 'rgba(255,255,255,0.2)', padding: '10px 20px', borderRadius: '15px', fontWeight: 'bold' };

const gridArea = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' };

const infoBox = { backgroundColor: '#1e293b', padding: '25px', borderRadius: '20px', border: '1px solid #334155', textAlign: 'left' };

const labelStyle = { color: '#94a3b8', margin: '0 0 10px 0', fontSize: '0.9rem' };

const valueStyle = { margin: 0, fontSize: '1.2rem' };

const logoutBtn = { padding: '12px', backgroundColor: '#ef4444', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', marginTop: '20px' };

const loginBtn = { padding: '10px 20px', backgroundColor: 'white', color: '#1d4ed8', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' };

export default Dashboard;