'use client';

import React from 'react';

interface GalleryItem {
    title: string;
    description: string;
    category: string;
    type: string;
}

const galleryData: GalleryItem[] = [
    {
        title: "Celestial Sphere Model",
        description: "Interactive 3D reconstruction of Quranic cosmology terms vs contemporary astrophysics.",
        category: "Astronomy",
        type: "Interactive Model"
    },
    {
        title: "Tectonic Dynamics Map",
        description: "Visualizing the 'Sailing of Mountains' through deep-time crustal movements.",
        category: "Geophysics",
        type: "SVG Map"
    },
    {
        title: "Embryonic Stages Atlas",
        description: "High-resolution comparative analysis of Nutfah, 'Alaqah and Mudghah stages.",
        category: "Biology",
        type: "Visual Atlas"
    },
    {
        title: "Archeological Chronology",
        description: "Spatial-temporal map of the 'Ad and Thamud civilizations based on recent excavations.",
        category: "History",
        type: "Historical Map"
    }
];

export default function GalleryRepository() {
    return (
        <div style={{ marginTop: '3rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                {galleryData.map((item, index) => (
                    <div key={index} className="glass-card mirror-effect" style={{
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '400px'
                    }}>
                        <div style={{
                            height: '220px',
                            background: 'linear-gradient(45deg, rgba(29, 177, 158, 0.2), rgba(212, 175, 55, 0.1))',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            borderBottom: '1px solid var(--glass-border)'
                        }}>
                            <div style={{ fontSize: '5rem', opacity: 0.3 }}>🖼️</div>
                            <div style={{
                                position: 'absolute',
                                bottom: '1rem',
                                right: '1rem',
                                background: 'rgba(0,0,0,0.5)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                color: 'var(--accent-teal)',
                                fontWeight: 'bold',
                                backdropFilter: 'blur(5px)'
                            }}>
                                {item.type}
                            </div>
                        </div>
                        <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>
                                {item.category}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{item.title}</h3>
                            <p style={{ color: '#a0aec0', fontSize: '0.95rem', lineHeight: '1.6', flex: 1 }}>
                                {item.description}
                            </p>
                            <button className="glass-btn" style={{
                                marginTop: '1.5rem',
                                width: '100%',
                                padding: '0.8rem',
                                borderRadius: '8px',
                                background: 'rgba(255,255,255,0.05)',
                                color: 'var(--foreground)',
                                border: '1px solid var(--glass-border)',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                                transition: 'all 0.3s'
                            }}>
                                Launch Visualizer
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
