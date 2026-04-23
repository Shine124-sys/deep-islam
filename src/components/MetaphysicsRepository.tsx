'use client';

import React from 'react';

interface MetaphysicsEntry {
    verse_number: string;
    surah: string;
    text: string;
    metaphysical_concept: string;
    interpretation: string;
    category?: string;
}

const metaphysicsData: MetaphysicsEntry[] = [
  
    {
        "verse_number": "2:255",
        "surah": "Al-Baqarah",
        "text": "Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence...",
        "metaphysical_concept": "Existence and divine sustenance",
        "interpretation": "Emphasizes the eternal and necessary existence of God, the source of all being.",
        "category": "Metaphysics"
    },
    {
        "verse_number": "3:185",
        "surah": "Aal-e-Imran",
        "text": "Every soul will taste death, and you will only be given your [full] compensation on the Day of Resurrection...",
        "metaphysical_concept": "Life, death, and accountability",
        "interpretation": "Confirms inevitability of death, resurrection, and divine justice.",
        "category": "Metaphysics"
        
         
    },
    {
        "verse_number": "39:42",
        "surah": "Az-Zumar",
        "text": "Allah takes the souls at the time of their death, and those that do not die during their sleep...",
        "metaphysical_concept": "Soul and life after death",
        "interpretation": "Highlights the reality of the soul, its temporary separation during sleep, and final separation at death.",
        "category": "Metaphysics"
    },
    {
        "verse_number": "56:75-76",
        "surah": "Al-Waqi’ah",
        "text": "I swear by the setting of the stars, and indeed it is a great oath if you only knew.",
        "metaphysical_concept": "Causality and cosmic order",
        "interpretation": "Points to the precise order and causality in the universe, indicating a designed cosmos."
    },
    {
        "verse_number": "76:1-2",
        "surah": "Al-Insan",
        "text": "Has there [not] come upon man a period of time when he was not a thing [even] mentioned?",
        "metaphysical_concept": "Origin of existence and human creation",
        "interpretation": "Reflects on human origin, the transition from non-existence to existence, and divine will in creation."
    },
    {
        "verse_number": "67:2",
        "surah": "Al-Mulk",
        "text": "He who created death and life to test you which of you is best in deed...",
        "metaphysical_concept": "Life, death, and purpose",
        "interpretation": "Emphasizes the metaphysical purpose of life and death as a test for moral and spiritual excellence."
    },
    {
        "verse_number": "51:56",
        "surah": "Adh-Dhariyat",
        "text": "And I did not create the jinn and mankind except to worship Me.",
        "metaphysical_concept": "Purpose of existence",
        "interpretation": "Life’s ultimate metaphysical purpose is defined as divine worship."
    },
    {
        "verse_number": "76:30",
        "surah": "Al-Insan",
        "text": "And you do not will except that Allah wills – the Lord of the worlds.",
        "metaphysical_concept": "Free will and divine determinism",
        "interpretation": "Explains the interplay between human will and divine determinism, highlighting causality."
    },
    {
        "verse_number": "2:28",
        "surah": "Al-Baqarah",
        "text": "How can you disbelieve in Allah when you were dead and He gave you life?",
        "metaphysical_concept": "Existence and revival",
        "interpretation": "Reflects on the transition from non-existence to existence and resurrection."
    },
    {
        "verse_number": "3:191",
        "surah": "Aal-e-Imran",
        "text": "Those who remember Allah while standing, sitting, and lying on their sides and contemplate the creation of the heavens and the earth...",
        "metaphysical_concept": "Reflection on creation",
        "interpretation": "Encourages humans to perceive the cosmos as a sign of divine causality and existence."
    },
    {
        "verse_number": "10:61",
        "surah": "Yunus",
        "text": "And not absent from your Lord is any matter, whether small or great...",
        "metaphysical_concept": "Divine knowledge and causality",
        "interpretation": "God's omniscience encompasses all events, big or small."
    },
    {
        "verse_number": "21:30",
        "surah": "Al-Anbiya",
        "text": "Do not the disbelievers see that the heavens and the earth were a joined entity and We separated them...",
        "metaphysical_concept": "Cosmic creation",
        "interpretation": "Points to the origin of the universe, an early reference to causality and creation."
    },
    {
        "verse_number": "23:12-14",
        "surah": "Al-Mu’minun",
        "text": "We created man from an extract of clay, then We placed him as a drop in a safe place...",
        "metaphysical_concept": "Human origin",
        "interpretation": "Explains the metaphysical process of human creation from basic elements."
    },
    {
        "verse_number": "39:9",
        "surah": "Az-Zumar",
        "text": "Are those who know equal to those who do not know?",
        "metaphysical_concept": "Knowledge and spiritual awareness",
        "interpretation": "Highlights metaphysical importance of awareness and knowledge in understanding existence."
    },
    {
        "verse_number": "55:26-27",
        "surah": "Ar-Rahman",
        "text": "Everyone upon the earth will perish, and there will remain the Face of your Lord...",
        "metaphysical_concept": "Eternity and impermanence",
        "interpretation": "Contrasts temporary creation with eternal divine existence."
    },
    {
        "verse_number": "76:3",
        "surah": "Al-Insan",
        "text": "Indeed, We guided him to the way, be he grateful or ungrateful.",
        "metaphysical_concept": "Guidance and moral responsibility",
        "interpretation": "Free will in metaphysical context – humans are responsible for their choices."
    },
    {
        "verse_number": "35:1",
        "surah": "Fatir",
        "text": "All praise is due to Allah, Creator of the heavens and the earth...",
        "metaphysical_concept": "Divine creation and sovereignty",
        "interpretation": "Acknowledges God as the ultimate cause of existence."
    },
    {
        "verse_number": "6:59",
        "surah": "Al-An’am",
        "text": "And with Him are the keys of the unseen; none knows them except Him.",
        "metaphysical_concept": "Divine knowledge of the unseen",
        "interpretation": "God alone knows all hidden realities and causalities."
    },
    {
        "verse_number": "16:78",
        "surah": "An-Nahl",
        "text": "And Allah has brought you out from the wombs of your mothers while you knew nothing...",
        "metaphysical_concept": "Human origin and dependence",
        "interpretation": "Highlights human metaphysical dependency and the role of divine causality."
    },
    {
        "verse_number": "30:30",
        "surah": "Ar-Rum",
        "text": "So set your face toward the religion, upright, the fitrah of Allah upon which He has created mankind.",
        "metaphysical_concept": "Innate human nature",
        "interpretation": "Points to the metaphysical concept of human fitrah (natural disposition)."
    },
    {
        "verse_number": "51:49",
        "surah": "Adh-Dhariyat",
        "text": "And of everything We have created pairs, that you may remember.",
        "metaphysical_concept": "Cosmic order and duality",
        "interpretation": "Reflects metaphysical structure and harmony in creation."
    },
    {
        "verse_number": "57:3",
        "surah": "Al-Hadid",
        "text": "He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing.",
        "metaphysical_concept": "Eternity and divine knowledge",
        "interpretation": "Emphasizes God's timeless existence and all-encompassing awareness."
    },
    {
        "verse_number": "76:23",
        "surah": "Al-Insan",
        "text": "Indeed, We have sent down the Quran upon you in truth.",
        "metaphysical_concept": "Revelation and metaphysical truth",
        "interpretation": "Revealed guidance connects human existence to higher metaphysical reality."
    },
    {
        "verse_number": "40:68",
        "surah": "Ghafir",
        "text": "He is the One who gives life and causes death...",
        "metaphysical_concept": "Life and death",
        "interpretation": "God as the ultimate cause of life and death emphasizes metaphysical causality."
    },
    {
        "verse_number": "2:117",
        "surah": "Al-Baqarah",
        "text": "The Originator of the heavens and the earth...",
        "metaphysical_concept": "Creation ex nihilo",
        "interpretation": "God as the first cause and creator of all existence."
    },
    {
        "verse_number": "30:20",
        "surah": "Ar-Rum",
        "text": "And of His signs is that He created you from dust, then, suddenly you were human beings scattered.",
        "metaphysical_concept": "Human creation",
        "interpretation": "Highlights the metaphysical process from inanimate matter to conscious life."
    },
    {
        "verse_number": "23:115",
        "surah": "Al-Mu’minun",
        "text": "Did you think that We had created you in play (without purpose), and that you would not be returned to Us?",
        "metaphysical_concept": "Purpose and accountability",
        "interpretation": "Life has metaphysical purpose and leads to ultimate accountability."
    },
    {
        "verse_number": "2:286",
        "surah": "Al-Baqarah",
        "text": "Allah does not burden a soul beyond that it can bear...",
        "metaphysical_concept": "Divine justice and moral causality",
        "interpretation": "Highlights metaphysical balance and fairness in divine decree."
    },
    {
        "verse_number": "35:3",
        "surah": "Fatir",
        "text": "Do they not reflect upon themselves? Allah created the heavens and the earth and everything between them in truth and for an appointed term.",
        "metaphysical_concept": "Cosmic purpose and order",
        "interpretation": "Encourages reflection on divine design and the metaphysical order of the universe."
    },
    {
        "verse_number": "16:51",
        "surah": "An-Nahl",
        "text": "And Allah has said: Do not take besides Me any other deities...",
        "metaphysical_concept": "Monotheism and divine exclusivity",
        "interpretation": "Existence of God alone as ultimate reality; all else is dependent."
    },
    {
        "verse_number": "31:20",
        "surah": "Luqman",
        "text": "Do you not see that Allah has subjected to you whatever is in the heavens and the earth...",
        "metaphysical_concept": "Human observation and cosmic causality",
        "interpretation": "Encourages humans to perceive signs of God in the cosmos."
    },
    {
        "verse_number": "2:117",
        "surah": "Al-Baqarah",
        "text": "Originator of the heavens and the earth. When He decrees a matter, He only says to it, 'Be,' and it is.",
        "metaphysical_concept": "Divine command and creation",
        "interpretation": "Emphasizes the metaphysical principle of creation through divine will."
    },
    {
        "verse_number": "4:78",
        "surah": "An-Nisa",
        "text": "Wherever you may be, death will overtake you, even if you should be within towers of lofty construction.",
        "metaphysical_concept": "Inevitability of death",
        "interpretation": "Death is a metaphysical certainty that applies to all, regardless of worldly protections."
    },
    {
        "verse_number": "6:101",
        "surah": "Al-An'am",
        "text": "The Originator of the heavens and the earth...",
        "metaphysical_concept": "Creation ex nihilo",
        "interpretation": "God as the ultimate cause who brings existence from nothing."
    },
    {
        "verse_number": "7:54",
        "surah": "Al-A’raf",
        "text": "Indeed, your Lord is Allah, who created the heavens and the earth in six days...",
        "metaphysical_concept": "Cosmic creation and divine order",
        "interpretation": "Emphasizes planned creation, divine timing, and metaphysical causality."
    },
    {
        "verse_number": "10:31",
        "surah": "Yunus",
        "text": "Say, 'Who provides for you from the heavens and the earth?'",
        "metaphysical_concept": "Divine providence",
        "interpretation": "Existence and sustenance of life depend entirely on God."
    },
    {
        "verse_number": "11:7",
        "surah": "Hud",
        "text": "And it is He who created the heavens and the earth in six days...",
        "metaphysical_concept": "Divine creation and order",
        "interpretation": "Confirms structured creation with metaphysical purpose."
    },
    {
        "verse_number": "13:2",
        "surah": "Ar-Ra’d",
        "text": "Allah is He who raised the heavens without pillars that you see...",
        "metaphysical_concept": "Cosmic structure",
        "interpretation": "Metaphysical power of God in creating and sustaining the universe."
    },
    {
        "verse_number": "14:32",
        "surah": "Ibrahim",
        "text": "It is Allah who created the heavens and the earth and sent down rain...",
        "metaphysical_concept": "Causality in nature",
        "interpretation": "Natural processes exist due to divine will, showing metaphysical order."
    },
    {
        "verse_number": "16:3",
        "surah": "An-Nahl",
        "text": "He created the heavens and the earth in truth and formed you and perfected your forms.",
        "metaphysical_concept": "Purposeful creation",
        "interpretation": "Everything is created with intentional design and metaphysical reason."
    },
    {
        "verse_number": "18:109",
        "surah": "Al-Kahf",
        "text": "Say, 'If the sea were ink for the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted.'",
        "metaphysical_concept": "Divine knowledge",
        "interpretation": "The infinitude of God's knowledge contrasts with finite human understanding."
    },
    {
        "verse_number": "20:50",
        "surah": "Taha",
        "text": "Lord of the heavens and the earth and all that is between them...",
        "metaphysical_concept": "Sovereignty of God",
        "interpretation": "God's dominion encompasses all creation, affirming ultimate metaphysical authority."
    },
    {
        "verse_number": "21:22",
        "surah": "Al-Anbiya",
        "text": "And We did not create the heavens and the earth and everything between them except in truth.",
        "metaphysical_concept": "Purpose and truth in creation",
        "interpretation": "All existence is intentional and governed by divine truth."
    },
    {
        "verse_number": "23:86",
        "surah": "Al-Mu’minun",
        "text": "Say, 'Who is the Lord of the seven heavens and the Lord of the Great Throne?'",
        "metaphysical_concept": "Divine sovereignty",
        "interpretation": "God's authority transcends all levels of existence."
    },
    {
        "verse_number": "25:58",
        "surah": "Al-Furqan",
        "text": "And rely upon the Ever-Living who does not die...",
        "metaphysical_concept": "Eternality of God",
        "interpretation": "Metaphysical distinction between mortal creation and the eternal Creator."
    },
    {
        "verse_number": "30:40",
        "surah": "Ar-Rum",
        "text": "It is Allah who created you and provides for you...",
        "metaphysical_concept": "Existence and sustenance",
        "interpretation": "Human life depends entirely on divine provision."
    },
    {
        "verse_number": "31:16",
        "surah": "Luqman",
        "text": "Indeed, Allah enjoins justice and good conduct...",
        "metaphysical_concept": "Ethics and cosmic order",
        "interpretation": "Moral principles are grounded in metaphysical truths."
    },
    {
        "verse_number": "35:1",
        "surah": "Fatir",
        "text": "All praise is due to Allah, Creator of the heavens and the earth...",
        "metaphysical_concept": "Divine creation",
        "interpretation": "Acknowledges God as ultimate cause of all existence."
    },
    {
        "verse_number": "39:62",
        "surah": "Az-Zumar",
        "text": "Allah is the Creator of all things, and He is, over all things, Disposer of affairs.",
        "metaphysical_concept": "Causality and divine management",
        "interpretation": "God sustains and directs all creation."
    },
    {
        "verse_number": "40:57",
        "surah": "Ghafir",
        "text": "The creation of the heavens and the earth is greater than the creation of mankind...",
        "metaphysical_concept": "Comparative creation",
        "interpretation": "Emphasizes the vastness of cosmic creation, reflecting metaphysical scale."
    },
    {
        "verse_number": "42:11",
        "surah": "Ash-Shura",
        "text": "There is nothing like unto Him, and He is the Hearing, the Seeing.",
        "metaphysical_concept": "Divine uniqueness",
        "interpretation": "God’s nature is metaphysically incomparable."
    },
    {
        "verse_number": "51:47",
        "surah": "Adh-Dhariyat",
        "text": "And the heaven We constructed with strength, and indeed, We are [its] expander.",
        "metaphysical_concept": "Cosmic expansion",
        "interpretation": "Metaphysical insight into the dynamic nature of the universe."
    },
    {
        "verse_number": "57:4",
        "surah": "Al-Hadid",
        "text": "He is with you wherever you are...",
        "metaphysical_concept": "Divine omnipresence",
        "interpretation": "God's presence transcends spatial and temporal limits."
    },
    {
        "verse_number": "59:22",
        "surah": "Al-Hashr",
        "text": "He is Allah, other than whom there is no deity...",
        "metaphysical_concept": "Divine oneness",
        "interpretation": "Reinforces metaphysical monotheism."
    },
    {
        "verse_number": "67:1",
        "surah": "Al-Mulk",
        "text": "Blessed is He in whose hand is dominion, and He is over all things competent.",
        "metaphysical_concept": "Sovereignty and power",
        "interpretation": "God’s metaphysical authority extends over all existence."
    },
    {
        "verse_number": "76:2",
        "surah": "Al-Insan",
        "text": "Indeed, We created man from a sperm-drop mixture...",
        "metaphysical_concept": "Origin of human life",
        "interpretation": "Reflects on human creation from simplest elements, metaphysical dependency on God."
    },
    {
        "verse_number": "96:1-2",
        "surah": "Al-‘Alaq",
        "text": "Read in the name of your Lord who created...",
        "metaphysical_concept": "Creation and knowledge",
        "interpretation": "Highlights the link between human intellect and divine creation."
    },
    {
        "verse_number": "2:117",
        "surah": "Al-Baqarah",
        "text": "The Originator of the heavens and the earth. When He decrees a matter, He only says to it, 'Be,' and it is.",
        "metaphysical_concept": "Divine command",
        "interpretation": "God creates reality effortlessly through His will."
    },
    {
        "verse_number": "3:47",
        "surah": "Aal-e-Imran",
        "text": "She said, 'My Lord, how will I have a child when no man has touched me?' He said, 'Such is Allah; He creates what He wills.'",
        "metaphysical_concept": "Miraculous creation",
        "interpretation": "Divine power transcends natural causality."
    },
    {
        "verse_number": "5:17",
        "surah": "Al-Ma’idah",
        "text": "Indeed, they have disbelieved who say that Allah is Christ, the son of Mary...",
        "metaphysical_concept": "Divine uniqueness and oneness",
        "interpretation": "Affirms the metaphysical principle of monotheism."
    },
    {
        "verse_number": "2:25",
        "surah": "Al-Baqarah",
        "text": "And give good tidings to those who believe and do righteous deeds that they will have gardens beneath which rivers flow...",
        "metaphysical_concept": "Eternal reward",
        "interpretation": "Jannah is described as an eternal metaphysical reality promised to the righteous."
    },
    {
        "verse_number": "3:15",
        "surah": "Aal-e-Imran",
        "text": "Say, 'Shall I inform you of something better than that? For those who fear Allah will be gardens beneath which rivers flow, eternally abiding therein.'",
        "metaphysical_concept": "Superiority of Paradise",
        "interpretation": "Emphasizes the metaphysical perfection and eternal bliss of Paradise."
    },
    {
        "verse_number": "4:57",
        "surah": "An-Nisa",
        "text": "But those who believe and do righteous deeds – We will admit them to gardens beneath which rivers flow...",
        "metaphysical_concept": "Entrance to Paradise",
        "interpretation": "Metaphysical reward for belief and righteous action."
    },
    {
        "verse_number": "5:119",
        "surah": "Al-Ma’idah",
        "text": "Allah will say, 'This is the Day when the truthful will benefit from their truthfulness.' They will have gardens...",
        "metaphysical_concept": "Truthfulness and reward",
        "interpretation": "Jannah as metaphysical confirmation of moral truth."
    },
    {
        "verse_number": "7:43",
        "surah": "Al-A’raf",
        "text": "And We will remove whatever is in their breasts of resentment, rivers flowing beneath them, and they will be adorned...",
        "metaphysical_concept": "Purification and bliss",
        "interpretation": "Paradise is a metaphysical state of purity and eternal joy."
    },
    {
        "verse_number": "9:72",
        "surah": "At-Tawbah",
        "text": "Allah has promised the believers, men and women, gardens beneath which rivers flow...",
        "metaphysical_concept": "Gender-inclusive eternal reward",
        "interpretation": "Paradise encompasses all believers, metaphysically ensuring eternal bliss for both genders."
    },
    {
        "verse_number": "13:23",
        "surah": "Ar-Ra’d",
        "text": "Gardens of perpetual residence for the righteous; and they will be guided to therein by their forefathers, spouses, and offspring...",
        "metaphysical_concept": "Continuity of relationships",
        "interpretation": "Paradise preserves metaphysical bonds of love and companionship."
    },
    {
        "verse_number": "18:31",
        "surah": "Al-Kahf",
        "text": "For them will be gardens of eternity; beneath them rivers will flow; they will have purified spouses...",
        "metaphysical_concept": "Perpetual reward",
        "interpretation": "Jannah offers eternal metaphysical reward and companionship."
    },
    {
        "verse_number": "19:61",
        "surah": "Maryam",
        "text": "Gardens of perpetual bliss, which the Most Merciful has promised to His servants.",
        "metaphysical_concept": "Mercy and eternal joy",
        "interpretation": "Paradise is metaphysically linked to divine mercy and eternal satisfaction."
    },
    {
        "verse_number": "23:11",
        "surah": "Al-Mu’minun",
        "text": "And We will admit them to gardens beneath which rivers flow, wherein they will abide forever.",
        "metaphysical_concept": "Everlasting dwelling",
        "interpretation": "Paradise is a metaphysical abode of eternal existence."
    },
    {
        "verse_number": "25:15",
        "surah": "Al-Furqan",
        "text": "Say, 'Is that better or the garden of eternity which the righteous are promised?'",
        "metaphysical_concept": "Comparison with worldly life",
        "interpretation": "Paradise surpasses all worldly pleasures in metaphysical value."
    },
    {
        "verse_number": "30:15",
        "surah": "Ar-Rum",
        "text": "And those who believe and do righteous deeds – they will enter gardens...",
        "metaphysical_concept": "Reward for belief",
        "interpretation": "Metaphysical consequence of faith and virtuous actions."
    },
    {
        "verse_number": "35:33",
        "surah": "Fatir",
        "text": "Gardens of Eternity, adorned for the righteous, they will be served therein with vessels of gold and cups...",
        "metaphysical_concept": "Luxury and beauty",
        "interpretation": "Paradise embodies metaphysical perfection, beauty, and abundance."
    },
    {
        "verse_number": "36:56",
        "surah": "Ya-Sin",
        "text": "They will abide therein forever; they will not desire any change.",
        "metaphysical_concept": "Perpetual satisfaction",
        "interpretation": "Paradise provides an eternal metaphysical state of contentment."
    },
    {
        "verse_number": "38:50-51",
        "surah": "Sad",
        "text": "Among gardens and springs, adorned companions in a state of eternal bliss.",
        "metaphysical_concept": "Companionship and eternal pleasure",
        "interpretation": "Paradise ensures metaphysical fulfillment of desires."
    },
    {
        "verse_number": "43:71",
        "surah": "Az-Zukhruf",
        "text": "They will be served with vessels of gold and goblets, and therein is whatever the souls desire.",
        "metaphysical_concept": "Fulfillment of all desires",
        "interpretation": "Jannah offers metaphysical perfection, complete satisfaction of the soul."
    },
    {
        "verse_number": "47:15",
        "surah": "Muhammad",
        "text": "A description of Paradise: rivers of water, milk, wine, and honey, and fruits and shade...",
        "metaphysical_concept": "Sensory metaphysics",
        "interpretation": "Paradise is depicted as a metaphysical realm satisfying both spiritual and sensory dimensions."
    },
    {
        "verse_number": "52:17-18",
        "surah": "At-Tur",
        "text": "They will dwell amid thornless lote trees and banana trees, reclining on couches...",
        "metaphysical_concept": "Comfort and abundance",
        "interpretation": "Paradise ensures metaphysical ease, comfort, and continuous pleasure."
    },
    {
        "verse_number": "55:46-48",
        "surah": "Ar-Rahman",
        "text": "But for he who fears the position of his Lord are two gardens...",
        "metaphysical_concept": "Duality of reward",
        "interpretation": "Metaphysical promise for the righteous, contrasting with the fate of the disbelievers."
    },
    {
        "verse_number": "56:10-12",
        "surah": "Al-Waqi’ah",
        "text": "Those on the right – they will be among thornless lote trees and banana trees, reclining on adorned couches...",
        "metaphysical_concept": "Pleasure and bliss",
        "interpretation": "Describes Paradise as metaphysical reward of comfort and delight."
    },
    {
        "verse_number": "57:12",
        "surah": "Al-Hadid",
        "text": "On the Day you see the believing men and women, their light will proceed before them and on their right...",
        "metaphysical_concept": "Light as metaphysical reward",
        "interpretation": "Paradise includes metaphysical illumination representing guidance and favor."
    },
    {
        "verse_number": "58:11",
        "surah": "Al-Mujadila",
        "text": "Allah will raise those among you who believe and those given knowledge in degrees...",
        "metaphysical_concept": "Elevation in Paradise",
        "interpretation": "Metaphysical gradation of reward according to faith and knowledge."
    },
    {
        "verse_number": "76:11-12",
        "surah": "Al-Insan",
        "text": "But those who feared their Lord will be given a garden of delight...",
        "metaphysical_concept": "Fear and reward",
        "interpretation": "Metaphysical consequence of God-consciousness leads to Paradise."
    },
    {
        "verse_number": "78:31-33",
        "surah": "An-Naba",
        "text": "Indeed, for the righteous is attainment, gardens and grapevines, and full-breasted companions of equal age.",
        "metaphysical_concept": "Reward and eternal bliss",
        "interpretation": "Paradise is the metaphysical culmination of righteous conduct."
    },
    {
        "verse_number": "83:22-24",
        "surah": "Al-Mutaffifin",
        "text": "Indeed, the righteous will be in pleasure on adorned couches, observing, surrounded by fruit and whatever they desire.",
        "metaphysical_concept": "Ultimate pleasure",
        "interpretation": "Paradise embodies metaphysical total satisfaction."
    },
    {
        "verse_number": "88:8-16",
        "surah": "Al-Ghashiyah",
        "text": "Faces on that Day will be radiant, looking at their Lord, in gardens with fruits and shades.",
        "metaphysical_concept": "Joy and divine presence",
        "interpretation": "Paradise is metaphysically the presence of God and eternal delight."
    },
    {
        "verse_number": "89:29-30",
        "surah": "Al-Fajr",
        "text": "And as for he who feared the position of his Lord, He will ease him into Paradise.",
        "metaphysical_concept": "Ease and reward",
        "interpretation": "Metaphysical easing into eternal bliss for the God-fearing."
    },
    {
        "verse_number": "95:6-7",
        "surah": "At-Tin",
        "text": "Indeed, mankind is in loss, except those who believe and do righteous deeds, for them is Paradise.",
        "metaphysical_concept": "Salvation and eternal reward",
        "interpretation": "Paradise as metaphysical rescue from loss for believers."
    },
    {
        "verse_number": "2:214",
        "surah": "Al-Baqarah",
        "text": "Or do you think that you will enter Paradise while yet the state has not come to you of the ones who passed away before you?",
        "metaphysical_concept": "Trial before Paradise",
        "interpretation": "Paradise is a metaphysical reward that requires endurance and testing."
    },
    {
        "verse_number": "3:133-136",
        "surah": "Aal-e-Imran",
        "text": "And hasten to forgiveness from your Lord and a garden whose width is like the width of the heavens and the earth...",
        "metaphysical_concept": "Vastness of Paradise",
        "interpretation": "Paradise is metaphysically vast and limitless for those who purify themselves."
    },
    {
        "verse_number": "4:69",
        "surah": "An-Nisa",
        "text": "And whoever obeys Allah and the Messenger – those will be with the ones upon whom Allah has bestowed favor, of the prophets, the truthful...",
        "metaphysical_concept": "Proximity to the righteous",
        "interpretation": "Metaphysical closeness in Paradise to exalted individuals."
    },
    {
        "verse_number": "5:119",
        "surah": "Al-Ma’idah",
        "text": "This is the Day when the truthful will benefit from their truthfulness; they will have gardens...",
        "metaphysical_concept": "Truthfulness rewarded",
        "interpretation": "Metaphysical confirmation of integrity and moral alignment with God."
    },
    {
        "verse_number": "7:43",
        "surah": "Al-A’raf",
        "text": "And We will remove whatever is in their breasts of resentment, rivers flowing beneath them...",
        "metaphysical_concept": "Purification and bliss",
        "interpretation": "Paradise is a metaphysical state of purity, devoid of malice."
    },
    {
        "verse_number": "9:111",
        "surah": "At-Tawbah",
        "text": "Indeed, Allah has purchased from the believers their lives and their properties [in exchange] for Paradise...",
        "metaphysical_concept": "Divine bargain for Paradise",
        "interpretation": "Paradise as metaphysical reward in exchange for faith and sacrifice."
    },
    {
        "verse_number": "13:23-24",
        "surah": "Ar-Ra’d",
        "text": "Gardens of perpetual residence for the righteous; they will enter with their forefathers and spouses...",
        "metaphysical_concept": "Continuity of relationships",
        "interpretation": "Metaphysical preservation of loved ones and relationships in Paradise."
    },
    {
        "verse_number": "18:31",
        "surah": "Al-Kahf",
        "text": "For them will be gardens of eternity, beneath which rivers flow; they will be adorned therein...",
        "metaphysical_concept": "Eternal adornment",
        "interpretation": "Paradise provides metaphysical beauty and eternal reward."
    },
    {
        "verse_number": "19:61",
        "surah": "Maryam",
        "text": "Gardens of perpetual bliss, which the Most Merciful has promised to His servants.",
        "metaphysical_concept": "Mercy and eternal joy",
        "interpretation": "Paradise embodies divine mercy and metaphysical delight."
    },
    {
        "verse_number": "23:11",
        "surah": "Al-Mu’minun",
        "text": "And We will admit them to gardens beneath which rivers flow, wherein they will abide forever.",
        "metaphysical_concept": "Everlasting dwelling",
        "interpretation": "Paradise is metaphysically eternal and stable."
    },
    {
        "verse_number": "25:15",
        "surah": "Al-Furqan",
        "text": "Is that better or the garden of eternity which the righteous are promised?",
        "metaphysical_concept": "Comparison with worldly life",
        "interpretation": "Paradise transcends temporal existence in metaphysical value."
    },
    {
        "verse_number": "30:15",
        "surah": "Ar-Rum",
        "text": "Those who believe and do righteous deeds – they will enter gardens...",
        "metaphysical_concept": "Reward for belief",
        "interpretation": "Metaphysical reward for faith and virtuous action."
    },
    {
        "verse_number": "35:33",
        "surah": "Fatir",
        "text": "Gardens of Eternity, adorned for the righteous, served with vessels of gold...",
        "metaphysical_concept": "Luxury and beauty",
        "interpretation": "Paradise provides metaphysical perfection, beauty, and abundance."
    },
    {
        "verse_number": "36:56",
        "surah": "Ya-Sin",
        "text": "They will abide therein forever; they will not desire any change.",
        "metaphysical_concept": "Perpetual satisfaction",
        "interpretation": "Paradise provides eternal metaphysical contentment."
    },
    {
        "verse_number": "38:50-51",
        "surah": "Sad",
        "text": "Among gardens and springs, adorned companions in eternal bliss.",
        "metaphysical_concept": "Companionship and eternal pleasure",
        "interpretation": "Paradise ensures metaphysical fulfillment of social and personal desires."
    },
    {
        "verse_number": "43:71",
        "surah": "Az-Zukhruf",
        "text": "They will be served with vessels of gold and goblets, and therein is whatever the souls desire.",
        "metaphysical_concept": "Fulfillment of all desires",
        "interpretation": "Paradise satisfies all metaphysical and emotional needs."
    },
    {
        "verse_number": "47:15",
        "surah": "Muhammad",
        "text": "A description of Paradise: rivers of water, milk, wine, and honey, and fruits and shade...",
        "metaphysical_concept": "Sensory metaphysics",
        "interpretation": "Paradise combines spiritual and sensory metaphysical pleasures."
    },
    {
        "verse_number": "52:17-18",
        "surah": "At-Tur",
        "text": "They will dwell amid thornless lote trees and banana trees, reclining on couches...",
        "metaphysical_concept": "Comfort and abundance",
        "interpretation": "Paradise ensures metaphysical ease, comfort, and continuous pleasure."
    },
    {
        "verse_number": "55:46-48",
        "surah": "Ar-Rahman",
        "text": "But for he who fears the position of his Lord are two gardens...",
        "metaphysical_concept": "Duality of reward",
        "interpretation": "Metaphysical promise for the righteous, contrasting with the disbelievers’ fate."
    },
    {
        "verse_number": "56:10-12",
        "surah": "Al-Waqi’ah",
        "text": "Those on the right – they will be among thornless lote trees and banana trees...",
        "metaphysical_concept": "Pleasure and bliss",
        "interpretation": "Describes Paradise as metaphysical reward of comfort and delight."
    },
    {
        "verse_number": "57:12",
        "surah": "Al-Hadid",
        "text": "On the Day you see the believing men and women, their light will proceed before them and on their right...",
        "metaphysical_concept": "Light as metaphysical reward",
        "interpretation": "Paradise includes metaphysical illumination representing guidance and favor."
    },
    {
        "verse_number": "58:11",
        "surah": "Al-Mujadila",
        "text": "Allah will raise those among you who believe and those given knowledge in degrees...",
        "metaphysical_concept": "Elevation in Paradise",
        "interpretation": "Metaphysical gradation of reward according to faith and knowledge."
    },
    {
        "verse_number": "76:11-12",
        "surah": "Al-Insan",
        "text": "But those who feared their Lord will be given a garden of delight...",
        "metaphysical_concept": "Fear and reward",
        "interpretation": "Metaphysical consequence of God-consciousness leads to Paradise."
    },
    {
        "verse_number": "78:31-33",
        "surah": "An-Naba",
        "text": "Indeed, for the righteous is attainment, gardens and grapevines, and full-breasted companions of equal age.",
        "metaphysical_concept": "Reward and eternal bliss",
        "interpretation": "Paradise is the metaphysical culmination of righteous conduct."
    },
    {
        "verse_number": "83:22-24",
        "surah": "Al-Mutaffifin",
        "text": "Indeed, the righteous will be in pleasure on adorned couches, observing, surrounded by fruit...",
        "metaphysical_concept": "Ultimate pleasure",
        "interpretation": "Paradise embodies metaphysical total satisfaction."
    },
    {
        "verse_number": "88:8-16",
        "surah": "Al-Ghashiyah",
        "text": "Faces on that Day will be radiant, looking at their Lord, in gardens with fruits and shades.",
        "metaphysical_concept": "Joy and divine presence",
        "interpretation": "Paradise is metaphysically the presence of God and eternal delight."
    },
    {
        "verse_number": "89:29-30",
        "surah": "Al-Fajr",
        "text": "And as for he who feared the position of his Lord, He will ease him into Paradise.",
        "metaphysical_concept": "Ease and reward",
        "interpretation": "Metaphysical easing into eternal bliss for the God-fearing."
    },
    {
        "verse_number": "2:30",
        "surah": "Al-Baqarah",
        "text": "And [mention, O Muhammad], when your Lord said to the angels, 'Indeed, I will make upon the earth a successive authority.'",
        "metaphysical_concept": "Human role and authority",
        "interpretation": "Humans are metaphysically endowed with a unique role as vicegerents on earth."
    },
    {
        "verse_number": "2:31",
        "surah": "Al-Baqarah",
        "text": "And He taught Adam the names – all of them...",
        "metaphysical_concept": "Knowledge and consciousness",
        "interpretation": "Human cognition and awareness are metaphysical gifts from God."
    },
    {
        "verse_number": "4:1",
        "surah": "An-Nisa",
        "text": "O mankind, fear your Lord, who created you from one soul...",
        "metaphysical_concept": "Unity of human origin",
        "interpretation": "Humans share a metaphysical essence derived from a single soul."
    },
    {
        "verse_number": "15:28-29",
        "surah": "Al-Hijr",
        "text": "And [mention, O Muhammad], when your Lord said to the angels, 'I am creating a human being from clay...' Then He breathed into him of My Spirit.",
        "metaphysical_concept": "Creation and soul",
        "interpretation": "The human soul is a divine, metaphysical infusion distinct from physical matter."
    },
    {
        "verse_number": "17:85",
        "surah": "Al-Isra",
        "text": "And they ask you, [O Muhammad], about the soul. Say, 'The soul is of the affair of my Lord. And mankind has not been given of knowledge except a little.'",
        "metaphysical_concept": "Mystery of the soul",
        "interpretation": "Human understanding of the soul is limited; its essence is metaphysical and divine."
    },
    {
        "verse_number": "23:12-14",
        "surah": "Al-Mu’minun",
        "text": "And certainly did We create man from an extract of clay. Then We placed him as a sperm-drop in a firm lodging...",
        "metaphysical_concept": "Human creation and development",
        "interpretation": "The metaphysical journey of human existence begins from a humble origin."
    },
    {
        "verse_number": "30:20-21",
        "surah": "Ar-Rum",
        "text": "And of His signs is that He created for you from yourselves mates...",
        "metaphysical_concept": "Human relationships",
        "interpretation": "Metaphysical reflection in human companionship and reproduction."
    },
    {
        "verse_number": "51:56",
        "surah": "Adh-Dhariyat",
        "text": "And I did not create the jinn and mankind except to worship Me.",
        "metaphysical_concept": "Purpose of human existence",
        "interpretation": "Human metaphysical essence is oriented toward divine consciousness and worship."
    },
    {
        "verse_number": "76:2",
        "surah": "Al-Insan",
        "text": "Indeed, We created man from a sperm-drop mixture that We may test him...",
        "metaphysical_concept": "Trial and purpose",
        "interpretation": "Human life is a metaphysical experiment of moral and spiritual testing."
    },
    {
        "verse_number": "82:6-8",
        "surah": "Al-Infitar",
        "text": "O mankind, what has deceived you concerning your Lord, the Generous? Who created you, proportioned you, and balanced you?",
        "metaphysical_concept": "Design and balance",
        "interpretation": "Human physical and spiritual faculties reflect metaphysical design."
    },
    {
        "verse_number": "95:4",
        "surah": "At-Tin",
        "text": "We have certainly created man in the best of stature.",
        "metaphysical_concept": "Human perfection",
        "interpretation": "Metaphysical potential of humans embodies intrinsic dignity and design."
    },
    {
        "verse_number": "76:3",
        "surah": "Al-Insan",
        "text": "Indeed, We guided him to the way, whether he be grateful or ungrateful.",
        "metaphysical_concept": "Free will",
        "interpretation": "Human moral agency is a metaphysical reality with choices and consequences."
    },
    {
        "verse_number": "90:4",
        "surah": "Al-Balad",
        "text": "Indeed, We have created man into hardship.",
        "metaphysical_concept": "Struggle and purpose",
        "interpretation": "Human life is metaphysically framed by trials to actualize potential."
    },
    {
        "verse_number": "99:6-8",
        "surah": "Az-Zalzalah",
        "text": "That Day, the people will depart separated [into categories] to be shown their deeds.",
        "metaphysical_concept": "Accountability",
        "interpretation": "Human moral actions have metaphysical consequences in the afterlife."
    },
    {
        "verse_number": "76:1",
        "surah": "Al-Insan",
        "text": "Has there [not] come upon man a period of time when he was not a thing worth mentioning?",
        "metaphysical_concept": "Temporal origin",
        "interpretation": "Human existence emerges from metaphysical nothingness into being."
    },
    {
        "verse_number": "16:78",
        "surah": "An-Nahl",
        "text": "And Allah extracted you from the wombs of your mothers while you knew nothing.",
        "metaphysical_concept": "Dependency and growth",
        "interpretation": "Human knowledge and existence evolve from metaphysical dependence to awareness."
    },
    {
        "verse_number": "23:115",
        "surah": "Al-Mu’minun",
        "text": "Did you think that We created you uselessly and that to Us you would not be returned?",
        "metaphysical_concept": "Existential purpose",
        "interpretation": "Humans have metaphysical significance, and life has moral consequences."
    },
    {
        "verse_number": "2:286",
        "surah": "Al-Baqarah",
        "text": "Allah does not burden a soul beyond that it can bear...",
        "metaphysical_concept": "Divine justice",
        "interpretation": "Human trials are metaphysically proportionate to capabilities."
    },
    {
        "verse_number": "6:98",
        "surah": "Al-An'am",
        "text": "It is He who has created you from one soul and made from it its mate...",
        "metaphysical_concept": "Unity and duality",
        "interpretation": "Human relationships reflect metaphysical interconnectedness."
    },
    {
        "verse_number": "4:79",
        "surah": "An-Nisa",
        "text": "Whatever of good reaches you, is from Allah, but whatever of evil befalls you, is from yourself.",
        "metaphysical_concept": "Moral responsibility",
        "interpretation": "Humans bear metaphysical responsibility for their choices."
    },
    {
        "verse_number": "31:18-19",
        "surah": "Luqman",
        "text": "And do not turn your cheek in contempt toward people, nor walk in arrogance on the earth...",
        "metaphysical_concept": "Ethical self-awareness",
        "interpretation": "Human behavior is metaphysically evaluated through humility and ethics."
    },
    {
        "verse_number": "76:8-9",
        "surah": "Al-Insan",
        "text": "And they give food in spite of love for it to the needy, the orphan, and the captive...",
        "metaphysical_concept": "Selflessness",
        "interpretation": "Human altruism is a metaphysical virtue rewarding spiritual growth."
    },
    {
        "verse_number": "18:110",
        "surah": "Al-Kahf",
        "text": "Say, 'I am only a man like you, to whom has been revealed that your God is one God.'",
        "metaphysical_concept": "Prophetic humanity",
        "interpretation": "Humans are metaphysically capable of receiving and transmitting divine guidance."
    },
    {
        "verse_number": "23:101-102",
        "surah": "Al-Mu’minun",
        "text": "And when the trumpet is blown, We will gather the criminals and the righteous separately.",
        "metaphysical_concept": "Judgment and soul separation",
        "interpretation": "Human souls have metaphysical destiny based on moral alignment."
    },
    {
        "verse_number": "7:179",
        "surah": "Al-A’raf",
        "text": "Indeed, We have created many of the jinn and mankind for Hell...",
        "metaphysical_concept": "Human accountability",
        "interpretation": "Existence entails metaphysical moral testing and consequences."
    },
    {
        "verse_number": "76:3",
        "surah": "Al-Insan",
        "text": "Indeed, We guided him to the way, whether he be grateful or ungrateful.",
        "metaphysical_concept": "Free will",
        "interpretation": "Human choice is metaphysically meaningful with eternal consequences."
    },
    {
        "verse_number": "23:14",
        "surah": "Al-Mu’minun",
        "text": "Then We made the sperm-drop into a clinging clot, and We developed it into a lump...",
        "metaphysical_concept": "Human ontogenesis",
        "interpretation": "Human development is a metaphysical process reflecting divine orchestration."
    },
    {
        "verse_number": "95:5",
        "surah": "At-Tin",
        "text": "We have certainly created man in the best of stature.",
        "metaphysical_concept": "Intrinsic dignity",
        "interpretation": "Human metaphysical potential embodies inherent perfection."
    },
    {
        "verse_number": "2:164",
        "surah": "Al-Baqarah",
        "text": "Indeed, in the creation of the heavens and the earth, and the alternation of the night and the day, and the ships that sail through the sea with that which benefits mankind...",
        "metaphysical_concept": "Signs in nature",
        "interpretation": "Nature reflects metaphysical signs pointing to divine wisdom and order."
    },
    {
        "verse_number": "3:190-191",
        "surah": "Aal-e-Imran",
        "text": "Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding.",
        "metaphysical_concept": "Contemplation and reflection",
        "interpretation": "The natural order invites humans to perceive metaphysical truths through reflection."
    },
    {
        "verse_number": "6:141",
        "surah": "Al-An'am",
        "text": "It is He who produces gardens, trellised and untrellised, and palm trees, and crops of different shape and taste...",
        "metaphysical_concept": "Diversity and providence",
        "interpretation": "Nature’s variety reflects metaphysical providence and divine creativity."
    },
    {
        "verse_number": "16:10-11",
        "surah": "An-Nahl",
        "text": "He sends down water from the sky and gives it life to the earth after its lifelessness...",
        "metaphysical_concept": "Causality and renewal",
        "interpretation": "Nature exemplifies metaphysical causality and the cycle of life."
    },
    {
        "verse_number": "16:65",
        "surah": "An-Nahl",
        "text": "And Allah sends down water from the sky and revives the earth after its death...",
        "metaphysical_concept": "Divine sustenance",
        "interpretation": "Natural phenomena are metaphysical symbols of divine care and sustenance."
    },
    {
        "verse_number": "16:101",
        "surah": "An-Nahl",
        "text": "And He sends down rain from the sky and revives the earth thereby after its death...",
        "metaphysical_concept": "Life from lifelessness",
        "interpretation": "The metaphysical lesson of life and death is reflected in natural cycles."
    },
    {
        "verse_number": "21:30",
        "surah": "Al-Anbiya",
        "text": "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them...",
        "metaphysical_concept": "Cosmic origin",
        "interpretation": "The structure of the universe reflects metaphysical order and creation."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "Allah is the Light of the heavens and the earth...",
        "metaphysical_concept": "Light as metaphysical symbol",
        "interpretation": "Light in nature is a metaphor for divine guidance and metaphysical reality."
    },
    {
        "verse_number": "25:53",
        "surah": "Al-Furqan",
        "text": "And He is the one who has released the two seas, one sweet and palatable and the other salty and bitter, and He has set a barrier between them.",
        "metaphysical_concept": "Balance and separation",
        "interpretation": "Nature demonstrates metaphysical boundaries and divine precision."
    },
    {
        "verse_number": "27:61",
        "surah": "An-Naml",
        "text": "Is not He who created the heavens and the earth able to create the likes of them?",
        "metaphysical_concept": "Omnipotence",
        "interpretation": "Nature points to metaphysical understanding of divine power and possibility."
    },
    {
        "verse_number": "30:48",
        "surah": "Ar-Rum",
        "text": "It is Allah who sends the winds and they stir the clouds and spread them in the sky as He wills...",
        "metaphysical_concept": "Control over elements",
        "interpretation": "Weather phenomena reflect metaphysical order and divine agency."
    },
    {
        "verse_number": "31:10",
        "surah": "Luqman",
        "text": "He created the heavens without pillars that you see, and has cast into the earth mountains standing firm...",
        "metaphysical_concept": "Stability and design",
        "interpretation": "Mountains and celestial structures reflect metaphysical stability and order."
    },
    {
        "verse_number": "35:27-28",
        "surah": "Fatir",
        "text": "Do you not see that Allah sends down rain from the sky, then produces with it fruits of various colors? And in the cattle too...",
        "metaphysical_concept": "Diversity and life",
        "interpretation": "The multiplicity of life in nature is a metaphysical reflection of divine creativity."
    },
    {
        "verse_number": "36:36",
        "surah": "Ya-Sin",
        "text": "Glory be to Him who created all pairs – from what the earth grows and from themselves and from that which they do not know.",
        "metaphysical_concept": "Unity in diversity",
        "interpretation": "Nature embodies metaphysical unity amidst multiplicity."
    },
    {
        "verse_number": "41:53",
        "surah": "Fussilat",
        "text": "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.",
        "metaphysical_concept": "Inner and outer reflection",
        "interpretation": "Nature and the human self reveal metaphysical truths about existence."
    },
    {
        "verse_number": "45:3-5",
        "surah": "Al-Jathiya",
        "text": "Indeed, within the creation of the heavens and the earth are signs for the believers...",
        "metaphysical_concept": "Cosmic signs",
        "interpretation": "Observation of nature allows humans to grasp metaphysical realities."
    },
    {
        "verse_number": "55:5-6",
        "surah": "Ar-Rahman",
        "text": "The sun and the moon [move] by precise calculation. And the stars and trees prostrate.",
        "metaphysical_concept": "Order and submission",
        "interpretation": "Celestial and terrestrial order reflects metaphysical submission to divine will."
    },
    {
        "verse_number": "55:7-8",
        "surah": "Ar-Rahman",
        "text": "And the heaven He raised and imposed the balance.",
        "metaphysical_concept": "Cosmic balance",
        "interpretation": "Nature embodies metaphysical balance and justice."
    },
    {
        "verse_number": "56:68-70",
        "surah": "Al-Waqi’ah",
        "text": "Do you see the water you drink? Is it you who sent it down from the clouds or We send it down?",
        "metaphysical_concept": "Divine provision",
        "interpretation": "Natural sustenance reflects metaphysical dependency on divine orchestration."
    },
    {
        "verse_number": "67:3-4",
        "surah": "Al-Mulk",
        "text": "Who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency...",
        "metaphysical_concept": "Perfection and harmony",
        "interpretation": "Nature exhibits metaphysical perfection and order."
    },
    {
        "verse_number": "71:17-18",
        "surah": "Nuh",
        "text": "Do you not see how Allah created seven heavens in layers and placed the moon therein as light and the sun as a lamp?",
        "metaphysical_concept": "Cosmic structure",
        "interpretation": "Celestial bodies reveal metaphysical order and divine design."
    },
    {
        "verse_number": "79:30",
        "surah": "An-Nazi'at",
        "text": "And after that He spread the earth.",
        "metaphysical_concept": "Earth's creation",
        "interpretation": "The earth’s formation reflects metaphysical purpose and structure."
    },
    {
        "verse_number": "81:16-17",
        "surah": "At-Takwir",
        "text": "And when the sky is split open and becomes rose-colored like oil,",
        "metaphysical_concept": "Cosmic transformations",
        "interpretation": "Natural phenomena signal metaphysical transitions and cosmic events."
    },
    {
        "verse_number": "82:6-8",
        "surah": "Al-Infitar",
        "text": "O mankind, what has deceived you concerning your Lord, the Generous? Who created you, proportioned you, and balanced you?",
        "metaphysical_concept": "Design and order",
        "interpretation": "Human and natural order reflect metaphysical balance and design."
    },
    {
        "verse_number": "86:5-7",
        "surah": "At-Tariq",
        "text": "By the sky and the night comer, and what will make you know what the night comer is? It is the piercing star.",
        "metaphysical_concept": "Celestial guidance",
        "interpretation": "Stars and heavenly bodies have metaphysical significance as guidance and signs."
    },
    {
        "verse_number": "89:5-7",
        "surah": "Al-Fajr",
        "text": "And the heaven and He who constructed it, and the earth and He who spread it...",
        "metaphysical_concept": "Creation and cause",
        "interpretation": "Nature reflects metaphysical principles of causality and divine construction."
    },
    {
        "verse_number": "91:5-7",
        "surah": "Ash-Shams",
        "text": "And the earth and Him who spread it, and the soul and Him who proportioned it.",
        "metaphysical_concept": "Proportion and harmony",
        "interpretation": "Nature mirrors metaphysical balance, proportion, and cosmic harmony."
    },
    {
        "verse_number": "2:22",
        "surah": "Al-Baqarah",
        "text": "Who made for you the earth a bed and the sky a canopy, and sends down water from the sky, thereby bringing forth fruits as provision for you.",
        "metaphysical_concept": "Cosmic structure",
        "interpretation": "The earth and sky are metaphysically structured to sustain life."
    },
    {
        "verse_number": "2:255",
        "surah": "Al-Baqarah",
        "text": "Allah – there is no deity except Him, the Ever-Living, the Sustainer of [all] existence...",
        "metaphysical_concept": "Existential hierarchy",
        "interpretation": "Divine order sustains the structured reality of existence."
    },
    {
        "verse_number": "6:141",
        "surah": "Al-An’am",
        "text": "And He produces gardens, trellised and untrellised, and the palm trees and crops of different shape and taste...",
        "metaphysical_concept": "Natural structure",
        "interpretation": "Vegetation exhibits metaphysical order and purposeful design."
    },
    {
        "verse_number": "7:54",
        "surah": "Al-A’raf",
        "text": "Indeed, your Lord is Allah, who created the heavens and the earth in six days and then established Himself above the Throne...",
        "metaphysical_concept": "Cosmic hierarchy",
        "interpretation": "Creation has a structured sequence and hierarchy established by the Divine."
    },
    {
        "verse_number": "10:5",
        "surah": "Yunus",
        "text": "It is He who made the sun to shine and the moon to be a light, and determined for it phases so you may know the number of years and the calculation of time.",
        "metaphysical_concept": "Celestial structure",
        "interpretation": "Heavenly bodies are structured for cosmic measurement and rhythm."
    },
    {
        "verse_number": "13:3",
        "surah": "Ar-Ra’d",
        "text": "And He is the One who spread out the earth and placed therein firm mountains and rivers.",
        "metaphysical_concept": "Earthly structure",
        "interpretation": "The earth has metaphysical order through mountains and rivers."
    },
    {
        "verse_number": "16:15",
        "surah": "An-Nahl",
        "text": "And He has cast into the earth mountains, lest it shift with you...",
        "metaphysical_concept": "Stability through structure",
        "interpretation": "Topographical formations reflect metaphysical stability and order."
    },
    {
        "verse_number": "21:30",
        "surah": "Al-Anbiya",
        "text": "Have those who disbelieved not considered that the heavens and the earth were a joined entity, and We separated them...",
        "metaphysical_concept": "Structural separation",
        "interpretation": "The universe exhibits metaphysical organization through separation and space."
    },
    {
        "verse_number": "23:12-14",
        "surah": "Al-Mu’minun",
        "text": "And certainly did We create man from an extract of clay, then placed him as a sperm-drop in a firm lodging, then developed him into a lump...",
        "metaphysical_concept": "Human structural development",
        "interpretation": "Human life is metaphysically structured from conception to formation."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "Allah is the Light of the heavens and the earth...",
        "metaphysical_concept": "Metaphysical framework",
        "interpretation": "Light serves as a metaphysical structuring principle of reality."
    },
    {
        "verse_number": "31:10",
        "surah": "Luqman",
        "text": "He created the heavens without pillars that you see, and has cast into the earth mountains standing firm...",
        "metaphysical_concept": "Structural design",
        "interpretation": "Celestial and terrestrial structures reflect metaphysical order."
    },
    {
        "verse_number": "35:27-28",
        "surah": "Fatir",
        "text": "Do you not see that Allah sends down rain from the sky and produces with it fruits of various colors? And in the cattle too...",
        "metaphysical_concept": "Systematic diversity",
        "interpretation": "Nature’s structures operate according to metaphysical patterns."
    },
    {
        "verse_number": "36:36",
        "surah": "Ya-Sin",
        "text": "Glory be to Him who created all pairs – from what the earth grows and from themselves and from that which they do not know.",
        "metaphysical_concept": "Pairing and symmetry",
        "interpretation": "Natural and cosmic structures are metaphysically paired and balanced."
    },
    {
        "verse_number": "41:53",
        "surah": "Fussilat",
        "text": "We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.",
        "metaphysical_concept": "Structural reflection",
        "interpretation": "The universe and human self reflect metaphysical structures and truths."
    },
    {
        "verse_number": "45:3-4",
        "surah": "Al-Jathiya",
        "text": "Indeed, within the creation of the heavens and the earth are signs for the believers.",
        "metaphysical_concept": "Organized creation",
        "interpretation": "The structured cosmos embodies metaphysical signs."
    },
    {
        "verse_number": "55:5-6",
        "surah": "Ar-Rahman",
        "text": "The sun and the moon [move] by precise calculation. And the stars and trees prostrate.",
        "metaphysical_concept": "Calculated motion",
        "interpretation": "Cosmic and earthly structures move in metaphysical precision."
    },
    {
        "verse_number": "55:7-8",
        "surah": "Ar-Rahman",
        "text": "And the heaven He raised and imposed the balance.",
        "metaphysical_concept": "Structural balance",
        "interpretation": "Metaphysical balance governs the cosmos."
    },
    {
        "verse_number": "65:12",
        "surah": "At-Talaq",
        "text": "It is Allah who created seven heavens and of the earth, the like of them.",
        "metaphysical_concept": "Layered creation",
        "interpretation": "The universe exhibits layered metaphysical structure."
    },
    {
        "verse_number": "67:3-4",
        "surah": "Al-Mulk",
        "text": "Who created seven heavens in layers. You do not see any inconsistency in the creation of the Most Merciful.",
        "metaphysical_concept": "Perfect structure",
        "interpretation": "Creation is a flawless metaphysical structure."
    },
    {
        "verse_number": "79:30",
        "surah": "An-Nazi’at",
        "text": "And after that He spread the earth.",
        "metaphysical_concept": "Earthly formation",
        "interpretation": "The spreading of the earth reflects a metaphysical structural plan."
    },
    {
        "verse_number": "81:16-17",
        "surah": "At-Takwir",
        "text": "And when the sky is split open and becomes rose-colored like oil...",
        "metaphysical_concept": "Cosmic transformation",
        "interpretation": "Metaphysical structures undergo transformations reflecting divine order."
    },
    {
        "verse_number": "82:6-8",
        "surah": "Al-Infitar",
        "text": "O mankind, what has deceived you concerning your Lord, the Generous? Who created you, proportioned you, and balanced you?",
        "metaphysical_concept": "Proportion and balance",
        "interpretation": "Human and natural structures follow metaphysical proportionality."
    },
    {
        "verse_number": "86:5-7",
        "surah": "At-Tariq",
        "text": "By the sky and the night comer, and what will make you know what the night comer is? It is the piercing star.",
        "metaphysical_concept": "Celestial structure",
        "interpretation": "Stars exemplify metaphysical structural order in the heavens."
    },
    {
        "verse_number": "91:5-7",
        "surah": "Ash-Shams",
        "text": "And the earth and Him who spread it, and the soul and Him who proportioned it.",
        "metaphysical_concept": "Harmonized structure",
        "interpretation": "Earth, humans, and the soul reflect metaphysical proportional structure."
    },
    {
        "verse_number": "99:1-2",
        "surah": "Az-Zalzalah",
        "text": "When the earth is shaken with its [final] earthquake, and the earth discharges its burdens.",
        "metaphysical_concept": "Structural upheaval",
        "interpretation": "Metaphysical structures of the earth respond to cosmic events."
    },
    {
        "verse_number": "101:4-5",
        "surah": "Al-Qari’ah",
        "text": "It is the Day when people will be like moths scattered, and the mountains will be like carded wool.",
        "metaphysical_concept": "Structural transformation",
        "interpretation": "Metaphysical structures of mountains and humans are altered on the Day of Judgment."
    },
    {
        "verse_number": "112:1-4",
        "surah": "Al-Ikhlas",
        "text": "Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.'",
        "metaphysical_concept": "Divine singularity",
        "interpretation": "All structures depend on the metaphysical singularity of God."
    },
    {
        "verse_number": "2:266",
        "surah": "Al-Baqarah",
        "text": "Would any of you wish to have a garden with date-palms and vines, with rivers flowing underneath, yet have death come to him suddenly while he still has children weak in strength?",
        "metaphysical_concept": "Tree as life and sustenance",
        "interpretation": "Trees represent continuity, sustenance, and the fragility of temporal existence."
    },
    {
        "verse_number": "6:99",
        "surah": "Al-An’am",
        "text": "And He it is who sends down water from the sky, then produces with it all kinds of plants as nourishment for you...",
        "metaphysical_concept": "Growth and provision",
        "interpretation": "Trees symbolize the metaphysical connection between divine provision and life."
    },
    {
        "verse_number": "6:141",
        "surah": "Al-An’am",
        "text": "It is He who produces gardens, trellised and untrellised, and palm trees and crops of different shape and taste...",
        "metaphysical_concept": "Diversity in creation",
        "interpretation": "Tree structures reflect divine creativity and metaphysical variety."
    },
    {
        "verse_number": "13:4",
        "surah": "Ar-Ra’d",
        "text": "And in the earth are neighboring tracts, and vineyards, and fields of crops, and palm trees – growing in clusters or singly...",
        "metaphysical_concept": "Structural order",
        "interpretation": "Trees and plants manifest metaphysical order and balance in ecosystems."
    },
    {
        "verse_number": "16:10-11",
        "surah": "An-Nahl",
        "text": "He sends down water from the sky and thereby brings forth the earth after its lifelessness and produces all kinds of fruits...",
        "metaphysical_concept": "Cyclical renewal",
        "interpretation": "Trees reflect metaphysical cycles of death and life."
    },
    {
        "verse_number": "16:141",
        "surah": "An-Nahl",
        "text": "It is He who produces gardens, trellised and untrellised, and dates and olives for you to enjoy their fruits...",
        "metaphysical_concept": "Provision and blessing",
        "interpretation": "Trees are metaphysical symbols of divine mercy and sustenance."
    },
    {
        "verse_number": "17:91",
        "surah": "Al-Isra",
        "text": "Do you not see that Allah has created the trees, spreading on the earth?",
        "metaphysical_concept": "Natural testimony",
        "interpretation": "Trees testify to metaphysical principles of order and divine design."
    },
    {
        "verse_number": "18:32",
        "surah": "Al-Kahf",
        "text": "And present to them an example of two men: We made for one of them two gardens of grapevines, and We bordered them with palm trees...",
        "metaphysical_concept": "Material vs metaphysical evaluation",
        "interpretation": "Tree abundance reflects metaphysical consequences of human behavior and morality."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "Allah is the Light of the heavens and the earth; the parable of His light is like a niche within which is a lamp, the lamp is in glass, glass as if it were a brilliant star, lit from a blessed olive tree.",
        "metaphysical_concept": "Tree as metaphysical symbol",
        "interpretation": "The olive tree symbolizes metaphysical illumination and divine guidance."
    },
    {
        "verse_number": "35:27-28",
        "surah": "Fatir",
        "text": "Do you not see that Allah sends down rain from the sky and brings forth fruits of various colors? And in the cattle too...",
        "metaphysical_concept": "Diversity and sustenance",
        "interpretation": "Trees manifest metaphysical diversity and divine sustenance."
    },
    {
        "verse_number": "36:34",
        "surah": "Ya-Sin",
        "text": "And a sign for them is the dead earth. We have brought it to life and brought forth from it grain and grapevines and green crops.",
        "metaphysical_concept": "Resurrection and growth",
        "interpretation": "Trees reflect metaphysical truths of revival and life after death."
    },
    {
        "verse_number": "37:146",
        "surah": "As-Saffat",
        "text": "And We caused the gardens to sprout in Paradise for the righteous.",
        "metaphysical_concept": "Paradisiacal symbolism",
        "interpretation": "Trees in Paradise symbolize metaphysical reward and eternal structure."
    },
    {
        "verse_number": "55:68",
        "surah": "Ar-Rahman",
        "text": "In them are good and beautiful trees.",
        "metaphysical_concept": "Divine beauty",
        "interpretation": "Trees embody metaphysical beauty and perfection in Paradise."
    },
    {
        "verse_number": "56:28-29",
        "surah": "Al-Waqi’ah",
        "text": "And among thornless lote-trees, clustered, and extended shade.",
        "metaphysical_concept": "Metaphysical comfort",
        "interpretation": "Trees in Paradise provide metaphysical relief and serenity."
    },
    {
        "verse_number": "78:31-33",
        "surah": "An-Naba",
        "text": "Indeed, for the righteous is attainment – gardens and grapevines and full-breasted companions of equal age.",
        "metaphysical_concept": "Paradise sustenance",
        "interpretation": "Trees in Paradise reflect metaphysical nourishment and reward."
    },
    {
        "verse_number": "80:30",
        "surah": "Abasa",
        "text": "And We made the earth for living beings, with plants and trees growing upon it.",
        "metaphysical_concept": "Earthly structure",
        "interpretation": "Trees provide metaphysical support and sustenance to life."
    },
    {
        "verse_number": "95:1-2",
        "surah": "At-Tin",
        "text": "By the fig and the olive, and Mount Sinai, and this secure city (Makkah)...",
        "metaphysical_concept": "Symbolic significance",
        "interpretation": "Specific trees hold metaphysical symbolism in divine narrative."
    },
    {
        "verse_number": "95:3",
        "surah": "At-Tin",
        "text": "We created man in the best stature.",
        "metaphysical_concept": "Human-plant analogy",
        "interpretation": "Trees exemplify metaphysical perfection mirrored in humans."
    },
    {
        "verse_number": "6:141",
        "surah": "Al-An’am",
        "text": "And do not waste; indeed, He does not like the wasteful. Eat of the fruits and produce thereof as sustenance.",
        "metaphysical_concept": "Sustainability",
        "interpretation": "Trees symbolize metaphysical responsibility in consumption."
    },
    {
        "verse_number": "16:99",
        "surah": "An-Nahl",
        "text": "And fear the Day when you will be returned to Allah; then every soul will be compensated for what it earned...",
        "metaphysical_concept": "Moral symbolism",
        "interpretation": "Trees metaphorically reflect metaphysical justice and recompense."
    },
    {
        "verse_number": "23:19",
        "surah": "Al-Mu’minun",
        "text": "Then We produced for you gardens of palm trees and grapevines for food.",
        "metaphysical_concept": "Provision",
        "interpretation": "Trees embody metaphysical sustenance and divine care."
    },
    {
        "verse_number": "36:34",
        "surah": "Ya-Sin",
        "text": "And brought forth from it grain and grapevines and green crops.",
        "metaphysical_concept": "Growth and cycles",
        "interpretation": "Trees signify the metaphysical cycles of life and nourishment."
    },
    {
        "verse_number": "55:68",
        "surah": "Ar-Rahman",
        "text": "In them are good and beautiful trees.",
        "metaphysical_concept": "Paradise aesthetics",
        "interpretation": "Trees in Paradise reflect metaphysical aesthetics and harmony."
    },
    {
        "verse_number": "56:28-29",
        "surah": "Al-Waqi’ah",
        "text": "Among thornless lote-trees, clustered, and extended shade.",
        "metaphysical_concept": "Protection and comfort",
        "interpretation": "Trees provide metaphysical comfort and shelter in the afterlife."
    },
    {
        "verse_number": "68:7",
        "surah": "Al-Qalam",
        "text": "And the mountains as pegs?",
        "metaphysical_concept": "Structural analogy",
        "interpretation": "Trees and mountains serve as metaphysical pegs stabilizing life."
    },
    {
        "verse_number": "78:31-33",
        "surah": "An-Naba",
        "text": "Indeed, for the righteous are gardens and grapevines and companions.",
        "metaphysical_concept": "Reward and structure",
        "interpretation": "Trees symbolize metaphysical reward and structured blessings."
    },
    {
        "verse_number": "95:1-2",
        "surah": "At-Tin",
        "text": "By the fig and the olive, and Mount Sinai, and this secure city...",
        "metaphysical_concept": "Divine oath",
        "interpretation": "Trees serve as metaphysical witnesses in divine oaths."
    },
    {
        "verse_number": "6:122",
        "surah": "Al-An’am",
        "text": "Can he who was dead and We gave him life and made for him a light by which to walk among the people be like one who is in darkness, never to emerge?",
        "metaphysical_concept": "Spiritual illumination",
        "interpretation": "Light represents metaphysical guidance and the awakening of the soul."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "Allah is the Light of the heavens and the earth. The example of His light is like a niche containing a lamp, the lamp in a glass, the glass as if it were a shining star, lit from a blessed olive tree...",
        "metaphysical_concept": "Divine light",
        "interpretation": "Light symbolizes divine knowledge, purity, and metaphysical existence."
    },
    {
        "verse_number": "33:43",
        "surah": "Al-Ahzab",
        "text": "It is He who confers blessing upon you, and His angels [ask Him to do so] that He may bring you out of darkness into light.",
        "metaphysical_concept": "Transition from ignorance to knowledge",
        "interpretation": "Light metaphysically represents guidance from error to truth."
    },
    {
        "verse_number": "39:69",
        "surah": "Az-Zumar",
        "text": "And the earth will shine with the light of its Lord, and the record of deeds will be placed, and the prophets and witnesses will be brought.",
        "metaphysical_concept": "Divine manifestation",
        "interpretation": "Light represents the metaphysical revelation of truth and accountability."
    },
    {
        "verse_number": "57:28",
        "surah": "Al-Hadid",
        "text": "Believers, fear Allah and believe in His Messenger; He will give you a double portion of His mercy and make for you light by which you walk.",
        "metaphysical_concept": "Guidance and mercy",
        "interpretation": "Light signifies metaphysical assistance and clarity on the path of righteousness."
    },
    {
        "verse_number": "61:9",
        "surah": "As-Saff",
        "text": "It is He who sent His Messenger with guidance and the religion of truth to prevail over all religions, even though the disbelievers dislike it.",
        "metaphysical_concept": "Illumination of truth",
        "interpretation": "Divine light represents the metaphysical truth prevailing over falsehood."
    },
    {
        "verse_number": "2:257",
        "surah": "Al-Baqarah",
        "text": "Allah is the protector of those who believe; He brings them out of darkness into light.",
        "metaphysical_concept": "Salvation and enlightenment",
        "interpretation": "Light is metaphysical liberation from ignorance and sin."
    },
    {
        "verse_number": "4:174",
        "surah": "An-Nisa",
        "text": "O mankind, indeed there has come to you a conclusive proof from your Lord; and We have sent down to you a clear light.",
        "metaphysical_concept": "Revelation",
        "interpretation": "Light symbolizes metaphysical clarity and the presence of divine guidance."
    },
    {
        "verse_number": "6:122",
        "surah": "Al-An’am",
        "text": "He who was dead and We gave him life and made for him a light to walk among the people...",
        "metaphysical_concept": "Resurrection and guidance",
        "interpretation": "Light metaphorically represents metaphysical awakening and the soul’s illumination."
    },
    {
        "verse_number": "33:43",
        "surah": "Al-Ahzab",
        "text": "It is He who confers blessing upon you and His angels, so that He may bring you out of darkness into light.",
        "metaphysical_concept": "Divine intervention",
        "interpretation": "Light symbolizes metaphysical assistance from God and angels."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "Allah is the Light of the heavens and the earth...",
        "metaphysical_concept": "Existential illumination",
        "interpretation": "Light represents metaphysical existence and the essence of creation."
    },
    {
        "verse_number": "39:69",
        "surah": "Az-Zumar",
        "text": "The earth shines with the light of its Lord...",
        "metaphysical_concept": "Cosmic radiance",
        "interpretation": "Light conveys metaphysical visibility and manifestation of divine presence."
    },
    {
        "verse_number": "57:28",
        "surah": "Al-Hadid",
        "text": "Allah will make for you light by which you walk.",
        "metaphysical_concept": "Guidance",
        "interpretation": "Metaphysical light provides clarity and direction in life and spirituality."
    },
    {
        "verse_number": "33:43",
        "surah": "Al-Ahzab",
        "text": "He may bring you out of darkness into light.",
        "metaphysical_concept": "Transformation",
        "interpretation": "Light represents metaphysical transition from error to truth."
    },
    {
        "verse_number": "6:122",
        "surah": "Al-An’am",
        "text": "He who was dead, and We gave him life and a light...",
        "metaphysical_concept": "Spiritual revival",
        "interpretation": "Light symbolizes metaphysical life and enlightenment of the soul."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "A niche containing a lamp, the lamp in glass...",
        "metaphysical_concept": "Symbolism",
        "interpretation": "The olive tree and lamp symbolize layered metaphysical reality and divine illumination."
    },
    {
        "verse_number": "57:28",
        "surah": "Al-Hadid",
        "text": "He will give you a light by which you walk.",
        "metaphysical_concept": "Clarity",
        "interpretation": "Light is metaphysical clarity on the moral and spiritual path."
    },
    {
        "verse_number": "61:9",
        "surah": "As-Saff",
        "text": "He sent His Messenger with guidance and the religion of truth...",
        "metaphysical_concept": "Illumination of truth",
        "interpretation": "Light metaphorically represents the metaphysical truth spreading in the world."
    },
    {
        "verse_number": "2:257",
        "surah": "Al-Baqarah",
        "text": "Allah brings them out of darkness into light...",
        "metaphysical_concept": "Spiritual journey",
        "interpretation": "Light signifies metaphysical enlightenment from ignorance and error."
    },
    {
        "verse_number": "4:174",
        "surah": "An-Nisa",
        "text": "We have sent down to you a clear light.",
        "metaphysical_concept": "Revelation",
        "interpretation": "Light represents metaphysical truth and divine instruction."
    },
    {
        "verse_number": "39:69",
        "surah": "Az-Zumar",
        "text": "The record of deeds will be placed, and the earth will shine with the light of its Lord.",
        "metaphysical_concept": "Cosmic judgment",
        "interpretation": "Light symbolizes metaphysical disclosure and divine witnessing."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "The lamp is in glass, glass as if it were a shining star.",
        "metaphysical_concept": "Cosmic illumination",
        "interpretation": "Light reflects the metaphysical brilliance and structured cosmic reality."
    },
    {
        "verse_number": "33:43",
        "surah": "Al-Ahzab",
        "text": "He confers blessing upon you, and His angels...",
        "metaphysical_concept": "Divine facilitation",
        "interpretation": "Light represents metaphysical assistance and protection from the Divine."
    },
    {
        "verse_number": "57:28",
        "surah": "Al-Hadid",
        "text": "Make for yourselves a light to walk by.",
        "metaphysical_concept": "Human guidance",
        "interpretation": "Light is metaphysical capability for humans to follow divine guidance."
    },
    {
        "verse_number": "2:257",
        "surah": "Al-Baqarah",
        "text": "Allah is the protector of those who believe; He brings them out of darkness into light.",
        "metaphysical_concept": "Divine protection",
        "interpretation": "Light signifies metaphysical guardianship and enlightenment."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "Lit from a blessed olive tree...",
        "metaphysical_concept": "Symbolic light",
        "interpretation": "Olive tree as source of metaphysical illumination and divine essence."
    },
    {
        "verse_number": "61:9",
        "surah": "As-Saff",
        "text": "Sent with guidance and the religion of truth...",
        "metaphysical_concept": "Spiritual propagation",
        "interpretation": "Light embodies metaphysical guidance spread through prophets."
    },
    {
        "verse_number": "39:69",
        "surah": "Az-Zumar",
        "text": "The earth will shine with the light of its Lord.",
        "metaphysical_concept": "Cosmic revelation",
        "interpretation": "Light represents metaphysical truth manifesting across creation."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "A shining star lit from a blessed olive tree.",
        "metaphysical_concept": "Existential symbolism",
        "interpretation": "Light symbolizes metaphysical essence, divine guidance, and cosmic order."
    },
    {
        "verse_number": "2:18",
        "surah": "Al-Baqarah",
        "text": "Deaf, dumb, and blind, so they do not return [to the right path].",
        "metaphysical_concept": "Perception and sound",
        "interpretation": "Metaphysical significance of sound as a medium for guidance; absence leads to spiritual deafness."
    },
    {
        "verse_number": "4:163",
        "surah": "An-Nisa",
        "text": "Indeed, We have revealed to you as We revealed to Noah and the prophets after him. And We revealed to Abraham, Ishmael, Isaac, Jacob, the Descendants, Jesus, Job, Jonah, Aaron, and Solomon, and to David We gave the Psalms.",
        "metaphysical_concept": "Revelation as sound",
        "interpretation": "Sound carries metaphysical knowledge and divine communication."
    },
    {
        "verse_number": "7:204",
        "surah": "Al-A’raf",
        "text": "When the Quran is recited, listen to it and pay attention that you may receive mercy.",
        "metaphysical_concept": "Auditory reception",
        "interpretation": "Hearing the divine sound brings metaphysical attention and blessing."
    },
    {
        "verse_number": "10:64",
        "surah": "Yunus",
        "text": "For them is good news in the worldly life and in the Hereafter. And no one will avert the words [sound of decree] of Allah.",
        "metaphysical_concept": "Sound of divine decree",
        "interpretation": "Divine words manifest as metaphysical reality; sound expresses authority and existence."
    },
    {
        "verse_number": "13:13",
        "surah": "Ar-Ra’d",
        "text": "The thunder exalts [Allah] with praise of Him— and the angels from fear of Him—and He sends thunderbolts and strikes with them whom He wills.",
        "metaphysical_concept": "Cosmic sound",
        "interpretation": "Natural sound (thunder) reflects metaphysical expression of divine power."
    },
    {
        "verse_number": "17:1",
        "surah": "Al-Isra",
        "text": "Glory be to Him who took His servant by night from the Sacred Mosque to the Farthest Mosque whose surroundings We have blessed, to show him of Our signs.",
        "metaphysical_concept": "Sound and vision of signs",
        "interpretation": "Sound is part of metaphysical experience of divine signs."
    },
    {
        "verse_number": "20:46",
        "surah": "Taha",
        "text": "And strike the sea with your staff, and it parted, and each portion was like a huge mass.",
        "metaphysical_concept": "Sound as action",
        "interpretation": "Sound (staff striking) produces metaphysical transformation in nature."
    },
    {
        "verse_number": "27:13",
        "surah": "An-Naml",
        "text": "Then he inspected the birds and said, 'Why do I not see the hoopoe?' He was absent. He said, 'I will surely punish him with a severe punishment or slaughter him unless he brings me clear authorization.'",
        "metaphysical_concept": "Communication through sound",
        "interpretation": "Birds symbolize metaphysical agents of divine communication."
    },
    {
        "verse_number": "31:27",
        "surah": "Luqman",
        "text": "And if all the trees on earth were pens and the sea were ink, and with it were added seven more seas, the words of Allah would not be exhausted.",
        "metaphysical_concept": "Eternal word",
        "interpretation": "Divine expression as metaphysical sound transcends physical representation."
    },
    {
        "verse_number": "41:33",
        "surah": "Fussilat",
        "text": "Whoever invites to Allah, for him is the best speech.",
        "metaphysical_concept": "Sound as invitation",
        "interpretation": "Sound conveys metaphysical guidance and moral truth."
    },
    {
        "verse_number": "50:41",
        "surah": "Qaf",
        "text": "And when the trumpet is blown, We will assemble them in [rows] to witness.",
        "metaphysical_concept": "Cosmic sound",
        "interpretation": "Sound signals metaphysical transformation and resurrection."
    },
    {
        "verse_number": "69:13-14",
        "surah": "Al-Haqqah",
        "text": "Then the trumpet will be blown, and at once from the graves to their Lord they will hasten.",
        "metaphysical_concept": "Sound and resurrection",
        "interpretation": "Sound triggers metaphysical awakening of souls."
    },
    {
        "verse_number": "78:18",
        "surah": "An-Naba",
        "text": "The trumpet will be blown, and they will come forth from the graves in haste.",
        "metaphysical_concept": "Apocalyptic sound",
        "interpretation": "Divine sound represents metaphysical upheaval and judgment."
    },
    {
        "verse_number": "81:1-2",
        "surah": "At-Takwir",
        "text": "When the sun is wrapped up and when the stars fall, scattering.",
        "metaphysical_concept": "Cosmic sound implied",
        "interpretation": "Metaphysical events are accompanied by symbolic sound in cosmic order."
    },
    {
        "verse_number": "82:1-2",
        "surah": "Al-Infitar",
        "text": "When the sky breaks apart and when the stars are dispersed.",
        "metaphysical_concept": "Sound of cosmic rupture",
        "interpretation": "Sound embodies metaphysical transformation of the universe."
    },
    {
        "verse_number": "84:1-2",
        "surah": "Al-Inshiqaq",
        "text": "When the sky is split asunder and obeys its Lord and is accomplished.",
        "metaphysical_concept": "Sound and obedience",
        "interpretation": "Sound metaphorically represents metaphysical compliance of creation to divine order."
    },
    {
        "verse_number": "99:1-2",
        "surah": "Az-Zalzalah",
        "text": "When the earth is shaken with its [final] earthquake and the earth discharges its burdens.",
        "metaphysical_concept": "Sound of upheaval",
        "interpretation": "Earth’s metaphysical structure is expressed through sound during cosmic events."
    },
    {
        "verse_number": "101:4-5",
        "surah": "Al-Qari’ah",
        "text": "It is the Day when people will be like moths scattered, and the mountains will be like carded wool.",
        "metaphysical_concept": "Auditory apocalypse",
        "interpretation": "Sound symbolizes metaphysical chaos and judgment."
    },
    {
        "verse_number": "36:65",
        "surah": "Ya-Sin",
        "text": "Do you not see that We made the fingers of the hands of the disbelievers mute?",
        "metaphysical_concept": "Sound and communication",
        "interpretation": "Loss of sound symbolizes metaphysical inability to express or recognize truth."
    },
    {
        "verse_number": "7:205",
        "surah": "Al-A’raf",
        "text": "And remember your Lord within yourself humbly and with fear without loudness in words, at morning and evening.",
        "metaphysical_concept": "Silent sound",
        "interpretation": "Metaphysical sound includes internal contemplation beyond physical hearing."
    },
    {
        "verse_number": "17:44",
        "surah": "Al-Isra",
        "text": "The seven heavens and the earth and all in them glorify Him; there is not a thing but glorifies His praise, but you do not understand their glorification.",
        "metaphysical_concept": "Universal sound",
        "interpretation": "All creation emits metaphysical sound in praise of the Divine."
    },
    {
        "verse_number": "16:49",
        "surah": "An-Nahl",
        "text": "All glory is to Allah, who created the heavens and the earth, and whatever is between them, and who disposes of all matters.",
        "metaphysical_concept": "Sound of glory",
        "interpretation": "The universe emits metaphysical sound reflecting divine order."
    },
    {
        "verse_number": "35:1",
        "surah": "Fatir",
        "text": "All glory to Allah, Originator of the heavens and the earth, who made the angels messengers with wings – two, three, or four. He increases in creation what He wills.",
        "metaphysical_concept": "Sound as manifestation",
        "interpretation": "Angelic activity metaphorically conveys metaphysical sound of divine action."
    },
    {
        "verse_number": "41:38",
        "surah": "Fussilat",
        "text": "And if they were to be patient and fearful, their reward would be greater.",
        "metaphysical_concept": "Sound and patience",
        "interpretation": "Silent endurance is a form of metaphysical sound or expression."
    },
    {
        "verse_number": "67:1",
        "surah": "Al-Mulk",
        "text": "Blessed is He in whose hand is the dominion, and He is over all things competent.",
        "metaphysical_concept": "Sound as authority",
        "interpretation": "Divine command manifests as metaphysical sound governing existence."
    },
    {
        "verse_number": "69:13",
        "surah": "Al-Haqqah",
        "text": "Then the trumpet will be blown, and from the graves they will come out in haste.",
        "metaphysical_concept": "Resurrection sound",
        "interpretation": "Sound signals metaphysical transition from death to life."
    },
    {
        "verse_number": "78:18",
        "surah": "An-Naba",
        "text": "The trumpet will be blown, and they will come forth from the graves in haste.",
        "metaphysical_concept": "Apocalyptic sound",
        "interpretation": "Sound represents metaphysical awakening and accountability."
    },
    {
        "verse_number": "7:34",
        "surah": "Al-A’raf",
        "text": "And for every nation is a term; when their time comes, they cannot delay it by an hour, nor can they advance it.",
        "metaphysical_concept": "Fixed destiny",
        "interpretation": "Time is metaphysically predetermined; each entity has its divinely appointed term."
    },
    {
        "verse_number": "10:49",
        "surah": "Yunus",
        "text": "Say, 'I have no power over my benefit or harm except what Allah wills.' For every people is a term, and when their term comes, they cannot delay it an hour, nor can they advance it.",
        "metaphysical_concept": "Divine will and time",
        "interpretation": "Time reflects metaphysical submission to divine decree."
    },
    {
        "verse_number": "16:61",
        "surah": "An-Nahl",
        "text": "And if Allah were to punish the people for their wrongdoing, He would not leave upon it any creature, but He grants them respite for a specified term.",
        "metaphysical_concept": "Temporal mercy",
        "interpretation": "Time serves as a metaphysical tool for divine mercy and patience."
    },
    {
        "verse_number": "22:47",
        "surah": "Al-Hajj",
        "text": "And they urge you to hasten the punishment. But Allah will not fail in His promise. And indeed, a day with your Lord is like a thousand years of those you count.",
        "metaphysical_concept": "Relative time",
        "interpretation": "Time is metaphysically relative; divine perception differs from human perception."
    },
    {
        "verse_number": "32:5",
        "surah": "As-Sajda",
        "text": "He arranges [every] matter from the heaven to the earth; then it will ascend to Him in a Day whose measure is a thousand years of what you count.",
        "metaphysical_concept": "Divine chronology",
        "interpretation": "Time on the metaphysical level transcends human temporal understanding."
    },
    {
        "verse_number": "70:4",
        "surah": "Al-Ma’arij",
        "text": "The angels and the Spirit will ascend to Him during a Day the extent of which is fifty thousand years.",
        "metaphysical_concept": "Cosmic time",
        "interpretation": "Time metaphysically stretches in divine operations beyond earthly measurement."
    },
    {
        "verse_number": "7:187",
        "surah": "Al-A’raf",
        "text": "They ask you about the Hour: when will it be? Say, 'Its knowledge is only with my Lord.' None can reveal it except Him.",
        "metaphysical_concept": "Time and eschatology",
        "interpretation": "The ultimate metaphysical event (Hour) is hidden within divine time."
    },
    {
        "verse_number": "18:25",
        "surah": "Al-Kahf",
        "text": "And they remained in their cave three hundred years and exceeded by nine.",
        "metaphysical_concept": "Time dilation",
        "interpretation": "Time is metaphysically relative; earthly and spiritual timelines may differ."
    },
    {
        "verse_number": "22:5",
        "surah": "Al-Hajj",
        "text": "O mankind, if you should be in doubt about the Resurrection, then [consider] that We created you from dust, then from a sperm-drop, then from a clinging clot, then from a lump...",
        "metaphysical_concept": "Life cycle and time",
        "interpretation": "Time marks metaphysical stages in existence from creation to resurrection."
    },
    {
        "verse_number": "32:9",
        "surah": "As-Sajda",
        "text": "Then He fashioned him and breathed into him from His Spirit; and made for you hearing, sight, and hearts. Little are you grateful.",
        "metaphysical_concept": "Time of formation",
        "interpretation": "The creation timeline represents metaphysical progression toward consciousness."
    },
    {
        "verse_number": "50:43",
        "surah": "Qaf",
        "text": "And We destroyed the former peoples; and We have prepared for the disbelievers a Day of time measured.",
        "metaphysical_concept": "Eschatological time",
        "interpretation": "Time governs metaphysical justice and accountability."
    },
    {
        "verse_number": "70:4",
        "surah": "Al-Ma’arij",
        "text": "The angels and the Spirit ascend to Him in a Day of fifty thousand years.",
        "metaphysical_concept": "Divine perception of time",
        "interpretation": "Time operates differently in metaphysical and divine dimensions."
    },
    {
        "verse_number": "79:46",
        "surah": "An-Nazi’at",
        "text": "Then when the Horn is blown, and at once they will be resurrected from the graves to their Lord.",
        "metaphysical_concept": "Time and resurrection",
        "interpretation": "Divine sound triggers metaphysical time, collapsing life and death distinctions."
    },
    {
        "verse_number": "21:104",
        "surah": "Al-Anbiya",
        "text": "The Day when We will fold the heaven like the folding of a [written] sheet for the records. As We began the first creation, We will repeat it.",
        "metaphysical_concept": "Cyclic time",
        "interpretation": "Time is metaphysically cyclical; creation and end follow divine temporal patterns."
    },
    {
        "verse_number": "7:34",
        "surah": "Al-A’raf",
        "text": "And to every people, We have appointed a term; when their term arrives, they cannot delay it, nor can they advance it.",
        "metaphysical_concept": "Immutable time",
        "interpretation": "Time reflects metaphysical order and predetermined destiny."
    },
    {
        "verse_number": "10:49",
        "surah": "Yunus",
        "text": "No one can avert it; every people has a term.",
        "metaphysical_concept": "Determinism",
        "interpretation": "Time serves as the metaphysical mechanism for destiny."
    },
    {
        "verse_number": "11:105",
        "surah": "Hud",
        "text": "The Day that the earth will be replaced by another earth and the heavens [as well], and all creatures will stand before Allah.",
        "metaphysical_concept": "Eschatological timeline",
        "interpretation": "Time metaphysically leads to transformation and divine judgment."
    },
    {
        "verse_number": "22:47",
        "surah": "Al-Hajj",
        "text": "A day with your Lord is like a thousand years of what you count.",
        "metaphysical_concept": "Time relativity",
        "interpretation": "Time perception is metaphysically relative between human and divine."
    },
    {
        "verse_number": "32:5",
        "surah": "As-Sajda",
        "text": "He arranges every matter from the heaven to the earth, then it ascends to Him in a Day measured a thousand years.",
        "metaphysical_concept": "Temporal dimension",
        "interpretation": "Time operates differently in divine metaphysical measurement."
    },
    {
        "verse_number": "70:4",
        "surah": "Al-Ma’arij",
        "text": "The angels and the Spirit ascend to Him during a Day of fifty thousand years.",
        "metaphysical_concept": "Cosmic time scale",
        "interpretation": "Metaphysical time is vast and differs from human linear perception."
    },
    {
        "verse_number": "18:25",
        "surah": "Al-Kahf",
        "text": "They remained in their cave 300 years and exceeded by nine.",
        "metaphysical_concept": "Time dilation",
        "interpretation": "Earthly time differs from metaphysical time; spiritual suspension stretches perception."
    },
    {
        "verse_number": "22:5",
        "surah": "Al-Hajj",
        "text": "Creation stages illustrate temporal metaphysics.",
        "metaphysical_concept": "Life cycle",
        "interpretation": "Time governs metaphysical stages from creation to death and resurrection."
    },
    {
        "verse_number": "50:43",
        "surah": "Qaf",
        "text": "Prepared for the disbelievers is a Day of time measured.",
        "metaphysical_concept": "Judgment day",
        "interpretation": "Time serves as metaphysical mechanism for justice and recompense."
    },
    {
        "verse_number": "21:104",
        "surah": "Al-Anbiya",
        "text": "We will repeat creation as We began the first creation.",
        "metaphysical_concept": "Cyclic creation",
        "interpretation": "Time is metaphysically non-linear; cycles reflect divine order."
    },
    {
        "verse_number": "7:34",
        "surah": "Al-A’raf",
        "text": "Every nation has a term.",
        "metaphysical_concept": "Immutable decree",
        "interpretation": "Time reflects metaphysical determinism and divine orchestration."
    },
    {
        "verse_number": "10:49",
        "surah": "Yunus",
        "text": "No one can alter the appointed term.",
        "metaphysical_concept": "Predestination",
        "interpretation": "Time metaphysically enforces divine predestination."
    },
    {
        "verse_number": "2:186",
        "surah": "Al-Baqarah",
        "text": "And when My servants ask you concerning Me, indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.",
        "metaphysical_concept": "Divine proximity",
        "interpretation": "Metaphysical connection with God is immediate and responsive through prayer."
    },
    {
        "verse_number": "3:31",
        "surah": "Al-Imran",
        "text": "Say, 'If you love Allah, then follow me, Allah will love you and forgive you your sins.'",
        "metaphysical_concept": "Love and alignment",
        "interpretation": "Connection to God is metaphysically realized through alignment with divine guidance."
    },
    {
        "verse_number": "4:36",
        "surah": "An-Nisa",
        "text": "Worship Allah and associate nothing with Him, and show kindness to parents, relatives, orphans, the needy, the near neighbor, the distant neighbor, and companions.",
        "metaphysical_concept": "Social connection",
        "interpretation": "Human connections are metaphysically intertwined with divine obedience and ethical conduct."
    },
    {
        "verse_number": "5:2",
        "surah": "Al-Ma’idah",
        "text": "And cooperate in righteousness and piety, but do not cooperate in sin and aggression.",
        "metaphysical_concept": "Ethical connectivity",
        "interpretation": "Connections are metaphysically oriented toward positive energy and divine purpose."
    },
    {
        "verse_number": "6:141",
        "surah": "Al-An’am",
        "text": "Eat of the good things We have provided for you, and be grateful. Do not waste by excess.",
        "metaphysical_concept": "Connection to sustenance",
        "interpretation": "Connection with creation and God is metaphysically expressed through gratitude and balance."
    },
    {
        "verse_number": "7:56",
        "surah": "Al-A’raf",
        "text": "Do not cause corruption on the earth after it has been set in order. Call upon Him in fear and hope.",
        "metaphysical_concept": "Connection to Earth and God",
        "interpretation": "Human actions affect metaphysical harmony between creation and divine order."
    },
    {
        "verse_number": "10:31",
        "surah": "Yunus",
        "text": "Say, 'Who provides for you from the heaven and the earth? Who controls hearing and sight?'",
        "metaphysical_concept": "Interconnected existence",
        "interpretation": "All faculties and sustenance reflect metaphysical connection to the Creator."
    },
    {
        "verse_number": "13:28",
        "surah": "Ar-Ra’d",
        "text": "Those who have believed and whose hearts are assured by remembrance of Allah. Verily, in the remembrance of Allah do hearts find rest.",
        "metaphysical_concept": "Spiritual connection",
        "interpretation": "Metaphysical peace is achieved through conscious connection with the Divine."
    },
    {
        "verse_number": "16:90",
        "surah": "An-Nahl",
        "text": "Indeed, Allah commands justice, the doing of good, and liberality to relatives.",
        "metaphysical_concept": "Ethical and familial connection",
        "interpretation": "Connections between people have metaphysical importance in sustaining divine ethics."
    },
    {
        "verse_number": "17:1",
        "surah": "Al-Isra",
        "text": "Glory be to Him who took His servant by night from the Sacred Mosque to the Farthest Mosque whose surroundings We have blessed.",
        "metaphysical_concept": "Sacred connection",
        "interpretation": "Connection to sacred spaces manifests metaphysical communication with the Divine."
    },
    {
        "verse_number": "17:44",
        "surah": "Al-Isra",
        "text": "The seven heavens and the earth and all in them glorify Him; there is not a thing but glorifies His praise, though you do not understand their glorification.",
        "metaphysical_concept": "Cosmic connection",
        "interpretation": "All existence is metaphysically interconnected in praise and harmony with God."
    },
    {
        "verse_number": "21:92",
        "surah": "Al-Anbiya",
        "text": "Indeed, this nation of yours is one nation, and I am your Lord, so worship Me.",
        "metaphysical_concept": "Unity and divine connection",
        "interpretation": "All humans are metaphysically connected through their relationship with God."
    },
    {
        "verse_number": "24:35",
        "surah": "An-Nur",
        "text": "Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp.",
        "metaphysical_concept": "Connection through light",
        "interpretation": "Divine light metaphorically represents metaphysical connection between the Creator and creation."
    },
    {
        "verse_number": "29:69",
        "surah": "Al-‘Ankabut",
        "text": "And those who strive for Us – We will surely guide them to Our paths. And indeed, Allah is with the doers of good.",
        "metaphysical_concept": "Guided connection",
        "interpretation": "Metaphysical support exists for those connected through effort and divine intention."
    },
    {
        "verse_number": "31:12",
        "surah": "Luqman",
        "text": "Indeed, We gave Luqman wisdom: 'Be grateful to Allah.'",
        "metaphysical_concept": "Wisdom as connection",
        "interpretation": "Intellectual and moral wisdom strengthens metaphysical connection to God."
    },
    {
        "verse_number": "33:56",
        "surah": "Al-Ahzab",
        "text": "Indeed, Allah and His angels send blessings upon the Prophet. O you who believe, send blessings upon him and greet him with peace.",
        "metaphysical_concept": "Connection through blessing",
        "interpretation": "Metaphysical link exists between God, angels, and believers through prayers and blessings."
    },
    {
        "verse_number": "42:36",
        "surah": "Ash-Shura",
        "text": "Whatever you have been given is but enjoyment of worldly life, and that which Allah has is better and more lasting for those who believe and rely upon their Lord.",
        "metaphysical_concept": "Connection to eternal",
        "interpretation": "Temporal possessions connect humans to the eternal metaphysical reality when aligned with God."
    },
    {
        "verse_number": "49:13",
        "surah": "Al-Hujurat",
        "text": "O mankind, indeed We created you from a male and female and made you peoples and tribes that you may know one another.",
        "metaphysical_concept": "Human connection",
        "interpretation": "Interpersonal relationships are metaphysically designed to recognize and connect with others."
    },
    {
        "verse_number": "55:1-2",
        "surah": "Ar-Rahman",
        "text": "The Most Merciful, Taught the Qur’an, Created man, Taught him eloquence.",
        "metaphysical_concept": "Connection through knowledge",
        "interpretation": "Knowledge and language metaphysically connect humans to divine wisdom."
    },
    {
        "verse_number": "57:4",
        "surah": "Al-Hadid",
        "text": "He it is who created the heavens and the earth in six days and His Throne was upon the water.",
        "metaphysical_concept": "Divine connection to creation",
        "interpretation": "The Creator is metaphysically connected to all levels of existence."
    },
    {
        "verse_number": "59:22",
        "surah": "Al-Hashr",
        "text": "He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Most Merciful, Most Compassionate.",
        "metaphysical_concept": "Omniscient connection",
        "interpretation": "All metaphysical connections are known and sustained by God."
    },
    {
        "verse_number": "64:4",
        "surah": "At-Taghabun",
        "text": "He created the heavens and the earth in truth and formed you and perfected your forms. And to Him is the [final] destination.",
        "metaphysical_concept": "Connection to origin",
        "interpretation": "Human existence is metaphysically connected to divine origin and final return."
    },
    {
        "verse_number": "65:2",
        "surah": "At-Talaq",
        "text": "And whomever fears Allah – He will make for him a way out and provide for him from where he does not expect.",
        "metaphysical_concept": "Reliance and connection",
        "interpretation": "Metaphysical reliance on God ensures connection to sustenance and guidance."
    },
    {
        "verse_number": "82:6",
        "surah": "Al-Infitar",
        "text": "O mankind, what has deceived you concerning your Lord, the Generous?",
        "metaphysical_concept": "Awareness of connection",
        "interpretation": "Metaphysical neglect of divine connection leads to misguidance."
    },
    {
        "verse_number": "93:5",
        "surah": "Ad-Duhaa",
        "text": "And He found you lost and guided [you].",
        "metaphysical_concept": "Guidance connection",
        "interpretation": "Connection to God provides metaphysical guidance and direction."
    },
    {
        "verse_number": "112:1-4",
        "surah": "Al-Ikhlas",
        "text": "Say, 'He is Allah, [who is] One, Allah, the Eternal Refuge. He neither begets nor is born, nor is there to Him any equivalent.'",
        "metaphysical_concept": "Connection to the Absolute",
        "interpretation": "Ultimate metaphysical connection exists with the singular, eternal, and incomparable divine reality."
    }

  
];

