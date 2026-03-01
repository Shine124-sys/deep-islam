import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LibraryPage() {
    const collections = [
        { title: "Islamic History Archive", items: "120+ Volumes", icon: "📚", color: "var(--accent-gold)" },
        { title: "Allah's Attributes Archive", items: "45 Rare Works", icon: "📜", color: "var(--accent-teal)" },
        { title: "Visual Research Gallery", items: "200+ Interactive Models", icon: "🖼️", color: "var(--accent-blue)" },
    ];

    const resources = [
        { name: 'Quranic Root Dictionary', icon: '📖' },
        { name: 'Historical Timeline PDF', icon: '⏳' },

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
                    <img src="/library_banner.png" style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }} alt="Library Banner" />
                    <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                        <h1 className="gradient-text responsive-h1" style={{ marginBottom: '1rem' }}>Digital Library</h1>
                        <p style={{ fontSize: '1.1rem', color: '#f8f9fa', maxWidth: '800px', margin: '0 auto' }}>
                            A curated repository of primary sources, reference materials, and scholarly archives for the discerning student of knowledge.
                        </p>
                    </div>
                </div>

                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Collections Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {collections.map(col => (
                            <div key={col.title} className="glass-card mirror-effect" style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ fontSize: '4rem', marginBottom: '1.5rem', filter: `drop-shadow(0 0 15px ${col.color}40)` }}>{col.icon}</div>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>{col.title}</h3>
                                <p style={{ color: 'var(--accent-teal)', marginBottom: '2rem', fontWeight: 'bold' }}>{col.items}</p>
                                <button className="glass-btn" style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--foreground)',
                                    padding: '0.8rem 2rem',
                                    borderRadius: '50px',
                                    cursor: 'pointer',
                                    width: '100%',
                                    transition: 'all 0.3s',
                                    fontWeight: 'bold'
                                }}>
                                    Explore Collection
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Reference Archive Section */}
                    <div className="glass-card" style={{ marginTop: '4rem', padding: '3rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                            <h2 style={{ color: 'var(--accent-gold)', margin: 0 }}>Open Access Resources</h2>
                            <div style={{ height: '2px', flex: 1, background: 'linear-gradient(90deg, var(--glass-border), transparent)', marginLeft: '2rem' }}></div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                            {resources.map(item => (
                                <div key={item.name} className="glass-card" style={{
                                    padding: '1.2rem 1.5rem',
                                    background: 'rgba(255,255,255,0.02)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '15px',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s ease',
                                    border: '1px solid var(--glass-border)'
                                }}>
                                    <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                                    <span style={{ fontSize: '1.05rem', color: '#f8f9fa' }}>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
