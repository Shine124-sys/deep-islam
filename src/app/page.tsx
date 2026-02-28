import Link from 'next/link';

export default function Home() {
    const tracks = [
        { title: "Fiqh", icon: "⚖️", description: "Contemporary Jurisprudence & Ethics", slug: "fiqh" },
        { title: "Metaphysics", icon: "✨", description: "The Unseen, Soul & Divine Nature", slug: "metaphysics" },
        { title: "Psychology", icon: "🧠", description: "Nafs, Behavior & Mental Balance", slug: "psychology" },
        { title: "Science & Technology", icon: "🔭", description: "Cosmology & Biological Signs", slug: "science-tech" },
    ];

    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Navbar */}
            <nav style={{
                padding: '1.5rem 5%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: 'rgba(5, 7, 10, 0.8)',
                backdropFilter: 'blur(10px)'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)' }} className="gradient-text">
                    Deep-Islam
                </div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <Link href="/research" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>Research</Link>
                    <Link href="/about" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>About</Link>
                    <Link href="/library" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>Library</Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '4rem 5%',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    width: '40vw',
                    height: '40vw',
                    background: 'var(--accent-teal)',
                    filter: 'blur(150px)',
                    opacity: 0.1,
                    zIndex: -1,
                    top: '10%'
                }}></div>

                <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }} className="gradient-text">
                    Researching the Quranic Unseen
                </h1>
                <p style={{ fontSize: '1.25rem', color: '#a0aec0', maxWidth: '800px', lineHeight: '1.6', marginBottom: '3rem' }}>
                    A world-class digital repository exploring Quranic perspectives through the lens of modern science, psychology, and academic philosophy.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    width: '100%',
                    maxWidth: '1200px'
                }}>
                    {tracks.map((track) => (
                        <div key={track.title} className="glass-card mirror-effect" style={{ padding: '2rem', textAlign: 'left' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{track.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{track.title}</h3>
                            <p style={{ color: '#a0aec0', marginBottom: '1.5rem' }}>{track.description}</p>
                            <Link href={`/tracks/${track.slug}`} style={{
                                color: 'var(--accent-teal)',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}>
                                Explore Track →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                padding: '3rem 5%',
                textAlign: 'center',
                borderTop: '1px solid var(--glass-border)',
                marginTop: '4rem',
                color: '#636e72'
            }}>
                © 2026 Deep-Islam Global Research. Built for universal academic access.
            </footer>
        </main>
    );
}
