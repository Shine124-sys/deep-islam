import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HistoryRepository from '@/components/HistoryRepository';

export default function HistoryPage() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--background)' }}>
            <Navbar />

            <div style={{ flex: 1 }}>
                <div style={{
                    minHeight: '250px',
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem 5%',
                    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/library_banner.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="gradient-text responsive-h1">Islamic History Archive</h1>
                        <p style={{ color: '#f8f9fa', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Chronicles of dynasties, intellectual movements, and the preservation of sacred knowledge through the centuries.
                        </p>
                    </div>
                </div>

                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <HistoryRepository />
                </div>
            </div>

            <Footer />
        </main>
    );
}
