import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryRepository from '@/components/GalleryRepository';

export default function GalleryPage() {
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
                    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/research_banner.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <h1 className="gradient-text responsive-h1">Visual Research Gallery</h1>
                        <p style={{ color: '#f8f9fa', maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem' }}>
                            Interactive visual models and scholarly structural analyses of Quranic themes and historical contexts.
                        </p>
                    </div>
                </div>

                <div className="section-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <GalleryRepository />
                </div>
            </div>

            <Footer />
        </main>
    );
}
