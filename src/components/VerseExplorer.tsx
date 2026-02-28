'use client';

import { useState } from 'react';

interface Verse {
    id: string;
    reference: string;
    arabic: string;
    translation: string;
    annotations: Record<string, string>;
}

const sampleVerses: Verse[] = [
    {
        id: "1",
        reference: "Surah Al-Hadid (57:25)",
        arabic: "وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
        translation: "...And We sent down iron, wherein is great might and benefits for the people...",
        annotations: {
            science: "Iron on Earth is not indigenous; it was 'sent down' from space via supernovae and meteorite impacts, a process known as iron seeding.",
            'science-tech': "The 'sending down' of iron suggests celestial origins (supernovae), while its 'great might' and 'benefits' provide the ontological basis for metallurgy, structural engineering, and the tech-driven industrial age.",
            fiqh: "The mention of 'benefits for the people' establishes the theological basis for the industrial use of minerals and the ethics of resource management.",
            metaphysics: "Iron symbolizes the descent of celestial strength into the material world, representing both protection and testing.",
            psychology: "The 'might' of iron is mirrored in the 'Might' (Al-'Izza) required for self-discipline and psychological resilience."
        }
    },
    {
        id: "2",
        reference: "Surah An-Naml (27:88)",
        arabic: "وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً وَهِيَ تَمُرُّ مَرَّ السَّحَابِ",
        translation: "And you see the mountains, thinking them rigid, while they pass as the passing of clouds...",
        annotations: {
            science: "This refers to the motion of tectonic plates and the Earth's rotation, movements that are imperceptible to the naked eye but constant.",
            'science-tech': "The relative motion of mountains parallels the hidden dynamics of the quantum world and the fluidity of information in digital networks – where stability is an emergent property of constant underlying motion.",
            psychology: "Perspective vs. Reality: This verse challenges our psychological perception of stability, reminding us that constant change is the underlying reality.",
            metaphysics: "The fluidity of matter and the constant 'renewal of creation' (Tajdid al-Khalq) at every moment.",
            fiqh: "Supports the concept of 'Ijtihad' – where apparent stability in law must account for the underlying movement and evolution of society."
        }
    }
];

export default function VerseExplorer({ trackId }: { trackId: string }) {
    const [activeVerse, setActiveVerse] = useState(sampleVerses[0]);

    return (
        <div className="glass-card mirror-effect" style={{ padding: '0', overflow: 'hidden' }}>
            <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)' }}>
                {sampleVerses.map(v => (
                    <button
                        key={v.id}
                        onClick={() => setActiveVerse(v)}
                        style={{
                            padding: '1rem 2rem',
                            background: activeVerse.id === v.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                            border: 'none',
                            color: activeVerse.id === v.id ? 'var(--accent-teal)' : '#a0aec0',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontFamily: 'var(--font-sans)',
                            transition: 'all 0.3s'
                        }}
                    >
                        {v.reference}
                    </button>
                ))}
            </div>

            <div style={{ padding: '3rem', textAlign: 'center' }}>
                <p dir="rtl" style={{
                    fontSize: '2.5rem',
                    fontFamily: 'var(--font-serif)',
                    marginBottom: '2rem',
                    lineHeight: '1.8'
                }}>
                    {activeVerse.arabic}
                </p>
                <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: '#f8f9fa', marginBottom: '3rem' }}>
                    "{activeVerse.translation}"
                </p>

                <div style={{ textAlign: 'left', background: 'rgba(0,0,0,0.2)', padding: '2rem', borderRadius: '12px' }}>
                    <h4 style={{ color: 'var(--accent-teal)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {trackId.toUpperCase()} PERSPECTIVE
                    </h4>
                    <p style={{ lineHeight: '1.7', fontSize: '1.1rem' }}>
                        {activeVerse.annotations[trackId] || "Research ongoing for this track."}
                    </p>
                </div>
            </div>
        </div>
    );
}
