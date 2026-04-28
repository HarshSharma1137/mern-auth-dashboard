import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [user, setUser] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // This sends the data to your Node server (Step 3)
      const res = await axios.post("http://localhost:5000/api/auth/register", user);
      alert("Success! Account created. Now try logging in.");
      console.log(res.data);
    } catch (err) {
     console.log(err.response.data); // Terminal/Console mein check karne ke liye
  alert("Error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", maxWidth: "300px", gap: "10px", margin: "50px auto" }}>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" style={{ cursor: "pointer" }}>Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;