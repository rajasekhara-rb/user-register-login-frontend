import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/home/home";
import Register from "./components/register/register";
import Login from "./components/login/login";

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={loggedIn && loggedIn._id?(<Home setLoggedIn={setLoggedIn} />) : (<Login setLoggedIn={setLoggedIn} />)} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
