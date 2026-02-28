import Link from 'next/link';

export default function Navbar() {
    return (
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
                <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Deep-Islam</Link>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <Link href="/research" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>Research</Link>
                <Link href="/about" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>About</Link>
                <Link href="/library" style={{ color: 'var(--foreground)', textDecoration: 'none' }}>Library</Link>
            </div>
        </nav>
    );
}
