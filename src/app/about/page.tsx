import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--background)' }}>
            <Navbar />

            <div className="section-container" style={{ flex: 1, maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
                <div className="glass-card mirror-effect mobile-stack" style={{
                    padding: 'var(--card-padding)',
                    display: 'grid',
                    gridTemplateColumns: 'minmax(200px, 1fr) 2fr',
                    gap: 'var(--grid-gap)',
                    alignItems: 'start',
                    position: 'relative'
                }}>

                    {/* Left Column: Photo & Brief Info */}
                    <div style={{ textAlign: 'center', width: '100%' }}>
                        <div style={{ position: 'relative', display: 'inline-block', maxWidth: '100%' }}>
                            <div style={{
                                position: 'absolute',
                                inset: '-4px',
                                background: 'linear-gradient(135deg, var(--accent-gold), transparent)',
                                borderRadius: '16px',
                                zIndex: -1
                            }}></div>
                            <img
                                src="/profile.jpeg"
                                alt="Shoriful - Quran Researcher"
                                width="220"
                                style={{
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                                    marginBottom: '1.5rem',
                                    maxWidth: '100%',
                                    height: 'auto'
                                }}
                            />
                        </div>
                        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Shoriful</h2>
                        <p style={{ color: 'var(--accent-teal)', fontSize: '0.9rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 'bold' }}>
                            Qur'an Researcher
                        </p>
                    </div>

                    {/* Right Column: Bio & Details */}
                    <div>
                        <h1 className="gradient-text responsive-h1" style={{ marginBottom: '1.5rem' }}>About Me</h1>

                        <p style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#a0aec0', marginBottom: '2.5rem' }}>
                            I am Shoriful, a dedicated Qur'an researcher focused on exploring the depth, structure, and intellectual richness of the Qur'an.
                            My work combines traditional Islamic scholarship with analytical and research-driven methodologies.
                        </p>

                        <div className="mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--grid-gap)' }}>
                            {/* Research Interests */}
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderLeft: '3px solid var(--accent-gold)', paddingLeft: '1rem' }}>
                                    Research Interests
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#a0aec0', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li>• Tafsir studies & Classical scholarship</li>
                                    <li>• Thematic & Structural coherence</li>
                                    <li>• Linguistic & Rhetorical analysis</li>
                                    <li>• Computational Qur’anic research</li>
                                    <li>• Modern intellectual frameworks</li>
                                </ul>
                            </div>

                            {/* Platform Aims */}
                            <div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', borderLeft: '3px solid var(--accent-teal)', paddingLeft: '1rem' }}>
                                    Platform Aims
                                </h3>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#a0aec0', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                                    <li>• Present research-based insights</li>
                                    <li>• Integrate traditional & analytical methods</li>
                                    <li>• Encourage reflective engagement</li>
                                    <li>• Develop accessible resources</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Vision Section */}
                <div className="glass-card" style={{ marginTop: '3rem', padding: '2rem', textAlign: 'center' }}>
                    <p style={{ fontStyle: 'italic', color: '#f8f9fa', fontSize: '1.1rem' }}>
                        "Bridging the divide between classical wisdom and contemporary inquiry to unveil the timeless depth of the Divine Message."
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
}
