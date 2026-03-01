'use client';

import React, { useState } from 'react';

interface RootEntry {
    root: string;
    transliteration: string;
    meaning: string;
    occurrences: number;
    derivatives: string[];
}

const dictionaryData: RootEntry[] = [
    {
        root: "ق ر أ",
        transliteration: "Q-R-A",
        meaning: "To read, recite, proclaim",
        occurrences: 88,
        derivatives: ["Al-Quran", "Iqra", "Qira'ah"]
    },
    {
        root: "ع ل م",
        transliteration: "A-L-M",
        meaning: "To know, learn, mark",
        occurrences: 854,
        derivatives: ["Al-Alameen", "Alim", "Ilm", "Ta'leem"]
    },
    {
        root: "ح ك م",
        transliteration: "H-K-M",
        meaning: "To judge, be wise, prevent",
        occurrences: 210,
        derivatives: ["Al-Hakeem", "Hikmah", "Hukm"]
    },
    {
        root: "ر ح م",
        transliteration: "R-H-M",
        meaning: "To show mercy, pity, cherish",
        occurrences: 339,
        derivatives: ["Ar-Rahman", "Ar-Rahim", "Rahmah"]
    },
    {
        root: "ن و ر",
        transliteration: "N-W-R",
        meaning: "To shine, illuminate, enlighten",
        occurrences: 194,
        derivatives: ["An-Nur", "Munawwar", "Manarah"]
    }
];

export default function DictionaryRepository() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRoots = dictionaryData.filter(item =>
        item.root.includes(searchTerm) ||
        item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.transliteration.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ marginTop: '3rem' }}>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '3rem' }}>
                <input
                    type="text"
                    placeholder="Search by Root (e.g. Q-R-A) or Meaning..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        width: '100%',
                        padding: '1.2rem',
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--glass-border)',
                        borderRadius: '12px',
                        color: 'var(--foreground)',
                        fontSize: '1.1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                    }}
                    className="search-focus"
                />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {filteredRoots.map((item, index) => (
                    <div key={index} className="glass-card mirror-effect" style={{ padding: '2rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div dir="rtl" style={{ fontSize: '2.5rem', color: 'var(--accent-gold)', fontFamily: 'var(--font-serif)' }}>{item.root}</div>
                            <div style={{
                                background: 'rgba(29, 177, 158, 0.1)',
                                padding: '0.3rem 0.8rem',
                                borderRadius: '4px',
                                color: 'var(--accent-teal)',
                                fontWeight: 'bold',
                                fontSize: '0.9rem'
                            }}>
                                {item.transliteration}
                            </div>
                        </div>
                        <h4 style={{ color: '#f8f9fa', fontSize: '1.2rem', marginBottom: '0.8rem' }}>{item.meaning}</h4>
                        <div style={{ color: '#a0aec0', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            Occurrence Frequency: <span style={{ color: 'var(--accent-teal)', fontWeight: 'bold' }}>{item.occurrences} times</span>
                        </div>
                        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                            <div style={{ fontSize: '0.75rem', color: '#718096', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Major Derivatives</div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {item.derivatives.map(dev => (
                                    <span key={dev} style={{
                                        padding: '0.2rem 0.6rem',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--glass-border)',
                                        borderRadius: '4px',
                                        fontSize: '0.8rem'
                                    }}>
                                        {dev}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .search-focus:focus {
                    border-color: var(--accent-gold);
                }
            `}</style>
        </div>
    );
}
