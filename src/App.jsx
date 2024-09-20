import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import components
import "./App.css";
import NotFound from "./screens/NotFound";
import LoginPage from "./screens/LoginPage";
import Home from "./screens/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Public routes */}

        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />

        {/* Catch-all route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
