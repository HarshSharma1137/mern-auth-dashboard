import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <nav style={{ textAlign: "center", padding: "20px", background: "#eee" }}>
        <Link to="/">Home</Link> | <Link to="/signup">Register</Link> | <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h1 style={{ textAlign: "center" }}>Home Page</h1>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;