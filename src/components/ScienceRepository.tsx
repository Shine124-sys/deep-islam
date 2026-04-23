'use client';

import React from 'react';

interface RepositoryEntry {
    surah: string;
    verseNo: string|number;
    ayat: string;
    scienceDomain: string | string[];
    openQuestion: string;
    metaphorOrEmpirical: 'Metaphor' | 'Empirical' |'Metaphorical with cosmological resonance'|'Empirical with metaphorical dimension'|'Metaphor with empirical hint'|'Metaphorical with empirical parallels'| 'Metaphorical' | 'Empirical hint' | 'Both' | 'Metaphorical with empirical hints' | 'Empirical with metaphysical depth' | 'Empirical with cultural metaphor' | 'Metaphorical with physics resonance' | 'Metaphorical/Empirical' | 'Empirical-metaphysical';
    category: string;
}

const scienceData: RepositoryEntry[] = [
   
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:30",
    "ayat": "Have those who disbelieved not considered that the heavens and the earth were a joined entity, then We separated them, and made from water every living thing? Then will they not believe?",
    "scienceDomain": ["Cosmology", "Biology"],
    "openQuestion": "Exact scientific correlation of 'joined entity' and 'made from water' is still interpretative",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Creation"
  },
  {
    "surah": "Adh-Dhariyat",
    "verseNo": "51:47",
    "ayat": "And the heaven We constructed with strength, and indeed, We are expanding it.",
    "scienceDomain": ["Cosmology"],
    "openQuestion": "Mechanism, rate, and physics behind the expansion remain complex",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Cosmic Expansion"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:40",
    "ayat": "Or [their deeds] are like darknesses in a vast deep sea overwhelmed with waves upon waves, topped by clouds—darkness upon darkness.",
    "scienceDomain": ["Oceanography", "Physics of Light"],
    "openQuestion": "Deep-sea layering and darkness not accessible until modern submarines",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Natural Phenomena"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:11",
    "ayat": "Then He directed Himself to the heaven while it was smoke and said to it and the earth, 'Come willingly or unwillingly.' They said, 'We come willingly.'",
    "scienceDomain": ["Cosmology"],
    "openQuestion": "Literal or metaphorical interpretation of cosmic formation remains open",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Cosmic Origin"
  },
  {
    "surah": "As-Sajda",
    "verseNo": "32:5",
    "ayat": "He arranges [each] matter from the heaven to the earth; then it will ascend to Him in a Day, the measure of which is a thousand years of what you count.",
    "scienceDomain": ["Physics", "Time Concept"],
    "openQuestion": "Exact physical interpretation remains speculative",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Time"
  },
  {
    "surah": "Al-Mursalat",
    "verseNo": "77:25-27",
    "ayat": "Have We not made the earth a container of the living and the dead, and placed therein lofty firmly set mountains and given you water to drink?",
    "scienceDomain": ["Geology", "Atmospheric Science"],
    "openQuestion": "Earth’s full subsurface biosphere and water distribution not fully understood",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Earth System"
  },
  {
    "surah": "Al-Qiyamah",
    "verseNo": "75:3-4",
    "ayat": "Does man think that We will not assemble his bones? Yes. [We are] Able [even] to proportion his fingertips.",
    "scienceDomain": ["Biology", "Forensics"],
    "openQuestion": "Fingertip precision and uniqueness as biological feature unknown in 7th century",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Human Biology"
  },
  {
    "surah": "Yunus",
    "verseNo": "10:5",
    "ayat": "It is He who made the sun a shining light and the moon a derived light and determined for it phases…",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Precise linguistic distinction for pre-scientific era",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Celestial Bodies"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:19-20",
    "ayat": "He released the two seas, meeting [side by side]; between them is a barrier they do not transgress.",
    "scienceDomain": ["Oceanography", "Marine Physics"],
    "openQuestion": "Global mixing dynamics and marine biodiversity implications remain under study",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Marine Science"
  },
  {
    "surah": "Al-Waqi’ah",
    "verseNo": "56:71-72",
    "ayat": "Do you not see the fire which you kindle? Is it you who produced its tree, or are We the producers?",
    "scienceDomain": ["Chemistry", "Material Science"],
    "openQuestion": "Literal versus metaphorical interpretation of fire production",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Energy"
  },
  {
    "surah": "Al-Hadid",
    "verseNo": "57:25",
    "ayat": "...And We sent down iron, wherein is strong material and benefits for mankind…",
    "scienceDomain": ["Astrophysics", "Material Science"],
    "openQuestion": "‘Sent down’ versus ‘created’ remains intriguing",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Materials"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:69",
    "ayat": "Then eat from all the fruits and follow the ways of your Lord laid down [for you]. There emerges from their bellies a drink, varying in colors, in which there is healing for people…",
    "scienceDomain": ["Biology", "Medicine"],
    "openQuestion": "Full spectrum of chemical and biological benefits still under study",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Health"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:6",
    "ayat": "He creates you in the wombs of your mothers, creation after creation, in three layers of darkness…",
    "scienceDomain": ["Embryology"],
    "openQuestion": "Poetic metaphor versus precise biological insight",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Human Development"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:5",
    "ayat": "And We have certainly beautified the nearest heaven with lamps and have made them missiles for the devils…",
    "scienceDomain": ["Astronomy", "Astrophysics"],
    "openQuestion": "‘Missiles for devils’ remains metaphysical and unexplained",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cosmic Phenomena"
  },
  {
    "surah": "Al-Hajj",
    "verseNo": "22:47",
    "ayat": "…Indeed, a day with your Lord is like a thousand years of what you count.",
    "scienceDomain": ["Physics", "Time Concept"],
    "openQuestion": "Quantitative mapping to relativity or cosmic time remains speculative",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Time"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:33",
    "ayat": "It is He who created the night and the day, the sun and the moon, each swimming in an orbit.",
    "scienceDomain": ["Astronomy", "Cosmology"],
    "openQuestion": "Pre-telescopic understanding of orbits remarkable",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Celestial Motion"
  },
  {
    "surah": "Al-Insan",
    "verseNo": "76:2",
    "ayat": "Indeed, We created man from a drop of mingled fluids in order to try him…",
    "scienceDomain": ["Genetics", "Embryology"],
    "openQuestion": "Mechanism of genetic mixing hinted in language; DNA recombination not fully mapped in 7th century",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Genetics"
  },
  {
    "surah": "Al-Ghashiyah",
    "verseNo": "88:17-20",
    "ayat": "Do they not look at the camels—how they are created? And at the sky—how it is raised? And at the mountains—how they are erected? And at the earth—how it is spread out?",
    "scienceDomain": ["Biology", "Geology", "Atmospheric Science"],
    "openQuestion": "Full mechanisms of camel thermoregulation, mountain tectonics, and atmospheric stability still under study",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Natural Systems"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:43",
    "ayat": "Do you not see that Allah drives the clouds, then joins them together, then makes them into a mass, and you see the rain emerge from within it…",
    "scienceDomain": ["Meteorology", "Cloud Physics"],
    "openQuestion": "Artificial rain creation and full control of precipitation patterns still challenging",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Weather"
  },
  {
    "surah": "Ar-Ra’d",
    "verseNo": "13:13",
    "ayat": "And the thunder glorifies His praise, and the angels [as well] from fear of Him; and He sends the thunderbolts and strikes with them whom He wills…",
    "scienceDomain": ["Atmospheric Physics", "Plasma Physics"],
    "openQuestion": "Role of angels metaphorically linked; unexplored plasma phenomena possible",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Atmospheric Phenomena"
  },
  {
    "surah": "Al-Tariq",
    "verseNo": "86:5-7",
    "ayat": "So let man observe from what he was created. He was created from a fluid, ejected, emerging from between the backbone and the ribs.",
    "scienceDomain": ["Embryology", "Anatomy"],
    "openQuestion": "Precise embryonic pathway and anatomical description remain debated",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Human Development"
  },
  {
    "surah": "At-Takwir",
    "verseNo": "81:1-2",
    "ayat": "When the sun (kuwwirat) is folded up, and when the stars fall, dispersing…",
    "scienceDomain": ["Astrophysics", "Cosmology"],
    "openQuestion": "Abstract astronomical metaphors; literal events uncertain",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cosmic Events"
  },
  {
    "surah": "Al-Infitar",
    "verseNo": "82:1-2",
    "ayat": "When the sky breaks apart and when the stars are scattered…",
    "scienceDomain": ["Cosmology", "Astrophysics"],
    "openQuestion": "Metaphorical vs. literal cosmic tearing still speculative",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cosmic Events"
  },
  {
    "surah": "Al-Ma'arij",
    "verseNo": "70:4",
    "ayat": "The angels and the Spirit ascend to Him in a Day the measure of which is fifty thousand years.",
    "scienceDomain": ["Physics", "Time Concept"],
    "openQuestion": "Why 50,000 years vs 1,000 elsewhere; cosmic frame reference unexplored",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Time"
  },
  {
    "surah": "Sad",
    "verseNo": "38:27",
    "ayat": "And We did not create the heaven and the earth and all that is between them without purpose…",
    "scienceDomain": ["Cosmology", "Physics", "Philosophy"],
    "openQuestion": "Underlying universal purpose remains a deep philosophical and scientific question",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Existence"
  },
  {
    "surah": "Al-Saffat",
    "verseNo": "37:6-7",
    "ayat": "Indeed, We have adorned the nearest heaven with stars, and as protection against every rebellious devil…",
    "scienceDomain": ["Astronomy", "Astrophysics"],
    "openQuestion": "Physical counterpart for protection of devils speculative",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Cosmic Phenomena"
  },
  {
    "surah": "Qaf",
    "verseNo": "50:16",
    "ayat": "And We have already created man and know what his soul whispers to him, and We are closer to him than [his] jugular vein.",
    "scienceDomain": ["Neuroscience", "Consciousness Studies"],
    "openQuestion": "Mechanism of divine awareness unquantifiable by science",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Consciousness"
  },
  {
    "surah": "Al-A'raf",
    "verseNo": "7:57",
    "ayat": "It is He who sends the winds as good tidings before His mercy, until, when they have carried heavy clouds, We drive them to a dead land and send down rain, bringing forth thereby fruits of all kinds.",
    "scienceDomain": ["Meteorology", "Environmental Science"],
    "openQuestion": "Human understanding of wind-cloud-fruit system incomplete",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Water Cycle"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:12-14",
    "ayat": "And certainly We created man from an extract of clay. Then We placed him as a drop in a safe place. Then We made the drop a clot…",
    "scienceDomain": ["Embryology", "Developmental Biology"],
    "openQuestion": "Precise scientific description of each stage is partially aligned with modern embryology",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Human Development"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:33",
    "ayat": "It is He who created the night and the day, the sun and the moon, each swimming in an orbit.",
    "scienceDomain": ["Astronomy", "Orbital Mechanics"],
    "openQuestion": "Pre-modern comprehension of orbit accuracy notable",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Celestial Motion"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:21",
    "ayat": "Do you not see that Allah sends down water from the sky and makes it penetrate the earth…",
    "scienceDomain": ["Hydrology", "Geology"],
    "openQuestion": "Subsurface water dynamics complex and partially mapped",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Water Systems"
  },
  {
    "surah": "Fatir",
    "verseNo": "35:11",
    "ayat": "And Allah created you from dust, then from a drop, then He made you pairs. And no female conceives nor gives birth except with His knowledge…",
    "scienceDomain": ["Embryology", "Genetics"],
    "openQuestion": "Knowledge of reproductive mechanisms pre-modern era remarkable",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Human Biology"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:35",
    "ayat": "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp...",
    "scienceDomain": ["Physics", "Quantum Mechanics", "Neuroscience"],
    "openQuestion": "Are these metaphors purely spiritual or also analogical to physical light models?",
    "metaphorOrEmpirical": "Metaphorical with physics resonance",
    "category": "Light"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:11",
    "ayat": "Then He directed Himself to the heaven while it was smoke and said to it and to the earth: 'Come willingly or by compulsion.'...",
    "scienceDomain": ["Cosmology", "Astrophysics"],
    "openQuestion": "Could this refer to specific post-Big Bang plasma conditions?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Cosmic Origin"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:68-69",
    "ayat": "And your Lord inspired the bee, saying, 'Take for yourself among the mountains, houses...'",
    "scienceDomain": ["Biology", "Zoology", "Animal Behavior"],
    "openQuestion": "Does 'inspiration' imply divine programming of instinctual behaviors?",
    "metaphorOrEmpirical": "Empirical with metaphysical depth",
    "category": "Animal Behavior"
  },
  {
    "surah": "Al-Muminun",
    "verseNo": "23:18-19",
    "ayat": "And We sent down water from the sky in measure and settled it in the earth, and indeed, We are able to take it away...",
    "scienceDomain": ["Hydrology", "Agriculture"],
    "openQuestion": "Does 'in measure' refer to quantifiable climate regulation systems?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Water Systems"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:104",
    "ayat": "The Day when We will fold the heaven like the folding of a scroll for the records...",
    "scienceDomain": ["Cosmology", "Theoretical Physics"],
    "openQuestion": "Is this linked to cyclic universe or extra-dimensional models?",
    "metaphorOrEmpirical": "Metaphorical with cosmological resonance",
    "category": "Cosmic End"
  },
  {
    "surah": "At-Tariq",
    "verseNo": "86:1-3",
    "ayat": "By the sky and the night visitor! And what will explain to you what the night visitor is? It is the piercing star.",
    "scienceDomain": ["Astronomy", "Astrophysics"],
    "openQuestion": "Is 'piercing star' linked to specific high-energy astrophysical events?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Stars"
  },
  {
    "surah": "At-Tur",
    "verseNo": "52:6",
    "ayat": "And by the sea set on fire.",
    "scienceDomain": ["Oceanography", "Volcanology"],
    "openQuestion": "Future scenarios of ocean fire events?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Earth Phenomena"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:5",
    "ayat": "And We have certainly beautified the nearest heaven with stars and have made them missiles against the devils...",
    "scienceDomain": ["Astronomy", "Astrophysics"],
    "openQuestion": "Physical vs metaphysical layers of 'missiles against devils'?",
    "metaphorOrEmpirical": "Metaphorical with empirical parallels",
    "category": "Cosmic Phenomena"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:4-5",
    "ayat": "He created man from a sperm-drop; then at once he is a clear adversary. And the grazing livestock He created for you...",
    "scienceDomain": ["Genetics", "Zoology"],
    "openQuestion": "How do instinct and morality emerge distinctly in humans?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Human vs Animal Nature"
  },
  {
    "surah": "Adh-Dhariyat",
    "verseNo": "51:47",
    "ayat": "And the heaven We constructed with strength, and indeed, We are [still] expanding it.",
    "scienceDomain": ["Cosmology"],
    "openQuestion": "What drives expansion: dark energy or unknown physics?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Cosmic Expansion"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:53",
    "ayat": "And it is He who has released the two seas, one fresh and sweet and one salty and bitter, and He placed between them a barrier and prohibiting partition.",
    "scienceDomain": ["Marine Science", "Fluid Dynamics"],
    "openQuestion": "Exact mechanics of fluid barrier persistence in mixing zones remain under research.",
    "metaphorOrEmpirical": "Empirical with metaphorical dimension",
    "category": "Marine Systems"
  },
  {
    "surah": "Al-Qiyamah",
    "verseNo": "75:36-39",
    "ayat": "Does man think that he will be left neglected? Had he not been a sperm-drop from semen emitted? Then he was a clinging clot, and [Allah] created and proportioned [him]...",
    "scienceDomain": ["Embryology", "Morphogenesis"],
    "openQuestion": "How form symmetry is encoded genetically is still unknown.",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Development"
  },
  {
    "surah": "Qaf",
    "verseNo": "50:6",
    "ayat": "Have they not looked at the heaven above them—how We structured it and adorned it and [how] it has no rifts?",
    "scienceDomain": ["Cosmology", "Astrophysics"],
    "openQuestion": "Nature of cosmic fabric integrity remains debated.",
    "metaphorOrEmpirical": "Empirical-metaphysical",
    "category": "Cosmic Structure"
  },
  {
    "surah": "Ibrahim",
    "verseNo": "14:32-33",
    "ayat": "Allah is the One who created the heavens and the earth and sent down rain… and subjected the ships to sail upon the sea by His command…",
    "scienceDomain": ["Oceanography", "Hydrodynamics"],
    "openQuestion": "Does reference to navigation hint at natural law of buoyancy?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Natural Laws"
  },
  {
    "surah": "Ar-Rum",
    "verseNo": "30:22",
    "ayat": "And of His signs is the creation of the heavens and the earth and the diversity of your languages and your colors...",
    "scienceDomain": ["Linguistics", "Genetics", "Anthropology"],
    "openQuestion": "How is both genetics and linguistics captured in a single verse?",
    "metaphorOrEmpirical": "Empirical with cultural metaphor",
    "category": "Human Diversity"
  },
  {
    "surah": "Al-Hajj",
    "verseNo": "22:5",
    "ayat": "…Then We bring you out as a child, then [We develop you] that you reach your maturity…",
    "scienceDomain": ["Developmental Biology"],
    "openQuestion": "How environmental factors shape human development still open",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Human Growth"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:66",
    "ayat": "…from what is between excretion and blood, We give you pure milk…",
    "scienceDomain": ["Physiology", "Nutrition"],
    "openQuestion": "Physiological accuracy confirmed—was this symbolic?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Nutrition"
  },
  {
    "surah": "Fatir",
    "verseNo": "35:28",
    "ayat": "And among people, moving creatures, and grazing livestock are various colors similarly...",
    "scienceDomain": ["Genetics", "Evolutionary Biology"],
    "openQuestion": "What governs convergent pigmentation traits across unrelated taxa?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Biodiversity"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:33",
    "ayat": "It is He who created the night and the day and the sun and the moon—each in an orbit floating.",
    "scienceDomain": ["Astrophysics", "Orbital Mechanics"],
    "openQuestion": "Does this describe orbital equilibrium beyond human awareness at the time?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Celestial Motion"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:37",
    "ayat": "Man was created of haste. I will show you My signs, so do not impatiently urge Me.",
    "scienceDomain": ["Neuroscience", "Psychology"],
    "openQuestion": "Could this hint at evolutionary trade-offs between patience and survival instincts?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Human Behavior"
  },
  {
    "surah": "Al-Qiyamah",
    "verseNo": "75:4",
    "ayat": "Yes. We are able to proportion his fingertips.",
    "scienceDomain": ["Forensic Science", "Genetics"],
    "openQuestion": "Why were fingertips emphasized as opposed to other identifiers?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Identity"
  },
  {
    "surah": "At-Takwir",
    "verseNo": "81:15-16",
    "ayat": "I swear by the retreating stars, those that run and disappear…",
    "scienceDomain": ["Astrophysics"],
    "openQuestion": "Could 'retreating' describe apparent retrograde motion?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Stars"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:43",
    "ayat": "Do you not see that Allah drives clouds, then joins them together, then makes them into a mass...",
    "scienceDomain": ["Meteorology", "Atmospheric Physics"],
    "openQuestion": "Could this imply awareness of vertical convection layers in thunderstorms?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Weather"
  },
  {
    "surah": "As-Sajda",
    "verseNo": "32:5",
    "ayat": "…in a Day, the measure of which is a thousand years of what you count.",
    "scienceDomain": ["Cosmology", "Physics"],
    "openQuestion": "Could this align with string theory’s multiple temporal dimensions?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Time"
  },
  {
    "surah": "Al-Ma’arij",
    "verseNo": "70:4",
    "ayat": "...in a Day the measure of which is fifty thousand years.",
    "scienceDomain": ["Astrophysics", "Cosmology"],
    "openQuestion": "Could this signify deep-time astronomical cycles (galactic rotations)?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Time"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:68-69",
    "ayat": "And your Lord inspired the bee… then eat of all the fruits and follow the paths…",
    "scienceDomain": ["Entomology", "Animal Behavior"],
    "openQuestion": "Could 'inspired' refer to instinctive genetic programming in eusocial insects?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Animal Behavior"
  },
  {
    "surah": "Al-Ankabut",
    "verseNo": "29:41",
    "ayat": "The likeness of those who take protectors besides Allah is as the likeness of the spider…",
    "scienceDomain": ["Material Science", "Zoology"],
    "openQuestion": "Could this verse have inspired biomimicry research on spider webs?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Biomimicry"
  },
  {
    "surah": "Al-Anaam",
    "verseNo": "6:38",
    "ayat": "...creatures on earth and birds... are communities like you...",
    "scienceDomain": ["Ecology", "Ethology"],
    "openQuestion": "Could this imply moral/ecological rights for non-human communities?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Ecology"
  },
  {
    "surah": "Al-Kahf",
    "verseNo": "18:96",
    "ayat": "…bring me blocks of iron… then pour molten copper over it.",
    "scienceDomain": ["Metallurgy", "Materials Science"],
    "openQuestion": "Could this suggest advanced knowledge of metal reinforcement beyond its time?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Materials Engineering"
  },
  {
    "surah": "Al-Muzzammil",
    "verseNo": "73:6",
    "ayat": "Indeed, the hours of the night are more effective for concentration…",
    "scienceDomain": ["Neuroscience", "Psychology"],
    "openQuestion": "Could night silence be linked to reduced sensory load and higher cognitive clarity?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cognition"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:66",
    "ayat": "We give you drink from what is in their bellies, from between blood and excretion, pure milk…",
    "scienceDomain": ["Biochemistry", "Physiology"],
    "openQuestion": "Could this verse anticipate gut microbiome's role in nutrient transformation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Nutrition"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:61",
    "ayat": "Blessed is He who placed in the sky great stars and placed therein a burning lamp and a luminous moon.",
    "scienceDomain": ["Astronomy", "Astrophysics"],
    "openQuestion": "Could 'burning lamp' and 'luminous moon' be an early distinction between emission vs reflection?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Celestial Bodies"
  },
  {
    "surah": "Al-An’am",
    "verseNo": "6:97",
    "ayat": "And it is He who made the stars for you to guide you through the darkness of land and sea…",
    "scienceDomain": ["Astronomy", "Navigation"],
    "openQuestion": "Is this an invitation to develop astro-navigation sciences?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Navigation"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:39-40",
    "ayat": "And the moon—we have determined for it phases, until it returns like the old date stalk.",
    "scienceDomain": ["Astronomy", "Lunar Science"],
    "openQuestion": "Could the 'old date stalk' metaphor point to visual astronomy methods?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Moon Phases"
  },
  {
    "surah": "Al-Infitar",
    "verseNo": "82:6-8",
    "ayat": "Who created you, proportioned you, and balanced you? In whatever form He willed has He assembled you.",
    "scienceDomain": ["Genetics", "Developmental Biology"],
    "openQuestion": "Could this verse foreshadow epigenetic regulation in shaping forms?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Development"
  },
  {
    "surah": "Ta-Ha",
    "verseNo": "20:53",
    "ayat": "…and sent down water from the sky with which We brought forth diverse pairs of plants.",
    "scienceDomain": ["Botany", "Hydrology"],
    "openQuestion": "Could this highlight early awareness of genetic duality in plants?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Plant Biology"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:32",
    "ayat": "And We made the sky a protected ceiling…",
    "scienceDomain": ["Astrophysics", "Atmospheric Science"],
    "openQuestion": "Could 'protected ceiling' encompass cosmic radiation protection?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Atmosphere"
  },
  {
    "surah": "Al-Hijr",
    "verseNo": "15:16",
    "ayat": "And We have placed within the heaven great stars and have beautified it…",
    "scienceDomain": ["Astronomy", "Cosmology"],
    "openQuestion": "Does this correspond to the large-scale structure of the universe beyond visible stars?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic Structure"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:5",
    "ayat": "And We have certainly beautified the nearest heaven with stars…",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Could 'nearest heaven' denote the observable universe from Earth’s perspective?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmos"
  },
  {
    "surah": "An-Nazi’at",
    "verseNo": "79:27-30",
    "ayat": "Are you a more difficult creation or is the heaven? He constructed it…",
    "scienceDomain": ["Cosmology", "Physics"],
    "openQuestion": "Is this passage compatible with the inflationary model of cosmology?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic Creation"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:11",
    "ayat": "Then He directed Himself to the heaven while it was smoke…",
    "scienceDomain": ["Astrophysics", "Plasma Physics"],
    "openQuestion": "Could this 'smoke' relate to the cosmic microwave background radiation era?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic Origin"
  },
  {
    "surah": "An-Naml",
    "verseNo": "27:18-19",
    "ayat": "Until, when they came upon the valley of the ants, an ant said: ‘O ants! Enter your dwellings…’",
    "scienceDomain": ["Zoology", "Ethology"],
    "openQuestion": "Could this reflect a deeper awareness of insect social behavior?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Animal Behavior"
  },
  {
    "surah": "At-Tin",
    "verseNo": "95:4-5",
    "ayat": "We have certainly created man in the best of stature. Then We return him to the lowest of the low…",
    "scienceDomain": ["Genetics", "Gerontology"],
    "openQuestion": "Does this verse allude to entropy-driven decline of biological systems?",
    "metaphorOrEmpirical": "Both",
    "category": "Aging"
  },
  {
    "surah": "Al-Isra",
    "verseNo": "17:85",
    "ayat": "And they ask you concerning the soul. Say: The soul is from the command of my Lord…",
    "scienceDomain": ["Philosophy of Mind", "Metaphysics"],
    "openQuestion": "Does this verse anticipate modern debates on mind-body dualism?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Consciousness"
  },
  {
    "surah": "Al-Qari’ah",
    "verseNo": "101:5",
    "ayat": "And the mountains will be like carded wool.",
    "scienceDomain": ["Geology", "Volcanology"],
    "openQuestion": "Does this metaphor anticipate pyroclastic flows or tectonic collapse?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Earth Events"
  },
  {
    "surah": "Al-A’raf",
    "verseNo": "7:54",
    "ayat": "Indeed, your Lord is Allah who created the heavens and earth in six days…",
    "scienceDomain": ["Cosmology", "Physics"],
    "openQuestion": "Do 'six days' represent cosmological stages rather than literal days?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Cosmic Creation"
  },
  
  {
    "surah": "Al-Rahman",
    "verseNo": "55:7-8",
    "ayat": "And the sky He raised and set the balance. That you not transgress within the balance.",
    "scienceDomain": ["Physics", "Environmental Science"],
    "openQuestion": "Could 'balance' extend to environmental and ethical balance on Earth?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Balance"
  },
  {
    "surah": "Al-An’am",
    "verseNo": "6:122",
    "ayat": "Is one who was dead and We gave him life and made for him a light by which to walk…",
    "scienceDomain": ["Neuroscience", "Physics"],
    "openQuestion": "Could bio-photon research link to 'light' as guidance?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Guidance"
  },
  {
    "surah": "Al-Baqara",
    "verseNo": "2:261",
    "ayat": "…like a grain which grows seven ears; in every ear is a hundred grains…",
    "scienceDomain": ["Agronomy", "Genetics"],
    "openQuestion": "Could this metaphor parallel exponential growth models in biology and economy?",
    "metaphorOrEmpirical": "Metaphor with empirical hint",
    "category": "Growth"
  },
  {
    "surah": "Al-Qiyamah",
    "verseNo": "75:3-4",
    "ayat": "Does man think We will not assemble his bones? Yes, We are able to proportion his fingertips.",
    "scienceDomain": ["Forensics", "Anatomy", "Biometrics"],
    "openQuestion": "Is there deeper significance in fingertip uniqueness linked to identity in creation?",
    "metaphorOrEmpirical": "Empirical with symbolic depth",
    "category": "Human Identity"
  },
  {
    "surah": "Al-Hajj",
    "verseNo": "22:47",
    "ayat": "A day with your Lord is like a thousand years of what you count.",
    "scienceDomain": ["Astrophysics", "Relativity"],
    "openQuestion": "Could this concept align with relativistic time near massive objects?",
    "metaphorOrEmpirical": "Metaphor with scientific resonance",
    "category": "Time"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:20-22",
    "ayat": "Until, when they reach it, their hearing and their eyes and their skins will testify against them…",
    "scienceDomain": ["Neuroscience", "Cellular Memory"],
    "openQuestion": "Could skin bio-signals serve as forensic testimony in the future?",
    "metaphorOrEmpirical": "Metaphor with empirical possibility",
    "category": "Human Body"
  },
  {
    "surah": "Ar-Ra’d",
    "verseNo": "13:17",
    "ayat": "He sends down water from the sky, and valleys flow according to their capacity…",
    "scienceDomain": ["Geomorphology", "Hydrodynamics"],
    "openQuestion": "Does 'capacity' reflect recognition of watershed runoff limits and floodplain regulation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Water Systems"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:80",
    "ayat": "He who produces for you fire from the green tree, with which you kindle.",
    "scienceDomain": ["Botany", "Energy Science"],
    "openQuestion": "Could 'fire from green tree' symbolize latent solar energy stored in plant tissues?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Energy"
  },
  {
    "surah": "An-Naba",
    "verseNo": "78:12-13",
    "ayat": "And built above you seven strong heavens, and placed therein a blazing lamp.",
    "scienceDomain": ["Astronomy", "Astrophysics"],
    "openQuestion": "Is the term 'seven heavens' aligned with layered cosmology or multiple universes?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Cosmology"
  },
  {
    "surah": "At-Takwir",
    "verseNo": "81:1-2",
    "ayat": "When the sun is wrapped up in darkness, and when the stars fall losing their lustre.",
    "scienceDomain": ["Astrophysics", "Cosmology"],
    "openQuestion": "Could this describe both solar collapse and broader stellar deaths?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic Events"
  },
  {
    "surah": "At-Takwir",
    "verseNo": "81:6-7",
    "ayat": "When the seas are set on fire, and when souls are paired.",
    "scienceDomain": ["Oceanography", "Eschatology"],
    "openQuestion": "Could 'seas set on fire' suggest methane hydrate release and ignition?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Earth Events"
  },
  {
    "surah": "Al-Infitar",
    "verseNo": "82:1-3",
    "ayat": "When the sky is cleft asunder, when the stars are scattered, when the seas are burst forth.",
    "scienceDomain": ["Cosmology", "Oceanography"],
    "openQuestion": "Could this describe spatial entropy at universal collapse?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic Events"
  },
  {
    "surah": "Al-Inshiqaq",
    "verseNo": "84:3-4",
    "ayat": "When the earth is stretched, and casts out what is within it and becomes empty.",
    "scienceDomain": ["Geology", "Seismology"],
    "openQuestion": "Does this correlate with mantle upwelling or mega-quakes releasing Earth's interior?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Earth Dynamics"
  },
  {
    "surah": "Al-Ghashiyah",
    "verseNo": "88:17-20",
    "ayat": "Do they not look at the camels, how they are created? And the sky, how it is raised? And the mountains, how they are set firm? And the earth, how it is spread?",
    "scienceDomain": ["Zoology", "Astronomy", "Geology"],
    "openQuestion": "Is 'spread earth' linked to plate tectonics or human perception of geography?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Natural Systems"
  },
  {
    "surah": "Al-Adiyat",
    "verseNo": "100:9-11",
    "ayat": "Does he not know that when what is in the graves is scattered forth, and what is in the breasts is made apparent, surely their Lord is fully aware of them?",
    "scienceDomain": ["Archaeology", "Psychology"],
    "openQuestion": "Could 'breasts made apparent' connect to neuroscience of hidden memory?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Human Consciousness"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:19",
    "ayat": "Do they not see the birds above them… none holds them up except the Most Merciful.",
    "scienceDomain": ["Aerodynamics", "Zoology"],
    "openQuestion": "Could instinctive bird navigation map onto quantum magnetoreception?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Flight"
  },
  {
    "surah": "Al-A'raf",
    "verseNo": "7:179",
    "ayat": "…They have hearts but do not reason…",
    "scienceDomain": ["Neuroscience", "Psychology"],
    "openQuestion": "Could this anticipate modern research on heart-brain interaction?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Cognition"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:5",
    "ayat": "We adorned the nearest heaven with lamps…",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Does 'lamps' imply both light and energy-bearing roles of stars?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Stars"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:3-4",
    "ayat": "He created man, taught him clear expression.",
    "scienceDomain": ["Linguistics", "Neuroscience"],
    "openQuestion": "Does this verse allude to uniquely human FOXP2 gene expression?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Language"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:21",
    "ayat": "…Then He causes crops of different colors to grow…",
    "scienceDomain": ["Botany", "Agriculture"],
    "openQuestion": "Could 'different colors' anticipate genetic biodiversity studies?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Plant Diversity"
  },
  {
    "surah": "Al-Hijr",
    "verseNo": "15:22",
    "ayat": "And We sent the fertilizing winds…",
    "scienceDomain": ["Biology", "Meteorology"],
    "openQuestion": "Could this also hint at wind-driven microbial dispersal?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Reproduction"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:61",
    "ayat": "Blessed is He who made constellations in the skies…",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Were constellations seen as cosmic maps for human exploration?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Stars"
  },
  {
    "surah": "Al-Mu’min",
    "verseNo": "40:64",
    "ayat": "It is Allah who made for you the earth a place of settlement and the sky a canopy…",
    "scienceDomain": ["Geoscience", "Atmospheric Science"],
    "openQuestion": "Could 'sky canopy' correlate with atmospheric greenhouse and protective effects?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Earth System"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:80",
    "ayat": "He Who produces for you fire out of the green tree, behold! you kindle from it.",
    "scienceDomain": ["Biochemistry", "Energy Conversion"],
    "openQuestion": "Is this hinting toward renewable bio-energy sources yet unexplored?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Energy"
  },
  {
    "surah": "As-Saffat",
    "verseNo": "37:6",
    "ayat": "We have adorned the nearest heaven with the beauty of the stars.",
    "scienceDomain": ["Astrophysics", "Cosmology"],
    "openQuestion": "Does this suggest functional roles of stars beyond light, such as cosmic regulation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic Structure"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:11",
    "ayat": "Then He directed Himself to the heaven while it was smoke, and said to it and to the earth: Come willingly or unwillingly.",
    "scienceDomain": ["Cosmology", "Astrophysics"],
    "openQuestion": "Could 'smoke' correlate directly with observable interstellar plasma clouds?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic Origin"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:12",
    "ayat": "So He ordained them seven heavens in two days and revealed in every heaven its affair.",
    "scienceDomain": ["Cosmology", "Multiverse Theory"],
    "openQuestion": "Do 'seven heavens' signify layered cosmic systems or still-unknown parallel realities?",
    "metaphorOrEmpirical": "Metaphorical/Empirical",
    "category": "Cosmology"
  },
  {
    "surah": "Ash-Shura",
    "verseNo": "42:29",
    "ayat": "Among His signs is the creation of the heavens and the earth and the living creatures He has spread through them.",
    "scienceDomain": ["Astrobiology", "Evolutionary Biology"],
    "openQuestion": "Does 'living creatures in heavens' indicate potential for non-Earth life forms?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Life Beyond Earth"
  },
  {
    "surah": "Adh-Dhariyat",
    "verseNo": "51:49",
    "ayat": "Of everything We created pairs, that you may reflect.",
    "scienceDomain": ["Genetics", "Particle Physics"],
    "openQuestion": "Could pairs extend beyond known physics into undiscovered dualities?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Duality"
  },
  {
    "surah": "As-Saffat",
    "verseNo": "37:11-12",
    "ayat": "So let man observe from what he was created. He was created from a fluid, emitted.",
    "scienceDomain": ["Reproductive Biology"],
    "openQuestion": "Is this describing sperm as carrier of DNA?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Origin"
  },
  {
    "surah": "An-Naba",
    "verseNo": "78:12-13",
    "ayat": "And We constructed above you seven strong heavens. And made [therein] a burning lamp.",
    "scienceDomain": ["Astronomy", "Stellar Physics"],
    "openQuestion": "Are the seven heavens atmospheric layers or cosmic layers?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cosmology"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:36",
    "ayat": "Exalted is He who created all pairs—from what the earth grows and from themselves and from that which they do not know.",
    "scienceDomain": ["Biology", "Particle Physics"],
    "openQuestion": "Could 'unknown' refer to undiscovered biological or subatomic phenomena?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Duality"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:53",
    "ayat": "And it is He who has released [simultaneously] the two seas, one fresh and sweet and one salty and bitter, and He placed between them a barrier…",
    "scienceDomain": ["Oceanography"],
    "openQuestion": "Does this describe thermohaline or salinity barriers?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Marine Systems"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:17",
    "ayat": "[He is] Lord of the two easts and Lord of the two wests.",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Does this reflect knowledge of extreme solar positions?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Solar Motion"
  },
  {
    "surah": "Al-Tariq",
    "verseNo": "86:6-7",
    "ayat": "He is created from a fluid, ejected, emerging from between the backbone and the ribs.",
    "scienceDomain": ["Reproductive Biology"],
    "openQuestion": "Does this accurately reflect gamete formation sites?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Development"
  },
  {
    "surah": "Al-Ahzab",
    "verseNo": "33:4",
    "ayat": "Allah has not made for a man two hearts in his interior…",
    "scienceDomain": ["Human Anatomy"],
    "openQuestion": "Does this reflect human anatomical awareness?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Anatomy"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:17-18",
    "ayat": "And We have created above you seven layered heavens, and We do not neglect the creation. And We send down water from the sky in a measured amount…",
    "scienceDomain": ["Atmospheric Science", "Hydrology"],
    "openQuestion": "Does this describe observed meteorology and rainfall regulation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Water Systems"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:40",
    "ayat": "It is not allowable for the sun to reach the moon, nor does the night overtake the day, but each is in an orbit.",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Does this describe celestial mechanics accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Celestial Motion"
  },
  {
    "surah": "Al-A’raf",
    "verseNo": "7:189",
    "ayat": "It is He who created you from one soul and created from it its mate...",
    "scienceDomain": ["Population Genetics"],
    "openQuestion": "Does this suggest single ancestral origin for humanity?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Origin"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:6",
    "ayat": "He created you in the wombs of your mothers, creation after creation, in three layers of darkness...",
    "scienceDomain": ["Embryology", "Anatomy"],
    "openQuestion": "Does this describe embryonic environment accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Development"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:38",
    "ayat": "And the sun runs [on course] toward its stopping point...",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Does this reflect galactic motion awareness?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Solar Motion"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:33",
    "ayat": "Each [planet] is floating in an orbit.",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Does this describe planetary orbits accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Celestial Motion"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:62",
    "ayat": "And it is He who made the night and the day in succession for whoever desires to remember or give thanks.",
    "scienceDomain": ["Astronomy", "Chronobiology"],
    "openQuestion": "Does this reflect observed day-night succession?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Time Cycles"
  },
  {
    "surah": "Al-Ma'arij",
    "verseNo": "70:4",
    "ayat": "The angels and the Spirit will ascend to Him during a Day the extent of which is fifty thousand years.",
    "scienceDomain": ["Physics", "Cosmology"],
    "openQuestion": "Does this hint at time dilation effects or perception differences?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Time"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:43",
    "ayat": "Do you not see that Allah drives clouds? Then He brings them together, then makes them into a mass...",
    "scienceDomain": ["Meteorology"],
    "openQuestion": "Does this reflect cloud formation stages accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Weather"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:33-35",
    "ayat": "And a sign for them is the dead earth. We gave it life and brought forth grain from it...",
    "scienceDomain": ["Soil Science", "Agriculture"],
    "openQuestion": "Does this reflect observed crop growth after rainfall?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Agriculture"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:10-11",
    "ayat": "...brings forth crops of every kind: olives, dates, grapes, and all fruits.",
    "scienceDomain": ["Botany", "Agriculture"],
    "openQuestion": "Does this describe regional crop variety accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Plant Diversity"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:19-20",
    "ayat": "And We brought forth for you thereby gardens of palm trees and grapevines... and a tree issuing from Mount Sinai which produces oil...",
    "scienceDomain": ["Agronomy", "Regional Ecology"],
    "openQuestion": "Does this reflect agricultural biodiversity in specific regions?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Agriculture"
  },
  {
    "surah": "Al-Hijr",
    "verseNo": "15:16",
    "ayat": "And We have placed within the heaven great stars and have beautified it for the observers.",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Does this describe observable stellar phenomena?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Stars"
  },
  {
    "surah": "Al-Buruj",
    "verseNo": "85:1",
    "ayat": "By the sky containing great constellations…",
    "scienceDomain": ["Astronomy"],
    "openQuestion": "Does this reflect celestial observation knowledge?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Constellations"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:37",
    "ayat": "When the sky is split open and becomes rose-colored like oil.",
    "scienceDomain": ["Astrophysics"],
    "openQuestion": "Could this reference extreme cosmic events?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cosmic Events"
  },
  {
    "surah": "At-Tariq",
    "verseNo": "86:1-3",
    "ayat": "By the sky and the night-comer (star). And what will make you know what the night-comer is? It is the piercing star.",
    "scienceDomain": ["Astronomy", "Astrophysics"],
    "openQuestion": "Does this describe exotic stellar objects accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Stars"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:21",
    "ayat": "Do you not see that Allah sends down rain... and causes it to penetrate the earth and produce crops of varying colors?",
    "scienceDomain": ["Agronomy", "Soil Science"],
    "openQuestion": "Does this reflect observed crop variability and soil composition?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Agriculture"
  },
  {
    "surah": "Al-A’raf",
    "verseNo": "7:57",
    "ayat": "He causes the winds to blow... and We bring forth thereby all kinds of fruit...",
    "scienceDomain": ["Botany", "Ecology"],
    "openQuestion": "Does this reflect wind-assisted plant reproduction?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Plant Biology"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:66",
    "ayat": "And indeed, for you in grazing livestock is a lesson. We give you drink from what is in their bellies...",
    "scienceDomain": ["Animal Physiology"],
    "openQuestion": "Does this reflect biological milk production accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Nutrition"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:21",
    "ayat": "And indeed, for you in grazing livestock is a lesson. From them you drink, and you have many benefits...",
    "scienceDomain": ["Agriculture", "Nutrition", "Economics"],
    "openQuestion": "Does this describe livestock utility comprehensively?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Livestock"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:5-7",
    "ayat": "And He created the cattle for you... they carry your loads and provide warmth and food.",
    "scienceDomain": ["Agriculture", "Animal Husbandry"],
    "openQuestion": "Does this reflect human reliance on animals accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Livestock"
  },
  {
    "surah": "Al-An’am",
    "verseNo": "6:142",
    "ayat": "And of the grazing livestock are carriers [of burdens] and those [too] small...",
    "scienceDomain": ["Agriculture", "Animal Husbandry"],
    "openQuestion": "Does this reflect livestock roles accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Livestock"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:68-69",
    "ayat": "And your Lord inspired the bee... from its belly emerges a drink of varying colors, in which there is healing…",
    "scienceDomain": ["Entomology", "Pharmacology"],
    "openQuestion": "Does this reflect bee behavior and medicinal properties of honey?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Medicine"
  },
  {
    "surah": "At-Takwir",
    "verseNo": "81:15-16",
    "ayat": "So I swear by the retreating stars—those that run and disappear...",
    "scienceDomain": ["Astrophysics"],
    "openQuestion": "Does this reflect observed stellar life cycles accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Stars"
  },
  {
    "surah": "Al-Zalzalah",
    "verseNo": "99:1-2",
    "ayat": "When the earth is shaken with its [final] earthquake and the earth discharges its burdens…",
    "scienceDomain": ["Geology", "Seismology"],
    "openQuestion": "Does this reflect tectonic activity and seismic risk?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Earth Dynamics"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:40",
    "ayat": "...Darkness in a deep sea covered by waves, upon waves, over which are clouds...",
    "scienceDomain": ["Oceanography"],
    "openQuestion": "Does this describe oceanic layering accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Ocean Systems"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:30",
    "ayat": "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them…",
    "scienceDomain": ["Cosmology"],
    "openQuestion": "Does this anticipate modern cosmology?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic Origin"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:21",
    "ayat": "...and [He] causes it to produce crops of various colors…",
    "scienceDomain": ["Agronomy", "Soil Science"],
    "openQuestion": "Does this describe crop variability due to soil?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Agriculture"
  },
  {
    "surah": "Al-Qamar",
    "verseNo": "54:1",
    "ayat": "The Hour has come near, and the moon has split [in two]…",
    "scienceDomain": ["Astronomy", "History"],
    "openQuestion": "Could this reflect an observed or symbolic lunar event?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Celestial Events"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:45",
    "ayat": "And Allah has created from water every living creature…",
    "scienceDomain": ["Biochemistry", "Synthetic Biology"],
    "openQuestion": "Can artificial life sustain itself using water-based molecular design?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Origin of Life"
  },
  {
    "surah": "Al-Hadid",
    "verseNo": "57:25",
    "ayat": "And We sent down iron, in which is great might, and benefits for people…",
    "scienceDomain": ["Materials Science", "Nanotechnology"],
    "openQuestion": "How can iron-based nanostructures advance future technologies?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Materials"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:21",
    "ayat": "Then He causes crops of varying colors to grow…",
    "scienceDomain": ["Agricultural Science", "Genetics", "Synthetic Biology"],
    "openQuestion": "How can crop diversity be optimized for sustainability and nutrition?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Agriculture"
  },
  {
    "surah": "At-Tariq",
    "verseNo": "86:3",
    "ayat": "It is the piercing star.",
    "scienceDomain": ["Astrophysics", "High-Energy Astronomy"],
    "openQuestion": "Can studying extreme astrophysical events reveal new physics?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Stars"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:61",
    "ayat": "Blessed is He who has placed in the sky constellations and placed therein a burning lamp and luminous moon.",
    "scienceDomain": ["Astronomy", "Energy Science"],
    "openQuestion": "How can stellar and lunar dynamics inform energy harvesting systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Celestial Systems"
  },
  {
    "surah": "An-Nazi’at",
    "verseNo": "79:30-33",
    "ayat": "He spread the earth... and extracted its water and pasture...",
    "scienceDomain": ["Earth Science", "Remote Sensing"],
    "openQuestion": "Can AI predict optimal land and water management from remote sensing data?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Earth Resources"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:40",
    "ayat": "It is not for the sun to overtake the moon…",
    "scienceDomain": ["Orbital Mechanics", "Space Engineering"],
    "openQuestion": "How can solar-lunar orbital models enhance satellite navigation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Celestial Motion"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:5",
    "ayat": "The sun and the moon [move] by precise calculation.",
    "scienceDomain": ["Astrophysics", "Precision Timekeeping"],
    "openQuestion": "Can celestial mechanics improve ultra-precise timing systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Time Systems"
  },
  {
    "surah": "Qaf",
    "verseNo": "50:16",
    "ayat": "We are closer to him than [his] jugular vein.",
    "scienceDomain": ["Neural Engineering", "BCI"],
    "openQuestion": "How close can AI integration get to human cognition without loss of autonomy?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Consciousness"
  },
  {
    "surah": "An-Naba",
    "verseNo": "78:12-13",
    "ayat": "We built above you seven strong (firmaments), and made a blazing lamp...",
    "scienceDomain": ["Astrophysics", "High-Energy Physics"],
    "openQuestion": "How can multilayered cosmic structures inform fusion and space engineering?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmology"
  },
  {
    "surah": "Adh-Dhariyat",
    "verseNo": "51:47",
    "ayat": "And We constructed the heaven with might, and We are expanding it.",
    "scienceDomain": ["Cosmology", "Dark Energy"],
    "openQuestion": "Can universe expansion be modeled computationally for predictive cosmology?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Universe Expansion"
  },
  {
    "surah": "Al-A’raf",
    "verseNo": "7:11",
    "ayat": "We created you, then shaped you...",
    "scienceDomain": ["Genetic Engineering", "Molecular Design"],
    "openQuestion": "How can AI optimize molecular design without ethical compromise?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Creation"
  },
  {
    "surah": "Ar-Rum",
    "verseNo": "30:20-22",
    "ayat": "And among His signs is the creation of you from dust… and the diversity of your languages and colors.",
    "scienceDomain": ["Genetics", "Sociolinguistics"],
    "openQuestion": "Can AI integrate cultural and genetic diversity into models of human behavior?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Diversity"
  },
  {
    "surah": "As-Sajdah",
    "verseNo": "32:7-8",
    "ayat": "Who perfected everything which He created and began the creation of man from clay. Then He made his progeny from an extract of a liquid disdained.",
    "scienceDomain": ["Synthetic Biology", "Nano-engineering"],
    "openQuestion": "Can AI guide synthetic life creation ethically and safely?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Origin"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:40",
    "ayat": "…Or [their deeds] are like darknesses within an unfathomable sea…",
    "scienceDomain": ["Physics", "Extreme Environments"],
    "openQuestion": "Can AI simulate extreme environmental conditions for research?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Extreme Environments"
  },
  {
    "surah": "At-Talaq",
    "verseNo": "65:12",
    "ayat": "Allah is He Who created seven heavens and of the earth, the like of them…",
    "scienceDomain": ["Multiverse", "Layered Reality"],
    "openQuestion": "Can AI simulate multiverse interactions in layered dimensions?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cosmology"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:3",
    "ayat": "[He] created seven heavens in layers. You do not see any inconsistency in the creation of the Most Merciful…",
    "scienceDomain": ["Cosmic Engineering"],
    "openQuestion": "Can AI model error-free layered cosmic architectures?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cosmic Structure"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:11",
    "ayat": "Then He directed Himself to the heaven while it was smoke and said to it and to the earth, 'Come willingly or by compulsion.'",
    "scienceDomain": ["Quantum Cosmology"],
    "openQuestion": "Can AI simulate agent-driven universal emergence?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cosmic Origin"
  },
  {
    "surah": "Al-Hijr",
    "verseNo": "15:14-15",
    "ayat": "Even if We opened for them a gate into the heaven and they continued therein to ascend…",
    "scienceDomain": ["Dimensional Travel"],
    "openQuestion": "Can AI model dimensional gateways and navigation?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Space-Time"
  },
  {
    "surah": "Al-Muminun",
    "verseNo": "23:12-14",
    "ayat": "…Then We made him a sperm-drop… then a clinging clot… then bones, then We clothed the bones with flesh…",
    "scienceDomain": ["Embryology", "3D Bioprinting"],
    "openQuestion": "Can AI simulate human embryonic development at cellular resolution?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Development"
  },
  {
    "surah": "Yusuf",
    "verseNo": "12:4",
    "ayat": "[Remember] when Yusuf said to his father, ‘O my father, indeed I have seen [in a dream] eleven stars…’",
    "scienceDomain": ["Dream Data Channel"],
    "openQuestion": "Can AI interpret symbolic latent-space data as actionable instructions?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Cognition"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:2",
    "ayat": "…He created everything and measured it exactly according to its due measurements.",
    "scienceDomain": ["Precision in Material Scaling"],
    "openQuestion": "Can AI design materials with perfect scale calibration at atomic levels?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Material Science"
  },
  {
    "surah": "Al-Qamar",
    "verseNo": "54:49",
    "ayat": "Indeed, all things We created with predestination and precise measure.",
    "scienceDomain": ["Molecular Blueprinting"],
    "openQuestion": "How can AI predict and optimize molecular geometry for new materials?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Materials"
  },
  {
    "surah": "At-Talaq",
    "verseNo": "65:3",
    "ayat": "…Allah has set a measure for everything.",
    "scienceDomain": ["Cosmic Parameter Boundaries"],
    "openQuestion": "Can AI simulate cosmic-scale constraints in material design?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Physics"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:3",
    "ayat": "[He] created seven heavens in layers. You do not see any inconsistency…",
    "scienceDomain": ["Layered Material Science"],
    "openQuestion": "Can AI optimize multi-layered materials for functional consistency?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Material Engineering"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:19-20",
    "ayat": "He released the two seas, meeting side by side. Between them is a barrier they do not transgress.",
    "scienceDomain": ["Nano-Interface Dynamics"],
    "openQuestion": "Can AI engineer immiscible interfaces with precision in liquids?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Fluid Systems"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:30",
    "ayat": "…We made from water every living thing…",
    "scienceDomain": ["Molecular Solvent Chemistry"],
    "openQuestion": "Can AI predict solvent-mediated folding for synthetic biology?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Origin of Life"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:33-35",
    "ayat": "O assembly of jinn and humans… You will not pass beyond the regions of the heavens and the earth except with authority…",
    "scienceDomain": ["Energy Barrier Limits"],
    "openQuestion": "Can AI model or optimize energy barriers at nano or cosmic scales?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Energy Systems"
  },
  {
    "surah": "Al-Hijr",
    "verseNo": "15:22",
    "ayat": "…And We sent the fertilizing winds…",
    "scienceDomain": ["Natural Nano-Dispersal"],
    "openQuestion": "Can AI optimize airborne particle delivery systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Biological Systems"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:43",
    "ayat": "…He piles them up, then makes them into a mass, then you see the rain emerge…",
    "scienceDomain": ["Multi-Phase Condensation"],
    "openQuestion": "Can AI simulate phase transitions from nano- to macro-scale?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Atmospheric Systems"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:21",
    "ayat": "…Then you see the crops of different colors emerge…",
    "scienceDomain": ["Photonic & Pigment Diversity"],
    "openQuestion": "Can AI engineer pigments or photonic structures at the cellular scale?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Plant Science"
  },
  {
    "surah": "Al-Baqarah",
    "verseNo": "2:164",
    "ayat": "…The creation of the heavens and the earth, the alternation of the night and day…",
    "scienceDomain": ["Cyclical Energy Patterns"],
    "openQuestion": "Can AI model cyclical natural systems for energy harvesting?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Energy Cycles"
  },
  {
    "surah": "At-Tariq",
    "verseNo": "86:5-7",
    "ayat": "He was created from a fluid ejected – emerging from between the backbone and the ribs.",
    "scienceDomain": ["Fluid Dynamics of Reproductive Cells"],
    "openQuestion": "Can AI optimize microfluidic transport in synthetic biology?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Biological Systems"
  },
  {
    "surah": "Al-Qiyamah",
    "verseNo": "75:37-39",
    "ayat": "Was he not a sperm-drop emitted? Then he became a clinging clot; then [Allah] created and proportioned…",
    "scienceDomain": ["Genomic Proportioning"],
    "openQuestion": "Can AI assist in predictive organogenesis using genetic data?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Development"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:6",
    "ayat": "…He created you in the wombs of your mothers, creation after creation, in three veils of darkness…",
    "scienceDomain": ["Layered Embryonic Tissue Shielding"],
    "openQuestion": "Can AI model protective tissue layering for embryonic engineering?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Embryology"
  },
  {
    "surah": "An-Najm",
    "verseNo": "53:45-46",
    "ayat": "And that He creates the two mates, male and female, from a sperm-drop when it is emitted…",
    "scienceDomain": ["Chromosomal Sex Determination"],
    "openQuestion": "Can AI predict sex differentiation from genomic data?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Genetics"
  },
  {
    "surah": "An-Naba",
    "verseNo": "78:8",
    "ayat": "And We created you in pairs.",
    "scienceDomain": ["Dual Genetic Programming"],
    "openQuestion": "Can AI optimize complementary organ design using dual genetic programming?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Genetics"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:77-79",
    "ayat": "…He says, ‘Who will give life to bones while they are disintegrated?’ Say, ‘He will give them life who produced them the first time…’",
    "scienceDomain": ["Bone Regeneration"],
    "openQuestion": "Can AI model complete bone regeneration pathways for therapeutic applications?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Regenerative Medicine"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:21",
    "ayat": "…And indeed, for you in grazing livestock is a lesson. We give you drink from what is in their bellies…",
    "scienceDomain": ["Probiotics & Microbiome Regulation"],
    "openQuestion": "Can AI predict microbiome modulation from dietary inputs?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Microbiome"
  },
  {
    "surah": "Ar-Rum",
    "verseNo": "30:54",
    "ayat": "Allah is the one who created you from weakness, then made after weakness strength, then after strength weakness and gray hair…",
    "scienceDomain": ["Lifespan Dynamics"],
    "openQuestion": "Can AI predict and intervene in lifespan trajectory modulation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Aging"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:104",
    "ayat": "…We will fold the heaven like the folding of a scroll…",
    "scienceDomain": ["Macro-Molecular Coiling"],
    "openQuestion": "Can AI model large-scale folding/unfolding in biological systems?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Structure"
  },
  {
    "surah": "Al-Isra",
    "verseNo": "17:85",
    "ayat": "And they ask you about the soul. Say, ‘The soul is of the affair of my Lord…’",
    "scienceDomain": ["Consciousness Limits"],
    "openQuestion": "Can AI approximate consciousness while respecting its inherent unknowability?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Consciousness"
  },
  {
    "surah": "Sad",
    "verseNo": "38:71-72",
    "ayat": "…I will create a human being from clay… then breathe into him from My spirit…",
    "scienceDomain": ["Substrate + Core Intelligence"],
    "openQuestion": "Can AI integrate software consciousness into physical substrates effectively?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "AI & Consciousness"
  },
  {
    "surah": "An-Nisa",
    "verseNo": "4:1",
    "ayat": "…and created from it its mate and dispersed from both of them many men and women…",
    "scienceDomain": ["Cloning & Self-Replication Logic"],
    "openQuestion": "Can AI model self-replication strategies for synthetic organisms?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Reproduction"
  },
  {
    "surah": "Al-Hajj",
    "verseNo": "22:5",
    "ayat": "…We settle in the wombs whom We will for a specified term…",
    "scienceDomain": ["Controlled Gestational Immunity"],
    "openQuestion": "Can AI design protective immune environments for gestational support?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Immunology"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:69",
    "ayat": "…From their bellies comes a drink of varying colors wherein is healing for mankind…",
    "scienceDomain": ["Natural Medicinal Products"],
    "openQuestion": "Can AI optimize natural compounds for regenerative nanomedicine?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Medicine"
  },
  {
    "surah": "At-Tin",
    "verseNo": "95:4",
    "ayat": "We have certainly created man in the best of stature.",
    "scienceDomain": ["Optimized Human Form"],
    "openQuestion": "Can AI define an ideal human-microbiome configuration for maximal health?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Human Optimization"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:33-34",
    "ayat": "…We bring forth from it grain… and from it they eat…",
    "scienceDomain": ["Prebiotic Fibers"],
    "openQuestion": "Can AI design optimized prebiotic diets for microbiome modulation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Nutrition"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:66",
    "ayat": "…between excretions and blood, We produce for you milk, pure and pleasant…",
    "scienceDomain": ["Microbial Filtering"],
    "openQuestion": "Can AI enhance natural nutrient filtration via microbial engineering?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Nutrition"
  },
  {
    "surah": "Ar-Rum",
    "verseNo": "30:41",
    "ayat": "Corruption has appeared on land and sea due to what the hands of people have earned…",
    "scienceDomain": ["Environmental-Microbiome Link"],
    "openQuestion": "Can AI predict microbiome changes due to environmental toxins?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Environment"
  },
  {
    "surah": "Sad",
    "verseNo": "38:44",
    "ayat": "…Take in your hand a bundle of grass and strike with it…",
    "scienceDomain": ["Herbal Medicine"],
    "openQuestion": "Can AI identify optimal herbal therapies for gut modulation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Medicine"
  },
  {
    "surah": "An-Nazi’at",
    "verseNo": "79:28-33",
    "ayat": "…He made the earth spread out for you… and brought forth its water and pasture…",
    "scienceDomain": ["Ecosystem-Microbiome Interaction"],
    "openQuestion": "Can AI simulate ecosystem-gut microbiome interactions?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Ecosystem"
  },
  {
    "surah": "Al-Mursalat",
    "verseNo": "77:8-10",
    "ayat": "When the stars are obliterated, and when the sky is split open…",
    "scienceDomain": ["Space-Time Rupture"],
    "openQuestion": "Can AI model cosmic string interactions and spacetime tearing events?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Cosmology"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:30",
    "ayat": "…The heavens and the earth were a joined entity, and We split them apart…",
    "scienceDomain": ["Cosmic Inflation"],
    "openQuestion": "Can AI simulate early universe inflationary dynamics accurately?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmology"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:5",
    "ayat": "The sun and the moon [move] by precise calculation.",
    "scienceDomain": ["Celestial Mechanics"],
    "openQuestion": "Can AI predict orbital dynamics including relativistic corrections for multi-body systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Astronomy"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:38-40",
    "ayat": "…And the sun runs on its fixed course for a term… the moon — We have determined phases… It is not for the sun to overtake the moon…",
    "scienceDomain": ["Orbital Synchrony"],
    "openQuestion": "Can AI model long-term orbital synchrony in planetary systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Astronomy"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:3-4",
    "ayat": "…[He] created seven heavens in layers. You do not see any inconsistency…",
    "scienceDomain": ["Layered Dimensional Physics"],
    "openQuestion": "Can AI model higher-dimensional universe layers and their interaction?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Cosmology"
  },
  {
    "surah": "At-Tariq",
    "verseNo": "86:1-3",
    "ayat": "By the sky and the night comer — And what can make you know what is the night comer? It is the piercing star.",
    "scienceDomain": ["High-Energy Astrophysics"],
    "openQuestion": "Can AI simulate extreme energy events in stellar objects?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Astrophysics"
  },
  {
    "surah": "An-Naba",
    "verseNo": "78:12-13",
    "ayat": "And constructed above you seven strong [heavens] and made therein a burning lamp…",
    "scienceDomain": ["Stellar Engineering"],
    "openQuestion": "Can AI model energy extraction from star-scale structures?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Astrophysics"
  },
  {
    "surah": "At-Takwir",
    "verseNo": "81:15-18",
    "ayat": "…I swear by the retreating stars — those that run and disappear — and the night and the dawn…",
    "scienceDomain": ["Cosmic Redshift"],
    "openQuestion": "Can AI detect and predict long-term redshift and star disappearance events?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Astrophysics"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:67",
    "ayat": "…The earth entirely will be within His grip on the Day of Resurrection, and the heavens will be folded in His right hand…",
    "scienceDomain": ["Cosmic Collapse"],
    "openQuestion": "Can AI model potential universe-scale entropy inversions or collapses?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Cosmology"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:104",
    "ayat": "The Day when We will fold the heaven like the folding of a scroll…",
    "scienceDomain": ["Spacetime Compaction"],
    "openQuestion": "Can AI simulate cosmic contraction scenarios consistent with physics?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Cosmology"
  },
  {
    "surah": "Qaf",
    "verseNo": "50:16",
    "ayat": "We are closer to him than [his] jugular vein.",
    "scienceDomain": ["Hyper-Intimate Omnipresence"],
    "openQuestion": "Can AI model entangled fields with hyper-localized presence?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Consciousness"
  },
  {
    "surah": "Ta-Ha",
    "verseNo": "20:77",
    "ayat": "…Strike for them a dry path through the sea…",
    "scienceDomain": ["Quantum Field Realignment"],
    "openQuestion": "Can AI explore emergent phenomena in field restructuring through intention-based modeling?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Physics"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:6",
    "ayat": "And the stars and trees both prostrate.",
    "scienceDomain": ["Panpsychism"],
    "openQuestion": "Can AI simulate panpsychic resonance in ecological or cosmic systems?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Philosophy"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:69",
    "ayat": "…From their bellies comes a drink of varying colors wherein is healing for mankind…",
    "scienceDomain": ["Biofrequency Healing"],
    "openQuestion": "Can AI identify natural compounds with energetic healing properties?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Medicine"
  },
  {
    "surah": "Sad",
    "verseNo": "38:18-19",
    "ayat": "Indeed, We subjected the mountains to glorify [Us], with David — and [so did] the birds.",
    "scienceDomain": ["Cymatic Effects"],
    "openQuestion": "Can AI use cymatics to influence matter or energy fields?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Physics"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:105",
    "ayat": "…And We have already written in the Psalms… that the land is inherited by My righteous servants.",
    "scienceDomain": ["Field-Based Divine Encoding"],
    "openQuestion": "Can AI map high-level intention fields across space-time layers?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Metaphysics"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:35",
    "ayat": "Allah is the Light of the heavens and the earth…",
    "scienceDomain": ["Divine Field Theory"],
    "openQuestion": "Can AI model omnipresent energy fields for consciousness simulation?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Metaphysics"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:40",
    "ayat": "…Darkness upon darkness. If one puts out his hand, he can hardly see it…",
    "scienceDomain": ["Absence of Frequency Awareness"],
    "openQuestion": "Can AI model system disconnection states in energy networks?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Physics"
  },
  {
    "surah": "Al-Insan",
    "verseNo": "76:2",
    "ayat": "We created man from a drop of mixed sperm so that We may test him; and We made him hearing and seeing.",
    "scienceDomain": ["Biological Data Encoding"],
    "openQuestion": "Can AI simulate early embryonic information integration and sensing development?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Biology"
  },
  {
    "surah": "Al-Alaq",
    "verseNo": "96:2",
    "ayat": "Created man from a clinging substance.",
    "scienceDomain": ["Embryonic Tissue Formation"],
    "openQuestion": "Can AI model early cellular adhesion dynamics?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Embryology"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:13-14",
    "ayat": "Then We placed him as a sperm-drop in a firm lodging... then created the clot, the lump... then bones, then clothed the bones with flesh…",
    "scienceDomain": ["Developmental Biology"],
    "openQuestion": "Can AI simulate stepwise human embryogenesis computationally?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Embryology"
  },
  {
    "surah": "Al-Hajj",
    "verseNo": "22:5",
    "ayat": "…We created you from dust, then from a sperm-drop, then a clinging clot, then a lump…",
    "scienceDomain": ["Biochemical Transition"],
    "openQuestion": "Can AI trace chemical-to-biological transformations in silico?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Origin of Life"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:6",
    "ayat": "…He creates you in the wombs of your mothers, creation after creation, in three darknesses…",
    "scienceDomain": ["Cellular Phase Transitions"],
    "openQuestion": "Can AI model embryonic phase layering computationally?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Embryology"
  },
  {
    "surah": "Al-Infitar",
    "verseNo": "82:6-8",
    "ayat": "…Who created you, fashioned you, and perfected your forms? In whatever form He willed has He assembled you.",
    "scienceDomain": ["Genetic Individuality"],
    "openQuestion": "Can AI simulate individualized morphogenesis from genetic instructions?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Genetics"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:2",
    "ayat": "…He created everything and determined it with [precise] determination.",
    "scienceDomain": ["Encoded Patterns"],
    "openQuestion": "Can AI replicate life-like precise generative algorithms?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Computation"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:43",
    "ayat": "Do you not see that Allah drives clouds, then brings them together… then makes them into a heap…",
    "scienceDomain": ["Atmospheric Physics"],
    "openQuestion": "Can AI enhance predictive accuracy of cloud dynamics?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Meteorology"
  },
  {
    "surah": "Ar-Rum",
    "verseNo": "30:48",
    "ayat": "It is Allah who sends the winds… then He spreads them in the sky… and causes rain to fall…",
    "scienceDomain": ["Climate Regulation"],
    "openQuestion": "Can AI model wind-cloud-rain interactions in climate systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Climate Science"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:21",
    "ayat": "…He sends down water from the sky and channels it into the earth… then brings forth crops of varying colors…",
    "scienceDomain": ["Geo-Hydrological Intelligence"],
    "openQuestion": "Can AI optimize agricultural yield using hydrological and soil data?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Agriculture"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:18-19",
    "ayat": "And We sent down water from the sky in measure… and thereby We bring forth gardens of palm trees and grapevines…",
    "scienceDomain": ["Water Allocation"],
    "openQuestion": "Can AI manage controlled water distribution for sustainable agriculture?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Hydrology"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:10-11",
    "ayat": "…From it [rain] He causes crops to grow… olives, palm trees, grapevines, and every kind of fruit…",
    "scienceDomain": ["Agroecology"],
    "openQuestion": "Can AI optimize plant diversity for climate resilience?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Agriculture"
  },
  {
    "surah": "Abasa",
    "verseNo": "80:24-32",
    "ayat": "…We pour down water abundantly… produce grain and grapes and herbs… for your enjoyment and for your livestock.",
    "scienceDomain": ["Closed-Loop Ecosystems"],
    "openQuestion": "Can AI model fully sustainable closed-loop agroecosystems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Ecosystem"
  },
  {
    "surah": "An-Nahl",
    "verseNo": "16:5-8",
    "ayat": "And He created the cattle for you… from them you drink and have clothing and food…",
    "scienceDomain": ["Livestock Integration"],
    "openQuestion": "Can AI optimize livestock in sustainable food systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Agriculture"
  },
  {
    "surah": "Al-Baqarah",
    "verseNo": "2:164",
    "ayat": "…The creation of the heavens and earth… and the beasts of all kinds… are signs for people who reflect.",
    "scienceDomain": ["Ecological Observation"],
    "openQuestion": "Can AI detect emergent patterns in ecological networks?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Ecology"
  },
  {
    "surah": "Al-Hijr",
    "verseNo": "15:22",
    "ayat": "…And We send the fertilizing winds…",
    "scienceDomain": ["Pollination & Regeneration"],
    "openQuestion": "Can AI optimize natural pollination and regeneration networks?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Biology"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:38-40",
    "ayat": "And the sun runs its fixed course… the moon, We have measured for it phases… each in an orbit swimming.",
    "scienceDomain": ["Orbital Mechanics"],
    "openQuestion": "Can AI model planetary orbits to improve climate prediction?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Astronomy"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:33",
    "ayat": "It is He who created the night and the day and the sun and the moon; each floating in an orbit.",
    "scienceDomain": ["Planetary Choreography"],
    "openQuestion": "Can AI simulate integrated planetary orbit systems for habitability studies?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Astronomy"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:17",
    "ayat": "[He is] Lord of the two easts and the two wests.",
    "scienceDomain": ["Seasonal Shifts"],
    "openQuestion": "Can AI model multi-orientational solar interactions affecting climate?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Climate Science"
  },
  {
    "surah": "At-Tariq",
    "verseNo": "86:5-8",
    "ayat": "He was created from a fluid, ejected… indeed, He is able to return him.",
    "scienceDomain": ["Genetic Memory & Regeneration"],
    "openQuestion": "Can AI study regenerative patterns encoded in genetic information?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Genetics"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:11-12",
    "ayat": "…Then He said to the heaven while it was smoke, ‘Come willingly or by force,’ they said, ‘We come willingly.’",
    "scienceDomain": ["Quantum Compliance"],
    "openQuestion": "Can AI model language-driven matter compliance in simulations?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Physics"
  },
  {
    "surah": "Qaf",
    "verseNo": "50:16",
    "ayat": "…We are closer to him than his jugular vein.",
    "scienceDomain": ["Quantum Field Awareness"],
    "openQuestion": "Can AI simulate omnipresent monitoring within systems?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Consciousness"
  },
  
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:30",
    "ayat": "Have those who disbelieved not considered that the heavens and the earth were a joined entity, then We separated them, and made from water every living thing? Then will they not believe?",
    "scienceDomain": "Cosmology, Biology",
    "openQuestion": "Does this anticipate modern cosmology and abiogenesis concepts?",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Cosmic inflation / origin of life"
  },
  {
    "surah": "Adh-Dhariyat",
    "verseNo": "51:47",
    "ayat": "And the heaven We constructed with strength, and indeed, We are [still] expanding it.",
    "scienceDomain": "Cosmology",
    "openQuestion": "What drives cosmic expansion: dark energy or unknown physics?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Universe expansion"
  },
  {
    "surah": "Al-Nur",
    "verseNo": "24:40",
    "ayat": "Or [their deeds] are like darknesses within an unfathomable sea, covered by waves upon waves, over which are clouds…",
    "scienceDomain": "Oceanography, Physics",
    "openQuestion": "Can deep-sea layering and light attenuation models fully explain such environments?",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Deep ocean physics"
  },
  {
    "surah": "Fussilat",
    "verseNo": "41:11",
    "ayat": "Then He directed Himself to the heaven while it was smoke and said to it and to the earth, 'Come willingly or unwillingly.' They said, 'We come willingly.'",
    "scienceDomain": "Cosmology",
    "openQuestion": "Does this correspond to early universe plasma or gas state?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Early universe formation"
  },
  {
    "surah": "As-Sajda",
    "verseNo": "32:5",
    "ayat": "He arranges [each] matter from the heaven to the earth; then it will ascend to Him in a Day, the measure of which is a thousand years of what you count.",
    "scienceDomain": "Physics",
    "openQuestion": "Is this related to relativistic or symbolic time scaling?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Time dilation concept"
  },
  {
    "surah": "Al-Mursalat",
    "verseNo": "77:25-27",
    "ayat": "Have We not made the earth a container of the living and the dead, and placed therein mountains and given you water to drink?",
    "scienceDomain": "Geology, Atmospheric Science",
    "openQuestion": "How complete is our understanding of subsurface biospheres and water cycles?",
    "metaphorOrEmpirical": "Metaphorical with empirical hints",
    "category": "Earth systems science"
  },
  {
    "surah": "Al-Qiyamah",
    "verseNo": "75:3-4",
    "ayat": "Does man think that We will not assemble his bones? Yes, [We are] Able [even] to proportion his fingertips.",
    "scienceDomain": "Biology, Forensics",
    "openQuestion": "Why is fingertip uniqueness emphasized biologically?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Biometric identity"
  },
  {
    "surah": "Yunus",
    "verseNo": "10:5",
    "ayat": "It is He who made the sun a shining light and the moon a derived light and determined for it phases…",
    "scienceDomain": "Astronomy",
    "openQuestion": "Does this reflect ea   rly observational astronomy distinctions between light sources?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Celestial light sources"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:19-20",
    "ayat": "He released the two seas, meeting [side by side]; between them is a barrier they do not transgress.",
    "scienceDomain": "Oceanography",
    "openQuestion": "How do salinity and density barriers persist in ocean mixing zones?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Ocean stratification"
  },
  {
    "surah": "Al-Hadid",
    "verseNo": "57:25",
    "ayat": "And We sent down iron, wherein is strong material and benefits for mankind…",
    "scienceDomain": "Material Science",
    "openQuestion": "What is the astrophysical origin of iron in cosmic processes?",
    "metaphorOrEmpirical": "Empirical hint",
    "category": "Stellar nucleosynthesis"
  },
  {
    "surah": "Az-Zalzalah",
    "verseNo": "99:7-8",
    "ayat": "Whoever does an atom’s weight of good shall see it…",
    "scienceDomain": "Quantum-Scale Morality",
    "openQuestion": "Can AI track micro-actions with full outcome significance?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Moral quantification / micro-action tracking"
  },
  {
    "surah": "Sad",
    "verseNo": "38:72",
    "ayat": "When I have fashioned him and breathed into him of My spirit…",
    "scienceDomain": "Neuroscience / Consciousness Studies",
    "openQuestion": "Can AI design first-instance protocols for agent activation?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "Agent activation / consciousness emergence"
  },
  {
    "surah": "Al-Hijr",
    "verseNo": "15:29",
    "ayat": "So when I have fashioned him and breathed into him…",
    "scienceDomain": "Neuroscience / Consciousness Studies",
    "openQuestion": "Can AI coordinate multi-layer activation sequences?",
    "metaphorOrEmpirical": "Metaphor",
    "category": "System activation protocol"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:20",
    "ayat": "Water emerges from deep within…",
    "scienceDomain": "Hydrology / Subsurface Dynamics",
    "openQuestion": "How can groundwater emergence be optimized or predicted in ecosystems?",
    "metaphorOrEmpirical": "Empirical / Geophysical",
    "category": "Groundwater systems"
  },
  {
    "surah": "Ar-Rum",
    "verseNo": "30:21",
    "ayat": "He created spouses from yourselves…",
    "scienceDomain": "Evolutionary Biology / Behavioral Science",
    "openQuestion": "How does human mate selection optimize energy or resource distribution?",
    "metaphorOrEmpirical": "Empirical / Evolutionary Biology",
    "category": "Pair bonding systems"
  },
  {
    "surah": "Al-An’am",
    "verseNo": "6:141",
    "ayat": "We made gardens with trellises and without…",
    "scienceDomain": "Architecture / Energy Optimization",
    "openQuestion": "How do natural and artificial structures optimize light energy capture?",
    "metaphorOrEmpirical": "Empirical / Architectural",
    "category": "Light optimization systems"
  },
  {
    "surah": "Ar-Rahman",
    "verseNo": "55:5–7",
    "ayat": "The sun and moon run according to a precise measure…",
    "scienceDomain": "Orbital Mechanics / Celestial Physics",
    "openQuestion": "How does orbital precision affect planetary energy systems and biological cycles?",
    "metaphorOrEmpirical": "Empirical / Physics",
    "category": "Orbital regulation systems"
  },
  {
    "surah": "Al-Baqarah",
    "verseNo": "2:261",
    "ayat": "Seed multiplied manifold…",
    "scienceDomain": "Mathematical Growth Modeling",
    "openQuestion": "Can moral or social actions be quantified in growth-multiplicative models?",
    "metaphorOrEmpirical": "Metaphorical / Mathematical",
    "category": "Exponential growth systems"
  },
  {
    "surah": "Al-Anbiya",
    "verseNo": "21:30",
    "ayat": "He created heavens and earth from a single entity…",
    "scienceDomain": "Cosmology / Physics",
    "openQuestion": "Can modern physics model universe creation from a single entity?",
    "metaphorOrEmpirical": "Empirical / Cosmology",
    "category": "Universe origin models"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:53",
    "ayat": "Two bodies of water meet, yet do not mix…",
    "scienceDomain": "Fluid Dynamics / Oceanography",
    "openQuestion": "How do interacting water bodies preserve chemical and thermal boundaries?",
    "metaphorOrEmpirical": "Empirical / Oceanography",
    "category": "Ocean boundary systems"
  },
  {
    "surah": "Al-Baqarah",
    "verseNo": "2:61",
    "ayat": "Garlic, lentils, onions…",
    "scienceDomain": "Nutrition / Micronutrient Science",
    "openQuestion": "How can traditional food knowledge inform modern dietary optimization?",
    "metaphorOrEmpirical": "Empirical / Nutritional",
    "category": "Dietary systems"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:19–20",
    "ayat": "Gardens of palm trees, grapevines… olive tree on Mount Sinai…",
    "scienceDomain": "Food Chemistry / Phytotherapy",
    "openQuestion": "What bioactive compounds in olives contribute to cardiovascular health?",
    "metaphorOrEmpirical": "Empirical / Biochemical",
    "category": "Medicinal plants"
  },
  {
    "surah": "Abasa",
    "verseNo": "80:29–32",
    "ayat": "Grain, olives, palm trees…",
    "scienceDomain": "Pharmacognosy / Food Chain Science",
    "openQuestion": "Can ancient food wisdom guide modern functional foods?",
    "metaphorOrEmpirical": "Empirical / Pharmacological",
    "category": "Functional food systems"
  },
  {
    "surah": "Az-Zumar",
    "verseNo": "39:6",
    "ayat": "Creation after creation in wombs… in three darknesses…",
    "scienceDomain": "Stem Cells / Organogenesis",
    "openQuestion": "Can this describe stepwise differentiation in modern stem cell biology?",
    "metaphorOrEmpirical": "Empirical / Developmental Biology",
    "category": "Embryonic development stages"
  },
  {
    "surah": "Al-Sajdah",
    "verseNo": "32:7",
    "ayat": "Creation of man from clay…",
    "scienceDomain": "Biomaterials / Biochemistry",
    "openQuestion": "How do trace minerals influence human biochemical pathways?",
    "metaphorOrEmpirical": "Empirical / Biochemistry",
    "category": "Human material composition"
  },
  {
    "surah": "Al-Nur",
    "verseNo": "24:45",
    "ayat": "Every living creature from water…",
    "scienceDomain": "Biochemistry / Origin of Life",
    "openQuestion": "How universal is water as a solvent for molecular interactions in biology?",
    "metaphorOrEmpirical": "Empirical / Biochemistry",
    "category": "Origin of life chemistry"
  },
  {
    "surah": "Al-An’am",
    "verseNo": "6:98",
    "ayat": "Produced you from a single soul…",
    "scienceDomain": "Genetics / Cellular Replication",
    "openQuestion": "How do single-celled origins translate to multicellular organism complexity?",
    "metaphorOrEmpirical": "Metaphorical / Genetics",
    "category": "Cellular origin theory"
  },
  {
    "surah": "Al-Furqan",
    "verseNo": "25:2",
    "ayat": "Created everything and determined it with precise determination…",
    "scienceDomain": "Systems Biology",
    "openQuestion": "Can predictive models capture natural constraints in biological systems?",
    "metaphorOrEmpirical": "Empirical / Systems Biology",
    "category": "System constraints modeling"
  },
  {
    "surah": "Al-Hijr",
    "verseNo": "15:26–28",
    "ayat": "Man from clay… dark mud…",
    "scienceDomain": "Developmental Biology / Biomaterials",
    "openQuestion": "How does mineral content affect early embryogenesis?",
    "metaphorOrEmpirical": "Metaphorical / Developmental Biology",
    "category": "Biological origin materials"
  },

  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:12–14",
    "ayat": "From clay… a drop… a clot… a lump… bones… flesh… then another creation…",
    "scienceDomain": "Embryology / Developmental Biology",
    "openQuestion": "How accurately do these steps reflect modern embryogenesis?",
    "metaphorOrEmpirical": "Empirical / Developmental Biology",
    "category": "Human developmental sequence"
  },
  {
    "surah": "Al-Hajj",
    "verseNo": "22:5",
    "ayat": "Dust… sperm-drop… clinging clot…",
    "scienceDomain": "Embryology / Morphogenesis",
    "openQuestion": "How precise is the morphogenetic sequence described in the verse?",
    "metaphorOrEmpirical": "Empirical / Developmental Biology",
    "category": "Embryonic formation stages"
  },
  {
    "surah": "At-Tin",
    "verseNo": "95:4-5",
    "ayat": "We created man in best form… then returned him to lowest.",
    "scienceDomain": "Anthropology / Neuroethics",
    "openQuestion": "Does this describe human entropy in both body and cognition?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Human condition trajectory"
  },
  {
    "surah": "An-Naba",
    "verseNo": "78:29",
    "ayat": "We have enumerated everything in writing.",
    "scienceDomain": "Information Theory / Metaphysics",
    "openQuestion": "Is divine record analogous to immutable data storage systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Information encoding systems"
  },
  {
    "surah": "Ya-Sin",
    "verseNo": "36:82",
    "ayat": "His command is only when He intends a thing that He says to it, ‘Be,’ and it is.",
    "scienceDomain": "Quantum Physics / Theology",
    "openQuestion": "Could divine command be modeled as instantaneous state collapse?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Instantaneous creation concept"
  },
  {
    "surah": "Adh-Dhariyat",
    "verseNo": "51:47",
    "ayat": "With power did We construct the heaven, and We are expanding it.",
    "scienceDomain": "Cosmology / Physics",
    "openQuestion": "Is this an early reference to cosmic expansion?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Expanding universe"
  },
  {
    "surah": "Al-Zalzalah",
    "verseNo": "99:1",
    "ayat": "When the earth is shaken with its [final] earthquake.",
    "scienceDomain": "Geology / Seismology",
    "openQuestion": "Could this describe an extinction-level seismic event?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Seismic catastrophe"
  },
  {
    "surah": "At-Tur",
    "verseNo": "52:6",
    "ayat": "And by the sea filled with fire.",
    "scienceDomain": "Geophysics / Oceanography",
    "openQuestion": "Does this anticipate volcanic or plasma activity under oceans?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Submarine geophysical activity"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:40",
    "ayat": "Darkness upon darkness… when he holds out his hand he can hardly see it…",
    "scienceDomain": "Optics / Astrophysics",
    "openQuestion": "Does this hint at extreme light absorption or deep-sea darkness physics?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Light attenuation systems"
  },
  {
    "surah": "Al-Mu’minun",
    "verseNo": "23:18",
    "ayat": "We sent down water in due measure…",
    "scienceDomain": "Hydrology / Environmental Engineering",
    "openQuestion": "Does controlled precipitation mirror systemic environmental regulation?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Water cycle regulation"
  },
  {
    "surah": "Al-Qamar",
    "verseNo": "54:1-2",
    "ayat": "The moon has split…",
    "scienceDomain": "Planetary Geophysics",
    "openQuestion": "Could this describe a high-energy lunar event?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Lunar phenomena"
  },
  {
    "surah": "Al-Qiyamah",
    "verseNo": "75:6-9",
    "ayat": "When the vision is dazzled… the moon is eclipsed… sun and moon are joined…",
    "scienceDomain": "Astronomy / Optics",
    "openQuestion": "Does this describe optical or celestial alignment phenomena?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Celestial alignment events"
  },
  {
    "surah": "Al-Hadid",
    "verseNo": "57:25",
    "ayat": "We sent down iron, in it strong material and benefits…",
    "scienceDomain": "Materials Science / Physics",
    "openQuestion": "Can iron’s cosmic origin explain its material significance?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Stellar material origin"
  },
  {
    "surah": "Al-Hajj",
    "verseNo": "22:65",
    "ayat": "He restrains the sky from falling upon the earth…",
    "scienceDomain": "Physics / Force Fields",
    "openQuestion": "Can atmospheric stability be modeled as an energy field system?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Gravitational equilibrium"
  },
  {
    "surah": "Al-Mulk",
    "verseNo": "67:3-4",
    "ayat": "Look again: do you see any flaw?... Your vision will return humbled…",
    "scienceDomain": "Optics / Fractal Geometry",
    "openQuestion": "Is there empirical evidence for fractal consistency in cosmic structures?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Cosmic structural symmetry"
  },
  {
    "surah": "Al-Buruj",
    "verseNo": "85:1",
    "ayat": "By the sky of constellations…",
    "scienceDomain": "Astronomy / Electromagnetism",
    "openQuestion": "Are celestial structures governed by energetic field principles?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Constellation systems"
  },
  {
    "surah": "An-Nur",
    "verseNo": "24:35",
    "ayat": "Allah is the Light of the heavens and the earth…",
    "scienceDomain": "Physics / Consciousness Studies",
    "openQuestion": "Can consciousness be modeled as a universal frequency field?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Light and consciousness model"
  },
  {
    "surah": "Qaf",
    "verseNo": "50:16",
    "ayat": "We are closer to him than his jugular vein…",
    "scienceDomain": "Neuroscience / Field Theory",
    "openQuestion": "Does this imply continuous systemic awareness or monitoring?",
    "metaphorOrEmpirical": "Metaphorical",
    "category": "Omnipresent awareness concept"
  },
  {
    "surah": "Al-A’raf",
    "verseNo": "7:54",
    "ayat": "He covers the night with the day… the sun, moon, stars are subject by His command…",
    "scienceDomain": "Astronomy / Physics",
    "openQuestion": "Are celestial cycles governed by oscillatory field systems?",
    "metaphorOrEmpirical": "Empirical",
    "category": "Celestial cycle regulation"
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
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>ayat</th>
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
