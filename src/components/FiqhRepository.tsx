'use client';

import React from 'react';

interface FiqhEntry {
    surah: string;
    verseNo: string;
    topic: string;
    divineLogic: string;
    category: string;
}

const fiqhData: FiqhEntry[] = [
   
  {
    "surah": "Al-Baqarah (2:2)",
    "verseNo": "2:2",
    "topic": "Qur’an as guidance for legal matters",
    "divineLogic": "Revelation as supreme source of law",
    "category": "Legal / Theology"
  },
  {
    "surah": "Al-Baqarah (2:177)",
    "verseNo": "2:177",
    "topic": "Definition of righteousness",
    "divineLogic": "Integrates faith worship and social justice",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Baqarah (2:180)",
    "verseNo": "2:180",
    "topic": "Will-making before death",
    "divineLogic": "Protects estate justice",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "Al-Baqarah (2:181)",
    "verseNo": "2:181",
    "topic": "Changing wills unjustly",
    "divineLogic": "Ensures testament accountability",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:183)",
    "verseNo": "2:183",
    "topic": "Fasting obligation",
    "divineLogic": "Develops taqwa and discipline",
    "category": "Worship / Spiritual"
  },
  {
    "surah": "Al-Baqarah (2:187)",
    "verseNo": "2:187",
    "topic": "Rules of fasting",
    "divineLogic": "Balances devotion and human needs",
    "category": "Worship"
  },
  {
    "surah": "Al-Baqarah (2:188)",
    "verseNo": "2:188",
    "topic": "Prohibition of bribery",
    "divineLogic": "Prevents corruption",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:190)",
    "verseNo": "2:190",
    "topic": "Warfare self-defense",
    "divineLogic": "Limits aggression",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:195)",
    "verseNo": "2:195",
    "topic": "Charity spending",
    "divineLogic": "Promotes wealth circulation",
    "category": "Economic / Social"
  },
  {
    "surah": "Al-Baqarah (2:196)",
    "verseNo": "2:196",
    "topic": "Hajj and Umrah rules",
    "divineLogic": "Ritual standardization",
    "category": "Worship"
  },
  {
    "surah": "Al-Baqarah (2:221)",
    "verseNo": "2:221",
    "topic": "Marriage with polytheists",
    "divineLogic": "Protects faith identity",
    "category": "Family / Faith"
  },
  {
    "surah": "Al-Baqarah (2:222)",
    "verseNo": "2:222",
    "topic": "Menstruation rulings",
    "divineLogic": "Hygiene and marital ethics",
    "category": "Family / Health / Law"
  },
  {
    "surah": "Al-Baqarah (2:223)",
    "verseNo": "2:223",
    "topic": "Marital relations",
    "divineLogic": "Lawful intimacy framework",
    "category": "Family"
  },
  {
    "surah": "Al-Baqarah (2:228)",
    "verseNo": "2:228",
    "topic": "Iddah of divorced women",
    "divineLogic": "Ensures lineage clarity",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:229)",
    "verseNo": "2:229",
    "topic": "Divorce rules",
    "divineLogic": "Prevents abuse of talaq",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:231)",
    "verseNo": "2:231",
    "topic": "Fair divorce treatment",
    "divineLogic": "Protects from oppression",
    "category": "Family / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:233)",
    "verseNo": "2:233",
    "topic": "Breastfeeding responsibility",
    "divineLogic": "Child welfare protection",
    "category": "Family / Health"
  },
  {
    "surah": "Al-Baqarah (2:234)",
    "verseNo": "2:234",
    "topic": "Iddah for widows",
    "divineLogic": "Honors marital bond",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:275)",
    "verseNo": "2:275",
    "topic": "Prohibition of riba",
    "divineLogic": "Prevents economic exploitation",
    "category": "Economic"
  },
  {
    "surah": "Al-Baqarah (2:282)",
    "verseNo": "2:282",
    "topic": "Debt documentation",
    "divineLogic": "Ensures transparency",
    "category": "Economic / Legal"
  },
  {
    "surah": "Al-Baqarah (2:286)",
    "verseNo": "2:286",
    "topic": "Accountability principle",
    "divineLogic": "Proportional responsibility",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Aal-Imran (3:130)",
    "verseNo": "3:130",
    "topic": "Compound riba prohibition",
    "divineLogic": "Stops financial oppression",
    "category": "Economic"
  },
  {
    "surah": "An-Nisa (4:2)",
    "verseNo": "4:2",
    "topic": "Orphans property rights",
    "divineLogic": "Protects vulnerable wealth",
    "category": "Social / Economic"
  },
  {
    "surah": "An-Nisa (4:3)",
    "verseNo": "4:3",
    "topic": "Polygamy with justice",
    "divineLogic": "Conditional equity requirement",
    "category": "Family / Ethics"
  },
  {
    "surah": "An-Nisa (4:6)",
    "verseNo": "4:6",
    "topic": "Maturity test for orphans",
    "divineLogic": "Legal capacity prerequisite",
    "category": "Legal / Orphans"
  },
  {
    "surah": "An-Nisa (4:7)",
    "verseNo": "4:7",
    "topic": "Inheritance rights",
    "divineLogic": "Divine distribution mandate",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "An-Nisa (4:11)",
    "verseNo": "4:11",
    "topic": "Shares of inheritance",
    "divineLogic": "Fixed succession system",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "An-Nisa (4:12)",
    "verseNo": "4:12",
    "topic": "More inheritance details",
    "divineLogic": "Clarifies estate division",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "An-Nisa (4:15)",
    "verseNo": "4:15",
    "topic": "Punishment for adultery early stage",
    "divineLogic": "Gradual legal reform",
    "category": "Legal / Ethics"
  },
  {
    "surah": "An-Nisa (4:19)",
    "verseNo": "4:19",
    "topic": "Women's marital rights",
    "divineLogic": "Ends coercive customs",
    "category": "Family / Rights"
  },
  {
    "surah": "An-Nisa (4:24)",
    "verseNo": "4:24",
    "topic": "Lawful prohibited marriage categories",
    "divineLogic": "Regulates kinship",
    "category": "Family / Law"
  },
  {
    "surah": "An-Nisa (4:25)",
    "verseNo": "4:25",
    "topic": "Marriage of slaves",
    "divineLogic": "Facilitates lawful chastity",
    "category": "Family / Social Law"
  },
  {
    "surah": "An-Nisa (4:29)",
    "verseNo": "4:29",
    "topic": "Trade ethics",
    "divineLogic": "Mutual consent principle",
    "category": "Economic / Ethics"
  },
  {
    "surah": "An-Nisa (4:34)",
    "verseNo": "4:34",
    "topic": "Family roles responsibilities",
    "divineLogic": "Structured accountability",
    "category": "Family / Social Structure"
  },
  {
    "surah": "An-Nisa (4:43)",
    "verseNo": "4:43",
    "topic": "Purity before prayer",
    "divineLogic": "Prerequisite for worship",
    "category": "Worship / Purity"
  },
  {
    "surah": "An-Nisa (4:92)",
    "verseNo": "4:92",
    "topic": "Accidental killing expiation",
    "divineLogic": "Balances justice and mercy",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "Al-Ma'idah (5:1)",
    "verseNo": "5:1",
    "topic": "Contracts and oaths",
    "divineLogic": "Legal covenant integrity",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Ma'idah (5:3)",
    "verseNo": "5:3",
    "topic": "Prohibited foods",
    "divineLogic": "Protects physical spiritual health",
    "category": "Dietary / Law"
  },
  {
    "surah": "Al-Ma'idah (5:6)",
    "verseNo": "5:6",
    "topic": "Wudhu ghusl tayammum",
    "divineLogic": "Standardized purification",
    "category": "Worship / Purity"
  },
  {
    "surah": "Al-Ma'idah (5:8)",
    "verseNo": "5:8",
    "topic": "Justice toward enemies",
    "divineLogic": "Impartial fairness",
    "category": "Ethics / Justice"
  },
  {
    "surah": "Al-Ma'idah (5:38)",
    "verseNo": "5:38",
    "topic": "Punishment for theft",
    "divineLogic": "Protects property rights",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "Al-Ma'idah (5:45)",
    "verseNo": "5:45",
    "topic": "Qisas retaliation",
    "divineLogic": "Proportional justice",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Ma'idah (5:89)",
    "verseNo": "5:89",
    "topic": "Expiation for broken oaths",
    "divineLogic": "Restores accountability",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Ma'idah (5:90)",
    "verseNo": "5:90",
    "topic": "Prohibition of intoxicants gambling",
    "divineLogic": "Protects intellect society",
    "category": "Social / Public Welfare"
  },
  {
    "surah": "Al-Ma'idah (5:95)",
    "verseNo": "5:95",
    "topic": "Hunting in Ihram",
    "divineLogic": "Sanctity of sacred state",
    "category": "Worship / Ritual Law"
  },
  {
    "surah": "Al-Ma'idah (5:101)",
    "verseNo": "5:101",
    "topic": "Avoid unnecessary questions",
    "divineLogic": "Prevents hardship",
    "category": "Ethics / Guidance"
  },
  {
    "surah": "At-Tawbah (9:5)",
    "verseNo": "9:5",
    "topic": "Warfare contextual rule",
    "divineLogic": "Enforces treaty justice",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "At-Tawbah (9:60)",
    "verseNo": "9:60",
    "topic": "Zakat recipients",
    "divineLogic": "Structured redistribution",
    "category": "Economic / Social Welfare"
  },
  {
    "surah": "An-Nur (24:2)",
    "verseNo": "24:2",
    "topic": "Hadd for zina",
    "divineLogic": "Protects family morality",
    "category": "Legal / Morality"
  },
  {
    "surah": "An-Nur (24:3)",
    "verseNo": "24:3",
    "topic": "Marriage of adulterers",
    "divineLogic": "Moral compatibility principle",
    "category": "Family / Ethics"
  },
  {
    "surah": "An-Nur (24:4)",
    "verseNo": "24:4",
    "topic": "Punishment for false accusation",
    "divineLogic": "Protects honor",
    "category": "Legal / Morality"
  },
  {
    "surah": "An-Nur (24:6-9)",
    "verseNo": "24:6-9",
    "topic": "Lian procedure",
    "divineLogic": "Resolves marital disputes",
    "category": "Family / Legal Procedure"
  },
  {
    "surah": "An-Nur (24:26)",
    "verseNo": "24:26",
    "topic": "Purity in marriage",
    "divineLogic": "Ethical congruence",
    "category": "Family / Ethics"
  },
  {
    "surah": "An-Nur (24:32)",
    "verseNo": "24:32",
    "topic": "Encouraging marriage",
    "divineLogic": "Social stability",
    "category": "Family / Social"
  },
  {
    "surah": "An-Nur (24:33)",
    "verseNo": "24:33",
    "topic": "Chastity command",
    "divineLogic": "Promotes moral discipline",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Ahzab (33:4)",
    "verseNo": "33:4",
    "topic": "Adoption marriage law",
    "divineLogic": "Preserves lineage clarity",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Ahzab (33:6)",
    "verseNo": "33:6",
    "topic": "Wives as mothers of believers",
    "divineLogic": "Elevates prophetic status",
    "category": "Theology / Social"
  },
  {
    "surah": "Al-Ahzab (33:37)",
    "verseNo": "33:37",
    "topic": "Marriage of Zaynab context",
    "divineLogic": "Ends adoption taboos",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Ahzab (33:49)",
    "verseNo": "33:49",
    "topic": "Divorce before consummation",
    "divineLogic": "Removes waiting burden",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Ahzab (33:50)",
    "verseNo": "33:50",
    "topic": "Special prophetic rules",
    "divineLogic": "Legislative distinction",
    "category": "Theology / Law"
  },
  {
    "surah": "Al-Ahzab (33:53)",
    "verseNo": "33:53",
    "topic": "Home privacy etiquette",
    "divineLogic": "Protects domestic sanctity",
    "category": "Social / Ethics"
  },
  {
    "surah": "Al-Mumtahina (60:10)",
    "verseNo": "60:10",
    "topic": "Marriage of emigrant women",
    "divineLogic": "Protects faith allegiance",
    "category": "Family / Social Law"
  },
  {
    "surah": "At-Talaq (65:1)",
    "verseNo": "65:1",
    "topic": "Divorce procedure clarity",
    "divineLogic": "Prevents impulsive separation",
    "category": "Family / Law"
  },
  {
    "surah": "At-Talaq (65:4)",
    "verseNo": "65:4",
    "topic": "Iddah categories",
    "divineLogic": "Accounts biological states",
    "category": "Family / Law"
  },
  {
    "surah": "At-Tahrim (66:5)",
    "verseNo": "66:5",
    "topic": "Alternative wives principle",
    "divineLogic": "Affirms accountability",
    "category": "Family / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:190-193)",
    "verseNo": "2:190-193",
    "topic": "Warfare oppression limits",
    "divineLogic": "Restricts aggression",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "Al-Ma'idah (5:33)",
    "verseNo": "5:33",
    "topic": "Hirabah punishment",
    "divineLogic": "Protects public security",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "Al-Ma'idah (5:38)",
    "verseNo": "5:38",
    "topic": "Punishment for theft repeat",
    "divineLogic": "Deterrence principle",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "An-Nisa (4:92-93)",
    "verseNo": "4:92-93",
    "topic": "Murder manslaughter law",
    "divineLogic": "Differentiates intent",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "An-Nur (24:2)",
    "verseNo": "24:2",
    "topic": "Punishment for adultery repeat",
    "divineLogic": "Family protection",
    "category": "Legal / Morality"
  },
  {
    "surah": "An-Nur (24:5)",
    "verseNo": "24:5",
    "topic": "Repentance for slander",
    "divineLogic": "Justice with mercy",
    "category": "Legal / Ethics"
  },
  {
    "surah": "An-Nur (24:19)",
    "verseNo": "24:19",
    "topic": "Spreading immorality condemned",
    "divineLogic": "Protects moral order",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Hujurat (49:11-12)",
    "verseNo": "49:11-12",
    "topic": "Avoid mockery suspicion",
    "divineLogic": "Preserves social harmony",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Baqarah (2:168-169)",
    "verseNo": "2:168-169",
    "topic": "Halal haram food principle",
    "divineLogic": "Obedient consumption",
    "category": "Dietary / Law"
  },
  {
    "surah": "Al-Baqarah (2:172-173)",
    "verseNo": "2:172-173",
    "topic": "Forbidden foods",
    "divineLogic": "Health ritual protection",
    "category": "Dietary / Law"
  },
  {
    "surah": "Al-An'am (6:118-121)",
    "verseNo": "6:118-121",
    "topic": "Mention Allah name on food",
    "divineLogic": "Spiritual accountability",
    "category": "Dietary / Ethics"
  },
  {
    "surah": "Al-An'am (6:145)",
    "verseNo": "6:145",
    "topic": "Clear food prohibitions",
    "divineLogic": "Restricts harm",
    "category": "Dietary / Law"
  },
  {
    "surah": "Al-A'raf (7:157)",
    "verseNo": "7:157",
    "topic": "Halal allowed by Prophet",
    "divineLogic": "Defines lawful scope",
    "category": "Dietary / Law"
  },
  {
    "surah": "An-Nahl (16:114-115)",
    "verseNo": "16:114-115",
    "topic": "Lawful food gratitude",
    "divineLogic": "Ethical consumption",
    "category": "Dietary / Ethics"
  },
  {
    "surah": "Al-Ma'idah (5:4)",
    "verseNo": "5:4",
    "topic": "Hunting with trained animals",
    "divineLogic": "Regulated acquisition",
    "category": "Dietary / Law"
  },
  {
    "surah": "Al-Ma'idah (5:5)",
    "verseNo": "5:5",
    "topic": "Food of People of Book",
    "divineLogic": "Intercommunity facilitation",
    "category": "Dietary / Social Law"
  },
  {
    "surah": "An-Nahl (16:66)",
    "verseNo": "16:66",
    "topic": "Livestock as provision",
    "divineLogic": "Divine sustenance sign",
    "category": "Dietary / Theology"
  },
  {
    "surah": "Al-Mu’minun (23:19-21)",
    "verseNo": "23:19-21",
    "topic": "Natural foods provision",
    "divineLogic": "Sign of mercy",
    "category": "Dietary / Theology"
  },
  {
    "surah": "Al-Baqarah (2:152)",
    "verseNo": "2:152",
    "topic": "Remember Me principle",
    "divineLogic": "Reciprocal remembrance",
    "category": "Spirituality / Worship"
  },
  {
    "surah": "Al-Ahzab (33:41-42)",
    "verseNo": "33:41-42",
    "topic": "Abundant remembrance",
    "divineLogic": "Sustains consciousness",
    "category": "Spirituality / Worship"
  },
  {
    "surah": "Ar-Ra’d (13:28)",
    "verseNo": "13:28",
    "topic": "Peace through remembrance",
    "divineLogic": "Inner tranquility",
    "category": "Spirituality / Psychology"
  },
  {
    "surah": "Al-Jumu’ah (62:10)",
    "verseNo": "62:10",
    "topic": "After prayer remembrance",
    "divineLogic": "Balance worship livelihood",
    "category": "Spirituality / Worship"
  },
  {
    "surah": "Al-A’raf (7:205)",
    "verseNo": "7:205",
    "topic": "Silent humble remembrance",
    "divineLogic": "Internal devotion",
    "category": "Spirituality"
  },
  {
    "surah": "Al-Kahf (18:24)",
    "verseNo": "18:24",
    "topic": "Say InshaAllah",
    "divineLogic": "Acknowledges divine will",
    "category": "Spirituality / Ethics"
  },
  {
    "surah": "Taha (20:14)",
    "verseNo": "20:14",
    "topic": "Prayer for remembrance",
    "divineLogic": "Worship centered awareness",
    "category": "Spirituality / Worship"
  },
  {
    "surah": "Al-Baqarah (2:275)",
    "verseNo": "2:275",
    "topic": "Trade halal riba haram",
    "divineLogic": "Economic justice",
    "category": "Economic / Law"
  },
  {
    "surah": "Al-Baqarah (2:282)",
    "verseNo": "2:282",
    "topic": "Trade documentation",
    "divineLogic": "Contractual security",
    "category": "Economic / Legal"
  },
  {
    "surah": "Al-Baqarah (2:283)",
    "verseNo": "2:283",
    "topic": "Trust based trade",
    "divineLogic": "Witness accountability",
    "category": "Economic / Ethics"
  },
  {
    "surah": "An-Nisa (4:29)",
    "verseNo": "4:29",
    "topic": "Mutual consent trade",
    "divineLogic": "Prevents unjust gain",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Mutaffifin (83:1-3)",
    "verseNo": "83:1-3",
    "topic": "Fraud in weighing warning",
    "divineLogic": "Market integrity",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Hud (11:84-85)",
    "verseNo": "11:84-85",
    "topic": "Prophet Shuaib fair trade",
    "divineLogic": "Commercial justice",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-A’raf (7:85)",
    "verseNo": "7:85",
    "topic": "Cheating in trade condemned",
    "divineLogic": "Eliminates corruption",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Muzzammil (73:20)",
    "verseNo": "73:20",
    "topic": "Trade allowed in devotion",
    "divineLogic": "Balanced spirituality",
    "category": "Spirituality / Economic"
  },
  {
    "surah": "At-Tawbah (9:24)",
    "verseNo": "9:24",
    "topic": "Wealth not before Allah",
    "divineLogic": "Priority of faith",
    "category": "Spirituality / Ethics"
  },
  {
    "surah": "Al-Ma'idah (5:45)",
    "verseNo": "5:45",
    "topic": "Qisas principle repeat",
    "divineLogic": "Maintains social equilibrium",
    "category": "Legal / Justice"
  },
  {
    "surah": "An-Nisa (4:176)",
    "verseNo": "4:176",
    "topic": "Inheritance",
    "divineLogic": "Ensures fairness and prevents family disputes through divine apportionment",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "Al-Baqarah (2:180)",
    "verseNo": "2:180",
    "topic": "Writing a Will",
    "divineLogic": "Protects rights of heirs and fulfills personal obligations after death",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "Al-Baqarah (2:240)",
    "verseNo": "2:240",
    "topic": "Widow’s maintenance",
    "divineLogic": "Protects women from sudden financial hardship after husband's death",
    "category": "Family / Social Welfare"
  },
  {
    "surah": "Al-Baqarah (2:286)",
    "verseNo": "2:286",
    "topic": "Accountability",
    "divineLogic": "Islam is based on capacity; legal burden proportional to ability",
    "category": "Theology / Legal Ethics"
  },
  {
    "surah": "Al-Nisa (4:135)",
    "verseNo": "4:135",
    "topic": "Justice",
    "divineLogic": "Justice transcends personal familial or financial bias",
    "category": "Ethics / Justice"
  },
  {
    "surah": "Al-Baqarah (2:286)",
    "verseNo": "2:286",
    "topic": "No soul burdened",
    "divineLogic": "Divine legal system is humane",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Ma’idah (5:8)",
    "verseNo": "5:8",
    "topic": "Impartial justice",
    "divineLogic": "Law must override emotion",
    "category": "Ethics / Justice"
  },
  {
    "surah": "Al-Ma’idah (5:45)",
    "verseNo": "5:45",
    "topic": "Qisas (retaliation)",
    "divineLogic": "Balances justice and forgiveness",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Ma’idah (5:106)",
    "verseNo": "5:106",
    "topic": "Testimony at death",
    "divineLogic": "Ensures integrity in will matters",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "An-Nur (24:58-59)",
    "verseNo": "24:58-59",
    "topic": "Privacy rules at home",
    "divineLogic": "Protects family modesty",
    "category": "Family / Ethics"
  },
  {
    "surah": "Al-Ahzab (33:59)",
    "verseNo": "33:59",
    "topic": "Hijab",
    "divineLogic": "Protects dignity and deters harassment",
    "category": "Family / Ethics"
  },
  {
    "surah": "Al-A’raf (7:31)",
    "verseNo": "7:31",
    "topic": "Dress and modesty",
    "divineLogic": "Encourages cleanliness and respect",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Baqarah (2:238)",
    "verseNo": "2:238",
    "topic": "Guard the prayers",
    "divineLogic": "Aligns life around divine rhythm",
    "category": "Worship"
  },
  {
    "surah": "Al-Ankabut (29:45)",
    "verseNo": "29:45",
    "topic": "Prayer prevents immorality",
    "divineLogic": "Spiritual discipline fosters ethics",
    "category": "Worship / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:43)",
    "verseNo": "2:43",
    "topic": "Prayer and zakat",
    "divineLogic": "Ritual and economic justice combined",
    "category": "Worship / Economic"
  },
  {
    "surah": "Al-Nisa (4:103)",
    "verseNo": "4:103",
    "topic": "Timing of prayer",
    "divineLogic": "Flexible legislation during hardship",
    "category": "Worship / Law"
  },
  {
    "surah": "Al-Jumu’ah (62:9)",
    "verseNo": "62:9",
    "topic": "Friday prayer",
    "divineLogic": "Weekly social spiritual coherence",
    "category": "Worship / Social"
  },
  {
    "surah": "Al-Muzzammil (73:20)",
    "verseNo": "73:20",
    "topic": "Night prayer",
    "divineLogic": "Encourages sincerity and growth",
    "category": "Worship / Spiritual"
  },
  {
    "surah": "Al-Ma’un (107:4-7)",
    "verseNo": "107:4-7",
    "topic": "Empty rituals",
    "divineLogic": "Worship without ethics rejected",
    "category": "Ethics / Worship"
  },
  {
    "surah": "Al-Tawbah (9:11)",
    "verseNo": "9:11",
    "topic": "Repentance renews status",
    "divineLogic": "Law restores rights after reform",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Tawbah (9:36)",
    "verseNo": "9:36",
    "topic": "Sacred months",
    "divineLogic": "Stability and safe trade periods",
    "category": "Social / Legal"
  },
  {
    "surah": "Al-Baqarah (2:282)",
    "verseNo": "2:282",
    "topic": "Debt documentation",
    "divineLogic": "Promotes economic clarity",
    "category": "Economic / Legal"
  },
  {
    "surah": "Al-Baqarah (2:280)",
    "verseNo": "2:280",
    "topic": "Grace for debtors",
    "divineLogic": "Compassion in finance",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:275)",
    "verseNo": "2:275",
    "topic": "Riba prohibited",
    "divineLogic": "Prevents financial exploitation",
    "category": "Economic / Law"
  },
  {
    "surah": "Al-Nisa (4:29)",
    "verseNo": "4:29",
    "topic": "No fraud or suicide",
    "divineLogic": "Preserves life and ethics",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-Ma’idah (5:1)",
    "verseNo": "5:1",
    "topic": "Keep contracts",
    "divineLogic": "Core civil law principle",
    "category": "Legal / Contracts"
  },
  {
    "surah": "Al-Isra (17:35)",
    "verseNo": "17:35",
    "topic": "Just measurement",
    "divineLogic": "Micro integrity in economics",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Mutaffifin (83:1-3)",
    "verseNo": "83:1-3",
    "topic": "Fraud in weight",
    "divineLogic": "Business immorality causes decay",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-A’raf (7:85)",
    "verseNo": "7:85",
    "topic": "Shuaib on trade",
    "divineLogic": "Justice central in prophethood",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Hujurat (49:9)",
    "verseNo": "49:9",
    "topic": "Reconciliation",
    "divineLogic": "Law as peacemaker",
    "category": "Social / Legal"
  },
  {
    "surah": "Al-Hujurat (49:11)",
    "verseNo": "49:11",
    "topic": "Ethics in society",
    "divineLogic": "Language and tone matter legally",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Hujurat (49:12)",
    "verseNo": "49:12",
    "topic": "Avoid spying",
    "divineLogic": "Privacy legally protected",
    "category": "Ethics / Privacy Law"
  },
  {
    "surah": "Al-Ma’idah (5:32)",
    "verseNo": "5:32",
    "topic": "Sanctity of life",
    "divineLogic": "One life equals humanity",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Talaq (65:2-3)",
    "verseNo": "65:2-3",
    "topic": "Divorce with ihsan",
    "divineLogic": "Structure with compassion",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Talaq (65:6)",
    "verseNo": "65:6",
    "topic": "Maintenance in iddah",
    "divineLogic": "Financial security post separation",
    "category": "Family / Economic"
  },
  {
    "surah": "An-Nisa (4:19)",
    "verseNo": "4:19",
    "topic": "No forced marriage",
    "divineLogic": "Protects women choice",
    "category": "Family / Rights"
  },
  {
    "surah": "Al-Baqarah (2:232)",
    "verseNo": "2:232",
    "topic": "Remarry freely",
    "divineLogic": "Respects autonomy",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Ahzab (33:49)",
    "verseNo": "33:49",
    "topic": "No iddah without consummation",
    "divineLogic": "Precise legal tailoring",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Nur (24:30-31)",
    "verseNo": "24:30-31",
    "topic": "Lower gaze",
    "divineLogic": "Self restraint before dress code",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Nur (24:27)",
    "verseNo": "24:27",
    "topic": "Ask permission to enter",
    "divineLogic": "Protects privacy",
    "category": "Ethics / Privacy"
  },
  {
    "surah": "Al-Nisa (4:58)",
    "verseNo": "4:58",
    "topic": "Trust and leadership",
    "divineLogic": "Authority requires justice",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Al-Nisa (4:59)",
    "verseNo": "4:59",
    "topic": "Obey leadership",
    "divineLogic": "Bound by divine accountability",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Shura (42:38)",
    "verseNo": "42:38",
    "topic": "Consultation",
    "divineLogic": "Democratic spirit in governance",
    "category": "Governance / Social"
  },
  {
    "surah": "Al-Nisa (4:141)",
    "verseNo": "4:141",
    "topic": "Legal sovereignty",
    "divineLogic": "Preserves Islamic authority",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Ma’idah (5:44)",
    "verseNo": "5:44",
    "topic": "Rule by revelation",
    "divineLogic": "Divine law supremacy",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Ahzab (33:36)",
    "verseNo": "33:36",
    "topic": "No choice against ruling",
    "divineLogic": "Compliance part of faith",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:213)",
    "verseNo": "2:213",
    "topic": "Prophets as judges",
    "divineLogic": "Judiciary divine mission",
    "category": "Governance / Theology"
  },
  {
    "surah": "Al-An’am (6:57)",
    "verseNo": "6:57",
    "topic": "Judgment belongs to Allah",
    "divineLogic": "Tawheed in sovereignty",
    "category": "Theology / Governance"
  },
  {
    "surah": "Al-Nisa (4:105)",
    "verseNo": "4:105",
    "topic": "Prophet judges by revelation",
    "divineLogic": "Legal finality divine",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Ma’idah (5:50)",
    "verseNo": "5:50",
    "topic": "Reject jahiliyyah law",
    "divineLogic": "Divine law brings justice",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Isra (17:33)",
    "verseNo": "17:33",
    "topic": "Do not kill",
    "divineLogic": "Sanctity of life",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Isra (17:32)",
    "verseNo": "17:32",
    "topic": "Zina forbidden",
    "divineLogic": "Protects family structure",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Isra (17:31)",
    "verseNo": "17:31",
    "topic": "Infanticide banned",
    "divineLogic": "Life not economic choice",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Isra (17:35)",
    "verseNo": "17:35",
    "topic": "Fair weights",
    "divineLogic": "Integrity in transactions",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Isra (17:37)",
    "verseNo": "17:37",
    "topic": "Arrogance forbidden",
    "divineLogic": "Ethics shape society",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Isra (17:23-24)",
    "verseNo": "17:23-24",
    "topic": "Parents rights",
    "divineLogic": "Family mercy obligation",
    "category": "Family / Ethics"
  },
  {
    "surah": "Al-Isra (17:26-27)",
    "verseNo": "17:26-27",
    "topic": "Wise spending",
    "divineLogic": "Resource ethics",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Isra (17:34)",
    "verseNo": "17:34",
    "topic": "Orphan property",
    "divineLogic": "Guardianship sacred",
    "category": "Legal / Orphans"
  },
  {
    "surah": "Al-Isra (17:36)",
    "verseNo": "17:36",
    "topic": "Follow knowledge",
    "divineLogic": "Evidence based law",
    "category": "Knowledge / Ethics"
  },
  {
    "surah": "Al-Isra (17:80)",
    "verseNo": "17:80",
    "topic": "Sincere rulership",
    "divineLogic": "Legal humility",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Al-Ma’idah (5:89)",
    "verseNo": "5:89",
    "topic": "Kaffarah",
    "divineLogic": "Spiritual repair",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-Ma’idah (5:95)",
    "verseNo": "5:95",
    "topic": "Ihram hunting",
    "divineLogic": "Respect sacred space",
    "category": "Worship / Law"
  },
  {
    "surah": "Al-Ma’idah (5:1)",
    "verseNo": "5:1",
    "topic": "Fulfill promises",
    "divineLogic": "Contractual backbone",
    "category": "Legal / Contracts"
  },
  {
    "surah": "Al-Baqarah (2:225)",
    "verseNo": "2:225",
    "topic": "Unintentional oaths",
    "divineLogic": "Intent matters",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:270)",
    "verseNo": "2:270",
    "topic": "Charity known to Allah",
    "divineLogic": "Divine awareness",
    "category": "Economic / Spiritual"
  },
  {
    "surah": "Al-A’raf (7:56)",
    "verseNo": "7:56",
    "topic": "No corruption earth",
    "divineLogic": "Environmental law",
    "category": "Ethics / Environment"
  },
  {
    "surah": "Al-Rum (30:41)",
    "verseNo": "30:41",
    "topic": "Human caused corruption",
    "divineLogic": "Justice includes ecology",
    "category": "Ethics / Environment"
  },
  {
    "surah": "Al-Baqarah (2:205)",
    "verseNo": "2:205",
    "topic": "Spread corruption",
    "divineLogic": "Criminal deception",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-A’raf (7:85)",
    "verseNo": "7:85",
    "topic": "Economic ethics",
    "divineLogic": "Trade justice repeated",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:177)",
    "verseNo": "2:177",
    "topic": "Goodness composite",
    "divineLogic": "Belief practice justice",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Nur (24:19)",
    "verseNo": "24:19",
    "topic": "Legal censorship",
    "divineLogic": "Protect dignity",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Nisa (4:5)",
    "verseNo": "4:5",
    "topic": "Wealth to foolish banned",
    "divineLogic": "Financial stability",
    "category": "Economic / Law"
  },
  {
    "surah": "Al-Baqarah (2:282)",
    "verseNo": "2:282",
    "topic": "Written contracts",
    "divineLogic": "Rights protection",
    "category": "Economic / Legal"
  },
  {
    "surah": "Al-Baqarah (2:286)",
    "verseNo": "2:286",
    "topic": "Mercy in law",
    "divineLogic": "No impossible demand",
    "category": "Theology / Legal Ethics"
  },
  {
    "surah": "Al-Anfal (8:27)",
    "verseNo": "8:27",
    "topic": "Breach of trust",
    "divineLogic": "Contracts sacred",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-Tawbah (9:7)",
    "verseNo": "9:7",
    "topic": "Respect treaties",
    "divineLogic": "Covenant fulfillment",
    "category": "Legal / International Law"
  },
  {
    "surah": "Al-Tawbah (9:4)",
    "verseNo": "9:4",
    "topic": "Protect treaty bound",
    "divineLogic": "Ethical warfare",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "Al-Baqarah (2:190)",
    "verseNo": "2:190",
    "topic": "Ethical warfare",
    "divineLogic": "Defense only",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "Al-Hajj (22:39)",
    "verseNo": "22:39",
    "topic": "Permission fight",
    "divineLogic": "Defend oppressed",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "Al-Baqarah (2:191)",
    "verseNo": "2:191",
    "topic": "No transgression",
    "divineLogic": "Legal war limits",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "Al-Mumtahina (60:8)",
    "verseNo": "60:8",
    "topic": "Peace coexistence",
    "divineLogic": "Distinguish hostile peaceful",
    "category": "Social / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:216)",
    "verseNo": "2:216",
    "topic": "Fighting prescribed",
    "divineLogic": "Justice over comfort",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "Al-Ahzab (33:36)",
    "verseNo": "33:36",
    "topic": "Submit to ruling",
    "divineLogic": "Divine priority",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Al-Ma’idah (5:92)",
    "verseNo": "5:92",
    "topic": "Avoid intoxicants",
    "divineLogic": "Protect intellect",
    "category": "Social / Health Law"
  },
  {
    "surah": "Al-Baqarah (2:219)",
    "verseNo": "2:219",
    "topic": "Alcohol harm",
    "divineLogic": "Risk based law",
    "category": "Social / Ethics"
  },
  {
    "surah": "Al-Nisa (4:43)",
    "verseNo": "4:43",
    "topic": "No prayer intoxicated",
    "divineLogic": "Conscious worship",
    "category": "Worship / Law"
  },
  {
    "surah": "Al-A’raf (7:33)",
    "verseNo": "7:33",
    "topic": "Sin boundaries",
    "divineLogic": "Comprehensive morality",
    "category": "Ethics / Law"
  },
  {
    "surah": "Al-Nisa (4:29)",
    "verseNo": "4:29",
    "topic": "Suicide prohibited",
    "divineLogic": "Right to life",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Ma’idah (5:90)",
    "verseNo": "5:90",
    "topic": "Total intoxicant ban",
    "divineLogic": "Legal closure",
    "category": "Social / Law"
  },
  {
    "surah": "Al-Ahzab (33:70-71)",
    "verseNo": "33:70-71",
    "topic": "Speak right",
    "divineLogic": "Ethical speech",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Hujurat (49:9)",
    "verseNo": "49:9",
    "topic": "Reconcile believers",
    "divineLogic": "Conflict resolution",
    "category": "Social / Legal"
  },
  {
    "surah": "Al-Ma’idah (5:8)",
    "verseNo": "5:8",
    "topic": "No injustice from hatred",
    "divineLogic": "Emotion below justice",
    "category": "Ethics / Justice"
  },
  {
    "surah": "Al-Baqarah (2:204-205)",
    "verseNo": "2:204-205",
    "topic": "Hypocrisy corruption",
    "divineLogic": "Actions judged",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Nisa (4:10)",
    "verseNo": "4:10",
    "topic": "Orphan wealth abuse",
    "divineLogic": "Severe penalty",
    "category": "Legal / Orphans"
  },
  {
    "surah": "At-Tawbah (9:103)",
    "verseNo": "9:103",
    "topic": "Zakat purifies",
    "divineLogic": "Spiritual economic logic",
    "category": "Economic / Spiritual"
  },
  {
    "surah": "Al-Baqarah (2:267)",
    "verseNo": "2:267",
    "topic": "Best charity",
    "divineLogic": "Quality giving",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:261)",
    "verseNo": "2:261",
    "topic": "Charity multiplies",
    "divineLogic": "Divine economy",
    "category": "Economic / Spiritual"
  },
  {
    "surah": "Al-Baqarah (2:264)",
    "verseNo": "2:264",
    "topic": "No reminders charity",
    "divineLogic": "Psychological protection",
    "category": "Economic / Ethics"
  },
  {
    "surah": "At-Tawbah (9:60)",
    "verseNo": "9:60",
    "topic": "Eight zakat categories",
    "divineLogic": "Structured fiscal policy",
    "category": "Economic / Social Welfare"
  },
  {
    "surah": "Al-Hashr (59:7)",
    "verseNo": "59:7",
    "topic": "Spoils distribution",
    "divineLogic": "Governance by law not power",
    "category": "Governance / Legal"
  },
  {
    "surah": "Al-Baqarah (2:200-201)",
    "verseNo": "2:200-201",
    "topic": "Dua and balance",
    "divineLogic": "Law guides us to ask for good in both worlds—balance of worldly and eternal concerns",
    "category": "Spiritual / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:204-205)",
    "verseNo": "2:204-205",
    "topic": "Hypocrisy in law",
    "divineLogic": "Not all smooth speech is truthful; law considers intent and consequences",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-Baqarah (2:208)",
    "verseNo": "2:208",
    "topic": "Enter Islam completely",
    "divineLogic": "Partial obedience to law is not acceptable—integrated submission required",
    "category": "Theology / Law"
  },
  {
    "surah": "Al-Baqarah (2:210)",
    "verseNo": "2:210",
    "topic": "Waiting for signs",
    "divineLogic": "Law demands proactive belief, not passive delay",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:215)",
    "verseNo": "2:215",
    "topic": "Who deserves charity",
    "divineLogic": "Legal wisdom: relatives, orphans, poor, travelers—social equity as law",
    "category": "Economic / Social Welfare"
  },
  {
    "surah": "Al-Baqarah (2:216)",
    "verseNo": "2:216",
    "topic": "Legal duty despite dislike",
    "divineLogic": "Law may be tough, but it ensures long-term justice",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:218)",
    "verseNo": "2:218",
    "topic": "Hijrah as legal action",
    "divineLogic": "Migration in law symbolizes moral and societal reform",
    "category": "Social / Legal"
  },
  {
    "surah": "Al-Baqarah (2:219)",
    "verseNo": "2:219",
    "topic": "Prohibition based on net harm",
    "divineLogic": "Law evolves with moral maturity and awareness of damage",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:221)",
    "verseNo": "2:221",
    "topic": "Marriage limitations",
    "divineLogic": "Faith is a legal filter in intimate relations",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:224)",
    "verseNo": "2:224",
    "topic": "Oaths should not block good",
    "divineLogic": "Law supersedes emotional decisions in sacred acts",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:225)",
    "verseNo": "2:225",
    "topic": "Oath accountability",
    "divineLogic": "Law is based on intention, not slips of the tongue",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:226-227)",
    "verseNo": "2:226-227",
    "topic": "Marital separation rights",
    "divineLogic": "Balance between male authority and mutual rights",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:230)",
    "verseNo": "2:230",
    "topic": "Final divorce ruling",
    "divineLogic": "Clear boundaries prevent misuse and emotional instability",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:233)",
    "verseNo": "2:233",
    "topic": "Rights of children, nursing mothers",
    "divineLogic": "Fiqh of parental responsibility rooted in divine mercy",
    "category": "Family / Social Welfare"
  },
  {
    "surah": "Al-Baqarah (2:234)",
    "verseNo": "2:234",
    "topic": "Widow’s waiting period",
    "divineLogic": "Protects lineage, inheritance, and dignity",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:235)",
    "verseNo": "2:235",
    "topic": "Engagement in iddah",
    "divineLogic": "Law balances human need with decorum and clarity",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:236)",
    "verseNo": "2:236",
    "topic": "Divorce before marriage",
    "divineLogic": "Shows law’s precision: even non-consummated marriages addressed",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Baqarah (2:237)",
    "verseNo": "2:237",
    "topic": "Mahr (dowry) regulations",
    "divineLogic": "Fairness even when marriage is canceled",
    "category": "Family / Economic"
  },
  {
    "surah": "Al-Baqarah (2:239)",
    "verseNo": "2:239",
    "topic": "Pray even in fear",
    "divineLogic": "Law is flexible in danger yet persistent in duty",
    "category": "Worship / Legal"
  },
  {
    "surah": "Al-Baqarah (2:240)",
    "verseNo": "2:240",
    "topic": "Rights of widows",
    "divineLogic": "Continuity of care post-death is built into the legal system",
    "category": "Family / Social Welfare"
  },
  {
    "surah": "Al-Baqarah (2:245)",
    "verseNo": "2:245",
    "topic": "Charity as a loan to Allah",
    "divineLogic": "Legal spending framed with reward logic",
    "category": "Economic / Spiritual"
  },
  {
    "surah": "Al-Baqarah (2:246)",
    "verseNo": "2:246",
    "topic": "Leadership conditions",
    "divineLogic": "Fiqh of political leadership includes strength and knowledge",
    "category": "Governance / Legal"
  },
  {
    "surah": "Al-Imran (3:14)",
    "verseNo": "3:14",
    "topic": "Worldly desires & law",
    "divineLogic": "Law exists to regulate instincts, not suppress them entirely",
    "category": "Ethics / Law"
  },
  {
    "surah": "Al-Imran (3:15-16)",
    "verseNo": "3:15-16",
    "topic": "Believers seek eternal reward",
    "divineLogic": "Motivation in legal observance is reward beyond this life",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Imran (3:26)",
    "verseNo": "3:26",
    "topic": "Power belongs to Allah",
    "divineLogic": "Legal power must reflect divine will, not human arrogance",
    "category": "Theology / Governance"
  },
  {
    "surah": "Al-Imran (3:28)",
    "verseNo": "3:28",
    "topic": "Avoid insincere alliances",
    "divineLogic": "Law demands loyalty to faith-based values",
    "category": "Ethics / Governance"
  },
  {
    "surah": "Al-Imran (3:29)",
    "verseNo": "3:29",
    "topic": "Accountability of thoughts",
    "divineLogic": "Deep legal insight: even secrecy is under divine jurisdiction",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Imran (3:92)",
    "verseNo": "3:92",
    "topic": "Charity must cost something",
    "divineLogic": "Spiritual law encourages real sacrifice",
    "category": "Economic / Spiritual"
  },
  {
    "surah": "Al-Imran (3:103)",
    "verseNo": "3:103",
    "topic": "Unity is a legal duty",
    "divineLogic": "Disunity is a social disorder",
    "category": "Social / Legal"
  },
  {
    "surah": "Al-Imran (3:104)",
    "verseNo": "3:104",
    "topic": "Rise a group to command good",
    "divineLogic": "Institutional legal framework for societal virtue",
    "category": "Governance / Social"
  },
  {
    "surah": "Al-Imran (3:110)",
    "verseNo": "3:110",
    "topic": "Enjoining right is community law",
    "divineLogic": "Legal guardianship of ethics is collective",
    "category": "Social / Ethics"
  },
  {
    "surah": "Al-Imran (3:118)",
    "verseNo": "3:118",
    "topic": "Don't take outsiders as allies",
    "divineLogic": "Law draws lines of cultural, spiritual sovereignty",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Al-Imran (3:130)",
    "verseNo": "3:130",
    "topic": "No compound interest",
    "divineLogic": "Legal principle of economic justice, anti-exploitation",
    "category": "Economic / Law"
  },
  {
    "surah": "Al-Imran (3:134)",
    "verseNo": "3:134",
    "topic": "Anger management & forgiveness",
    "divineLogic": "Legal reform begins with inner ethics",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Imran (3:186)",
    "verseNo": "3:186",
    "topic": "Patience after legal loss",
    "divineLogic": "Law may not always benefit instantly—faith in justice matters",
    "category": "Ethics / Spiritual"
  },
  {
    "surah": "Al-Imran (3:200)",
    "verseNo": "3:200",
    "topic": "Legal perseverance",
    "divineLogic": "Community reform needs sabr and strategic effort",
    "category": "Social / Ethics"
  },
  {
    "surah": "Al-Nisa (4:3)",
    "verseNo": "4:3",
    "topic": "Polygamy with conditions",
    "divineLogic": "Law moderates and restricts based on justice, not desires",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Nisa (4:4)",
    "verseNo": "4:4",
    "topic": "Mahr as obligation",
    "divineLogic": "Women's financial rights are legal—not cultural favors",
    "category": "Family / Economic"
  },
  {
    "surah": "Al-Nisa (4:6)",
    "verseNo": "4:6",
    "topic": "Orphan maturity test",
    "divineLogic": "Legal readiness > biological age",
    "category": "Legal / Orphans"
  },
  {
    "surah": "Al-Nisa (4:7)",
    "verseNo": "4:7",
    "topic": "Inheritance for women",
    "divineLogic": "Revolutionary legal equity in inheritance",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "Al-Nisa (4:10)",
    "verseNo": "4:10",
    "topic": "Warning for consuming orphan wealth",
    "divineLogic": "Strong deterrents protect vulnerable",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Nisa (4:11-12)",
    "verseNo": "4:11-12",
    "topic": "Legal shares in inheritance",
    "divineLogic": "Objective law over subjective preference",
    "category": "Legal / Inheritance"
  },
  {
    "surah": "Al-Nisa (4:19)",
    "verseNo": "4:19",
    "topic": "Women not inherited",
    "divineLogic": "Pre-Islamic injustices legally banned",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Nisa (4:21)",
    "verseNo": "4:21",
    "topic": "Marriage = solemn covenant",
    "divineLogic": "Defines nikah as a legal-social contract",
    "category": "Family / Legal"
  },
  {
    "surah": "Al-Nisa (4:23-24)",
    "verseNo": "4:23-24",
    "topic": "Marital prohibitions",
    "divineLogic": "Family structures legally protected",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Nisa (4:34)",
    "verseNo": "4:34",
    "topic": "Men’s responsibilities",
    "divineLogic": "Legal role ≠ privilege; it’s accountable leadership",
    "category": "Family / Ethics"
  },
  {
    "surah": "Al-Nisa (4:58)",
    "verseNo": "4:58",
    "topic": "Legal trust (amanah)",
    "divineLogic": "Leadership and judgement must reflect truth and ability",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Al-Nisa (4:59)",
    "verseNo": "4:59",
    "topic": "Obey authority—divinely aligned",
    "divineLogic": "Conditional obedience embedded in law",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Nisa (4:65)",
    "verseNo": "4:65",
    "topic": "Submit fully to Prophet's ruling",
    "divineLogic": "Legal authenticity tied to Prophet ﷺ’s judgment",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Nisa (4:92)",
    "verseNo": "4:92",
    "topic": "Manslaughter expiation",
    "divineLogic": "Law recognizes human error but demands compensation",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "Al-Ma’idah (5:1)",
    "verseNo": "5:1",
    "topic": "Contractual Law",
    "divineLogic": "Fulfill obligations—foundation of civil trust",
    "category": "Legal / Contracts"
  },
  {
    "surah": "Al-Ma’idah (5:2)",
    "verseNo": "5:2",
    "topic": "Social cooperation",
    "divineLogic": "Collaborate in righteousness, not sin—legal filtering of alliances",
    "category": "Social / Ethics"
  },
  {
    "surah": "Al-Ma’idah (5:3)",
    "verseNo": "5:3",
    "topic": "Food Law",
    "divineLogic": "Specifies forbidden foods; law regulates consumption based on purity",
    "category": "Dietary / Law"
  },
  {
    "surah": "Al-Ma’idah (5:5)",
    "verseNo": "5:5",
    "topic": "Interfaith food/marriage",
    "divineLogic": "Legal cross-faith social integration with clear boundaries",
    "category": "Family / Social Law"
  },
  {
    "surah": "Al-Ma’idah (5:6)",
    "verseNo": "5:6",
    "topic": "Purification law",
    "divineLogic": "Ritual purity is legally structured for spiritual presence",
    "category": "Worship / Law"
  },
  {
    "surah": "Al-Ma’idah (5:8)",
    "verseNo": "5:8",
    "topic": "Justice",
    "divineLogic": "Central principle—no legal system without unbiased justice",
    "category": "Ethics / Justice"
  },
  {
    "surah": "Al-Ma’idah (5:10)",
    "verseNo": "5:10",
    "topic": "Legal disbelief",
    "divineLogic": "Defines disbelievers legally; faith has societal consequences",
    "category": "Theology / Legal"
  },
  {
    "surah": "Al-Ma’idah (5:32)",
    "verseNo": "5:32",
    "topic": "Sanctity of life",
    "divineLogic": "Killing one is like killing all humanity—foundation of criminal law",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Ma’idah (5:33)",
    "verseNo": "5:33",
    "topic": "Hirabah (terror, robbery)",
    "divineLogic": "Distinct legal punishment for societal corruption",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "Al-Ma’idah (5:38)",
    "verseNo": "5:38",
    "topic": "Theft",
    "divineLogic": "Clear legal deterrent—balance of justice and prevention",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "Al-Ma’idah (5:42)",
    "verseNo": "5:42",
    "topic": "Bribery",
    "divineLogic": "Judging with bribes is a perversion of law",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Ma’idah (5:44)",
    "verseNo": "5:44",
    "topic": "Judgment by revelation",
    "divineLogic": "Legal rulings must be rooted in divine authority",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Ma’idah (5:45)",
    "verseNo": "5:45",
    "topic": "Qisas",
    "divineLogic": "Equal retaliation allowed, but forgiveness elevated",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Ma’idah (5:48)",
    "verseNo": "5:48",
    "topic": "Plural legal systems",
    "divineLogic": "Allah gave each group a law—global diversity respected within unity",
    "category": "Governance / Legal"
  },
  {
    "surah": "Al-Ma’idah (5:49)",
    "verseNo": "5:49",
    "topic": "Prophet’s authority",
    "divineLogic": "Legal ruling should avoid following desires",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Ma’idah (5:50)",
    "verseNo": "5:50",
    "topic": "Reject man-made injustice",
    "divineLogic": "Preference for divine law over unjust human systems",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-An'am (6:119)",
    "verseNo": "6:119",
    "topic": "Food ethics",
    "divineLogic": "Consume what Allah made lawful, and use knowledge",
    "category": "Dietary / Ethics"
  },
  {
    "surah": "Al-An'am (6:145)",
    "verseNo": "6:145",
    "topic": "Dietary boundaries",
    "divineLogic": "Law based on clarity—nothing hidden in lifestyle commands",
    "category": "Dietary / Law"
  },
  {
    "surah": "Al-A'raf (7:31)",
    "verseNo": "7:31",
    "topic": "Moderation in consumption",
    "divineLogic": "Eat and drink, but not wastefully—legal health preservation",
    "category": "Ethics / Health Law"
  },
  {
    "surah": "Al-A'raf (7:33)",
    "verseNo": "7:33",
    "topic": "Holistic sin law",
    "divineLogic": "Defines spiritual-legal boundaries: thought, speech, behavior",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-A'raf (7:56)",
    "verseNo": "7:56",
    "topic": "Ecological law",
    "divineLogic": "Don’t corrupt Earth—environmental Fiqh begins with preservation",
    "category": "Ethics / Environment"
  },
  {
    "surah": "Al-A'raf (7:85)",
    "verseNo": "7:85",
    "topic": "Fair trade & weights",
    "divineLogic": "Economic justice as divine legacy through prophets",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-A'raf (7:157)",
    "verseNo": "7:157",
    "topic": "Prophet’s legalization role",
    "divineLogic": "Messenger makes halal/haram—source of divine legislative power",
    "category": "Theology / Law"
  },
  {
    "surah": "At-Tawbah (9:5)",
    "verseNo": "9:5",
    "topic": "War law (contextual)",
    "divineLogic": "Commands in wartime are legal and contextual—not general aggression",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "At-Tawbah (9:6)",
    "verseNo": "9:6",
    "topic": "Asylum during war",
    "divineLogic": "Law preserves dignity even during war—right to hear the truth",
    "category": "Legal / Warfare Ethics"
  },
  {
    "surah": "At-Tawbah (9:7)",
    "verseNo": "9:7",
    "topic": "Treaty honor",
    "divineLogic": "Honor treaties unless broken—law of diplomatic ethics",
    "category": "Legal / International Law"
  },
  {
    "surah": "At-Tawbah (9:10)",
    "verseNo": "9:10",
    "topic": "No mercy for traitors",
    "divineLogic": "When oaths are broken, law activates consequences",
    "category": "Legal / Ethics"
  },
  {
    "surah": "At-Tawbah (9:29)",
    "verseNo": "9:29",
    "topic": "Legal taxation (Jizyah)",
    "divineLogic": "Social contract for protection of non-Muslims in Islamic governance",
    "category": "Governance / Economic Law"
  },
  {
    "surah": "At-Tawbah (9:60)",
    "verseNo": "9:60",
    "topic": "Zakat categories",
    "divineLogic": "Legal taxonomy of welfare—economic governance via 8 groups",
    "category": "Economic / Social Welfare"
  },
  {
    "surah": "At-Tawbah (9:103)",
    "verseNo": "9:103",
    "topic": "Purification via zakat",
    "divineLogic": "Economic law is also spiritual training",
    "category": "Economic / Spiritual"
  },
  {
    "surah": "Yunus (10:57)",
    "verseNo": "10:57",
    "topic": "Healing & guidance",
    "divineLogic": "Qur’an as foundation of ethical-legal healing",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Hud (11:85)",
    "verseNo": "11:85",
    "topic": "Accurate weights",
    "divineLogic": "Prophet Shu’ayb’s call to honest economy—legal root of financial ethics",
    "category": "Economic / Ethics"
  },
  {
    "surah": "An-Nahl (16:90)",
    "verseNo": "16:90",
    "topic": "Comprehensive legal ethic",
    "divineLogic": "Allah commands justice, excellence, kinship—core of all Fiqh",
    "category": "Ethics / Legal"
  },
  {
    "surah": "An-Nahl (16:91)",
    "verseNo": "16:91",
    "topic": "Fulfill contracts",
    "divineLogic": "Oaths and promises form basis of legality",
    "category": "Legal / Contracts"
  },
  {
    "surah": "An-Nahl (16:92)",
    "verseNo": "16:92",
    "topic": "Do not break pacts",
    "divineLogic": "Breaking lawful bonds weakens social trust",
    "category": "Legal / Ethics"
  },
  {
    "surah": "An-Nahl (16:97)",
    "verseNo": "16:97",
    "topic": "Good deeds = good life",
    "divineLogic": "Law’s outcome should be prosperity, not burden",
    "category": "Ethics / Social"
  },
  {
    "surah": "Al-Isra (17:23)",
    "verseNo": "17:23",
    "topic": "Parents' rights",
    "divineLogic": "First legal structure after Tawheed is family honor",
    "category": "Family / Ethics"
  },
  {
    "surah": "Al-Isra (17:26)",
    "verseNo": "17:26",
    "topic": "Avoid waste",
    "divineLogic": "Islamic law is against resource mismanagement",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Isra (17:31)",
    "verseNo": "17:31",
    "topic": "No killing for fear of poverty",
    "divineLogic": "Life > economy in Islamic law",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Isra (17:32)",
    "verseNo": "17:32",
    "topic": "No zina",
    "divineLogic": "Sexual ethics are legally enforced to protect family structure",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Isra (17:33)",
    "verseNo": "17:33",
    "topic": "Justice in life-taking",
    "divineLogic": "Only through law and right—no vigilantism",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "Al-Isra (17:34)",
    "verseNo": "17:34",
    "topic": "Respect orphans’ rights",
    "divineLogic": "Legal protection for the vulnerable",
    "category": "Legal / Orphans"
  },
  {
    "surah": "Al-Isra (17:35)",
    "verseNo": "17:35",
    "topic": "Weights and honesty",
    "divineLogic": "Economic micro-ethics made legal",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Isra (17:70)",
    "verseNo": "17:70",
    "topic": "Human dignity",
    "divineLogic": "Law must uphold human honor universally",
    "category": "Ethics / Human Rights"
  },
  {
    "surah": "Al-Isra (17:82)",
    "verseNo": "17:82",
    "topic": "Qur’an as healing and mercy",
    "divineLogic": "Law based on Qur’an brings justice with compassion",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Kahf (18:46)",
    "verseNo": "18:46",
    "topic": "Wealth is a test",
    "divineLogic": "Law must regulate wealth to avoid moral failure",
    "category": "Economic / Ethics"
  },
  {
    "surah": "Al-Kahf (18:110)",
    "verseNo": "18:110",
    "topic": "No partner in law",
    "divineLogic": "Legal rulings are acts of worship—only by divine authorization",
    "category": "Theology / Governance"
  },
  {
    "surah": "Maryam (19:59)",
    "verseNo": "19:59",
    "topic": "Neglect of prayer leads to deviation",
    "divineLogic": "Legal discipline in ibadah preserves societal structure",
    "category": "Worship / Ethics"
  },
  {
    "surah": "Taha (20:124)",
    "verseNo": "20:124",
    "topic": "Legal consequences of forgetting God",
    "divineLogic": "Personal disconnection from divine law results in internal suffering",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Taha (20:132)",
    "verseNo": "20:132",
    "topic": "Enjoin prayer on family",
    "divineLogic": "Legal leadership starts within the home",
    "category": "Family / Worship Law"
  },
  {
    "surah": "Al-Anbiya (21:47)",
    "verseNo": "21:47",
    "topic": "Scales of justice",
    "divineLogic": "Law reflects divine precision—nothing is overlooked",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Anbiya (21:92)",
    "verseNo": "21:92",
    "topic": "Unity of the ummah",
    "divineLogic": "Law unites people under a single legal and moral system",
    "category": "Social / Governance"
  },
  {
    "surah": "Al-Anbiya (21:105)",
    "verseNo": "21:105",
    "topic": "Inheritance of Earth",
    "divineLogic": "Legal stewardship of Earth is for righteous leaders",
    "category": "Governance / Environment"
  },
  {
    "surah": "Al-Hajj (22:40)",
    "verseNo": "22:40",
    "topic": "Protect worship places",
    "divineLogic": "Islamic law defends multi-faith religious spaces",
    "category": "Legal / Religious Freedom"
  },
  {
    "surah": "Al-Hajj (22:41)",
    "verseNo": "22:41",
    "topic": "Governance and Salah",
    "divineLogic": "Ideal rulers uphold prayer, zakat, and justice",
    "category": "Governance / Worship"
  },
  {
    "surah": "Al-Hajj (22:78)",
    "verseNo": "22:78",
    "topic": "Submission and legal burden",
    "divineLogic": "Religion is not hardship—legal obligations scaled to ability",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Mu’minun (23:1-3)",
    "verseNo": "23:1-3",
    "topic": "Prayer and distractions",
    "divineLogic": "Legal worship requires full mental presence",
    "category": "Worship / Ethics"
  },
  {
    "surah": "Al-Mu’minun (23:5-7)",
    "verseNo": "23:5-7",
    "topic": "Sexual boundaries",
    "divineLogic": "Legal protection through marriage and chastity",
    "category": "Family / Law"
  },
  {
    "surah": "Al-Mu’minun (23:8)",
    "verseNo": "23:8",
    "topic": "Trust and oaths",
    "divineLogic": "Legal society built on truth and accountability",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Mu’minun (23:71)",
    "verseNo": "23:71",
    "topic": "Law must follow truth",
    "divineLogic": "Societies collapse when law follows desires",
    "category": "Governance / Ethics"
  },
  {
    "surah": "An-Nur (24:2)",
    "verseNo": "24:2",
    "topic": "Punishment for zina",
    "divineLogic": "Legal deterrent for preserving moral order",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "An-Nur (24:4)",
    "verseNo": "24:4",
    "topic": "Qadhf (false accusation)",
    "divineLogic": "Legal requirement of 4 witnesses to protect honor",
    "category": "Legal / Criminal Law"
  },
  {
    "surah": "An-Nur (24:13)",
    "verseNo": "24:13",
    "topic": "Burden of proof",
    "divineLogic": "Law demands evidence, not suspicion",
    "category": "Legal / Justice"
  },
  {
    "surah": "An-Nur (24:19)",
    "verseNo": "24:19",
    "topic": "Public shame is a crime",
    "divineLogic": "Law protects psychological dignity",
    "category": "Ethics / Social Law"
  },
  {
    "surah": "An-Nur (24:27-28)",
    "verseNo": "24:27-28",
    "topic": "Privacy law",
    "divineLogic": "Ask permission—legal protection of domestic space",
    "category": "Family / Privacy Law"
  },
  {
    "surah": "An-Nur (24:30-31)",
    "verseNo": "24:30-31",
    "topic": "Gaze and modesty",
    "divineLogic": "Modesty begins with intention and legal behavior",
    "category": "Ethics / Family Law"
  },
  {
    "surah": "An-Nur (24:58)",
    "verseNo": "24:58",
    "topic": "Children's privacy rights",
    "divineLogic": "Legal regulation of household behavior",
    "category": "Family / Ethics"
  },
  {
    "surah": "An-Nur (24:61)",
    "verseNo": "24:61",
    "topic": "Disabled persons’ rights",
    "divineLogic": "Islam includes physical accessibility in legal equity",
    "category": "Social / Rights"
  },
  {
    "surah": "Al-Furqan (25:63)",
    "verseNo": "25:63",
    "topic": "Response to ignorance",
    "divineLogic": "Law favors patience and peace, not retaliation",
    "category": "Ethics / Social Law"
  },
  {
    "surah": "Al-Furqan (25:68-70)",
    "verseNo": "25:68-70",
    "topic": "Three major crimes",
    "divineLogic": "Murder, zina, shirk: root causes of social collapse",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Furqan (25:72)",
    "verseNo": "25:72",
    "topic": "False testimony",
    "divineLogic": "Law requires integrity of speech",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Ash-Shu'ara (26:183)",
    "verseNo": "26:183",
    "topic": "Short-measuring",
    "divineLogic": "Economic cheating is legally prohibited",
    "category": "Economic / Criminal Law"
  },
  {
    "surah": "An-Naml (27:89-90)",
    "verseNo": "27:89-90",
    "topic": "Judgment on deeds",
    "divineLogic": "Law values both legal compliance and inner sincerity",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Qasas (28:4)",
    "verseNo": "28:4",
    "topic": "Tyranny & legal injustice",
    "divineLogic": "Fir’awn used legal power to divide—warning to rulers",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Al-Qasas (28:26)",
    "verseNo": "28:26",
    "topic": "Competent leadership",
    "divineLogic": "Hiring/following those with strength and trustworthiness",
    "category": "Governance / Leadership Law"
  },
  {
    "surah": "Al-Qasas (28:77)",
    "verseNo": "28:77",
    "topic": "Balance dunya and akhira",
    "divineLogic": "Law must regulate both personal ambition and social benefit",
    "category": "Ethics / Governance"
  },
  {
    "surah": "Al-Qasas (28:83)",
    "verseNo": "28:83",
    "topic": "Humility in legal reward",
    "divineLogic": "Heaven is for those who avoid corruption and pride",
    "category": "Ethics / Spiritual"
  },
  {
    "surah": "Al-Ankabut (29:45)",
    "verseNo": "29:45",
    "topic": "Salah prevents evil",
    "divineLogic": "True legal worship reforms society",
    "category": "Worship / Social Law"
  },
  {
    "surah": "Ar-Rum (30:30)",
    "verseNo": "30:30",
    "topic": "Fitrah & natural law",
    "divineLogic": "Islam’s legal system aligns with human nature",
    "category": "Theology / Legal Philosophy"
  },
  {
    "surah": "Ar-Rum (30:41)",
    "verseNo": "30:41",
    "topic": "Earthly corruption",
    "divineLogic": "Environmental law prevents ecological destruction",
    "category": "Environment / Ethics"
  },
  {
    "surah": "Luqman (31:12)",
    "verseNo": "31:12",
    "topic": "Wisdom in law",
    "divineLogic": "Law without wisdom is incomplete",
    "category": "Legal / Philosophy"
  },
  {
    "surah": "Luqman (31:14)",
    "verseNo": "31:14",
    "topic": "Parents’ rights & balance",
    "divineLogic": "Legal obedience with exception for disbelief",
    "category": "Family / Ethics"
  },
  {
    "surah": "Luqman (31:17)",
    "verseNo": "31:17",
    "topic": "Prayer, justice, and patience",
    "divineLogic": "Moral and legal training from youth",
    "category": "Worship / Ethics"
  },
  {
    "surah": "Luqman (31:18-19)",
    "verseNo": "31:18-19",
    "topic": "Social behavior ethics",
    "divineLogic": "Law extends to tone, pride, and speech",
    "category": "Ethics / Social Law"
  },
  {
    "surah": "As-Sajdah (32:24)",
    "verseNo": "32:24",
    "topic": "Leadership through patience",
    "divineLogic": "Law demands leadership by moral excellence",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Al-Ahzab (33:5)",
    "verseNo": "33:5",
    "topic": "Naming by fathers",
    "divineLogic": "Legal identity linked to genealogy",
    "category": "Family / Legal Identity"
  },
  {
    "surah": "Al-Ahzab (33:6)",
    "verseNo": "33:6",
    "topic": "Prophet’s wives = mothers",
    "divineLogic": "Legal restrictions on marrying them after him",
    "category": "Family / Legal Law"
  },
  {
    "surah": "Al-Ahzab (33:35)",
    "verseNo": "33:35",
    "topic": "Equality in reward",
    "divineLogic": "Legal equality for men and women in duties and rights",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-Ahzab (33:36)",
    "verseNo": "33:36",
    "topic": "Obedience to law",
    "divineLogic": "Believers do not reject divine rulings",
    "category": "Governance / Law"
  },
  {
    "surah": "Al-Ahzab (33:53)",
    "verseNo": "33:53",
    "topic": "Etiquette of public/private",
    "divineLogic": "Law regulates behavior even in social spaces",
    "category": "Social / Ethics"
  },
  {
    "surah": "Al-Ahzab (33:59)",
    "verseNo": "33:59",
    "topic": "Hijab as protection",
    "divineLogic": "Legal modesty protects women from harm",
    "category": "Family / Social Law"
  },
  {
    "surah": "Saba (34:46)",
    "verseNo": "34:46",
    "topic": "Reflect before law",
    "divineLogic": "Legal reform needs deep, personal reflection",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Fatir (35:18)",
    "verseNo": "35:18",
    "topic": "No bearer carries burden",
    "divineLogic": "Law of personal accountability—no vicarious guilt",
    "category": "Legal / Justice"
  },
  {
    "surah": "Fatir (35:32)",
    "verseNo": "35:32",
    "topic": "Inheritance of Book",
    "divineLogic": "Legal and spiritual knowledge requires action",
    "category": "Legal / Knowledge"
  },
  {
    "surah": "Ya-Sin (36:54)",
    "verseNo": "36:54",
    "topic": "No injustice on Judgment",
    "divineLogic": "Law of complete fairness in divine judgment",
    "category": "Legal / Justice"
  },
  {
    "surah": "As-Saffat (37:24)",
    "verseNo": "37:24",
    "topic": "Divine court judgment",
    "divineLogic": "All will face divine court—law is ultimate",
    "category": "Theology / Legal"
  },
  {
    "surah": "Az-Zumar (39:9)",
    "verseNo": "39:9",
    "topic": "Knowledge vs ignorance",
    "divineLogic": "Legal preference for informed decision-making",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Az-Zumar (39:18)",
    "verseNo": "39:18",
    "topic": "Listen and follow best",
    "divineLogic": "Legal obedience must be reasoned, not blind",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Az-Zumar (39:53)",
    "verseNo": "39:53",
    "topic": "Law of repentance",
    "divineLogic": "Divine law allows full return after wrong",
    "category": "Theology / Legal"
  },
  {
    "surah": "Az-Zumar (39:70)",
    "verseNo": "39:70",
    "topic": "Deeds are recorded",
    "divineLogic": "Legal surveillance is total—divine documentation",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Az-Zumar (39:71)",
    "verseNo": "39:71",
    "topic": "Consequence of disbelief",
    "divineLogic": "Legal judgment carries both personal and collective outcomes",
    "category": "Legal / Theology"
  },
  {
    "surah": "Az-Zumar (39:74)",
    "verseNo": "39:74",
    "topic": "Reward of truthfulness",
    "divineLogic": "Law ultimately leads to freedom and peace",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Ghafir (40:17)",
    "verseNo": "40:17",
    "topic": "Individual accountability",
    "divineLogic": "No soul can blame another in divine law",
    "category": "Legal / Justice"
  },
  {
    "surah": "Ghafir (40:20)",
    "verseNo": "40:20",
    "topic": "Allah judges in truth",
    "divineLogic": "Divine law is based on absolute objectivity",
    "category": "Theology / Justice"
  },
  {
    "surah": "Ghafir (40:27)",
    "verseNo": "40:27",
    "topic": "Reliance on Allah’s judgment",
    "divineLogic": "Legal resistance to tyranny is rooted in tawakkul",
    "category": "Governance / Ethics"
  },
  {
    "surah": "Ghafir (40:60)",
    "verseNo": "40:60",
    "topic": "Dua as law of connection",
    "divineLogic": "Legal process includes direct supplication to Allah",
    "category": "Worship / Legal"
  },
  {
    "surah": "Fussilat (41:19-20)",
    "verseNo": "41:19-20",
    "topic": "Limbs testify",
    "divineLogic": "Human body becomes legal evidence—bio-forensics in divine court",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Fussilat (41:34)",
    "verseNo": "41:34",
    "topic": "Good and evil not equal",
    "divineLogic": "Law encourages response to harm with excellence",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Ash-Shura (42:15)",
    "verseNo": "42:15",
    "topic": "Upright judgment",
    "divineLogic": "Prophet’s role includes fair arbitration",
    "category": "Governance / Justice"
  },
  {
    "surah": "Ash-Shura (42:18)",
    "verseNo": "42:18",
    "topic": "Law and urgency",
    "divineLogic": "Only the unjust fear divine law’s consequences",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Ash-Shura (42:40)",
    "verseNo": "42:40",
    "topic": "Forgiveness over revenge",
    "divineLogic": "Law allows justice but elevates forgiveness",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Ash-Shura (42:43)",
    "verseNo": "42:43",
    "topic": "Patience as legal strength",
    "divineLogic": "Strategic endurance is legally rewarded",
    "category": "Ethics / Governance"
  },
  {
    "surah": "Ash-Shura (42:51)",
    "verseNo": "42:51",
    "topic": "Revelation as legal source",
    "divineLogic": "Legal systems must be rooted in revelation",
    "category": "Theology / Law"
  },
  {
    "surah": "Az-Zukhruf (43:32)",
    "verseNo": "43:32",
    "topic": "Distribution of wealth",
    "divineLogic": "Legal-economic inequality exists to maintain system balance",
    "category": "Economic / Governance"
  },
  {
    "surah": "Az-Zukhruf (43:80)",
    "verseNo": "43:80",
    "topic": "Divine hearing of secrets",
    "divineLogic": "Surveillance by divine law is total",
    "category": "Theology / Accountability"
  },
  {
    "surah": "Ad-Dukhan (44:3-6)",
    "verseNo": "44:3-6",
    "topic": "Night of decree",
    "divineLogic": "Divine legal codes revealed in structured events",
    "category": "Theology / Revelation"
  },
  {
    "surah": "Al-Jathiya (45:21)",
    "verseNo": "45:21",
    "topic": "Equal law for all?",
    "divineLogic": "Disbelievers wrongly expect same outcome as believers",
    "category": "Legal / Theology"
  },
  {
    "surah": "Al-Jathiya (45:22)",
    "verseNo": "45:22",
    "topic": "Test through deeds",
    "divineLogic": "Legal test of life governed by fair trial system",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Ahqaf (46:19)",
    "verseNo": "46:19",
    "topic": "Rank by deeds",
    "divineLogic": "Law calibrates reward individually",
    "category": "Legal / Justice"
  },
  {
    "surah": "Muhammad (47:2)",
    "verseNo": "47:2",
    "topic": "Righteous get legal reform",
    "divineLogic": "Forgiveness tied to moral transformation",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Muhammad (47:7)",
    "verseNo": "47:7",
    "topic": "Obedience strengthens rule",
    "divineLogic": "Legal strength is reciprocal—Allah supports those who obey",
    "category": "Governance / Law"
  },
  {
    "surah": "Muhammad (47:22-23)",
    "verseNo": "47:22-23",
    "topic": "Harm to kin cuts divine mercy",
    "divineLogic": "Law protects family unity as sacred",
    "category": "Family / Ethics"
  },
  {
    "surah": "Muhammad (47:25-26)",
    "verseNo": "47:25-26",
    "topic": "Apostasy and deception",
    "divineLogic": "Legal consequences of turning away knowingly",
    "category": "Legal / Theology"
  },
  {
    "surah": "Al-Fath (48:10)",
    "verseNo": "48:10",
    "topic": "Pledges to Prophet = to Allah",
    "divineLogic": "Political and legal oaths are sacred",
    "category": "Governance / Legal"
  },
  {
    "surah": "Al-Fath (48:18)",
    "verseNo": "48:18",
    "topic": "Divine pleasure from loyalty",
    "divineLogic": "Legal agreements honored lead to divine support",
    "category": "Ethics / Governance"
  },
  {
    "surah": "Al-Hujurat (49:1)",
    "verseNo": "49:1",
    "topic": "Respect divine command order",
    "divineLogic": "Legal discipline includes timing and tone",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Hujurat (49:6)",
    "verseNo": "49:6",
    "topic": "Verify news",
    "divineLogic": "Legal process demands fact-checking (anti-fake news ayah)",
    "category": "Legal / Information Ethics"
  },
  {
    "surah": "Al-Hujurat (49:9)",
    "verseNo": "49:9",
    "topic": "Mediate conflict",
    "divineLogic": "Fiqh of peacemaking between believers",
    "category": "Governance / Conflict Resolution"
  },
  {
    "surah": "Al-Hujurat (49:10)",
    "verseNo": "49:10",
    "topic": "Brotherhood law",
    "divineLogic": "Legal foundation of the ummah: brotherhood before ruling",
    "category": "Social / Governance"
  },
  {
    "surah": "Al-Hujurat (49:11)",
    "verseNo": "49:11",
    "topic": "Mockery forbidden",
    "divineLogic": "Law defends psychological and social dignity",
    "category": "Ethics / Social Law"
  },
  {
    "surah": "Al-Hujurat (49:12)",
    "verseNo": "49:12",
    "topic": "Avoid spying & suspicion",
    "divineLogic": "Privacy and legal evidence are sacred",
    "category": "Legal / Privacy Law"
  },
  {
    "surah": "Al-Hujurat (49:13)",
    "verseNo": "49:13",
    "topic": "All humans equal",
    "divineLogic": "Law honors diversity; Taqwa is the legal scale",
    "category": "Legal / Human Rights"
  },
  {
    "surah": "Qaf (50:16)",
    "verseNo": "50:16",
    "topic": "Allah knows inner law",
    "divineLogic": "No law bypasses divine omniscience",
    "category": "Theology / Accountability"
  },
  {
    "surah": "Qaf (50:18)",
    "verseNo": "50:18",
    "topic": "Every word recorded",
    "divineLogic": "Divine legal surveillance includes speech logs",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Qaf (50:29)",
    "verseNo": "50:29",
    "topic": "Allah’s judgment is final",
    "divineLogic": "Legal decrees of God are irreversible",
    "category": "Theology / Law"
  },
  {
    "surah": "Adh-Dhariyat (51:55)",
    "verseNo": "51:55",
    "topic": "Legal reminder to believers",
    "divineLogic": "Education and repetition are part of legal culture",
    "category": "Legal / Education"
  },
  {
    "surah": "At-Tur (52:21)",
    "verseNo": "52:21",
    "topic": "Generational reward",
    "divineLogic": "Family ties maintained in divine legal structure",
    "category": "Family / Legal"
  },
  {
    "surah": "An-Najm (53:38-39)",
    "verseNo": "53:38-39",
    "topic": "Earned accountability",
    "divineLogic": "Law based on action, not association",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Qamar (54:16)",
    "verseNo": "54:16",
    "topic": "Warnings rejected = punishment",
    "divineLogic": "Legal neglect invites destruction",
    "category": "Legal / Theology"
  },
  {
    "surah": "Ar-Rahman (55:7-9)",
    "verseNo": "55:7-9",
    "topic": "Balance and scales",
    "divineLogic": "Divine justice = physical and moral calibration",
    "category": "Legal / Justice"
  },
  {
    "surah": "Ar-Rahman (55:60)",
    "verseNo": "55:60",
    "topic": "Reward matches good",
    "divineLogic": "Law of reciprocity governs divine reward",
    "category": "Ethics / Justice"
  },
  {
    "surah": "Al-Waqi’ah (56:7-10)",
    "verseNo": "56:7-10",
    "topic": "Classification of souls",
    "divineLogic": "Legal outcomes categorized into 3 groups",
    "category": "Theology / Legal"
  },
  {
    "surah": "Al-Waqi’ah (56:78-80)",
    "verseNo": "56:78-80",
    "topic": "Protected Book",
    "divineLogic": "Divine law cannot be tampered with",
    "category": "Theology / Law"
  },
  {
    "surah": "Al-Hadid (57:25)",
    "verseNo": "57:25",
    "topic": "Prophets sent with law",
    "divineLogic": "Law, book, and balance are central tools of justice",
    "category": "Legal / Governance"
  },
  {
    "surah": "Al-Hadid (57:27)",
    "verseNo": "57:27",
    "topic": "Monasticism innovated",
    "divineLogic": "Law critiques invented restrictions",
    "category": "Legal / Religious Law"
  },
  {
    "surah": "Al-Mujadila (58:1)",
    "verseNo": "58:1",
    "topic": "Women's legal rights",
    "divineLogic": "Woman's complaint to Allah = direct legislative change",
    "category": "Family / Legal Rights"
  },
  {
    "surah": "Al-Mujadila (58:2-3)",
    "verseNo": "58:2-3",
    "topic": "Zihar invalidated",
    "divineLogic": "Law protects marital dignity",
    "category": "Family / Legal Law"
  },
  {
    "surah": "Al-Mujadila (58:7)",
    "verseNo": "58:7",
    "topic": "Secret meetings witnessed",
    "divineLogic": "Divine law includes private decisions",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Mujadila (58:11)",
    "verseNo": "58:11",
    "topic": "Make room in gatherings",
    "divineLogic": "Law supports inclusion and learning",
    "category": "Social / Ethics"
  },
  {
    "surah": "Al-Hashr (59:7)",
    "verseNo": "59:7",
    "topic": "Wealth distribution law",
    "divineLogic": "Prevents hoarding by elite; wealth circulates lawfully",
    "category": "Economic / Governance"
  },
  {
    "surah": "Al-Hashr (59:9)",
    "verseNo": "59:9",
    "topic": "Prioritize others",
    "divineLogic": "Legal altruism encouraged in society building",
    "category": "Ethics / Social Law"
  },
  {
    "surah": "Al-Hashr (59:18)",
    "verseNo": "59:18",
    "topic": "Self-audit",
    "divineLogic": "Legal reform begins with reflection",
    "category": "Ethics / Legal Reform"
  },
  {
    "surah": "Al-Hashr (59:19)",
    "verseNo": "59:19",
    "topic": "Forgetting Allah = self-loss",
    "divineLogic": "Disconnect from law corrupts identity",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Mumtahina (60:1)",
    "verseNo": "60:1",
    "topic": "Don't ally with enemies",
    "divineLogic": "Legal caution in political loyalty",
    "category": "Governance / Security"
  },
  {
    "surah": "Al-Mumtahina (60:8)",
    "verseNo": "60:8",
    "topic": "Justice even to non-Muslims",
    "divineLogic": "Legal fairness applies regardless of faith",
    "category": "Legal / Human Rights"
  },
  {
    "surah": "Al-Mumtahina (60:10)",
    "verseNo": "60:10",
    "topic": "Women migrants test",
    "divineLogic": "Legal method to verify asylum and marital validity",
    "category": "Legal / Social Law"
  },
  {
    "surah": "As-Saff (61:2-3)",
    "verseNo": "61:2-3",
    "topic": "Practice what you preach",
    "divineLogic": "Legal action must match speech",
    "category": "Ethics / Legal"
  },
  {
    "surah": "As-Saff (61:4)",
    "verseNo": "61:4",
    "topic": "Battle in rows = strength",
    "divineLogic": "Legal unity for protection and victory",
    "category": "Governance / Military Law"
  },
  {
    "surah": "Al-Jumu'ah (62:9-10)",
    "verseNo": "62:9-10",
    "topic": "Friday prayer law",
    "divineLogic": "Economic activity paused for legal worship",
    "category": "Worship / Economic Law"
  },
  {
    "surah": "Al-Munafiqun (63:1)",
    "verseNo": "63:1",
    "topic": "Hypocrites lie under oath",
    "divineLogic": "Legal system must expose false allegiance",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Munafiqun (63:4)",
    "verseNo": "63:4",
    "topic": "Outward beauty, inward rot",
    "divineLogic": "Law judges by truth, not image",
    "category": "Legal / Ethics"
  },
  {
    "surah": "At-Taghabun (64:14-15)",
    "verseNo": "64:14-15",
    "topic": "Family as trial",
    "divineLogic": "Law balances love and spiritual caution",
    "category": "Family / Ethics"
  },
  {
    "surah": "At-Talaq (65:1)",
    "verseNo": "65:1",
    "topic": "Divorce procedure",
    "divineLogic": "Legal steps required for clarity and fairness",
    "category": "Family / Legal Law"
  },
  {
    "surah": "At-Talaq (65:2)",
    "verseNo": "65:2",
    "topic": "Witness in divorce",
    "divineLogic": "Legal documentation avoids future harm",
    "category": "Family / Legal Procedure"
  },
  {
    "surah": "At-Talaq (65:6-7)",
    "verseNo": "65:6-7",
    "topic": "Provide for wives",
    "divineLogic": "Post-divorce support is legal obligation",
    "category": "Family / Economic Law"
  },
  {
    "surah": "At-Tahrim (66:1)",
    "verseNo": "66:1",
    "topic": "Halal cannot be made haram",
    "divineLogic": "No personal legislation allowed over divine law",
    "category": "Legal / Theology"
  },
  {
    "surah": "At-Tahrim (66:5)",
    "verseNo": "66:5",
    "topic": "Prophet’s wives' accountability",
    "divineLogic": "Even highest status doesn’t override legal consequence",
    "category": "Legal / Ethics"
  },
  {
    "surah": "At-Tahrim (66:6)",
    "verseNo": "66:6",
    "topic": "Family protection from Fire",
    "divineLogic": "Legal guardianship includes spiritual safety",
    "category": "Family / Spiritual Law"
  },
  {
    "surah": "Al-Mulk (67:2)",
    "verseNo": "67:2",
    "topic": "Life as legal test",
    "divineLogic": "Existence itself is governed by divine law",
    "category": "Theology / Legal Philosophy"
  },
  {
    "surah": "Al-Mulk (67:15)",
    "verseNo": "67:15",
    "topic": "Walk on earth & eat",
    "divineLogic": "Law permits use with responsibility",
    "category": "Ethics / Environmental Law"
  },
  {
    "surah": "Al-Mulk (67:29)",
    "verseNo": "67:29",
    "topic": "Trust in Rahman",
    "divineLogic": "Law integrates faith in divine justice",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Al-Qalam (68:10)",
    "verseNo": "68:10",
    "topic": "Do not follow sinners",
    "divineLogic": "Legal alliances must be based on ethics",
    "category": "Ethics / Governance"
  },
  {
    "surah": "Al-Qalam (68:36)",
    "verseNo": "68:36",
    "topic": "Equal reward?",
    "divineLogic": "Law discriminates based on conduct",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Haqqah (69:18)",
    "verseNo": "69:18",
    "topic": "All will be exposed",
    "divineLogic": "Divine court has no missing evidence",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Haqqah (69:25-29)",
    "verseNo": "69:25-29",
    "topic": "Regret of the guilty",
    "divineLogic": "Legal realization too late is still binding",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Haqqah (69:19-24)",
    "verseNo": "69:19-24",
    "topic": "Joy of the saved",
    "divineLogic": "Legal record brings delight when just",
    "category": "Legal / Reward"
  },
  {
    "surah": "Al-Ma’arij (70:19-25)",
    "verseNo": "70:19-25",
    "topic": "Social responsibility",
    "divineLogic": "Law binds personal wealth to public need",
    "category": "Economic / Social Law"
  },
  {
    "surah": "Al-Muzzammil (73:20)",
    "verseNo": "73:20",
    "topic": "Night prayer & Quran",
    "divineLogic": "Early legal training in discipline and reform",
    "category": "Worship / Legal Development"
  },
  {
    "surah": "Al-Muddathir (74:38)",
    "verseNo": "74:38",
    "topic": "Soul tied to deeds",
    "divineLogic": "Legal record is personal and unshared",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Insan (76:2)",
    "verseNo": "76:2",
    "topic": "Test through choice",
    "divineLogic": "Law honors free will with accountability",
    "category": "Theology / Legal Philosophy"
  },
  {
    "surah": "Al-Insan (76:8-9)",
    "verseNo": "76:8-9",
    "topic": "Feeding without return",
    "divineLogic": "Legal altruism honored in divine law",
    "category": "Ethics / Social Law"
  },
  {
    "surah": "Al-Insan (76:11)",
    "verseNo": "76:11",
    "topic": "Reward = protection from harm",
    "divineLogic": "Law results in both reward and refuge",
    "category": "Legal / Reward"
  },
  {
    "surah": "Al-Mursalat (77:7)",
    "verseNo": "77:7",
    "topic": "Clear warning system",
    "divineLogic": "Law is always preceded by divine notice",
    "category": "Legal / Theology"
  },
  {
    "surah": "Al-Mursalat (77:15)",
    "verseNo": "77:15",
    "topic": "Woe to deniers",
    "divineLogic": "Denial of law has graduated consequences",
    "category": "Legal / Accountability"
  },
  {
    "surah": "An-Naba (78:6-16)",
    "verseNo": "78:6-16",
    "topic": "Cosmological law",
    "divineLogic": "Earth's design is in legal precision",
    "category": "Theology / Natural Law"
  },
  {
    "surah": "An-Naba (78:20-30)",
    "verseNo": "78:20-30",
    "topic": "Legal accountability",
    "divineLogic": "Hell as result of violation of truth",
    "category": "Legal / Justice"
  },
  {
    "surah": "An-Nazi’at (79:1-5)",
    "verseNo": "79:1-5",
    "topic": "Order of execution",
    "divineLogic": "Divine commands operate in legal sequences",
    "category": "Theology / Legal Order"
  },
  {
    "surah": "Abasa (80:34-37)",
    "verseNo": "80:34-37",
    "topic": "Legal isolation",
    "divineLogic": "No helpers on Day of Judgment",
    "category": "Legal / Accountability"
  },
  {
    "surah": "At-Takwir (81:14)",
    "verseNo": "81:14",
    "topic": "Deeds shown",
    "divineLogic": "Divine ledger becomes manifest",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Infitar (82:10-12)",
    "verseNo": "82:10-12",
    "topic": "Recording angels",
    "divineLogic": "Law is enforced by unseen witnesses",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Infitar (82:13-14)",
    "verseNo": "82:13-14",
    "topic": "Righteous vs wicked",
    "divineLogic": "Law sorts by moral performance",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Mutaffifin (83:1-3)",
    "verseNo": "83:1-3",
    "topic": "Cheating in trade",
    "divineLogic": "Legal economics begins with honesty",
    "category": "Economic / Legal Ethics"
  },
  {
    "surah": "Al-Mutaffifin (83:7-9)",
    "verseNo": "83:7-9",
    "topic": "Sijjin: wicked record",
    "divineLogic": "Divine registry of illegal, unethical deeds",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Mutaffifin (83:18-20)",
    "verseNo": "83:18-20",
    "topic": "‘Illiyyin: righteous record",
    "divineLogic": "Honor and security in lawful living",
    "category": "Legal / Reward"
  },
  {
    "surah": "Al-Inshiqaq (84:7-15)",
    "verseNo": "84:7-15",
    "topic": "Receiving book in right/left hand",
    "divineLogic": "Symbol of legal outcome",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Burooj (85:1-10)",
    "verseNo": "85:1-10",
    "topic": "Trial by fire",
    "divineLogic": "Divine justice for persecuted believers",
    "category": "Legal / Justice"
  },
  {
    "surah": "At-Tariq (86:9)",
    "verseNo": "86:9",
    "topic": "Hidden secrets revealed",
    "divineLogic": "Law includes hidden motives",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-A’la (87:14-15)",
    "verseNo": "87:14-15",
    "topic": "Success via purification",
    "divineLogic": "Legal reform includes inner cleansing",
    "category": "Ethics / Legal Development"
  },
  {
    "surah": "Al-Ghashiyah (88:21-26)",
    "verseNo": "88:21-26",
    "topic": "Reminder, not controller",
    "divineLogic": "Law gives message but respects choice",
    "category": "Theology / Legal Philosophy"
  },
  {
    "surah": "Al-Fajr (89:27-30)",
    "verseNo": "89:27-30",
    "topic": "Return to Lord peacefully",
    "divineLogic": "Obedience to law grants eternal peace",
    "category": "Theology / Reward"
  },
  {
    "surah": "Al-Balad (90:4)",
    "verseNo": "90:4",
    "topic": "Human created in struggle",
    "divineLogic": "Law emerges from human tension and test",
    "category": "Theology / Legal Philosophy"
  },
  {
    "surah": "Al-Balad (90:12-16)",
    "verseNo": "90:12-16",
    "topic": "Difficult moral actions",
    "divineLogic": "Law honors feeding, freeing, and aiding",
    "category": "Ethics / Social Law"
  },
  {
    "surah": "Al-Balad (90:17)",
    "verseNo": "90:17",
    "topic": "Encouraging truth and patience",
    "divineLogic": "Moral support becomes legal virtue",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Ash-Shams (91:7-10)",
    "verseNo": "91:7-10",
    "topic": "Soul and taqwa",
    "divineLogic": "Divine law built into soul’s structure",
    "category": "Theology / Legal Philosophy"
  },
  {
    "surah": "Al-Lail (92:5-10)",
    "verseNo": "92:5-10",
    "topic": "Dual path of law",
    "divineLogic": "Actions lead to divine facilitation or restraint",
    "category": "Theology / Ethics"
  },
  {
    "surah": "Ad-Duha (93:6-11)",
    "verseNo": "93:6-11",
    "topic": "Mercy and protection law",
    "divineLogic": "Legal response to orphanhood and vulnerability",
    "category": "Family / Social Law"
  },
  {
    "surah": "Al-Inshirah (94:5-6)",
    "verseNo": "94:5-6",
    "topic": "Ease follows hardship",
    "divineLogic": "Law reflects rhythm of divine justice",
    "category": "Theology / Ethics"
  },
  {
    "surah": "At-Tin (95:4-6)",
    "verseNo": "95:4-6",
    "topic": "Human nature and descent",
    "divineLogic": "Law restores fitrah to dignity",
    "category": "Theology / Human Nature"
  },
  {
    "surah": "Al-‘Alaq (96:1-5)",
    "verseNo": "96:1-5",
    "topic": "Legal basis: Knowledge",
    "divineLogic": "Revelation = first act of legal awakening",
    "category": "Legal / Knowledge"
  },
  {
    "surah": "Al-‘Alaq (96:6-8)",
    "verseNo": "96:6-8",
    "topic": "Arrogance before law",
    "divineLogic": "Wealth must not override divine limits",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-‘Alaq (96:9-19)",
    "verseNo": "96:9-19",
    "topic": "Prohibition of blocking prayer",
    "divineLogic": "Preventing worship = punishable offense",
    "category": "Legal / Religious Law"
  },
  {
    "surah": "Al-Qadr (97:1-5)",
    "verseNo": "97:1-5",
    "topic": "Law of decree",
    "divineLogic": "Whole divine law (Qur’an) revealed in single structured night",
    "category": "Theology / Revelation"
  },
  {
    "surah": "Al-Bayyina (98:5)",
    "verseNo": "98:5",
    "topic": "Pure monotheism and zakat",
    "divineLogic": "Fiqh pillars in single verse",
    "category": "Legal / Worship"
  },
  {
    "surah": "Al-Bayyina (98:6)",
    "verseNo": "98:6",
    "topic": "Legal permanence of hell",
    "divineLogic": "Clear fate for willful disobedience",
    "category": "Theology / Legal"
  },
  {
    "surah": "Al-Bayyina (98:7-8)",
    "verseNo": "98:7-8",
    "topic": "Eternal reward in law",
    "divineLogic": "Legal faith secures everlasting bliss",
    "category": "Theology / Reward"
  },
  {
    "surah": "Az-Zalzalah (99:6-8)",
    "verseNo": "99:6-8",
    "topic": "Deed-atom law",
    "divineLogic": "Nothing escapes divine legal calculus",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Adiyat (100:1-11)",
    "verseNo": "100:1-11",
    "topic": "Love of wealth & legal blindness",
    "divineLogic": "Emotional drives distort lawful clarity",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-Qari’ah (101:6-11)",
    "verseNo": "101:6-11",
    "topic": "Scale of deeds",
    "divineLogic": "Legal justice based on exact moral weight",
    "category": "Legal / Justice"
  },
  {
    "surah": "At-Takathur (102:1-8)",
    "verseNo": "102:1-8",
    "topic": "Competing for more",
    "divineLogic": "Legal regret follows meaningless pursuits",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-Asr (103:1-3)",
    "verseNo": "103:1-3",
    "topic": "Time-bound legal success",
    "divineLogic": "Law requires belief, action, truth, and patience",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Humazah (104:1-9)",
    "verseNo": "104:1-9",
    "topic": "Mockery & hoarding",
    "divineLogic": "Speech and greed are legally punishable",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Fil (105:1-5)",
    "verseNo": "105:1-5",
    "topic": "Divine intervention in law",
    "divineLogic": "God defends sacred spaces via miraculous law",
    "category": "Theology / Legal"
  },
  {
    "surah": "Quraysh (106:1-4)",
    "verseNo": "106:1-4",
    "topic": "Economic law & worship",
    "divineLogic": "Trade security tied to divine obedience",
    "category": "Economic / Worship Law"
  },
  {
    "surah": "Al-Ma’un (107:1-7)",
    "verseNo": "107:1-7",
    "topic": "Hypocrisy in ritual",
    "divineLogic": "Law demands sincerity in social and spiritual acts",
    "category": "Ethics / Legal"
  },
  {
    "surah": "Al-Kawthar (108:1-3)",
    "verseNo": "108:1-3",
    "topic": "Abundance for lawful gratitude",
    "divineLogic": "Fiqh of worship and sacrifice",
    "category": "Worship / Gratitude"
  },
  {
    "surah": "Al-Kafiroon (109:1-6)",
    "verseNo": "109:1-6",
    "topic": "Legal separation in faith",
    "divineLogic": "No coercion—legal distinction of belief systems",
    "category": "Theology / Legal Freedom"
  },
  {
    "surah": "An-Nasr (110:1-3)",
    "verseNo": "110:1-3",
    "topic": "Legal conclusion of mission",
    "divineLogic": "Law completes with praise and repentance",
    "category": "Theology / Completion"
  },
  {
    "surah": "Al-Masad (111:1-5)",
    "verseNo": "111:1-5",
    "topic": "Law even on kin",
    "divineLogic": "Justice applied without favoritism (Abu Lahab)",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Ikhlas (112:1-4)",
    "verseNo": "112:1-4",
    "topic": "Legal foundation of monotheism",
    "divineLogic": "Tawheed as legal axis of divine rule",
    "category": "Theology / Foundation"
  },
  {
    "surah": "Al-Falaq (113:1-5)",
    "verseNo": "113:1-5",
    "topic": "Legal protection from evil",
    "divineLogic": "Law covers unseen threats",
    "category": "Protection / Legal"
  },
  {
    "surah": "An-Nas (114:1-6)",
    "verseNo": "114:1-6",
    "topic": "Inner legal protection",
    "divineLogic": "Law addresses whispers and psychological invasions",
    "category": "Psychology / Legal"
  },
  {
    "surah": "Al-Baqarah (2:286)",
    "verseNo": "2:286",
    "topic": "Burden law",
    "divineLogic": "Allah’s law scales with ability—not oppression",
    "category": "Legal / Mercy"
  },
  {
    "surah": "Al-Baqarah (2:2)",
    "verseNo": "2:2",
    "topic": "Qur’an = guidance for muttaqeen",
    "divineLogic": "Fiqh must follow divine revelation, not desire",
    "category": "Legal / Revelation"
  },
  {
    "surah": "Al-Baqarah (2:177)",
    "verseNo": "2:177",
    "topic": "Comprehensive righteousness",
    "divineLogic": "True law: belief + charity + prayer + patience",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Al-Baqarah (2:282)",
    "verseNo": "2:282",
    "topic": "Longest legal verse",
    "divineLogic": "Contracts, witnesses, and financial clarity",
    "category": "Civil / Financial Law"
  },
  {
    "surah": "Al-Baqarah (2:256)",
    "verseNo": "2:256",
    "topic": "No compulsion in religion",
    "divineLogic": "Legal freedom of belief within limits",
    "category": "Theology / Freedom"
  },
  {
    "surah": "Al-Imran (3:92)",
    "verseNo": "3:92",
    "topic": "Sacrifice law",
    "divineLogic": "Righteousness demands valuable giving",
    "category": "Ethics / Worship"
  },
  {
    "surah": "Al-Imran (3:159)",
    "verseNo": "3:159",
    "topic": "Legal leadership = mercy",
    "divineLogic": "Prophet’s soft law built alliances and faith",
    "category": "Governance / Legal Ethics"
  },
  {
    "surah": "An-Nisa (4:135)",
    "verseNo": "4:135",
    "topic": "Stand for justice",
    "divineLogic": "Law favors truth over family or self-interest",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Ma’idah (5:8)",
    "verseNo": "5:8",
    "topic": "Don’t let hatred ruin justice",
    "divineLogic": "Law requires impartiality under pressure",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Ma’idah (5:45)",
    "verseNo": "5:45",
    "topic": "Qisas and forgiveness",
    "divineLogic": "Law allows balance of justice and mercy",
    "category": "Legal / Justice"
  },
  {
    "surah": "Al-Anfal (8:61)",
    "verseNo": "8:61",
    "topic": "Peace is preferred",
    "divineLogic": "Law favors reconciliation when sincere",
    "category": "Governance / Peace"
  },
  {
    "surah": "At-Tawbah (9:122)",
    "verseNo": "9:122",
    "topic": "Seek knowledge",
    "divineLogic": "Legal scholarship = community survival",
    "category": "Knowledge / Legal System"
  },
  {
    "surah": "Al-Hujurat (49:13)",
    "verseNo": "49:13",
    "topic": "Law of dignity and equality",
    "divineLogic": "Taqwa = legal measure of worth",
    "category": "Social / Legal Equality"
  },
  {
    "surah": "Al-Hadid (57:25)",
    "verseNo": "57:25",
    "topic": "Law, book, and balance",
    "divineLogic": "Prophets bring law, weight, and equity",
    "category": "Legal / Governance"
  },
  {
    "surah": "Al-A’raf (7:157)",
    "verseNo": "7:157",
    "topic": "Prophet legalizes good",
    "divineLogic": "Messenger's role = lawful filter of life",
    "category": "Legal / Prophethood"
  },
  {
    "surah": "An-Nahl (16:90)",
    "verseNo": "16:90",
    "topic": "Most comprehensive legal verse",
    "divineLogic": "Justice, excellence, kinship vs. immorality",
    "category": "Legal / Ethics"
  },
  {
    "surah": "Luqman (31:17)",
    "verseNo": "31:17",
    "topic": "Prayer, right, wrong, patience",
    "divineLogic": "Legal ethics taught by wise father",
    "category": "Ethics / Legal Education"
  },
  {
    "surah": "Az-Zumar (39:70)",
    "verseNo": "39:70",
    "topic": "Complete judgment",
    "divineLogic": "Every soul fully informed—no injustice",
    "category": "Legal / Accountability"
  },
  {
    "surah": "Al-Ahzab (33:36)",
    "verseNo": "33:36",
    "topic": "No option in divine law",
    "divineLogic": "Once Allah and the Prophet decide, law is final",
    "category": "Legal / Authority"
  }

























];

