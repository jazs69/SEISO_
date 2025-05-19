import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Add this import
import "./index.css";
import App from "./App.jsx";
import { UserProvider } from "./context/UserContext";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <App />
        <Footer />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
