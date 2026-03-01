'use client';

import React, { useState, use } from 'react';
import Link from 'next/link';
import ScienceRepository from '@/components/ScienceRepository';
import MetaphysicsRepository from '@/components/MetaphysicsRepository';
import PsychologyRepository from '@/components/PsychologyRepository';
import FiqhRepository from '@/components/FiqhRepository';

const trackData: Record<string, { title: string, color: string, summary: string, topics: string[] }> = {
    fiqh: {
        title: "Fiqh & Ethics",
        color: "var(--accent-gold)",
        summary: "Exploring the evolution of Islamic jurisprudence in the context of modern ethical dilemmas, human rights, and global governance.",
        topics: ["Financial Ethics", "Bioethics", "Social Justice", "Environmental Law"]
    },
    metaphysics: {
        title: "Metaphysics & Soul",
        color: "var(--accent-blue)",
        summary: "Deep dives into the nature of existence, the Unseen (Al-Ghaib), the soul's journey, and the Divine Attributes.",
        topics: ["Nature of Reality", "The Soul (Ruh)", "Divine Oneness", "Cosmological Arguments"]
    },
    psychology: {
        title: "Psychology & Nafs",
        color: "var(--accent-teal)",
        summary: "Analyzing the Quranic framework for human behavior, mental health, and the purification of the self (Tazkiyah).",
        topics: ["Cognitive Balance", "Emotional Regulation", "The Heart (Qalb)", "Behavioral Change"]
    },
    'science-tech': {
        title: "Science & Technology",
        color: "var(--accent-gold)",
        summary: "Investigating the empirical signs (Ayat) in the universe and the ethical dimensions of emerging technologies, from cosmology to AI and biotechnology.",
        topics: ["Astronomy & Cosmology", "Biology & Embryology", "AI & Robotics", "Complexity Theory", "Quantum Perspectives"]
    }
};

export default function TrackPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const track = trackData[id as keyof typeof trackData];

    if (!track) {
        return <div style={{ padding: '5rem', textAlign: 'center' }}>Track not found. <Link href="/">Return home</Link></div>;
    }

    const topicsWithAll = ['All', ...track.topics];

    const renderRepository = () => {
        switch (id) {
            case 'science-tech':
                return <ScienceRepository selectedCategory={selectedCategory} />;
            case 'metaphysics':
                return <MetaphysicsRepository selectedCategory={selectedCategory} />;
            case 'psychology':
                return <PsychologyRepository selectedCategory={selectedCategory} />;
            case 'fiqh':
                return <FiqhRepository selectedCategory={selectedCategory} />;
            default:
                return null;
        }
    };

    return (
        <main style={{ minHeight: '100vh', background: 'var(--background)', color: 'var(--foreground)' }}>
            {/* Header */}
            <div className="section-container" style={{
                borderBottom: '1px solid var(--glass-border)',
                background: `linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)`
            }}>
                <div style={{ marginBottom: '1rem' }}>
                    <Link href="/" style={{ color: 'var(--accent-teal)', textDecoration: 'none' }}>← Back to Overview</Link>
                </div>
                <h1 className="responsive-h1" style={{ color: track.color, marginBottom: '1.5rem' }}>{track.title}</h1>
                <p style={{ fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.8', color: '#a0aec0' }}>
                    {track.summary}
                </p>
            </div>

            <div className="section-container mobile-grid-1" style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 300px) 1fr', gap: '3rem' }}>
                {/* Sidebar Topics / Filter */}
                <aside>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.2rem' }}>Repository Filter</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {topicsWithAll.map(topic => (
                            <li
                                key={topic}
                                className={`glass-card ${selectedCategory === topic ? 'active-topic' : ''}`}
                                onClick={() => setSelectedCategory(topic)}
                                style={{
                                    padding: '1rem',
                                    cursor: 'pointer',
                                    border: selectedCategory === topic ? `1px solid ${track.color}` : '1px solid var(--glass-border)',
                                    background: selectedCategory === topic ? 'rgba(255,255,255,0.05)' : 'transparent',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {topic}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Content Area */}
                <section>
                    <div style={{ marginBottom: '4rem' }}>
                        {renderRepository()}
                    </div>
                </section>
            </div>
        </main>
    );
}
