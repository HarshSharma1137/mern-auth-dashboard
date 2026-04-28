// 1. IMPORTING TOOLS
const express = require('express');    // Server framework
const mongoose = require('mongoose');   // Database tool
const cors = require('cors');           // Security for Frontend-Backend talk
require('dotenv').config();             // Secret keys from .env file

// Yahan hum auth.js file ko import kar rahe hain
const authRoutes = require('./routes/auth'); 

// 2. INITIALIZING
const app = express();

// 3. MIDDLEWARE (The Filters)
app.use(cors());           // Allows React to talk to Node
app.use(express.json());   // Allows server to read JSON data

// 4. THE ROUTES
// Ye line ab error nahi degi kyunki upar humne authRoutes define kar diya hai
app.use('/api/auth', authRoutes);

// 5. THE DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to Local MongoDB"))
  .catch((err) => console.log("❌ Local DB Error: ", err));

// 6. STARTING THE ENGINE
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});