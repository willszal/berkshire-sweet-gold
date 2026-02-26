import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Governance from './pages/Governance';
import './index.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`fixed-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <Link to="/" className="logo-text" style={{ textDecoration: 'none' }}>Berkshire Sweet Gold</Link>
          </div>
          <div className="nav-links">
            <Link to="/#benefits">Co-Stewardship</Link>
            <Link to="/#syrup">The Harvest</Link>
            <Link to="/governance">Governance</Link>
            <Link to="/#pricing" className="btn btn-secondary nav-cta">Join the Commons</Link>
          </div>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/governance" element={<Governance />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer section-dark text-center">
        <div className="container">
          <div className="logo-text mb-3">Berkshire Sweet Gold</div>
          <p className="text-muted mb-0">© {new Date().getFullYear()} Berkshire Sweet Gold Maple Farm LLC. Cultivating right relationships.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
