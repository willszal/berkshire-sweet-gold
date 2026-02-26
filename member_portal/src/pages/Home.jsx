import React from 'react';
import { Leaf, Home as HomeIcon, Trees, Droplet, ArrowRight, CheckCircle2, Map } from 'lucide-react';

// Import local assets
import heroImage from '../assets/IMG_0653.jpeg';
import sbgIllustration from '../assets/SweetBrownGold-01.png';
import sbgSketch1 from '../assets/SBG_01.png';
import sbgSketch2 from '../assets/SBG_02.png';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <header className="hero section section-dark text-center" style={{ backgroundImage: `linear-gradient(rgba(31, 41, 35, 0.8), rgba(26, 60, 30, 0.8)), url(${heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container hero-container animate-in">
          <h4 className="subtitle delay-1">Est. 2021 • Heath, Massachusetts</h4>
          <h1 className="hero-title delay-2">The Sugarbush Commons</h1>
          <p className="hero-description delay-3">
            A pathway into deep nature connection and regenerative land-stewardship.
            Join our commons to help govern and restore a 200-acre forest ecosystem, interwoven with the wisdom of the sugarbush.
          </p>
          <div className="cta-group delay-3">
            <a href="#pricing" className="btn btn-secondary">Become a Steward</a>
            <a href="#benefits" className="btn btn-outline">Explore the Vision</a>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </header>

      {/* Member Benefits */}
      <section id="benefits" className="section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <img src={sbgIllustration} alt="Berkshire Sweet Gold Illustration" style={{ maxHeight: '140px', margin: '0 auto 1.5rem auto', display: 'block' }} />
            <h2>Stewardship Commons</h2>
            <p className="text-muted">Direct relationship with the land, the ecological harvest, and our shared future.</p>
          </div>

          <div className="grid-3">
            <div className="glass-panel text-center">
              <div className="icon-wrapper"><HomeIcon size={32} /></div>
              <h3>Immersive Refuge</h3>
              <p>A simple, off-grid cabin tucked beside a brook and beaver pond. A space to ground yourself, listen to the land, and practice deep ecology.</p>
            </div>
            <div className="glass-panel text-center">
              <div className="icon-wrapper"><Trees size={32} /></div>
              <h3>Regenerating the Commons</h3>
              <p>Full co-stewardship access to the 200-acre Berkshire Sweet Gold Maple Farm. Participate in ongoing biodiversity and ecological restoration efforts.</p>
            </div>
            <div className="glass-panel text-center">
              <div className="icon-wrapper"><Map size={32} /></div>
              <h3>Bioregional Connectivity</h3>
              <p>Adjoins 4,000+ acres of continuous protected land. A recorded trail easement links directly to vast public hiking and wildlife corridors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Syrup Share */}
      <section id="syrup" className="section section-dark text-center">
        <div className="container">
          <h2>The Biocultural Harvest</h2>
          <p className="subtitle-gold">Experience the full spectrum of the sugarbush.</p>

          <div className="split-layout align-center mt-4">
            <div className="image-container glass-panel text-center flex-center" style={{ overflow: 'hidden', padding: 0 }}>
              <img src={sbgSketch2} alt="Syrup Sketch" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
            <div className="share-box glass-panel text-left">
              <Droplet size={48} className="text-gold mb-3" />
              <h3>8 Bottles, 8 Seasons of Sap</h3>
              <p className="mb-4">
                As a land steward, you receive an exclusive harvest share consisting of one bottle of each
                of the 8 beautifully distinct shades of maple syrup produced throughout our changing season.
              </p>
              <ul className="text-left feature-list">
                <li><CheckCircle2 size={18} className="text-gold" /> Direct from our 4,000+ tap regenerative sugarbush</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Participate in the traditional and seasonal rituals of the boil</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Deepen your ecological literacy through tasting and tapping events</li>
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
              <h2>BioFi & Earth Governance</h2>
              <p>
                Your stewardship is <strong>convertible</strong>. As Heath Forest Conservation LLC
                evolves its commons architecture—including sites for permanent eco-living and deep adaptation—you hold the right to
                convert your stake into upgraded, long-term habitation rights.
              </p>
              <h3 className="mt-4">Ecological Agency & Shared Value</h3>
              <p>
                Stewards actively shape the bioregion. Have a voice in land-use planning, ecological accounting, and propose
                agreements to govern or share yields from sustainable forestry and biodiversity ventures managed by Berkshire Sweet Gold LLC.
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
          <h2>Join The Sugarbush Commons</h2>
          <p className="subtitle-gold mb-5">Strictly limited to 6 pioneering stewards.</p>

          <div className="pricing-grid flex-center">
            <div className="pricing-card glass-panel dark-panel featured">
              <div className="badge">First Cohort</div>
              <h3>Seed Steward Tier</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">5,000</span>
                <span className="period"> solidarity contribution</span>
              </div>
              <p className="text-muted mt-2">Available for the first 3 stewardship stakes formalized in May.</p>

              <hr className="divider" />

              <ul className="text-left feature-list mb-4">
                <li><CheckCircle2 size={18} className="text-gold" /> Shared Cabin & Land Commons Access</li>
                <li><CheckCircle2 size={18} className="text-gold" /> The 8-Shade Biocultural Syrup Share</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Voice in Ecological Land Use Planning</li>
              </ul>

              <button className="btn btn-secondary w-100 mb-3">Pledge Support <ArrowRight size={18} /></button>
              <p className="fee-note">* Requires a $500/year operational guild fee for continuous trail, cabin, and forestry care.</p>
            </div>

            <div className="pricing-card glass-panel dark-panel standard">
              <h3>Canopy Steward Tier</h3>
              <div className="price">
                <span className="currency">$</span>
                <span className="amount">20,000</span>
                <span className="period"> solidarity contribution</span>
              </div>
              <p className="text-muted mt-2">Available for stewardship stakes formalized June through August.</p>

              <hr className="divider" />

              <ul className="text-left feature-list mb-4">
                <li><CheckCircle2 size={18} className="text-gold" /> Priority Cabin & Land Commons Access</li>
                <li><CheckCircle2 size={18} className="text-gold" /> The 8-Shade Biocultural Syrup Share</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Core Governance Rights in Land Use</li>
                <li><CheckCircle2 size={18} className="text-gold" /> Convertible to Permanent Eco-Habitation</li>
              </ul>

              <button className="btn btn-outline w-100 mb-3">Pledge Support</button>
              <p className="fee-note">* Requires a $500/year operational guild fee for continuous trail, cabin, and forestry care.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
