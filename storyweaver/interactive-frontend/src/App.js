// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';  // Make sure styles.css is correctly imported if needed
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';

const App = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
