import React, { useEffect, useState } from 'react';
import { Network, MessageSquare, Shield, Users, Layers, Repeat } from 'lucide-react';

const Governance = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Hero & Intro Section */}
            <header className="hero section section-dark text-center" style={{ backgroundColor: '#1A2F22', backgroundSize: 'cover', backgroundPosition: 'center', padding: '6rem 0 3rem 0' }}>
                <div className="container hero-container animate-in">
                    <h4 className="subtitle delay-1">The PACTO Methodology</h4>
                    <h1 className="hero-title delay-2 mb-3">BioFi & Earth Governance</h1>
                    <p className="hero-description delay-3 mx-auto mb-4" style={{ maxWidth: '800px', fontSize: '1.2rem' }}>
                        Transforming deliberative assembly conversations into formal agreements — conservation easements, ecological service contracts, and credit issuance terms that communities define on their own terms.
                    </p>
                    <p className="lead mx-auto delay-3 text-muted" style={{ maxWidth: '800px', fontSize: '1rem' }}>
                        <strong>The Sugarbush Commons</strong> is guided by the PACTO framework. PACTO is not a replacement for participatory rights — it is a methodology for implementing consent at the depth our governance principles intend. Communities are the authors of agreement terms, not merely reviewers.
                    </p>
                </div>
            </header>

            {/* Governance Principles */}
            <section className="section bg-white text-dark">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2>Governance Principles</h2>
                        <p className="text-muted">The foundational values of the Commons</p>
                    </div>

                    <div className="grid-3">
                        <div className="glass-panel text-left">
                            <div className="icon-wrapper mb-3 text-gold"><Users size={32} /></div>
                            <h3>Community Authorship</h3>
                            <p>Communities define the terms, not just approve them. Agreements are rooted in community voice.</p>
                        </div>
                        <div className="glass-panel text-left">
                            <div className="icon-wrapper mb-3 text-gold"><MessageSquare size={32} /></div>
                            <h3>Voice-First Participation</h3>
                            <p>Oral tradition and active dialogue are the primary interfaces for decision-making.</p>
                        </div>
                        <div className="glass-panel text-left">
                            <div className="icon-wrapper mb-3 text-gold"><Shield size={32} /></div>
                            <h3>Data Sovereignty</h3>
                            <p>Communities maintain full control and ownership over their ecological and collective data.</p>
                        </div>
                        <div className="glass-panel text-left">
                            <div className="icon-wrapper mb-3 text-gold"><Network size={32} /></div>
                            <h3>Reciprocity</h3>
                            <p>No extraction without reciprocity — every use of community knowledge must add value for the community.</p>
                        </div>
                        <div className="glass-panel text-left">
                            <div className="icon-wrapper mb-3 text-gold"><Layers size={32} /></div>
                            <h3>Co-Goverance</h3>
                            <p>The methodology and stewardship practices evolve based on community and partner experience.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Core Loop */}
            <section className="section section-dark text-center" style={{ padding: '4rem 0' }}>
                <div className="container">
                    <h2>The Core Loop</h2>
                    <p className="subtitle-gold mb-5">A 6-step iterative process to achieve consensus</p>

                    <div className="grid-3 text-left">
                        <div className="glass-panel dark-panel p-4 d-flex flex-column">
                            <div className="icon-wrapper bg-gold text-dark mb-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>1</div>
                            <h3 className="mb-2">Community Assembly</h3>
                            <p className="mb-0 text-sm">The community convenes using its existing governance and decision-making processes.</p>
                        </div>

                        <div className="glass-panel dark-panel p-4 d-flex flex-column">
                            <div className="icon-wrapper bg-gold text-dark mb-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>2</div>
                            <h3 className="mb-2">Voice-To-Text</h3>
                            <p className="mb-0 text-sm">Assembly proceedings are transcribed in real-time as the primary source of community voice.</p>
                        </div>

                        <div className="glass-panel dark-panel p-4 d-flex flex-column">
                            <div className="icon-wrapper bg-gold text-dark mb-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>3</div>
                            <h3 className="mb-2">AI Synthesis</h3>
                            <p className="mb-0 text-sm">AI extracts themes, priorities, and points of agreement and tension to clarify collective intent.</p>
                        </div>

                        <div className="glass-panel dark-panel p-4 d-flex flex-column">
                            <div className="icon-wrapper bg-gold text-dark mb-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>4</div>
                            <h3 className="mb-2">Feedback Loop</h3>
                            <p className="mb-0 text-sm">"This is what you just said." The community reviews, corrects, and affirms the synthesis.</p>
                        </div>

                        <div className="glass-panel dark-panel p-4 d-flex flex-column">
                            <div className="icon-wrapper bg-gold text-dark mb-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}><Repeat size={20} /></div>
                            <h3 className="mb-2">Iterative Refinement</h3>
                            <p className="mb-0 text-sm">Steps 1-4 repeat until the community reaches consensus based on their own threshold.</p>
                        </div>

                        <div className="glass-panel dark-panel p-4 d-flex flex-column">
                            <div className="icon-wrapper bg-gold text-dark mb-3" style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontWeight: 'bold' }}>6</div>
                            <h3 className="mb-2">Agreement Gen.</h3>
                            <p className="mb-0 text-sm">The final synthesis becomes a formal, legal instrument rooted directly in the community's voice.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Governance;
