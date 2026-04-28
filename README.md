# Secure Full-Stack User Authentication System

## 🎓 Academic Project Overview
This project is a robust **MERN Stack** application developed as part of my academic curriculum for the 2026 graduation batch. It demonstrates a secure and scalable approach to user onboarding and session management, focusing on data privacy and professional architectural standards.

---

## 🛠️ Technical Stack
* **Frontend:** React.js (Vite) - Component-based UI and State Management.
* **Backend:** Node.js & Express.js - RESTful API development and Business Logic.
* **Database:** MongoDB - NoSQL document-oriented storage.
* **Security:** Bcrypt.js - Salted password hashing for data protection.
* **Routing:** React Router DOM for protected client-side navigation.
---

## ✨ Key Features
- **Secure Authentication:** Implements password hashing using Bcrypt to ensure that plain-text passwords are never stored.
- **Protected Routes:** Unauthorized users are restricted from accessing the Dashboard and are automatically redirected to the Login page.
- **Session Persistence:** Utilizes `LocalStorage` to maintain user login states across browser refreshes and tab closures.
- **Modern UI/UX:** A professional interface featuring glassmorphism design, responsive layouts, and interactive feedback.
- **Input Validation:** Comprehensive backend and frontend checks to ensure data integrity during Signup and Login.

---

## 📂 Project Structure
```text
my-awesome-project/
├── client/          # Frontend React application (React.js + Vite)
│   ├── src/
│   │   ├── pages/   # Login, Signup, and Dashboard components
│   │   └── App.jsx  # Main routing and navigation logic
├── server/          # Backend Node.js application (Express.js)
│   ├── models/      # MongoDB Schemas (User Model)
│   ├── routes/      # Authentication API endpoints (Login/Register)
│   └── index.js     # Server entry point and middleware configuration
└── .gitignore       # Critical file to exclude node_modules and .env secrets
