import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles.css';  // Make sure styles.css is correctly imported if needed
import Home from './pages/Home';

const App = () => {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
