# ♻️ SEISO — Smart Waste Management & Reward System

**SEISO** is a full-stack MERN web application designed to encourage waste management through a user reward system. Users can register, log waste data, and earn coins for contributing to a cleaner environment.

---

## 📁 Project Structure

SEISO/

  ├── client/ # React frontend (Vite)
  
  ├── server/ # Node.js/Express backend

---

## 🚀 Features

- ✅ User Registration & Login (JWT-based Authentication)
- ♻️ Waste Submission & Admin Verification
- 👤 User Dashboard with Seiso Points & Coins
- 🔒 Protected Routes for Authenticated Users
- 🚪 Secure Logout with Token Blacklisting

---

## 🛠️ Tech Stack

| Frontend              | Backend                        | Authentication & styling |
|-----------------------|--------------------------------|----------------|
| React, Vite, Axios    | Node.js, Express, MongoDB      | JWT, bcrypt    |
| React Router DOM      | Mongoose, REST API             | HTTP-only Cookies, Tailwind CSS |

---

## ⚙️ Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/)
- MongoDB Atlas or local MongoDB instance

---

## 🧩 Setup Instructions

### 1. Clone the Repository

  git clone <your-repo-url>

  cd SEISO

### 2. Install Dependencies

🔹 Backend

  cd server

  npm install

🔹 Frontend

  cd ../client

  npm install

### 3. Configure Environment Variables

  Create a .env file inside the server/ folder:

  MONGODB_URI=<your-mongodb-uri>

  JWT_SECRET=<your-jwt-secret>

  NODE_ENV=development

### 4. Run the Application

🔸 Start Backend

  cd server

  node index.js

🔸 Start Frontend

  cd ../client

  npm run dev

🔗 URLs

  Frontend: http://localhost:5173
  
  Backend: http://localhost:3000

🗂 Folder Overview

🔹 Frontend (client/)

  src/pages/ — App Pages (Login, Register, Dashboard, VerifyWaste, Home)

  src/components/ — Reusable Components (ProtectedRoute, LogoutButton)
  
  src/context/ — Context API for User State Management

🔹 Backend (server/)

  models/ — Mongoose Models (User, Waste, BlacklistToken)
  
  routes/ — API Routes (user.js, waste.js)
  
  middleware/ — Authentication Middleware
  
  utils/ — Utility Functions (e.g., JWT Token Helpers)
  
  config/ — MongoDB Connection Logic

📜 License

  This project is licensed under the MIT License.

📌 Note

  Before running the backend, update your MongoDB URI and JWT secret in the .env file.

Built with 💚 to inspire eco-conscious actions.

---

Let me know if you'd like to include badges (like for license, build status, etc.) or contribution guidelines.
