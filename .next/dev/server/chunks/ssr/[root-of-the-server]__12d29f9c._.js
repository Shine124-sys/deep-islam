module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/deep-islam/src/components/VerseExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerseExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/deep-islam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/deep-islam/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const sampleVerses = [
    {
        id: "1",
        reference: "Surah Al-Hadid (57:25)",
        arabic: "وَأَنزَلْنَا الْحَدِيدَ فِيهِ بَأْسٌ شَدِيدٌ وَمَنَافِعُ لِلنَّاسِ",
        translation: "...And We sent down iron, wherein is great might and benefits for the people...",
        annotations: {
            science: "Iron on Earth is not indigenous; it was 'sent down' from space via supernovae and meteorite impacts, a process known as iron seeding.",
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
            psychology: "Perspective vs. Reality: This verse challenges our psychological perception of stability, reminding us that constant change is the underlying reality.",
            metaphysics: "The fluidity of matter and the constant 'renewal of creation' (Tajdid al-Khalq) at every moment.",
            fiqh: "Supports the concept of 'Ijtihad' – where apparent stability in law must account for the underlying movement and evolution of society."
        }
    }
];
function VerseExplorer({ trackId }) {
    const [activeVerse, setActiveVerse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(sampleVerses[0]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card mirror-effect",
        style: {
            padding: '0',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    borderBottom: '1px solid var(--glass-border)'
                },
                children: sampleVerses.map((v)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveVerse(v),
                        style: {
                            padding: '1rem 2rem',
                            background: activeVerse.id === v.id ? 'rgba(255,255,255,0.05)' : 'transparent',
                            border: 'none',
                            color: activeVerse.id === v.id ? 'var(--accent-teal)' : '#a0aec0',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontFamily: 'var(--font-sans)',
                            transition: 'all 0.3s'
                        },
                        children: v.reference
                    }, v.id, false, {
                        fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
                        lineNumber: 47,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    padding: '3rem',
                    textAlign: 'center'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        dir: "rtl",
                        style: {
                            fontSize: '2.5rem',
                            fontFamily: 'var(--font-serif)',
                            marginBottom: '2rem',
                            lineHeight: '1.8'
                        },
                        children: activeVerse.arabic
                    }, void 0, false, {
                        fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
                        lineNumber: 67,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.25rem',
                            fontStyle: 'italic',
                            color: '#f8f9fa',
                            marginBottom: '3rem'
                        },
                        children: [
                            '"',
                            activeVerse.translation,
                            '"'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'left',
                            background: 'rgba(0,0,0,0.2)',
                            padding: '2rem',
                            borderRadius: '12px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                style: {
                                    color: 'var(--accent-teal)',
                                    marginBottom: '1rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px'
                                },
                                children: [
                                    trackId.toUpperCase(),
                                    " PERSPECTIVE"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
                                lineNumber: 80,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$deep$2d$islam$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    lineHeight: '1.7',
                                    fontSize: '1.1rem'
                                },
                                children: activeVerse.annotations[trackId] || "Research ongoing for this track."
                            }, void 0, false, {
                                fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
                        lineNumber: 79,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/deep-islam/src/components/VerseExplorer.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__12d29f9c._.js.map