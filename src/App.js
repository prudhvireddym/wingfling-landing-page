import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUS from './components/AboutUS';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/ContactUS';
import DeleteInstructions from './components/DeleteData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/delete" element={<DeleteInstructions />} />
        {/* Add more routes if needed */}
      </Routes>
    </Router>
  );
}

export default App;
