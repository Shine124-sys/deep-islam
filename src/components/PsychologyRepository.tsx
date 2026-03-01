'use client';

import React from 'react';

interface PsychologyEntry {
    surah: string;
    verseNo: string;
    ayat: string;
    insight: string;
    category: string;
}

const psychologyData: PsychologyEntry[] = [
    {
        surah: "Ar-Ra'd",
        verseNo: "13:28",
        ayat: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
        insight: "The 'Itmi'nan' (tranquility) of the heart is linked to a transcendental anchor, suggesting that cognitive and emotional stability is found in the alignment of the individual consciousness with the Divine.",
        category: "Emotional Regulation"
    },
    {
        surah: "Ash-Shams",
        verseNo: "91:7-10",
        ayat: "وَنَفْسٍ وَمَا سَوَّاهَا ۖ فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
        insight: "The 'Nafs' (self) is described as a balanced entity with inherent capacities for both deviation and self-regulation, placing the responsibility of 'Tazkiyah' (purification) on the individual agent.",
        category: "Behavioral Change"
    },
    {
        surah: "Ar-Rum",
        verseNo: "30:21",
        ayat: "خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا",
        insight: "The concept of 'Sakinah' (tranquility) in relationships as a primary psychological need, where mutual empathy and mercy form the bedrock of social well-being.",
        category: "Cognitive Balance"
    }
];

export default function PsychologyRepository({ selectedCategory }: { selectedCategory: string }) {
    const filteredData = selectedCategory === 'All'
        ? psychologyData
        : psychologyData.filter(item => item.category === selectedCategory);

    return (
        <div className="glass-card mirror-effect" style={{ padding: '2rem', marginTop: '3rem', overflowX: 'auto' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-teal)' }}>
                Psychology Repository {selectedCategory !== 'All' && `— ${selectedCategory}`}
            </h3>

            {filteredData.length > 0 ? (
                <>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a0aec0', fontSize: '0.95rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Surah (Verse)</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Ayat</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Psychological Insight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <div style={{ fontWeight: 'bold', color: 'var(--accent-teal)' }}>{item.surah}</div>
                                        <div style={{ fontSize: '0.8rem' }}>{item.verseNo}</div>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', fontSize: '1.1rem' }} dir="rtl">
                                        {item.ayat}
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', maxWidth: '500px', lineHeight: '1.6' }}>
                                        {item.insight}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mobile-rep-list">
                        {filteredData.map((item, index) => (
                            <div key={index} className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ fontWeight: 'bold', color: 'var(--accent-teal)' }}>{item.surah} ({item.verseNo})</div>
                                </div>
                                <div dir="rtl" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{item.ayat}</div>
                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', textTransform: 'uppercase' }}>Insight:</span>
                                    <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{item.insight}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#a0aec0' }}>
                    Mapping cognitive horizons for the {selectedCategory} category.
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
