'use client';

import React from 'react';

interface FiqhEntry {
    surah: string;
    verseNo: string;
    topic: string;
    divineLogic: string;
    category: string;
}

const fiqhData: FiqhEntry[] = [
    {
        surah: "Al-Baqarah",
        verseNo: "2:275",
        topic: "Economic Justice / Riba",
        divineLogic: "The prohibition of usury (Riba) compared to the permissibility of trade (Bay') establishes a logic of value creation through productive effort and risk-sharing rather than capital exploitation.",
        category: "Financial Ethics"
    },
    {
        surah: "Al-Ma'idah",
        verseNo: "5:32",
        topic: "Sanctity of Life",
        divineLogic: "The legal equivalence between saving one life and saving all of humanity creates a profound ethical framework for bioethics and collective social responsibility.",
        category: "Bioethics"
    },
    {
        surah: "An-Nahl",
        verseNo: "16:90",
        topic: "Universal Justice ('Adl)",
        divineLogic: "The Divine command for 'Adl (Justice) and Ihsan (Excellence/Balance) serves as the overarching meta-logic for all legal and social interactions in Islamic jurisprudence.",
        category: "Social Justice"
    }
];

export default function FiqhRepository({ selectedCategory }: { selectedCategory: string }) {
    const filteredData = selectedCategory === 'All'
        ? fiqhData
        : fiqhData.filter(item => item.category === selectedCategory);

    return (
        <div className="glass-card mirror-effect" style={{ padding: '2rem', marginTop: '3rem', overflowX: 'auto' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
                Fiqh Repository {selectedCategory !== 'All' && `— ${selectedCategory}`}
            </h3>

            {filteredData.length > 0 ? (
                <>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a0aec0', fontSize: '0.95rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Surah (Verse)</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Topic</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Divine Logic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <div style={{ fontWeight: 'bold', color: 'var(--accent-gold)' }}>{item.surah}</div>
                                        <div style={{ fontSize: '0.8rem' }}>{item.verseNo}</div>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            background: 'rgba(212, 175, 55, 0.1)',
                                            borderRadius: '4px',
                                            fontSize: '0.85rem'
                                        }}>
                                            {item.topic}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', maxWidth: '600px', lineHeight: '1.6' }}>
                                        {item.divineLogic}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mobile-rep-list">
                        {filteredData.map((item, index) => (
                            <div key={index} className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ fontWeight: 'bold', color: 'var(--accent-gold)' }}>{item.surah} ({item.verseNo})</div>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>Topic:</span>
                                    <div style={{ fontSize: '0.95rem' }}>{item.topic}</div>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>Divine Logic:</span>
                                    <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{item.divineLogic}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#a0aec0' }}>
                    Articulating legal frameworks for the {selectedCategory} category.
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
