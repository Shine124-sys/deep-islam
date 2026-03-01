'use client';

import React from 'react';

interface RepositoryEntry {
    surah: string;
    verseNo: string;
    ayat: string;
    scienceDomain: string;
    openQuestion: string;
    metaphorOrEmpirical: 'Metaphor' | 'Empirical';
    category: string;
}

const scienceData: RepositoryEntry[] = [
    {
        surah: "Al-Hadid",
        verseNo: "57:25",
        ayat: "وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
        scienceDomain: "Metallurgy / Astrophysics",
        openQuestion: "How do supernovae signatures in Earth's crust correlate with specific Quranic chronologies of 'sending down'?",
        metaphorOrEmpirical: "Empirical",
        category: "Astronomy & Cosmology"
    },
    {
        surah: "An-Naml",
        verseNo: "27:88",
        ayat: "وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً وَهِيَ تَمُرُّ مَرَّ السَّحَابِ",
        scienceDomain: "Geophysics / Tectonics",
        openQuestion: "Can the 'passing like clouds' metaphor inform mathematical models of crustal fluidity over deep time?",
        metaphorOrEmpirical: "Empirical",
        category: "Complexity Theory"
    },
    {
        surah: "Al-Anbya",
        verseNo: "21:30",
        ayat: "أَوَلَمْ يَرَ الَّذِينَ كَفَرُوا أَنَّ السَّمَاوَاتِ وَالْأَرْضَ كَانَتَا رَتْقًا فَفَتَقْنَاهُمَا",
        scienceDomain: "Cosmology",
        openQuestion: "Does the term 'Ratq' (joined) imply a singularity or a boundary condition in early universe topology?",
        metaphorOrEmpirical: "Empirical",
        category: "Astronomy & Cosmology"
    },
    {
        surah: "Az-Zariyat",
        verseNo: "51:47",
        ayat: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ",
        scienceDomain: "Cosmology",
        openQuestion: "How does the active participle 'Musi'un' (expanding) relate to the accelerated expansion of dark energy?",
        metaphorOrEmpirical: "Empirical",
        category: "Astronomy & Cosmology"
    },
    {
        surah: "An-Nur",
        verseNo: "24:45",
        ayat: "وَاللَّهُ خَلَقَ كُلَّ دَابَّةٍ مِّن مَّاءٍ ۖ فَمِنْهُم مَّن يَمْشِي عَلَىٰ بَطْنِهِ",
        scienceDomain: "Evolutionary Biology",
        openQuestion: "Does the chemical primacy of water in this ayah provide a framework for abiogenesis research?",
        metaphorOrEmpirical: "Empirical",
        category: "Biology & Embryology"
    },
    {
        surah: "Al-Mu'minun",
        verseNo: "23:14",
        ayat: "ثُمَّ خَلَقْنَا النُّطْفَةَ عَلَقَةً فَخَلَقْنَا الْعَلَقَةَ مُضْغَةً",
        scienceDomain: "Embryology",
        openQuestion: "How does the 'Alaqah' stage correlate with modern molecular markers of embryonic attachment?",
        metaphorOrEmpirical: "Empirical",
        category: "Biology & Embryology"
    },
    {
        surah: "Al-Hujurat",
        verseNo: "49:13",
        ayat: "يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ",
        scienceDomain: "Genetics / AI Ethics",
        openQuestion: "Can diversity in biological signatures inform algorithmic fairness in AI systems?",
        metaphorOrEmpirical: "Metaphor",
        category: "AI & Robotics"
    },
    {
        surah: "Al-Jasiyah",
        verseNo: "45:13",
        ayat: "وَسَخَّرَ لَكُم مَّا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ جَمِيعًا مِّنْهُ",
        scienceDomain: "Robotics / Agency",
        openQuestion: "In the era of autonomous agents, how does 'Sakhara' (subjected/service) redefine human-robot ontological relations?",
        metaphorOrEmpirical: "Metaphor",
        category: "AI & Robotics"
    },
    {
        surah: "Fatir",
        verseNo: "35:1",
        ayat: "يَزِيدُ فِي الْخَلْقِ مَا يَشَاءُ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
        scienceDomain: "Quantum Potentiality",
        openQuestion: "Does 'increasing in creation' reflect the quantum state expansion or constant wavefunction divergence?",
        metaphorOrEmpirical: "Metaphor",
        category: "Quantum Perspectives"
    },
    {
        surah: "Al-Hadid",
        verseNo: "57:3",
        ayat: "هُوَ الْأَوَّلُ وَالْآخِرُ وَالظَّاهِرُ وَالْبَاطِنُ",
        scienceDomain: "Quantum Non-locality",
        openQuestion: "Does the Zahir/Batin complementarity map to the wave-particle duality and observer effect?",
        metaphorOrEmpirical: "Metaphor",
        category: "Quantum Perspectives"
    }
];

export default function ScienceRepository({ selectedCategory }: { selectedCategory: string }) {
    const filteredData = selectedCategory === 'All'
        ? scienceData
        : scienceData.filter(item => item.category === selectedCategory);

    return (
        <div className="glass-card mirror-effect" style={{ padding: '2rem', marginTop: '3rem', overflowX: 'auto' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
                Science & Tech Repository {selectedCategory !== 'All' && `— ${selectedCategory}`}
            </h3>

            {filteredData.length > 0 ? (
                <>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a0aec0', fontSize: '0.95rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Surah (Verse)</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Ayat</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Science Domain</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Open Question</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Nature</th>
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
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            background: 'rgba(29, 177, 158, 0.1)',
                                            borderRadius: '4px',
                                            fontSize: '0.85rem'
                                        }}>
                                            {item.scienceDomain}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', maxWidth: '300px', lineHeight: '1.5' }}>
                                        {item.openQuestion}
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <span style={{
                                            color: item.metaphorOrEmpirical === 'Empirical' ? 'var(--accent-gold)' : 'var(--accent-blue)',
                                            fontWeight: 'bold',
                                            fontSize: '0.8rem',
                                            textTransform: 'uppercase'
                                        }}>
                                            {item.metaphorOrEmpirical}
                                        </span>
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
                                    <div style={{
                                        fontSize: '0.7rem',
                                        padding: '2px 6px',
                                        border: '1px solid currentColor',
                                        borderRadius: '4px',
                                        color: item.metaphorOrEmpirical === 'Empirical' ? 'var(--accent-gold)' : 'var(--accent-blue)'
                                    }}>
                                        {item.metaphorOrEmpirical.toUpperCase()}
                                    </div>
                                </div>
                                <div dir="rtl" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{item.ayat}</div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>Domain:</span>
                                    <div style={{ fontSize: '0.95rem' }}>{item.scienceDomain}</div>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>Open Question:</span>
                                    <div style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{item.openQuestion}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#a0aec0' }}>
                    Research ongoing for this category in {selectedCategory}.
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
