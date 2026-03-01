import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ResearchPage() {
    const publications = [
        { title: "Quantum Ontologies in Quranic Exegesis", date: "Jan 2026", type: "Preprint" },
        { title: "The Neural Basis of Tazkiyah: A Meta-Analysis", date: "Dec 2025", type: "Journal Article" },
        { title: "Algorithmic Ethics: Islamic Perspectives on AI", date: "Nov 2025", type: "Conference Paper" },
    ];

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--background)' }}>
            <Navbar />

            <div style={{ flex: 1 }}>
                {/* Banner Section */}
                <div style={{
                    minHeight: '300px',
                    height: 'auto',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4rem 5%'
                }}>
                    <img src="/research_banner.png" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} alt="Research Banner" />
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <h1 className="gradient-text responsive-h1" style={{ marginBottom: '1rem' }}>Research Repository</h1>
                        <p style={{ fontSize: '1.1rem', color: '#f8f9fa', maxWidth: '800px', margin: '0 auto' }}>
                            Advancing Quranic understanding through rigorous academic methodology and modern analytical frameworks.
                        </p>
                    </div>
                </div>

                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Methodology Section */}
                    <div className="glass-card mirror-effect" style={{ padding: '3rem', marginBottom: '4rem' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>Our Methodology</h2>
                        <p style={{ color: '#a0aec0', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            We employ a multi-disciplinary approach that synthesizes classical Hermeneutics (*Usul al-Tafsir*) with contemporary
                            Scientific Realism and Phenomenological analysis. Our goal is to uncover the structural and thematic
                            coherence of the Quranic text in dialogue with 21st-century knowledge.
                        </p>
                    </div>

                    {/* Publications Grid */}
                    <h2 style={{ marginBottom: '2rem' }}>Featured Publications</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {publications.map(pub => (
                            <div key={pub.title} className="glass-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>{pub.type} • {pub.date}</div>
                                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: 'var(--foreground)' }}>{pub.title}</h3>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button style={{ background: 'transparent', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', flex: 1 }}>Abstract</button>
                                    <button style={{ background: 'var(--accent-gold)', border: 'none', color: 'black', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', flex: 1 }}>Download</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
