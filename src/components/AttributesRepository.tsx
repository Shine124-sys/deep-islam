'use client';

import React from 'react';

interface AttributeEntry {
    nameAr: string;
    transliteration: string;
    meaning: string;
    reference: string;
}

const attributesData: AttributeEntry[] = [
    {
        nameAr: "الرحمن",
        transliteration: "Ar-Rahman",
        meaning: "The Most Gracious",
        reference: "Quran 55:1"
    },
    {
        nameAr: "الرحيم",
        transliteration: "Ar-Rahim",
        meaning: "The Most Merciful",
        reference: "Quran 1:1"
    },
    {
        nameAr: "الملك",
        transliteration: "Al-Malik",
        meaning: "The King / Sovereign",
        reference: "Quran 59:23"
    },
    {
        nameAr: "القدوس",
        transliteration: "Al-Quddus",
        meaning: "The Most Holy / Pure",
        reference: "Quran 59:23"
    },
    {
        nameAr: "السلام",
        transliteration: "As-Salam",
        meaning: "The Source of Peace",
        reference: "Quran 59:23"
    },
    {
        nameAr: "المؤمن",
        transliteration: "Al-Mu'min",
        meaning: "The Giver of Faith / Security",
        reference: "Quran 59:23"
    },
    {
        nameAr: "المهيمن",
        transliteration: "Al-Muhaymin",
        meaning: "The Guardian / Overseer",
        reference: "Quran 59:23"
    },
    {
        nameAr: "العزيز",
        transliteration: "Al-Aziz",
        meaning: "The All-Mighty",
        reference: "Quran 59:23"
    }
];

export default function AttributesRepository() {
    return (
        <div style={{ marginTop: '3rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Asma-ul-Husna</h2>
                <p style={{ color: '#a0aec0', maxWidth: '600px', margin: '0 auto' }}>
                    An exploration of the divine attributes through primary Quranic text and classical commentaries.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {attributesData.map((attr, index) => (
                    <div key={index} className="glass-card mirror-effect" style={{
                        padding: '2.5rem',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease',
                        cursor: 'default'
                    }}>
                        <div dir="rtl" style={{
                            fontSize: '3.5rem',
                            marginBottom: '1rem',
                            color: 'var(--accent-teal)',
                            fontFamily: 'var(--font-serif)'
                        }}>
                            {attr.nameAr}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--foreground)' }}>
                            {attr.transliteration}
                        </h3>
                        <p style={{ color: 'var(--accent-gold)', fontWeight: 'bold', marginBottom: '1rem' }}>
                            {attr.meaning}
                        </p>
                        <div style={{
                            fontSize: '0.8rem',
                            color: '#718096',
                            borderTop: '1px solid var(--glass-border)',
                            paddingTop: '1rem',
                            marginTop: '1rem'
                        }}>
                            {attr.reference}
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
                .glass-card:hover {
                    transform: translateY(-5px);
                }
            `}</style>
        </div>
    );
}
