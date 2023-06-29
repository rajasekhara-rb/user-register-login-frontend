import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home/home";
import Register from "./components/register/register";
import Login from "./components/login/login";

function App() {
  return (
    <div className="App">
      <h1>Main</h1>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
