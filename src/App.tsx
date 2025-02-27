import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import CertifiedPreOwnedPage from './pages/CertifiedPreOwnedPage/CertifiedPreOwnedPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/certified-pre-owned" element={<CertifiedPreOwnedPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;