export default function FiqhRepository({ selectedCategory }: { selectedCategory: string }) {
    const filteredData = selectedCategory === 'All'
        ? fiqhData
        : fiqhData.filter(item => item.category === selectedCategory);

    return (
        <div className="glass-card mirror-effect" style={{ padding: '2rem', marginTop: '3rem', overflowX: 'auto' }}>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.5rem', color: 'var(--accent-gold)' }}>
                Fiqh Repository {selectedCategory !== 'All' && `— ${selectedCategory}`}
            </h3>

            {filteredData.length > 0 ? (
                <>
                    <table style={{ width: '100%', borderCollapse: 'collapse', color: '#a0aec0', fontSize: '0.95rem' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Surah (Verse)</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Topic</th>
                                <th style={{ padding: '1rem', color: 'var(--foreground)' }}>Divine Logic</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item, index) => (
                                <tr key={index} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <div style={{ fontWeight: 'bold', color: 'var(--accent-gold)' }}>{item.surah}</div>
                                        <div style={{ fontSize: '0.8rem' }}>{item.verseNo}</div>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem' }}>
                                        <span style={{
                                            padding: '0.2rem 0.6rem',
                                            background: 'rgba(212, 175, 55, 0.1)',
                                            borderRadius: '4px',
                                            fontSize: '0.85rem'
                                        }}>
                                            {item.topic}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.5rem 1rem', maxWidth: '600px', lineHeight: '1.6' }}>
                                        {item.divineLogic}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="mobile-rep-list">
                        {filteredData.map((item, index) => (
                            <div key={index} className="glass-card" style={{ padding: '1.5rem', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <div style={{ fontWeight: 'bold', color: 'var(--accent-gold)' }}>{item.surah} ({item.verseNo})</div>
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>Topic:</span>
                                    <div style={{ fontSize: '0.95rem' }}>{item.topic}</div>
                                </div>
                                <div>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>Divine Logic:</span>
                                    <div style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>{item.divineLogic}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div style={{ textAlign: 'center', padding: '3rem', color: '#a0aec0' }}>
                    Articulating legal frameworks for the {selectedCategory} category.
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
