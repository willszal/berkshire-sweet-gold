import React, { useEffect, useState } from 'react';
import { Leaf, Home, Trees, Droplet, ArrowRight, CheckCircle2, Map } from 'lucide-react';
import './index.css';

// Import local assets
import heroImage from './assets/IMG_0653.jpeg';
import sbgIllustration from './assets/SweetBrownGold-01.png';
import sbgSketch1 from './assets/SBG_01.png';
import sbgSketch2 from './assets/SBG_02.png';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`fixed-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <span className="logo-text">Berkshire Sweet Gold</span>
          </div>
          <div className="nav-links">
            <a href="#benefits">Club Benefits</a>
            <a href="#syrup">The Share</a>
            <a href="#pricing" className="btn btn-secondary nav-cta">Join the Co-op</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero section section-dark text-center" style={{ backgroundImage: `linear-gradient(rgba(31, 41, 35, 0.8), rgba(26, 60, 30, 0.8)), url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container hero-container animate-in">
          <h4 className="subtitle delay-1">Est. 2021 • Heath, Massachusetts</h4>
          <h1 className="hero-title delay-2">The Maple Club Co-op</h1>
          <p className="hero-description delay-3">
            More than a rustic getaway. A pathway into a long-term, regenerative land-steward community
            with the flexibility to grow as our 200-acre forest vision unfolds.
          </p>
          <div className="cta-group delay-3">
            <a href="#pricing" className="btn btn-secondary">Become a Member</a>
            <a href="#benefits" className="btn btn-outline">Explore Benefits</a>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </header>

      {/* Member Benefits */}
      <section id="benefits" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <img src={sbgIllustration} alt="Berkshire Sweet Gold Illustration" style={{ maxHeight: '140px', margin: '0 auto 1.5rem auto', display: 'block' }} />
            <h2>Exclusive Member Benefits</h2>
            <p className="text-muted">Direct access to the land, the harvest, and the future.</p>
          </div>

          <div className="grid-3">
            <div className="glass-panel text-center">
              <div className="icon-wrapper"><Home size={32} /></div>
              <h3>Exclusive Cabin Use</h3>
              <p>A simple, off-grid cabin tucked beside a brook and beaver pond. No immediate neighbors. True peace.</p>
            </div>
            <div className="glass-panel text-center">
              <div className="icon-wrapper"><Trees size={32} /></div>
              <h3>Private Acreage Access</h3>
              <p>Full recreational rights to the entire 200-acre Berkshire Sweet Gold Maple Farm surrounding the cabin.</p>
            </div>
            <div className="glass-panel text-center">
              <div className="icon-wrapper"><Map size={32} /></div>
              <h3>Gateway to the Wild</h3>
              <p>Adjoins 4,000+ acres of continuous protected land. A recorded trail easement links directly to public hiking and riding networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Syrup Share */}
      <section id="syrup" className="section section-dark text-center">
        <div className="container">
          <h2>The Annual Syrup Share</h2>
          <p className="subtitle-gold">Experience the full spectrum of the harvest.</p>

          <div className="split-layout align-center mt-4">
            <div className="image-container glass-panel text-center flex-center" style={{ overflow: 'hidden', padding: 0 }}>
              <img src={sbgSketch2} alt="Syrup Sketch" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="share-box glass-panel text-left">
              <Droplet size={48} className="text-gold mb-3" />
              <h3>8 Bottles, 8 Shades</h3>
              <p className="mb-4">
                As a member, you receive an exclusive harvest share consisting of one bottle of each
                of the 8 beautifully distinct shades of maple syrup produced throughout our season.
              </p>
              <ul className="text-left feature-list">
                <li><CheckCircle2 size={18} className="text-gold" /> Direct from our 4,000+ tap organic sugarbush</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Exclusive invites to annual sugaring rituals</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Participate in Boiling, Tapping, and Tasting events</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision & Governance */}
      <section className="section bg-light">
        <div className="container">
          <div className="split-layout align-center">
            <div className="content">
              <h2>Built-in Future Upside</h2>
              <p>
                Your Maple Club membership is <strong>convertible</strong>. As Heath Forest Conservation LLC
                rolls out new membership classes—including sites for permanent eco-housing—you are first in line to
                convert your Maple Club stake into upgraded rights rather than starting from scratch.
              </p>
              <h3 className="mt-4">Stewardship & Revenue Rights</h3>
              <p>
                Members actively shape the future. Have a voice in land-use planning, trail maintenance, and propose
                agreements to harvest or share revenues from sustainable forestry ventures managed by Berkshire Sweet Gold LLC.
              </p>
            </div>
            <div className="image-container glass-panel flex-center" style={{ overflow: 'hidden', padding: 0 }}>
              <img src={sbgSketch1} alt="Berkshire Sweet Gold Land Stewardship" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section id="pricing" className="section section-dark text-center">
        <div className="container">
          <h2>Join the Co-op</h2>
          <p className="subtitle-gold mb-5">Strictly limited to 6 pioneering members.</p>

          <div className="pricing-grid flex-center">
            <div className="pricing-card glass-panel dark-panel featured">
              <div className="badge">Limited Offer</div>
              <h3>Early Adopter Tier</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">12,000</span>
                <span className="period"> one-time buy-in</span>
              </div>
              <p className="text-muted mt-2">Available for the first 3 memberships purchased in May.</p>

              <hr className="divider" />

              <ul className="text-left feature-list mb-4">
                <li><CheckCircle2 size={18} className="text-gold" /> Cabin & Land Access</li>
                <li><CheckCircle2 size={18} className="text-gold" /> The 8-Shade Syrup Share</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Voting Rights in Land Use</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Convertible to future Eco-Housing</li>
              </ul>

              <button className="btn btn-secondary w-100 mb-3">Apply Now <ArrowRight size={18} /></button>
              <p className="fee-note">* Requires a $500/year maintenance fee to cover trail, cabin, and land upkeep.</p>
            </div>

            <div className="pricing-card glass-panel dark-panel standard">
              <h3>Standard Tier</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">15,000</span>
                <span className="period"> one-time buy-in</span>
              </div>
              <p className="text-muted mt-2">Available for memberships purchased June through August.</p>

              <hr className="divider" />

              <ul className="text-left feature-list mb-4">
                <li><CheckCircle2 size={18} className="text-gold" /> Cabin & Land Access</li>
                <li><CheckCircle2 size={18} className="text-gold" /> The 8-Shade Syrup Share</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Voting Rights in Land Use</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Convertible to future Eco-Housing</li>
              </ul>

              <button className="btn btn-outline w-100 mb-3">Apply Now</button>
              <p className="fee-note">* Requires a $500/year maintenance fee to cover trail, cabin, and land upkeep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer section-dark text-center">
        <div className="container">
          <div className="logo-text mb-3">Berkshire Sweet Gold</div>
          <p className="text-muted mb-0">© {new Date().getFullYear()} Berkshire Sweet Gold Maple Farm LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
