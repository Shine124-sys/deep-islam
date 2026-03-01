'use client';

import React from 'react';

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    icon: string;
}

const timelineData: TimelineEvent[] = [
    {
        year: "610 CE",
        title: "First Revelation",
        description: "The Archangel Jibril visits Prophet Muhammad (ﷺ) in Cave Hira, marking the beginning of the Quranic descent.",
        icon: "✨"
    },
    {
        year: "622 CE",
        title: "The Hijrah",
        description: "Migration to Madinah, establishment of the first Islamic state and the Islamic calendar (Hijri).",
        icon: "🐪"
    },
    {
        year: "632 CE",
        title: "Final Sermon",
        description: "The Prophet (ﷺ) delivers the Khutbah al-Wada, outlining universal human rights and equality.",
        icon: "📜"
    },
    {
        year: "750 CE",
        title: "Abbasid Revolution",
        description: "Rise of the Abbasids in Baghdad, triggering a massive synthesis of Greek, Persian, and Indian knowledge.",
        icon: "🏛️"
    },
    {
        year: "1000 CE",
        title: "Science Hegemony",
        description: "Scholars like Ibn al-Haytham and Al-Biruni revolutionize optics, mathematics, and experimental science.",
        icon: "🔭"
    }
];

export default function TimelineRepository() {
    return (
        <div style={{ marginTop: '3rem', position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
                position: 'absolute',
                left: '20px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, var(--accent-gold), var(--accent-teal), transparent)'
            }}></div>

            {timelineData.map((item, index) => (
                <div key={index} style={{ marginBottom: '4rem', position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        left: '-26px',
                        top: '0',
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: 'var(--accent-gold)',
                        boxShadow: '0 0 15px var(--accent-gold)',
                        border: '2px solid var(--background)'
                    }}></div>

                    <div className="glass-card mirror-effect" style={{ padding: '2rem', marginLeft: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                            <span style={{
                                color: 'var(--accent-gold)',
                                fontWeight: 'bold',
                                fontSize: '1.2rem',
                                letterSpacing: '1px'
                            }}>
                                {item.year}
                            </span>
                        </div>
                        <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--foreground)' }}>{item.title}</h3>
                        <p style={{ color: '#a0aec0', lineHeight: '1.6', fontSize: '1.05rem' }}>{item.description}</p>

                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
                            <button style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--foreground)',
                                padding: '0.4rem 1rem',
                                borderRadius: '4px',
                                fontSize: '0.85rem',
                                cursor: 'pointer'
                            }}>
                                View Detailed Source
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button className="glass-btn" style={{
                    padding: '1rem 3rem',
                    borderRadius: '50px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    background: 'var(--accent-gold)',
                    color: 'black',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)'
                }}>
                    Download Full PDF Timeline
                </button>
            </div>
        </div>
    );
}