export default function MetaphysicsRepository({ selectedCategory }: { selectedCategory: string }) {
    const filteredData = selectedCategory === 'All'
        ? metaphysicsData
        : metaphysicsData.filter(item => item.category === selectedCategory);

    return (
        <div className="glass-card mirror-effect" style={{ padding: '2rem', marginTop: '3rem', overflowX: 'auto' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-blue)' }}>
                Metaphysics Repository {selectedCategory !== 'All' && `— ${selectedCategory}`}
            </h3>

            {filteredData.length > 0 ? (
                <>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a0aec0', fontSize: '0.95rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Surah (Verse)</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Ayat</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Metaphysics Concept</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Interpretation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <div style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>{item.surah}</div>
                                        <div style={{ fontSize: '0.8rem' }}>{item.verse_number}</div>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', fontSize: '1.1rem' }} dir="rtl">
                                        {item.text}
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            background: 'rgba(74, 144, 226, 0.1)',
                                            borderRadius: '4px',
                                            fontSize: '0.85rem'
                                        }}>
                                            {item.metaphysical_concept}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', maxWidth: '400px', lineHeight: '1.5' }}>
                                        {item.interpretation}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mobile-rep-list">
                        {filteredData.map((item, index) => (
                            <div key={index} className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ fontWeight: 'bold', color: 'var(--accent-blue)' }}>{item.surah} ({item.verse_number})</div>
                                </div>
                                <div dir="rtl" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{item.text}</div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>Concept:</span>
                                    <div style={{ fontSize: '0.95rem' }}>{item.metaphysical_concept}</div>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', textTransform: 'uppercase' }}>Interpretation:</span>
                                    <div style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>{item.interpretation}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#a0aec0' }}>
                    Data collection ongoing for this ontological category.
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
