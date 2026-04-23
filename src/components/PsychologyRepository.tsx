'use client';

import React from 'react';

interface PsychologyEntry {
    surah: string;
    verseNo: string;
    ayat: string;
    insight: string;
    category: string;
}



const psychologyData: PsychologyEntry[] = [
    
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:84",
    "ayat": "Say: Everyone acts according to their own disposition, but your Lord knows best who is rightly guided.",
    "insight": "Human behavior is shaped by internal psychology (fitrah, personality). Allah acknowledges behavioral diversity and links it with divine guidance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Shams",
    "verseNo": "91:7–10",
    "ayat": "By the soul and the One who proportioned it. Then inspired it with its wickedness and its righteousness. Successful is the one who purifies it, and failed is the one who corrupts it.",
    "insight": "The soul contains both moral capacity and potential for corruption. Behavioral success requires self-purification — similar to psychological self-regulation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:286",
    "ayat": "Allah does not burden a soul beyond what it can bear...",
    "insight": "Psychological resilience is acknowledged. Humans are built to cope within limits and can survive hardship.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Furqan",
    "verseNo": "25:63",
    "ayat": "And the servants of the Most Merciful are those who walk on the earth humbly, and when the ignorant address them harshly, they say [words of] peace.",
    "insight": "Emotional intelligence, humility, and non-reactivity are key behavioral traits praised by Allah.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hujurat",
    "verseNo": "49:11–12",
    "ayat": "O believers! Do not let some men ridicule others... Do not spy or backbite...",
    "insight": "Prohibitions on mockery, suspicion, and gossip promote social-emotional maturity and ethical conduct.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ankabut",
    "verseNo": "29:2–3",
    "ayat": "Do people think once they say, 'We believe,' that they will not be tested?",
    "insight": "Psychological growth comes through tests. Challenges reveal inner strength and sincerity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Insan",
    "verseNo": "76:3",
    "ayat": "Indeed, We guided him to the way, be he grateful or ungrateful.",
    "insight": "Free will and behavioral choice are central to human psychology. Gratitude vs ingratitude reflects psychological polarity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Sad",
    "verseNo": "38:26",
    "ayat": "So judge between people in truth and do not follow desire, for it will mislead you from the way of Allah.",
    "insight": "Bias and desire distort judgment. Cognitive control is required for ethical decision-making.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:19–21",
    "ayat": "Indeed, man was created impatient: when evil touches him, he is fretful; and when good touches him, withholding.",
    "insight": "Human beings have innate emotional extremes. Therapy aims to regulate these behavioral patterns.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Takathur",
    "verseNo": "102:1–2",
    "ayat": "Competition in worldly increase distracts you until you visit the graves.",
    "insight": "Material obsession leads to existential blindness and loss of long-term awareness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Aal-E-Imran",
    "verseNo": "3:139",
    "ayat": "Do not weaken or grieve, for you will be superior if you are true believers.",
    "insight": "Resilience and positive self-belief are reinforced during hardship.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:179",
    "ayat": "They have hearts with which they do not understand... eyes with which they do not see... ears with which they do not hear...",
    "insight": "Cognitive disconnection leads to denial and lack of awareness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:155–157",
    "ayat": "We will surely test you with something of fear and hunger... but give good news to the patient.",
    "insight": "Stress and suffering are inevitable; patience is an active psychological coping mechanism.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:53",
    "ayat": "O My servants who have transgressed against themselves, do not despair of the mercy of Allah...",
    "insight": "A divine antidote to despair, supporting emotional recovery and hope restoration.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mutaffifin",
    "verseNo": "83:14",
    "ayat": "No! Rather, the stain has covered their hearts of that which they were earning.",
    "insight": "Repeated behavior leaves psychological imprint and emotional dulling.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Anfal",
    "verseNo": "8:24",
    "ayat": "Allah intervenes between a person and their heart...",
    "insight": "Emotions and intentions are deeply influenced by divine control and inner transformation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yusuf",
    "verseNo": "12:53",
    "ayat": "Indeed, the soul constantly incites to evil, except those upon whom my Lord has mercy.",
    "insight": "The ego has impulsive tendencies requiring self-control and moral discipline.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:103",
    "ayat": "Take from their wealth a charity by which you purify them and cause them increase...",
    "insight": "Altruism purifies inner states and enhances psychological well-being.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:72",
    "ayat": "Indeed, We offered the Trust to the heavens and the earth... but man undertook it; indeed, he was unjust and ignorant.",
    "insight": "Human psychology includes responsibility, overconfidence, and moral struggle.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hashr",
    "verseNo": "59:19",
    "ayat": "And be not like those who forgot Allah, so He made them forget themselves.",
    "insight": "Loss of spiritual awareness leads to loss of self-awareness and identity confusion.",
    "category": "Quranic Psychology"
  },
  
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:28",
    "ayat": "Allah wants to lighten your burden, for mankind was created weak.",
    "insight": "Acknowledges psychological and moral fragility in humans. Divine laws are designed to be compatible with human limitations.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:2",
    "ayat": "This is the Book about which there is no doubt, a guidance for those conscious of Allah.",
    "insight": "Psychological clarity and behavioral regulation require a clear, doubt-free foundation that reduces cognitive dissonance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hujurat",
    "verseNo": "49:13",
    "ayat": "We made you into nations and tribes so that you may know one another.",
    "insight": "Encourages cultural understanding and prosocial behavior, aligning with social psychology on intergroup relations and empathy.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Taha",
    "verseNo": "20:44",
    "ayat": "Speak to him mildly that perhaps he may be reminded or fear Allah.",
    "insight": "Gentleness influences behavioral change more effectively than harshness, aligning with counseling and conflict resolution principles.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Nur",
    "verseNo": "24:30–31",
    "ayat": "Tell the believing men and women to lower their gaze and guard their modesty...",
    "insight": "Behavioral control of visual and sexual impulses promotes mental clarity and societal ethics, reflecting impulse regulation strategies.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:100",
    "ayat": "Say: The evil and the good are not equal, even though the abundance of evil may impress you.",
    "insight": "Warns of psychological bias and desensitization to wrongdoing. Ethical discernment is a learned cognitive behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Luqman",
    "verseNo": "31:18–19",
    "ayat": "Do not turn your face away from people in arrogance... and be moderate in your pace and lower your voice.",
    "insight": "Teaches social etiquette, body language, and tone regulation, which are essential in emotional and behavioral control.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:8",
    "ayat": "Do not let hatred of a people prevent you from being just.",
    "insight": "Overriding emotional bias for justice reflects moral maturity and psychological self-regulation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:45",
    "ayat": "Seek help through patience and prayer. Indeed, it is difficult except for the humbly submissive.",
    "insight": "Integrating spiritual practices like prayer enhances resilience; humility is linked with mental openness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Anfal",
    "verseNo": "8:2",
    "ayat": "The believers are those whose hearts tremble when Allah is mentioned...",
    "insight": "Faith includes emotional sensitivity and physiological response, aligning with affective psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hadid",
    "verseNo": "57:16",
    "ayat": "Has the time not come for hearts of those who believe to be humbled...",
    "insight": "Reflects spiritual procrastination and delayed behavioral reform, calling for psychological awakening.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:67",
    "ayat": "The hypocrite men and hypocrite women are of one another. They enjoin what is wrong and forbid what is right...",
    "insight": "Describes behavioral dissonance and group psychology of hypocrisy as an inverse of righteous reinforcement.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mumtahanah",
    "verseNo": "60:4",
    "ayat": "There has already been for you an excellent example in Abraham...",
    "insight": "Role models shape behavioral patterns, consistent with social learning theory in psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:22",
    "ayat": "Is one whose chest Allah has expanded to [accept] Islam, and he is upon a light from his Lord...",
    "insight": "Describes mental openness and inner peace through spiritual submission, metaphorically linked to cognitive enlightenment.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:146",
    "ayat": "I will turn away from My signs those who are arrogant upon the earth without right...",
    "insight": "Arrogance blocks learning and perception, reflecting cognitive bias where pride resists correction.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:72–73",
    "ayat": "...Man was unjust and ignorant. So that Allah may punish the hypocrite men and women...",
    "insight": "Highlights human tendency toward impulsive acceptance of responsibility without understanding consequences.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Fajr",
    "verseNo": "89:15–16",
    "ayat": "When his Lord tries him and is generous to him, he says, 'My Lord has honored me.' But when He tests him by restricting his provision, he says, 'My Lord has humiliated me.'",
    "insight": "Illustrates attribution bias — misinterpreting life events emotionally instead of rationally or spiritually.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:28",
    "ayat": "Keep yourself patient [by being] with those who call upon their Lord...",
    "insight": "Social environment influences patience and consistency, aligning with behavioral therapy and support systems.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nahl",
    "verseNo": "16:125",
    "ayat": "Invite to the way of your Lord with wisdom and good instruction, and argue with them in a way that is best.",
    "insight": "Emphasizes psychological diplomacy, empathy, and effective communication strategies.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:204–206",
    "ayat": "There is a type of man whose speech may please you... but he is the most quarrelsome.",
    "insight": "Identifies deceptive or narcissistic behavioral traits where speech and action are mismatched.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Muhammad",
    "verseNo": "47:24",
    "ayat": "Do they not reflect upon the Qur’an, or are there locks upon [their] hearts?",
    "insight": "Encourages deep cognitive engagement; mental blocks like denial and arrogance hinder spiritual insight.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:70–71",
    "ayat": "Speak straightforward words. He will correct your deeds for you...",
    "insight": "Honest speech aligns inner and outer behavior, reflecting psychological congruence.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yunus",
    "verseNo": "10:12",
    "ayat": "When affliction touches man, he calls Us... then when We remove it, he continues as if he had never called upon Us...",
    "insight": "Illustrates behavioral inconsistency and situational religiosity under stress versus ease.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Taghabun",
    "verseNo": "64:14–15",
    "ayat": "Indeed, among your spouses and children are enemies to you...",
    "insight": "Highlights emotional attachment bias where family influence may divert a person from purpose.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Sad",
    "verseNo": "38:43–44",
    "ayat": "[Job said:] 'Indeed, I have been touched by hardship...'",
    "insight": "Represents patient psychological endurance through suffering as a model of trauma resilience.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Muddathir",
    "verseNo": "74:31",
    "ayat": "And We have set none but angels as Guardians of the Fire...",
    "insight": "The phrase 'disease in hearts' symbolizes psychological and moral pathology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:20–22",
    "ayat": "Satan whispered to them to expose their private parts...",
    "insight": "Shows behavioral manipulation through subtle suggestion, modeling temptation and decision distortion.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Anfal",
    "verseNo": "8:43–44",
    "ayat": "He showed them to you as few in your eyes... so Allah might accomplish a matter already destined.",
    "insight": "Perception and cognition can be altered to shape psychological preparedness in critical situations.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mutaffifin",
    "verseNo": "83:29–31",
    "ayat": "Indeed, those who committed crimes used to laugh at those who believed...",
    "insight": "Describes mockery as a defense mechanism and reflects social pressure and groupthink in deviant behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:135",
    "ayat": "Be persistently standing firm in justice... even if it be against yourselves or your parents...",
    "insight": "Encourages overcoming emotional bias to maintain integrity, a core principle of ethical psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nazi'at",
    "verseNo": "79:40–41",
    "ayat": "As for he who feared standing before his Lord and restrained the soul from its desire...",
    "insight": "Self-regulation of impulses is emphasized as essential for willpower and behavioral mastery.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:31",
    "ayat": "...Eat and drink, but do not be excessive. Indeed, He does not like those who commit excess.",
    "insight": "Promotes moderation in consumption as a foundation for physical and psychological well-being.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qiyamah",
    "verseNo": "75:2",
    "ayat": "And I swear by the self-reproaching soul.",
    "insight": "Acknowledges conscience as an inner critical voice guiding behavior, similar to the psychological concept of the superego.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:148",
    "ayat": "So race to [all that is] good...",
    "insight": "Encourages prosocial behavior and healthy competition toward righteousness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Takwir",
    "verseNo": "81:26–29",
    "ayat": "So where are you going? It is nothing but a reminder to the worlds...",
    "insight": "Warns against cognitive distraction and existential drift, urging reorientation toward purpose.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ar-Rum",
    "verseNo": "30:21",
    "ayat": "He created spouses for you... so you may find tranquility in them.",
    "insight": "Highlights emotional bonding and the therapeutic psychological role of companionship.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:103–104",
    "ayat": "Shall We inform you of the greatest losers in deeds? Those whose effort is lost in worldly life...",
    "insight": "Describes value misalignment and misguided focus leading to existential and behavioral loss.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:9",
    "ayat": "...Are those who know equal to those who do not know?",
    "insight": "Emphasizes psychological elevation through knowledge, reflection, and awareness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:35",
    "ayat": "Indeed, the Muslim men and Muslim women... the patient, the humble, the charitable...",
    "insight": "Presents a framework of psychological and behavioral virtues for holistic character development.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:55",
    "ayat": "Call upon your Lord humbly and privately...",
    "insight": "Encourages introspective prayer resembling meditative self-therapy and emotional regulation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:10–11",
    "ayat": "Their eyes grew wild and their hearts reached the throats...",
    "insight": "Describes panic and trauma response, aligning with acute stress reactions in psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:27–30",
    "ayat": "If you raise your hand to kill me, I will not raise mine...",
    "insight": "Illustrates moral restraint under rage and behavioral contrast in high-pressure ethical situations.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:205",
    "ayat": "Remember your Lord within yourself...",
    "insight": "Private remembrance (dhikr) supports emotional regulation and inner psychological calm.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:19–27",
    "ayat": "Man is created impatient... except those who pray, are consistent in prayer...",
    "insight": "Spiritual discipline and routine prayer regulate impulsivity and emotional instability.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mujadila",
    "verseNo": "58:11",
    "ayat": "...When you are told to rise, then rise. Allah will raise those who have believed among you...",
    "insight": "Encourages adaptive responsiveness and behavioral flexibility to instruction and guidance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:36",
    "ayat": "...Do good to parents, relatives, orphans, needy...",
    "insight": "Promotes empathy-driven prosocial behavior that supports community psychological well-being.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:179",
    "ayat": "They are like cattle — nay, more astray...",
    "insight": "Describes loss of reflective cognition and reduced human higher-order thinking.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nur",
    "verseNo": "24:19",
    "ayat": "Indeed, those who like that immorality should spread among believers...",
    "insight": "Condemns promotion of immorality, aligning with social contagion and influence in psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Muddathir",
    "verseNo": "74:49–51",
    "ayat": "They fled from the reminder like frightened donkeys...",
    "insight": "Represents avoidance behavior and emotional escape from truth or introspection.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:204–206",
    "ayat": "And when he turns away, he strives throughout the land to cause corruption...",
    "insight": "Describes manipulative behavior patterns and narcissistic destructive tendencies.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Taha",
    "verseNo": "20:124",
    "ayat": "Whoever turns away from My remembrance will have a miserable life...",
    "insight": "Spiritual neglect is associated with existential dissatisfaction and psychological distress.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ibrahim",
    "verseNo": "14:24–27",
    "ayat": "A good word is like a good tree...",
    "insight": "Positive speech influences long-term emotional and behavioral growth.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:273",
    "ayat": "The poor who are restricted... you would think them self-sufficient due to their restraint.",
    "insight": "Highlights non-verbal emotional cues and hidden psychological suffering.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nahl",
    "verseNo": "16:43",
    "ayat": "...Ask those who have knowledge if you do not know.",
    "insight": "Encourages cognitive humility as a foundation for learning and psychological growth.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:56",
    "ayat": "Lest a soul should say, 'Oh, how great is my regret...'",
    "insight": "Describes regret as a powerful emotional trigger for behavioral transformation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nahl",
    "verseNo": "16:125",
    "ayat": "Invite with wisdom and beautiful preaching...",
    "insight": "Outlines effective persuasion using empathy, timing, tone, and reasoning.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mumtahanah",
    "verseNo": "60:7",
    "ayat": "Perhaps Allah will put, between you and those to whom you have been enemies, affection.",
    "insight": "Emotion is dynamic and capable of transformation over time.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:12",
    "ayat": "I am better than him...",
    "insight": "Illustrates superiority complex as a root of arrogance and discriminatory thinking.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:151–152",
    "ayat": "...So remember Me; I will remember you...",
    "insight": "Reciprocal remembrance strengthens emotional and spiritual connection.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ar-Ra'd",
    "verseNo": "13:11",
    "ayat": "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
    "insight": "Fundamental principle of self-transformation and behavioral change.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:195",
    "ayat": "Do not throw yourselves with your own hands into destruction...",
    "insight": "Behavioral warning against self-harm, risky behavior, and negligence.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zalzalah",
    "verseNo": "99:7–8",
    "ayat": "Whoever does an atom’s weight of good or evil will see it.",
    "insight": "Promotes behavioral accountability where even micro-actions influence psychological and spiritual outcomes.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Fath",
    "verseNo": "48:29",
    "ayat": "...You see them bowing and prostrating, seeking bounty from Allah...",
    "insight": "External behavior reflects internal humility and purpose-driven intention.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:43",
    "ayat": "Do not approach prayer while intoxicated...",
    "insight": "Connects consciousness and cognitive clarity with behavioral responsibility.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:32",
    "ayat": "Saving one life is as if saving all mankind...",
    "insight": "Encourages ethical behavior rooted in empathy and protection of human life.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Takwir",
    "verseNo": "81:8–9",
    "ayat": "And when the girl buried alive is asked...",
    "insight": "Condemns gender-based violence and promotes psychological and social protection of the vulnerable.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hadid",
    "verseNo": "57:20",
    "ayat": "Life is amusement and diversion...",
    "insight": "Highlights human susceptibility to distraction and encourages meta-awareness of behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:28",
    "ayat": "And do not turn your eyes away from them desiring the adornments of the worldly life...",
    "insight": "Warns against visual distraction and social comparison bias.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qasas",
    "verseNo": "28:76–77",
    "ayat": "Do not exult, indeed Allah does not like the exultant...",
    "insight": "Overjoyed arrogance reflects psychological imbalance and ego inflation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:286",
    "ayat": "Forgive us, have mercy on us, pardon us...",
    "insight": "Encourages behavioral humility through self-awareness and reflective supplication.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:5",
    "ayat": "So be patient with gracious patience.",
    "insight": "Defines patience as a refined emotional and behavioral state under stress.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Muzzammil",
    "verseNo": "73:8",
    "ayat": "And devote yourself to Him with complete devotion.",
    "insight": "Represents deep motivational regulation through full behavioral alignment with purpose.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tur",
    "verseNo": "52:48",
    "ayat": "Be patient for the decision of your Lord...",
    "insight": "Encourages delayed gratification and psychological patience under divine timing.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Furqan",
    "verseNo": "25:20",
    "ayat": "And We made some of you as a trial for others...",
    "insight": "Explains relational interactions as psychological tests shaping behavior and emotional growth.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qasas",
    "verseNo": "28:83",
    "ayat": "That home of the Hereafter We assign to those who do not desire exaltedness...",
    "insight": "Promotes suppression of ego-driven desires for higher psychological and spiritual purpose.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Maryam",
    "verseNo": "19:76",
    "ayat": "And Allah increases those who are guided in guidance...",
    "insight": "Describes a positive behavioral spiral where guidance leads to further improvement.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:58",
    "ayat": "When you judge between people, judge with justice...",
    "insight": "Encourages objective behavior over emotional bias in leadership and decision-making.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hijr",
    "verseNo": "15:47",
    "ayat": "We will remove whatever is in their breasts of resentment...",
    "insight": "Represents ultimate emotional healing and psychological purification.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Takwir",
    "verseNo": "81:1–14",
    "ayat": "When the sun is wrapped up... and each soul will know what it has put forth.",
    "insight": "Represents final behavioral accountability and deep self-reflection.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Infitar",
    "verseNo": "82:6–8",
    "ayat": "O man, what has deceived you concerning your Lord...",
    "insight": "Challenges cognitive bias and self-deception, promoting self-awareness and gratitude.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Fajr",
    "verseNo": "89:27–30",
    "ayat": "O tranquil soul, return to your Lord, well-pleased and pleasing...",
    "insight": "Represents the ideal psychological state of inner peace, acceptance, and spiritually matured behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hijr",
    "verseNo": "15:46–48",
    "ayat": "Enter in peace, secure... and We removed whatever resentment was in their hearts.",
    "insight": "Describes ultimate emotional cleansing and healing from trauma, grudges, and psychological wounds.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:128",
    "ayat": "...And reconciliation is best...",
    "insight": "Encourages conflict resolution and compromise as emotionally intelligent behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Taha",
    "verseNo": "20:42–44",
    "ayat": "Go to Pharaoh... speak to him gently...",
    "insight": "Advocates behavioral gentleness and emotional restraint even in confronting wrongdoing, reflecting psychological diplomacy.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nur",
    "verseNo": "24:22",
    "ayat": "...Let them pardon and overlook. Do you not wish that Allah should forgive you?",
    "insight": "Forgiveness functions as behavioral therapy, enabling emotional release from resentment.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mujadila",
    "verseNo": "58:11",
    "ayat": "...Allah will raise those who have believed and those given knowledge...",
    "insight": "Intellectual humility and knowledge-seeking lead to psychological and social elevation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qasas",
    "verseNo": "28:76",
    "ayat": "Indeed, Qarun was from the people of Moses, but he tyrannized them...",
    "insight": "Illustrates ego-driven corruption caused by wealth, pride, and psychological inflation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:54",
    "ayat": "...But man has ever been more quarrelsome than anything.",
    "insight": "Highlights cognitive defensiveness and behavioral tendency toward argument and resistance to truth.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:199",
    "ayat": "Take what is given freely, enjoin what is right, and turn away from the ignorant.",
    "insight": "Teaches emotional boundaries, assertive kindness, and disengagement from toxic interactions.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Maryam",
    "verseNo": "19:96",
    "ayat": "Indeed, those who have believed and done righteous deeds — the Most Merciful will appoint for them affection.",
    "insight": "Positive behavior leads to love and emotional bonding, reflecting social-emotional reinforcement.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tin",
    "verseNo": "95:4–5",
    "ayat": "We have certainly created man in the best stature; then We return him to the lowest of the low...",
    "insight": "Human behavior has dual potential — elevation through virtue or decline through vice.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'un",
    "verseNo": "107:4–6",
    "ayat": "Woe to those who pray, but are heedless of their prayer...",
    "insight": "Warns against ritualistic behavior without sincerity, reflecting behavioral hypocrisy.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tahrim",
    "verseNo": "66:6",
    "ayat": "O you who believe, protect yourselves and your families from a Fire...",
    "insight": "Emphasizes behavioral responsibility and leadership within family psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:28",
    "ayat": "...Do not let your eyes pass beyond them, desiring the adornments of worldly life...",
    "insight": "Warns against social comparison, envy, and distraction driven by visual perception.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah As-Saffat",
    "verseNo": "37:85–87",
    "ayat": "Do you not see what you worship? You and your forefathers?",
    "insight": "Encourages cognitive independence and critical evaluation of inherited beliefs.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Luqman",
    "verseNo": "31:13–19",
    "ayat": "...Establish prayer, enjoin good, forbid evil, and bear what befalls you...",
    "insight": "Defines wisdom as a combination of moral action, emotional resilience, and calm behavioral strength.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mumtahanah",
    "verseNo": "60:8",
    "ayat": "Allah does not forbid you from being just and kind to those who have not fought you...",
    "insight": "Promotes rational ethics, compassion, and balanced social behavior beyond emotional bias.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hujurat",
    "verseNo": "49:6",
    "ayat": "If a sinner comes with news, verify it...",
    "insight": "Encourages fact-checking and rational cognition before reaction, reducing impulsive behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:23–24",
    "ayat": "Do not say of anything, 'I will do that tomorrow,' except [by saying], 'If Allah wills.'",
    "insight": "Teaches humility in planning and awareness of human limitation in control and certainty.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qasas",
    "verseNo": "28:25",
    "ayat": "One of the two women said: 'O my father, hire him...'",
    "insight": "Demonstrates behavioral judgment, character assessment, and trust-based decision-making.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:135",
    "ayat": "...Even if it be against yourselves or parents...",
    "insight": "Encourages behavioral integrity over emotional bias, promoting moral objectivity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:177",
    "ayat": "...It is righteousness to believe... to give... to be patient...",
    "insight": "Defines righteousness as a multi-dimensional psychological and behavioral framework.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qasas",
    "verseNo": "28:83",
    "ayat": "We assign the home of the Hereafter to those who do not desire exaltedness...",
    "insight": "Rewards suppression of ego-driven dominance and promotes behavioral detachment from arrogance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ar-Rum",
    "verseNo": "30:8",
    "ayat": "Do they not reflect within themselves?",
    "insight": "Encourages introspection and metacognition as foundations for behavioral insight.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Sad",
    "verseNo": "38:26",
    "ayat": "...Do not follow desire, lest it mislead you...",
    "insight": "Warns against impulse-driven decision-making and reinforces cognitive control.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:10",
    "ayat": "Indeed, the patient will be given their reward without measure.",
    "insight": "Establishes long-term reward for emotional discipline and patience.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ghafir",
    "verseNo": "40:35",
    "ayat": "Those who dispute concerning the verses of Allah without authority...",
    "insight": "Describes cognitive arrogance and intellectual dishonesty in argumentation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:96",
    "ayat": "If only the people of the towns had believed and feared Allah...",
    "insight": "Highlights collective behavioral influence and group-level psychological change.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:216",
    "ayat": "You may dislike a thing while it is good for you...",
    "insight": "Challenges emotion-based judgment and promotes cognitive flexibility.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:142",
    "ayat": "The hypocrites try to deceive Allah, but He is deceiving them...",
    "insight": "Exposes behavioral hypocrisy and self-deception in psychological terms.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:67",
    "ayat": "They enjoin what is wrong and forbid what is right...",
    "insight": "Represents moral inversion and pathological social behavior patterns.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yusuf",
    "verseNo": "12:18",
    "ayat": "And they brought upon his shirt false blood...",
    "insight": "Illustrates manipulation, deception, and guilt projection in social behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yusuf",
    "verseNo": "12:86",
    "ayat": "I complain of my grief and sorrow only to Allah...",
    "insight": "Models healthy emotional processing through spiritual attachment and expression.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yusuf",
    "verseNo": "12:53",
    "ayat": "Indeed, the soul is ever inclined to evil...",
    "insight": "Highlights internal impulsive drives requiring ethical discipline and guidance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:54",
    "ayat": "And follow the best of what was revealed...",
    "insight": "Encourages behavioral optimization and striving for ethical excellence.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:272",
    "ayat": "...You are not responsible for their guidance...",
    "insight": "Promotes psychological detachment from outcomes beyond personal control while maintaining compassion.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:105",
    "ayat": "...You are only responsible for yourselves...",
    "insight": "Establishes psychological boundaries and personal accountability.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:40",
    "ayat": "...Do not grieve; indeed Allah is with us.",
    "insight": "Provides emotional reassurance and anxiety reduction through spiritual presence.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Talaq",
    "verseNo": "65:2–3",
    "ayat": "...And whoever relies upon Allah – then He is sufficient for him.",
    "insight": "Strengthens psychological trust, reducing fear and enhancing emotional stability.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Aal-E-Imran",
    "verseNo": "3:146",
    "ayat": "...They were not weakened for what struck them, nor did they weaken or submit.",
    "insight": "Describes psychological resilience and emotional endurance in adversity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:110",
    "ayat": "So whoever hopes to meet his Lord — let him do righteous work...",
    "insight": "Links hope with consistent righteous behavior, reflecting future-oriented moral psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:21",
    "ayat": "Indeed in the Messenger of Allah you have a good example...",
    "insight": "Establishes prophetic behavioral modeling, aligning with exemplar theory in psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:103",
    "ayat": "...Charity purifies them and causes growth...",
    "insight": "Highlights altruism as a mechanism for emotional healing and psychological growth.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hadid",
    "verseNo": "57:16",
    "ayat": "...Has the time not come for hearts to soften...",
    "insight": "Describes emotional awakening and recovery from psychological numbness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:20",
    "ayat": "When evil touches him, impatient...",
    "insight": "Describes emotional reactivity under stress as a natural but unmanaged behavioral tendency.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Adh-Dhariyat",
    "verseNo": "51:56",
    "ayat": "I created jinn and humans only to worship Me.",
    "insight": "Defines behavioral identity through purposeful existence and motivational alignment.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tin",
    "verseNo": "95:6",
    "ayat": "Except those who believe and do righteous deeds...",
    "insight": "Suggests virtuous action as the pathway to prevent behavioral and moral decline.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah As-Saff",
    "verseNo": "61:2–3",
    "ayat": "Why do you say what you do not do?",
    "insight": "Highlights behavioral inconsistency and cognitive dissonance between speech and action.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qalam",
    "verseNo": "68:4",
    "ayat": "And indeed, you are of a great moral character.",
    "insight": "Presents prophetic behavior as the highest standard of moral psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zukhruf",
    "verseNo": "43:36",
    "ayat": "Whoever turns away from the remembrance... We assign for him a devil.",
    "insight": "Describes behavioral distortion resulting from neglect of spiritual grounding and increased negative reinforcement loops.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hijr",
    "verseNo": "15:97–98",
    "ayat": "We certainly know that your chest is distressed... So glorify your Lord and be of those who prostrate.",
    "insight": "Provides a coping mechanism for psychological distress through gratitude and spiritual surrender.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qiyamah",
    "verseNo": "75:14–15",
    "ayat": "Rather, man will be a witness against himself, even if he presents his excuses.",
    "insight": "Emphasizes inherent self-awareness and moral accountability in human psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:70",
    "ayat": "Speak words of appropriate justice.",
    "insight": "Encourages verbal self-regulation as a marker of emotional maturity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mutaffifin",
    "verseNo": "83:14",
    "ayat": "No! But on their hearts is a stain because of what they used to earn.",
    "insight": "Describes moral behavior as leaving psychological and emotional imprints affecting judgment.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hajj",
    "verseNo": "22:11",
    "ayat": "Among the people is he who worships Allah on an edge...",
    "insight": "Represents conditional and unstable belief patterns based on personal comfort.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nur",
    "verseNo": "24:19",
    "ayat": "Those who love that immorality spreads...",
    "insight": "Warns against individuals who propagate immoral behavior and damage collective psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:50",
    "ayat": "Will you then take him and his offspring as allies...",
    "insight": "Warns against blind trust and emphasizes behavioral vigilance in social influence.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qamar",
    "verseNo": "54:17",
    "ayat": "And We have certainly made the Quran easy to remember...",
    "insight": "Highlights cognitive accessibility and ease of memorization as a behavioral facilitation mechanism.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:269",
    "ayat": "He gives wisdom to whom He wills...",
    "insight": "Defines wisdom as a psychological trait involving deep emotional and cognitive intelligence.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hadid",
    "verseNo": "57:23",
    "ayat": "...So you may not grieve over what has escaped you nor exult over what He has given you...",
    "insight": "Provides a framework for emotional regulation between loss and gain, promoting psychological balance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qasas",
    "verseNo": "28:26",
    "ayat": "Indeed, the best one you can hire is the strong and trustworthy.",
    "insight": "Values competence and character in decision-making, relevant to organizational psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:22–27",
    "ayat": "Except those who are consistent in prayer...",
    "insight": "Repetition of positive habits builds behavioral stability and psychological resilience.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:153",
    "ayat": "Seek help through patience and prayer...",
    "insight": "Combines cognitive endurance and spiritual routine as a coping strategy for stress.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Anfal",
    "verseNo": "8:73",
    "ayat": "They protect one another. If you do not do so, there will be chaos...",
    "insight": "Highlights prosocial alliances as essential for social order and collective psychological responsibility.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:37",
    "ayat": "Do not walk upon the earth exultantly. Indeed, you will never tear the earth...",
    "insight": "Challenges arrogance by highlighting its irrationality and encouraging humility in behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:44",
    "ayat": "Do you order righteousness and forget yourselves?",
    "insight": "Critiques behavioral hypocrisy and emphasizes alignment between belief and action.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nahl",
    "verseNo": "16:90",
    "ayat": "Indeed, Allah commands justice, excellence, and giving...",
    "insight": "Provides a comprehensive framework for ethical social behavior and emotional justice.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mujadila",
    "verseNo": "58:14",
    "ayat": "Have you not seen those who make allies of people with whom Allah is angry?",
    "insight": "Demonstrates social conformity influence on personal ethics and behavioral alignment.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Takathur",
    "verseNo": "102:1",
    "ayat": "Competition in [worldly] increase diverts you...",
    "insight": "Describes material obsession as a distraction from self-actualization and higher purpose.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mutaffifin",
    "verseNo": "83:1–3",
    "ayat": "Woe to those who give less in measure...",
    "insight": "Small unethical behaviors reflect deeper moral distortions and character issues.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:286",
    "ayat": "Allah does not burden a soul beyond what it can bear...",
    "insight": "Reassures psychological capacity and frames stress as manageable within human limits.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ankabut",
    "verseNo": "29:2",
    "ayat": "Do the people think they will be left to say 'We believe' without being tested?",
    "insight": "Tests reveal true behavioral and psychological authenticity of belief.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Fussilat",
    "verseNo": "41:34",
    "ayat": "Repel evil with that which is better...",
    "insight": "Promotes non-reactive behavior to reduce conflict escalation and emotional escalation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hashr",
    "verseNo": "59:19",
    "ayat": "And be not like those who forgot Allah, so He made them forget themselves...",
    "insight": "Spiritual neglect leads to identity confusion and psychological disconnection from self.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:155",
    "ayat": "We will surely test you with fear, hunger, and loss...",
    "insight": "Life stressors function as catalysts for psychological growth and patience development.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:46",
    "ayat": "Wealth and children are [but] adornment of the worldly life...",
    "insight": "Warns against attachment to transient status symbols and external validation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ar-Rum",
    "verseNo": "30:41",
    "ayat": "Corruption has appeared on land and sea because of what the hands of people have earned...",
    "insight": "Links behavioral actions to environmental and societal consequences (moral ecology).",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Buruj",
    "verseNo": "85:10",
    "ayat": "Indeed, those who persecute the believers...",
    "insight": "Describes persecution as a form of psychological abuse and oppression.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Furqan",
    "verseNo": "25:67",
    "ayat": "And those who, when they spend, are neither extravagant nor stingy...",
    "insight": "Encourages financial moderation as a reflection of emotional and behavioral balance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:42",
    "ayat": "Allah takes the souls at the time of their death and during sleep...",
    "insight": "Frames sleep as a minor form of death, enabling behavioral reset and reflection.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:58",
    "ayat": "When you judge, judge with justice...",
    "insight": "Emotional neutrality is essential for ethical decision-making and behavioral fairness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:33",
    "ayat": "Say, My Lord has forbidden immoralities...",
    "insight": "Establishes behavioral boundaries that protect psychological, social, and spiritual well-being.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:135",
    "ayat": "Stand firm in justice, even if against yourself...",
    "insight": "Represents moral courage as transcendence over ego-driven bias.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:53",
    "ayat": "Do not despair of the mercy of Allah...",
    "insight": "Frames hope as a psychological healing force essential for recovery from guilt and depression.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Fath",
    "verseNo": "48:29",
    "ayat": "...Merciful among themselves...",
    "insight": "Highlights emotional empathy as a foundation of collective behavioral harmony.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hujurat",
    "verseNo": "49:10",
    "ayat": "Believers are but brothers, so make peace between them.",
    "insight": "Reconciliation is framed as an active behavioral responsibility.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:100",
    "ayat": "The evil and the good are not equal, even if the abundance of evil impresses you...",
    "insight": "Encourages ethical discernment over cognitive bias toward popularity or normalization of wrongdoing.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:286",
    "ayat": "Our Lord, do not impose blame upon us if we forget or make a mistake...",
    "insight": "Recognizes human cognitive error and behavioral slips, emphasizing divine compassion for limitations.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:267",
    "ayat": "Spend from the good things you have earned...",
    "insight": "Teaches ethical generosity emphasizing quality and integrity of behavior, not just quantity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:36",
    "ayat": "Worship Allah and associate nothing with Him, and be good to parents...",
    "insight": "Defines a hierarchy of relational ethics spanning family, neighbors, and society.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:23–24",
    "ayat": "Do not even say 'uff' to them...",
    "insight": "Highlights micro-level speech control as a reflection of deep emotional regulation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tahrim",
    "verseNo": "66:6",
    "ayat": "O you who have believed, protect yourselves and your families...",
    "insight": "Emphasizes intergenerational behavioral responsibility and ethical modeling.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mumtahanah",
    "verseNo": "60:12",
    "ayat": "...Do not kill their children, nor slander, nor disobey...",
    "insight": "Outlines prevention of destructive behavioral patterns affecting psychological and moral order.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hijr",
    "verseNo": "15:3",
    "ayat": "Let them eat and enjoy themselves and be diverted...",
    "insight": "Describes behavioral heedlessness and distraction from ultimate purpose.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yunus",
    "verseNo": "10:12",
    "ayat": "When harm touches man, he calls Us... but when We remove it, he forgets...",
    "insight": "Describes behavioral inconsistency and situational religiosity under changing conditions.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:55",
    "ayat": "Call upon your Lord humbly and secretly...",
    "insight": "Emphasizes sincerity and inner-directed behavior in spiritual practice.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Furqan",
    "verseNo": "25:72",
    "ayat": "...And when they pass by ill speech, they pass by with dignity.",
    "insight": "Demonstrates emotional regulation and disciplined disengagement from provocation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Anfal",
    "verseNo": "8:24",
    "ayat": "Respond to Allah and His Messenger when He calls you to that which gives you life...",
    "insight": "Frames divine guidance as a source of psychological and spiritual vitality.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nur",
    "verseNo": "24:61",
    "ayat": "...So when you enter houses, greet each other...",
    "insight": "Encourages social warmth, civility, and positive interpersonal behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Fajr",
    "verseNo": "89:15–16",
    "ayat": "But when He tries him and restricts his provision, he says, 'My Lord has humiliated me.'",
    "insight": "Warns against emotional misattribution and immature interpretation of hardship.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:84",
    "ayat": "Say, 'Everyone acts according to his own disposition...'",
    "insight": "Explains that behavior is shaped by internal psychological disposition and personality structure.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mumtahanah",
    "verseNo": "60:4",
    "ayat": "Indeed, there has been an excellent example for you in Abraham and those with him...",
    "insight": "Models principle-based behavioral detachment and psychological resilience in maintaining ethical boundaries.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:38",
    "ayat": "What is [the matter] with you that, when you are told to march forth... you cling heavily to the earth?",
    "insight": "Describes behavioral inertia, avoidance, and preference for comfort over responsibility.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:28",
    "ayat": "...Man was created weak.",
    "insight": "Acknowledges human psychological and emotional vulnerability as a fundamental trait.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:143",
    "ayat": "When Moses came at the appointed time... he fell unconscious.",
    "insight": "Shows that intense spiritual experiences can cause physiological and cognitive overload.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:13",
    "ayat": "...We cursed them and made their hearts hard...",
    "insight": "Repeated rejection of truth leads to emotional desensitization and psychological rigidity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hajj",
    "verseNo": "22:46",
    "ayat": "...It is not the eyes that are blind, but the hearts...",
    "insight": "Distinguishes physical sight from cognitive and emotional perception (interpretive blindness).",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zukhruf",
    "verseNo": "43:33–35",
    "ayat": "...We would have made for them silver roofs... but all that is but enjoyment of worldly life.",
    "insight": "Critiques materialism and status-driven behavior as psychologically distracting from higher purpose.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qasas",
    "verseNo": "28:83",
    "ayat": "That home of the Hereafter We assign to those who do not desire exaltedness...",
    "insight": "Rewards humility and suppression of ego-driven dominance behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Taghabun",
    "verseNo": "64:11",
    "ayat": "No disaster strikes except by permission of Allah...",
    "insight": "Encourages cognitive reframing and acceptance in psychological trauma response.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:61",
    "ayat": "Would you exchange what is better for what is worse?",
    "insight": "Highlights regressive behavioral choices driven by attachment to lower desires.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:119",
    "ayat": "I will mislead them... and change the creation of Allah.",
    "insight": "Describes identity distortion and behavioral manipulation as a psychological mechanism of misguidance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:91",
    "ayat": "...No blame is there upon the weak or the ill...",
    "insight": "Recognizes variability in human capacity and supports inclusive behavioral expectations.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:28",
    "ayat": "Keep yourself patient with those who call upon their Lord...",
    "insight": "Emphasizes social environment as a determinant of behavioral consistency and psychological stability.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:128",
    "ayat": "...Reconciliation is best.",
    "insight": "Promotes emotionally intelligent conflict resolution and peace-oriented behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:143",
    "ayat": "Thus We have made you a middle nation...",
    "insight": "Establishes moderation and behavioral balance as the foundational human psychological model.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:179",
    "ayat": "...They have hearts with which they do not understand...",
    "insight": "Describes misalignment between cognitive and emotional faculties leading to psychological stagnation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ar-Ra'd",
    "verseNo": "13:11",
    "ayat": "Indeed, Allah will not change the condition of a people until they change what is in themselves.",
    "insight": "Defines behavioral self-reform as the prerequisite for psychological and societal transformation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:10",
    "ayat": "The patient will be given their reward without measure.",
    "insight": "Reinforces long-term emotional discipline and patience as a core psychological virtue.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nur",
    "verseNo": "24:30",
    "ayat": "Tell the believing men to lower their gaze...",
    "insight": "Teaches sensory regulation as a form of behavioral self-control over desire and impulse.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nur",
    "verseNo": "24:31",
    "ayat": "...And tell the believing women to lower their gaze...",
    "insight": "Extends self-regulation of sensory input as a universal behavioral expectation for psychological discipline.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:286",
    "ayat": "...Pardon us, forgive us, have mercy on us...",
    "insight": "Models psychological humility and emotional vulnerability as a pathway to divine mercy and inner relief.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tur",
    "verseNo": "52:47",
    "ayat": "...Indeed, the wrongdoers are in error.",
    "insight": "Links behavioral deviance with cognitive distortion in moral perception and judgment.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Sad",
    "verseNo": "38:26",
    "ayat": "Do not follow desire, lest it mislead you from the path of Allah...",
    "insight": "Warns against impulse-driven behavior and promotes long-term cognitive and moral alignment.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:20–22",
    "ayat": "Satan whispered to them to reveal what was hidden...",
    "insight": "Describes psychological manipulation through temptation, curiosity, and induced shame.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Takwir",
    "verseNo": "81:14",
    "ayat": "Each soul will know what it has put forth.",
    "insight": "Emphasizes self-awareness and internal psychological accountability for all actions.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:11",
    "ayat": "Man prays for evil as he prays for good...",
    "insight": "Highlights emotional confusion and distorted intention under psychological distress.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:38",
    "ayat": "...And spend to be seen by people...",
    "insight": "Critiques performative behavior and highlights the psychology of external validation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:19–21",
    "ayat": "Man is created anxious...",
    "insight": "Describes baseline human emotional anxiety requiring regulation and behavioral discipline.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:36",
    "ayat": "Be kind to parents, relatives, orphans, needy...",
    "insight": "Establishes prosocial behavioral ethics based on empathy and social responsibility.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tur",
    "verseNo": "52:48",
    "ayat": "Be patient for the decision of your Lord...",
    "insight": "Teaches cognitive trust and emotional endurance during uncertainty.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Furqan",
    "verseNo": "25:63",
    "ayat": "And the servants of the Most Merciful are those who walk humbly...",
    "insight": "Defines ideal behavioral psychology through humility and emotional non-reactivity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:18",
    "ayat": "...Had you looked at them, you would have turned from them in flight...",
    "insight": "Describes subconscious emotional reactions triggered by perceived spiritual or existential awe.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:28",
    "ayat": "If you stretch out your hand to kill me, I will not stretch out mine...",
    "insight": "Models non-retaliatory behavior grounded in moral conviction under stress.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:146",
    "ayat": "...Even if they see every sign, they will not believe...",
    "insight": "Explains stubborn rejection as a result of pride and entrenched behavioral resistance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hadid",
    "verseNo": "57:16",
    "ayat": "Has the time not come for hearts to be humbled...",
    "insight": "Calls for emotional awakening as a remedy for spiritual numbness and behavioral stagnation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Taghabun",
    "verseNo": "64:14",
    "ayat": "Your spouses and children are a trial...",
    "insight": "Frames relationships as emotional and behavioral tests requiring awareness and balance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yusuf",
    "verseNo": "12:5",
    "ayat": "Do not relate your vision to your brothers...",
    "insight": "Encourages behavioral discretion and emotional protection from envy and harm.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yusuf",
    "verseNo": "12:24",
    "ayat": "He would have inclined to her had he not seen the sign of his Lord...",
    "insight": "Illustrates moral insight as a force that interrupts impulse-driven behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nahl",
    "verseNo": "16:125",
    "ayat": "Invite to the way of your Lord with wisdom and good instruction...",
    "insight": "Presents effective persuasion as a blend of empathy, intellect, and timing in social behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Sad",
    "verseNo": "38:41–44",
    "ayat": "Indeed, Satan has touched me with hardship and torment...",
    "insight": "Models psychological endurance through Prophet Ayyub’s trauma, emphasizing emotional resilience and purification through suffering.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:9",
    "ayat": "Are those who know equal to those who do not?",
    "insight": "Highlights cognitive awareness as the foundation for superior behavioral and psychological functioning.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Furqan",
    "verseNo": "25:68",
    "ayat": "...And they do not kill the soul which Allah has forbidden...",
    "insight": "Establishes strong moral constraints against violence and reinforces behavioral inhibition of harm.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:100",
    "ayat": "Say: The evil and the good are not equal...",
    "insight": "Encourages moral discernment and resistance to ethical confusion in behavioral judgment.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:2",
    "ayat": "A guidance for those who are conscious of Allah...",
    "insight": "Indicates that behavioral transformation depends on internal readiness and psychological openness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:198",
    "ayat": "If you call them to guidance, they do not hear...",
    "insight": "Describes psychological deafness resulting from habitual resistance and cognitive closure.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hujurat",
    "verseNo": "49:11",
    "ayat": "Do not ridicule others... nor defame... nor insult with nicknames...",
    "insight": "Addresses the psychological harm of bullying and promotes respectful social behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hujurat",
    "verseNo": "49:12",
    "ayat": "Avoid much suspicion. Indeed, some suspicion is sin...",
    "insight": "Warns against paranoid thinking patterns and distrust-based behavioral distortions.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:10",
    "ayat": "In their hearts is a disease, so Allah increases them in disease...",
    "insight": "Explains how repeated denial of truth deepens psychological and moral corruption.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tariq",
    "verseNo": "86:9",
    "ayat": "The Day the secrets will be put on trial.",
    "insight": "Emphasizes ultimate psychological transparency where all hidden behavior is revealed.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:28",
    "ayat": "If you raise your hand against me to kill me, I shall not raise mine...",
    "insight": "Demonstrates advanced emotional control and non-retaliatory behavioral ethics under threat.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:62",
    "ayat": "Indeed, those who believed... will have their reward...",
    "insight": "Promotes inclusive moral psychology and reduces behavioral in-group bias.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Yusuf",
    "verseNo": "12:86",
    "ayat": "I only complain of my grief and sorrow to Allah...",
    "insight": "Models safe emotional disclosure and trauma-informed spiritual coping.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:286",
    "ayat": "Do not burden us with what we cannot bear...",
    "insight": "Recognizes psychological limits and emphasizes compassionate behavioral expectations.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Muzzammil",
    "verseNo": "73:10",
    "ayat": "Be patient over what they say and avoid them with gracious avoidance.",
    "insight": "Encourages emotionally mature disengagement from verbal harm and provocation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hadid",
    "verseNo": "57:23",
    "ayat": "...So that you do not grieve over what you missed...",
    "insight": "Promotes emotional regulation and acceptance of loss and unmet expectations.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:12",
    "ayat": "I am better than him. You created me from fire...",
    "insight": "Identifies arrogance as the root of superiority complex, prejudice, and distorted self-worth.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:2",
    "ayat": "A guidance for the God-conscious...",
    "insight": "Suggests that behavioral transformation depends on internal psychological receptivity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:45",
    "ayat": "Seek help through patience and prayer...",
    "insight": "Integrates emotional resilience with spiritual practice as a coping framework.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mumtahanah",
    "verseNo": "60:8–9",
    "ayat": "Allah does not forbid you from being just and kind...",
    "insight": "Encourages fairness and kindness even toward ideological opponents, reflecting emotional maturity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nur",
    "verseNo": "24:19",
    "ayat": "Indeed, those who like that immorality be spread...",
    "insight": "Highlights psychological deviance where individuals derive satisfaction from spreading corruption and immorality.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:36",
    "ayat": "Worship Allah... be kind to parents... neighbors...",
    "insight": "Provides a comprehensive framework for prosocial and ethical interpersonal behavior across society.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:53",
    "ayat": "Do not despair of Allah’s mercy...",
    "insight": "Establishes hope and mercy as core mechanisms for emotional healing and recovery from guilt.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:72",
    "ayat": "Indeed, We offered the trust to the heavens and the earth...",
    "insight": "Frames human behavior within moral responsibility, free will, and conscious burden-bearing.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Fajr",
    "verseNo": "89:15–16",
    "ayat": "As for man, when his Lord tries him...",
    "insight": "Describes emotional misinterpretation of life events, reflecting immature cognitive appraisal of hardship.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Infitar",
    "verseNo": "82:6–8",
    "ayat": "O mankind, what has deceived you about your Generous Lord?",
    "insight": "Exposes self-deception and cognitive dissonance in moral and spiritual awareness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tin",
    "verseNo": "95:4–6",
    "ayat": "We created man in best stature, then returned him to lowest...",
    "insight": "Highlights that human behavioral direction determines elevation or degradation of potential.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:9–10",
    "ayat": "They deceive Allah and the believers, but they deceive not...",
    "insight": "Describes self-deception and internal psychological duplicity in hypocritical behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:67–68",
    "ayat": "The hypocrite men and women... command evil...",
    "insight": "Illustrates hypocrisy as a collective behavioral pathology affecting social systems.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:105",
    "ayat": "You are responsible only for yourselves...",
    "insight": "Emphasizes psychological boundaries and personal accountability in behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:21",
    "ayat": "Indeed, in the Messenger of Allah is an excellent example...",
    "insight": "Establishes prophetic behavioral modeling as a psychological and social ideal.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Takwir",
    "verseNo": "81:1–14",
    "ayat": "When the sun is wrapped up... every soul will know...",
    "insight": "Connects cosmic collapse imagery with ultimate psychological accountability and self-awareness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qalam",
    "verseNo": "68:10–13",
    "ayat": "Do not obey every worthless habitual swearer...",
    "insight": "Identifies toxic personality traits such as manipulation, dishonesty, and social corruption.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:110",
    "ayat": "So whoever hopes to meet his Lord, let him do righteous deeds...",
    "insight": "Aligns hope with action, emphasizing behavioral integrity between intention and practice.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Luqman",
    "verseNo": "31:18–19",
    "ayat": "Do not turn your face in arrogance...",
    "insight": "Teaches embodied humility through behavioral etiquette, tone, and social conduct.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:22–27",
    "ayat": "Except those who are consistent in prayer...",
    "insight": "Highlights how consistent rituals stabilize emotional and psychological resilience.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:135",
    "ayat": "Be persistently standing firm in justice...",
    "insight": "Encourages advanced moral objectivity and emotional regulation in ethical decision-making.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-An'am",
    "verseNo": "6:121",
    "ayat": "The devils inspire their allies to argue with you...",
    "insight": "Describes psychological manipulation and cognitive distortion in social conflict.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:195",
    "ayat": "And do not throw yourselves into destruction...",
    "insight": "Warns against self-destructive behavioral patterns and promotes psychological safety.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Furqan",
    "verseNo": "25:27–29",
    "ayat": "Woe to me! I wish I had not taken so-and-so as a friend...",
    "insight": "Highlights peer influence and long-term psychological regret from toxic relationships.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Qiyamah",
    "verseNo": "75:2",
    "ayat": "And I swear by the self-reproaching soul...",
    "insight": "Identifies the inner moral conscience (nafs al-lawwama) as a mechanism for behavioral correction and self-accountability.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:43",
    "ayat": "Do not approach prayer while intoxicated...",
    "insight": "Emphasizes cognitive clarity and conscious awareness as essential for disciplined and meaningful behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hadid",
    "verseNo": "57:20",
    "ayat": "Know that the worldly life is but amusement and diversion...",
    "insight": "Describes worldly distraction as psychological escapism that can distort long-term behavioral priorities.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:49",
    "ayat": "They will find what they did present...",
    "insight": "Highlights behavioral permanence through memory and ultimate accountability for all actions.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:35",
    "ayat": "Indeed, the Muslim men and Muslim women... Allah has prepared for them forgiveness...",
    "insight": "Establishes equality in psychological and behavioral virtue across genders in moral development.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:256",
    "ayat": "There is no compulsion in religion...",
    "insight": "Affirms psychological autonomy and freedom of belief as a foundation of conscious behavioral choice.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tin",
    "verseNo": "95:4–5",
    "ayat": "We created man in the best form, then returned him...",
    "insight": "Human behavioral direction determines elevation or decline from innate potential.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ar-Rahman",
    "verseNo": "55:60",
    "ayat": "Is the reward for good [anything] but good?",
    "insight": "Expresses behavioral reinforcement principles where positive actions yield positive outcomes.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:22",
    "ayat": "Is one whose chest Allah has expanded to Islam...",
    "insight": "Links emotional openness and cognitive expansion with spiritual readiness and behavioral receptivity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hashr",
    "verseNo": "59:18–19",
    "ayat": "Let every soul look to what it has put forth...",
    "insight": "Encourages self-reflection and behavioral review as a foundation for psychological correction.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:63",
    "ayat": "They ask you about the Hour. Say, its knowledge is with Allah...",
    "insight": "Reduces future anxiety by redirecting focus from uncertainty to present behavioral responsibility.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Takathur",
    "verseNo": "102:8",
    "ayat": "Then you will surely be asked that Day about pleasure.",
    "insight": "Highlights accountability even for consumption and luxury, promoting mindful behavioral restraint.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Naba",
    "verseNo": "78:40",
    "ayat": "Indeed, We have warned you of a near punishment...",
    "insight": "Encourages delayed gratification and future-oriented behavioral self-control.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Mutaffifin",
    "verseNo": "83:29–32",
    "ayat": "Indeed, those who committed crimes used to laugh...",
    "insight": "Describes mockery as a symptom of moral disengagement and lack of empathy.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Humazah",
    "verseNo": "104:1",
    "ayat": "Woe to every scorner and mocker...",
    "insight": "Condemns verbal abuse and toxic speech as destructive behavioral patterns.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:8",
    "ayat": "Let not hatred prevent you from being just...",
    "insight": "Teaches emotional regulation by separating justice from bias and personal hatred.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:67",
    "ayat": "They forget Allah, so He forgot them.",
    "insight": "Explains behavioral neglect as leading to psychological and spiritual disconnection.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Muzzammil",
    "verseNo": "73:20",
    "ayat": "...Recite what is easy... Allah knows you have needs...",
    "insight": "Demonstrates adaptive behavioral design acknowledging human limits and capacity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Anfal",
    "verseNo": "8:24",
    "ayat": "O you who believe, respond to Allah and the Messenger...",
    "insight": "Frames responsiveness to guidance as a marker of psychological vitality and inner awareness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tariq",
    "verseNo": "86:4",
    "ayat": "There is no soul but that it has over it a protector.",
    "insight": "Suggests continuous divine oversight over human impulses and behavioral regulation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:17–18",
    "ayat": "Those who avoid falsehood... and respond to their Lord... are the ones guided.",
    "insight": "Describes selective attentiveness and responsiveness as a psychological trait leading to moral clarity and guidance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:82",
    "ayat": "We send down the Qur'an as healing and mercy for the believers...",
    "insight": "Presents the Qur'an as a source of emotional and psychological healing alongside spiritual guidance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:200",
    "ayat": "If a suggestion from Satan comes to you, then seek refuge in Allah.",
    "insight": "Introduces cognitive interruption as a strategy to manage intrusive thoughts and impulsive reactions.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:10–11",
    "ayat": "Their eyes shifted in fear and their hearts reached their throats...",
    "insight": "Depicts acute stress response and collective psychological trauma during moments of extreme crisis.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hadid",
    "verseNo": "57:27",
    "ayat": "But they did not observe it as it should have been observed...",
    "insight": "Warns against superficial engagement and behavioral neglect in spiritual practice.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:59",
    "ayat": "They changed the word from what was said to them...",
    "insight": "Highlights cognitive distortion and manipulation of truth due to behavioral resistance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:83",
    "ayat": "When We bestow favor upon man, he turns away...",
    "insight": "Describes ingratitude and forgetfulness as behavioral tendencies during prosperity.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nahl",
    "verseNo": "16:125",
    "ayat": "Invite to the way of your Lord with wisdom...",
    "insight": "Advocates empathy-based communication and emotionally intelligent persuasion.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Ar-Rum",
    "verseNo": "30:7",
    "ayat": "They know the outward of worldly life, but are heedless of the Hereafter.",
    "insight": "Describes cognitive imbalance where material awareness dominates existential understanding.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:157",
    "ayat": "...He relieves them of their burden and shackles that were upon them.",
    "insight": "Frames prophetic guidance as psychological liberation from internal constraints and oppression.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:36",
    "ayat": "Do not pursue that of which you have no knowledge...",
    "insight": "Encourages epistemic humility and responsible cognitive decision-making.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:32",
    "ayat": "Whoever saves one life – it is as if he had saved mankind entirely.",
    "insight": "Establishes universal empathy and elevates the sanctity of life in behavioral ethics.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tawbah",
    "verseNo": "9:81",
    "ayat": "They preferred to stay behind with the disabled...",
    "insight": "Illustrates avoidance behavior and rationalization in moments of moral responsibility.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:63",
    "ayat": "Those are the ones Allah knows what is in their hearts...",
    "insight": "Indicates full transparency of internal intentions and emotional states in divine awareness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:12",
    "ayat": "The hypocrites and those with disease in their hearts said...",
    "insight": "Links emotional fear and internal doubt with outward behavioral weakness and defeatism.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:19–21",
    "ayat": "Indeed, man was created anxious...",
    "insight": "Describes innate emotional volatility requiring discipline and behavioral regulation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:51",
    "ayat": "Who took their religion as distraction and amusement...",
    "insight": "Warns against trivializing spirituality through entertainment-driven behavioral patterns.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Fajr",
    "verseNo": "89:17–20",
    "ayat": "You do not honor the orphan nor encourage feeding the poor...",
    "insight": "Connects social neglect and selfish behavior with internal moral and spiritual decay.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:100",
    "ayat": "If you possessed the treasures... you would withhold...",
    "insight": "Describes scarcity mindset and psychological hoarding behavior even in abundance.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:146",
    "ayat": "I will turn away from My signs those who are arrogant...",
    "insight": "Explains how persistent arrogance leads to cognitive blindness and rejection of truth.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-An'am",
    "verseNo": "6:43",
    "ayat": "But their hearts became hardened...",
    "insight": "Describes emotional numbness and moral rigidity as a result of repeated spiritual rejection and internal trauma.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Anbiya",
    "verseNo": "21:2–3",
    "ayat": "Their hearts are distracted...",
    "insight": "Highlights cognitive distraction and attentional disengagement from meaningful or divine truth.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:120",
    "ayat": "Never will the Jews or the Christians be satisfied with you...",
    "insight": "Emphasizes psychological boundary-setting and warns against overdependence on external validation.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Az-Zumar",
    "verseNo": "39:8",
    "ayat": "When adversity touches man, he calls upon his Lord...",
    "insight": "Describes situational spirituality and emotional inconsistency in human behavioral responses.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hujurat",
    "verseNo": "49:6",
    "ayat": "If a wicked person brings you news, verify it...",
    "insight": "Teaches critical thinking and cognitive filtering before reacting to information.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:179",
    "ayat": "...They are like cattle; rather, they are more astray.",
    "insight": "Describes behavior without reflection as instinct-driven cognition lacking higher awareness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Sad",
    "verseNo": "38:32–33",
    "ayat": "He said: I love the good things more than the remembrance of my Lord...",
    "insight": "Illustrates temporary misalignment of values and the psychological correction of misplaced priorities.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tariq",
    "verseNo": "86:9",
    "ayat": "The Day the secrets will be put on trial.",
    "insight": "Indicates full psychological exposure where hidden intentions and behaviors are revealed.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Tur",
    "verseNo": "52:21",
    "ayat": "...Every person will be held responsible for what he earned.",
    "insight": "Establishes direct behavior-consequence linkage as a principle of accountability psychology.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-A'raf",
    "verseNo": "7:40",
    "ayat": "The gates of Heaven will not be opened for them...",
    "insight": "Represents psychological closure to guidance due to arrogance and behavioral rejection.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ahzab",
    "verseNo": "33:72–73",
    "ayat": "...Man undertook it. Indeed, he was unjust and ignorant.",
    "insight": "Describes impulsive acceptance of responsibility without full cognitive or emotional preparedness.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Isra",
    "verseNo": "17:11",
    "ayat": "Man supplicates for evil as he supplicates for good...",
    "insight": "Highlights emotional impulsivity and distorted judgment under psychological distress.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah An-Nisa",
    "verseNo": "4:128",
    "ayat": "And reconciliation is better...",
    "insight": "Prioritizes emotional intelligence and peaceful resolution in interpersonal behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:256",
    "ayat": "There is no compulsion in religion...",
    "insight": "Affirms psychological autonomy and internal sincerity as foundations of belief behavior.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah At-Takathur",
    "verseNo": "102:1–2",
    "ayat": "Competition in worldly increase diverts you...",
    "insight": "Explains how material obsession reduces mindfulness and distorts behavioral priorities.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'idah",
    "verseNo": "5:104",
    "ayat": "We found our fathers upon a religion...",
    "insight": "Describes psychological conformity and behavioral inertia rooted in tradition.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Baqarah",
    "verseNo": "2:11",
    "ayat": "Indeed, we are but reformers...",
    "insight": "Illustrates self-deception where individuals misperceive harmful behavior as reform.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Ma'arij",
    "verseNo": "70:6–7",
    "ayat": "They see it as far, but We see it as near.",
    "insight": "Describes cognitive distortion in perception of time, consequences, and reality.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Kahf",
    "verseNo": "18:28",
    "ayat": "Do not turn your eyes away from them...",
    "insight": "Warns against status bias and distraction from sincere social environments.",
    "category": "Quranic Psychology"
  },
  {
    "surah": "Surah Al-Hijr",
    "verseNo": "15:39–40",
    "ayat": "Satan said: I will surely mislead them all...",
    "insight": "Maps behavioral manipulation strategies including ego appeal, procrastination, and misdirection.",
    "category": "Quranic Psychology"
  },
];
export default function PsychologyRepository({ selectedCategory }: { selectedCategory: string }) {
    const filteredData = selectedCategory === 'All'
        ? psychologyData
        : psychologyData.filter(item => item.category === selectedCategory);

    return (
        <div className="glass-card mirror-effect" style={{ padding: '2rem', marginTop: '3rem', overflowX: 'auto' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-teal)' }}>
                Psychology Repository {selectedCategory !== 'All' && `— ${selectedCategory}`}
            </h3>

            {filteredData.length > 0 ? (
                <>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a0aec0', fontSize: '0.95rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Surah (Verse)</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Ayat</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Psychological Insight</th>
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
                                    <td style={{ padding: '1.5rem 1rem', maxWidth: '500px', lineHeight: '1.6' }}>
                                        {item.insight}
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
                                </div>
                                <div dir="rtl" style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center' }}>{item.ayat}</div>
                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-teal)', textTransform: 'uppercase' }}>Insight:</span>
                                    <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{item.insight}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#a0aec0' }}>
                    Mapping cognitive horizons for the {selectedCategory} category.
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
