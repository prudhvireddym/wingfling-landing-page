import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUS from './components/AboutUS';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUS />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
