'use client';

import React from 'react';

interface MetaphysicsEntry {
    surah: string;
    verseNo: string;
    ayat: string;
    metaphysicsConcept: string;
    interpretation: string;
    category: string;
}

const metaphysicsData: MetaphysicsEntry[] = [
    {
        surah: "Al-An'am",
        verseNo: "6:103",
        ayat: "لَّا تُدْرِكُهُ الْأَبْصَارُ وَهُوَ يُدْرِكُ الْأَبْصَارَ ۖ وَهُوَ اللَّطِيفُ الْخَبِيرُ",
        metaphysicsConcept: "Nature of Reality / Divine Transcendence",
        interpretation: "The Divine Essence is beyond sensory perception (Basr) while encompassing all perception, defining the boundary between the Manifest (Zahir) and the Hidden (Batin).",
        category: "Nature of Reality"
    },
    {
        surah: "Al-Isra",
        verseNo: "17:85",
        ayat: "وَيَسْأَلُونَكَ عَنِ الرُّوحِ ۖ قُلِ الرُّوحُ مِنْ أَمْرِ رَبِّي",
        metaphysicsConcept: "The Soul (Ruh)",
        interpretation: "The Ruh is characterized as being from the 'Amr' (Command) of the Lord, suggesting a non-material, ontological origin outside the causal 'Khalq' (Creation) domain.",
        category: "The Soul (Ruh)"
    },
    {
        surah: "Al-Ikhlas",
        verseNo: "112:1",
        ayat: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        metaphysicsConcept: "Divine Oneness (Tawhid)",
        interpretation: "Absolute singularity (Ahad) as the primary metaphysical ground of all existence, negating any possibility of internal or external multiplicity in the Divine Essence.",
        category: "Divine Oneness"
    }
];

export default function MetaphysicsRepository({ selectedCategory }: { selectedCategory: string }) {
    const filteredData = selectedCategory === 'All'
        ? metaphysicsData
        : metaphysicsData.filter(item => item.category === selectedCategory);

    return (
        <div className="glass-card mirror-effect" style={{ padding: '2rem', marginTop: '3rem', overflowX: 'auto' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-blue)' }}>
                Metaphysics Repository {selectedCategory !== 'All' && `— ${selectedCategory}`}
            </h3>

            {filteredData.length > 0 ? (
                <>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a0aec0', fontSize: '0.95rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Surah (Verse)</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Ayat</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Metaphysics Concept</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Interpretation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <div style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>{item.surah}</div>
                                        <div style={{ fontSize: '0.8rem' }}>{item.verseNo}</div>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', fontSize: '1.1rem' }} dir="rtl">
                                        {item.ayat}
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            background: 'rgba(74, 144, 226, 0.1)',
                                            borderRadius: '4px',
                                            fontSize: '0.85rem'
                                        }}>
                                            {item.metaphysicsConcept}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', maxWidth: '400px', lineHeight: '1.5' }}>
                                        {item.interpretation}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mobile-rep-list">
                        {filteredData.map((item, index) => (
                            <div key={index} className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>{item.surah} ({item.verseNo})</div>
                                </div>
                                <div dir="rtl" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{item.ayat}</div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>Concept:</span>
                                    <div style={{ fontSize: '0.95rem' }}>{item.metaphysicsConcept}</div>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>Interpretation:</span>
                                    <div style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{item.interpretation}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#a0aec0' }}>
                    Data collection ongoing for this ontological category.
                </div>
            )}

            <style jsx>{`
                @media (max-width: 768px) {
                    table { display: none; }
                    .mobile-rep-list { display: block !important; }
                }
                .mobile-rep-list { display: none; }
            `}</style>
        </div>
    );
}
