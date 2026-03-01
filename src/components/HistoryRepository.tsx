'use client';

import React from 'react';

interface HistoryEntry {
    period: string;
    event: string;
    source: string;
    scholar: string;
    year: string;
    category: string;
}

const historyData: HistoryEntry[] = [
    {
        period: "Prophetic Era",
        event: "The Hijrah (Migration to Madinah)",
        source: "Sahih al-Bukhari",
        scholar: "Ibn Hisham",
        year: "622 CE",
        category: "Foundations"
    },
    {
        period: "Rashidun Caliphate",
        event: "Compilation of the Mushaf",
        source: "Tarikh al-Tabari",
        scholar: "Zayd ibn Thabit",
        year: "632-656 CE",
        category: "Governance"
    },
    {
        period: "Umayyad Dynasty",
        event: "Architecture of Dome of the Rock",
        source: "Al-Bidayah wan-Nihayah",
        scholar: "Ibn Kathir",
        year: "691 CE",
        category: "Culture"
    },
    {
        period: "Abbasid Golden Age",
        event: "Establishment of House of Wisdom",
        source: "Al-Fehrist",
        scholar: "Al-Khwarizmi",
        year: "8th-13th Century",
        category: "Science"
    },
    {
        period: "Andalusian Period",
        event: "Flourishing of Cordoba Library",
        source: "Nafh al-Tib",
        scholar: "Al-Maqqari",
        year: "10th Century",
        category: "Education"
    }
];

export default function HistoryRepository() {
    return (
        <div className="glass-card mirror-effect" style={{ padding: '2rem', marginTop: '3rem', overflowX: 'auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-gold)', margin: 0 }}>
                    Islamic History Archive
                </h3>
                <span style={{ fontSize: '0.9rem', color: '#a0aec0' }}>{historyData.length} Selected Records</span>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a0aec0', fontSize: '0.95rem' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                        <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Period</th>
                        <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Key Event / Milestone</th>
                        <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Primary Source</th>
                        <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Scholarly Authority</th>
                        <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Timeline</th>
                    </tr>
                </thead>
                <tbody>
                    {historyData.map((item, index) => (
                        <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.3s' }} className="table-row-hover">
                            <td style={{ padding: '1.5rem 1rem' }}>
                                <div style={{ fontWeight: 'bold', color: 'var(--accent-teal)' }}>{item.period}</div>
                                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>{item.category}</div>
                            </td>
                            <td style={{ padding: '1.5rem 1rem', color: '#f8f9fa', fontWeight: 500 }}>
                                {item.event}
                            </td>
                            <td style={{ padding: '1.5rem 1rem' }}>
                                <span style={{ fontStyle: 'italic' }}>{item.source}</span>
                            </td>
                            <td style={{ padding: '1.5rem 1rem' }}>
                                {item.scholar}
                            </td>
                            <td style={{ padding: '1.5rem 1rem' }}>
                                <span style={{
                                    padding: '0.2rem 0.6rem',
                                    background: 'rgba(212, 175, 55, 0.1)',
                                    color: 'var(--accent-gold)',
                                    borderRadius: '4px',
                                    fontSize: '0.85rem'
                                }}>
                                    {item.year}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Mobile View */}
            <div className="mobile-history-list">
                {historyData.map((item, index) => (
                    <div key={index} className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ fontWeight: 'bold', color: 'var(--accent-teal)' }}>{item.period}</div>
                            <div style={{ color: 'var(--accent-gold)', fontSize: '0.85rem' }}>{item.year}</div>
                        </div>
                        <div style={{ fontSize: '1.2rem', color: '#f8f9fa', marginBottom: '1rem' }}>{item.event}</div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: '#718096', textTransform: 'uppercase' }}>Source</div>
                                <div>{item.source}</div>
                            </div>
                            <div>
                                <div style={{ fontSize: '0.7rem', color: '#718096', textTransform: 'uppercase' }}>Scholar</div>
                                <div>{item.scholar}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                @media (max-width: 768px) {
                    table { display: none; }
                    .mobile-history-list { display: block !important; }
                }
                .mobile-history-list { display: none; }
                .table-row-hover:hover {
                    background: rgba(255, 255, 255, 0.02);
                }
            `}</style>
        </div>
    );
}
