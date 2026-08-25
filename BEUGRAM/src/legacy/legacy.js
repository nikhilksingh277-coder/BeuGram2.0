// ============================================================
// BeUgram — single-file bundle (data + state + gemini + components + pages + app)
// Generated for plain <script> usage (no ES modules, works via file://)
// ============================================================

// ---------- data.js ----------
// ==========================================================================
// BeUgram — Mock Demo Data
// This simulates the Firestore collections described in the data model:
// users, colleges, posts, comments, battles, battle_submissions, votes,
// polls, ratings, notifications.
// ==========================================================================

// NOTE ON DATA OWNERSHIP:
// Every field below (description, established, address, courses, facilities,
// notices, gallery, official website/email/phone/social links) is OFFICIAL,
// pre-installed college information. It is rendered on the College Profile
// page and is NOT derived from student posts and is not editable by
// students in this MVP. Student-generated content (posts, likes, comments)
// lives only in the separate `posts` array below and powers the Home Feed.
const colleges = [
  {
    "id": "c102",
    "name": "Vidya Vihar Institute of Technology, Purnia",
    "short": "VVIOT",
    "location": "Purnia, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Vidya Vihar Institute of Technology, Purnia is a private engineering institute in Purnia, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2009",
    "address": "Vidya Vihar Institute of Technology, Purnea, Bihar",
    "officialWebsite": "https://vvit.org/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c103",
    "name": "Netaji Subhas Institute of Technology, Bihta, Patna",
    "short": "NSIOT",
    "location": "Patna, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Netaji Subhas Institute of Technology, Bihta, Patna is a private engineering institute in Patna, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2007",
    "address": "Amhara, Bihta, Patna, Bihar – 801118",
    "officialWebsite": "https://www.nsit.in/",
    "officialEmail": "info@nsit.in",
    "phone": "7781020349",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c106",
    "name": "Sityog Institute of Technology, Aurangabad",
    "short": "SIOTA",
    "location": "Aurangabad, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Sityog Institute of Technology, Aurangabad is a private engineering institute in Aurangabad, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Growth Center, Jasoiya More, Aurangabad, Bihar – 824101",
    "officialWebsite": "https://sityog.edu.in/",
    "officialEmail": "sityog@gmail.com",
    "phone": "+91 9308392306",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "mitm",
    "name": "Muzaffarpur Institute of Technology, Muzaffarpur",
    "short": "MITM",
    "location": "Muzaffarpur, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Muzaffarpur Institute of Technology, Muzaffarpur is a government engineering college in Muzaffarpur, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "1954",
    "address": "Laxmi Chowk, Brahmpura, Muzaffarpur, Bihar – 842003",
    "officialWebsite": "https://www.mitmuzaffarpur.org/",
    "logo": "assets/mit-muzaffarpur-logo.jpeg",
    "officialEmail": "principal@mitmuzaffarpur.org",
    "phone": "0621-2262442",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c108",
    "name": "Bhagalpur College of Engineering, Bhagalpur",
    "short": "BCOEB",
    "location": "Bhagalpur, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Bhagalpur College of Engineering, Bhagalpur is a government engineering college in Bhagalpur, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "1960",
    "address": "P.O. Sabour, Bhagalpur, Bihar – 813210",
    "officialWebsite": "https://www.bcebhagalpur.ac.in/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c109",
    "name": "Nalanda College of Engineering, Chandi, Nalanda",
    "short": "NCOEC",
    "location": "Nalanda, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Nalanda College of Engineering, Chandi, Nalanda is a government engineering college in Nalanda, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2008",
    "address": "Chandi-Jalalpur Road, Bihar Sharif, Nalanda, Bihar – 803108",
    "officialWebsite": "https://www.ncechandi.ac.in/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c110",
    "name": "Gaya College of Engineering, Gaya",
    "short": "GCOEG",
    "location": "Gaya, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Gaya College of Engineering, Gaya is a government engineering college in Gaya, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2008",
    "address": "Sri Krishna Nagar, P.O. Nagari Yana, Gaya, Bihar – 823003",
    "officialWebsite": "https://www.gcegaya.ac.in/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c111",
    "name": "Darbhanga College of Engineering, Darbhanga",
    "short": "DCOED",
    "location": "Darbhanga, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Darbhanga College of Engineering, Darbhanga is a government engineering college in Darbhanga, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2008",
    "address": "Mabbi, P.O. Lal Sahpur, Darbhanga, Bihar – 846005",
    "officialWebsite": "https://www.dce-darbhanga.org/",
    "officialEmail": "",
    "phone": "06272-255255",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c113",
    "name": "Motihari College of Engineering, Motihari, East Champaran",
    "short": "MCOEM",
    "location": "East Champaran, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Motihari College of Engineering, Motihari, East Champaran is a government engineering college in East Champaran, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2008",
    "address": "NH 28A, Furshatpur Bariyarpur, Motihari, Bihar – 845401",
    "officialWebsite": "http://mcemotihari.in/",
    "officialEmail": "ice.mec.motihari@gmail.com",
    "phone": "06252-290699",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c115",
    "name": "AZMET Institute of Technology, Kishanganj",
    "short": "AIOTK",
    "location": "Kishanganj, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "AZMET Institute of Technology, Kishanganj is a private engineering institute in Kishanganj, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "AZMET Institute of Technology, Kishanganj, Kishanganj, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c117",
    "name": "Lok Nayak Jai Prakash Institute of Technology, Chapra, Saran",
    "short": "LNJPI",
    "location": "Saran, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Lok Nayak Jai Prakash Institute of Technology, Chapra, Saran is a government engineering college in Saran, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Lok Nayak Jai Prakash Institute of Technology, Chapra, Saran, Saran, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c118",
    "name": "Buddha Institute of Technology, Gaya",
    "short": "BIOTG",
    "location": "Gaya, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Buddha Institute of Technology, Gaya is a government engineering college in Gaya, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Buddha Institute of Technology, Gaya, Gaya, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c119",
    "name": "Adwaita Mission Institute of Technology, Banka",
    "short": "AMIOT",
    "location": "Banka, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Adwaita Mission Institute of Technology, Banka is a private engineering institute in Banka, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2008",
    "address": "Adwaita Mission Institute of Technology, Banka, Banka, Bihar",
    "officialWebsite": "https://www.amitshivdham.org/Home-Page",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c121",
    "name": "Moti Babu Institute of Technology, Forbesganj",
    "short": "MBIOT",
    "location": "Araria, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Moti Babu Institute of Technology, Forbesganj is a private engineering institute in Araria, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Moti Babu Institute of Technology, Forbesganj, Araria, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c122",
    "name": "Exalt College of Engineering & Technology, Vaishali",
    "short": "ECOET",
    "location": "Vaishali, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Exalt College of Engineering & Technology, Vaishali is a private engineering institute in Vaishali, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Exalt College of Engineering & Technology, Vaishali, Vaishali, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c123",
    "name": "Siwan Engineering & Technical Institute, Siwan",
    "short": "SETIS",
    "location": "Siwan, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Siwan Engineering & Technical Institute, Siwan is a private engineering institute in Siwan, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Siwan Engineering & Technical Institute, Siwan, Siwan, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c124",
    "name": "Sershah Engineering College, Sasaram, Rohtas",
    "short": "SECSR",
    "location": "Rohtas, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Sershah Engineering College, Sasaram, Rohtas is a government engineering college in Rohtas, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2016",
    "address": "P.O. Barki Kharai, P.S. Kargahar, Kargahar Road, Sasaram, Rohtas, Bihar – 821113",
    "officialWebsite": "https://www.scesasaram.in/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c125",
    "name": "Rashtrakavi Ramdhari Singh Dinkar College of Engineering, Begusarai",
    "short": "RRSDC",
    "location": "Begusarai, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Rashtrakavi Ramdhari Singh Dinkar College of Engineering, Begusarai is a government engineering college in Begusarai, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2016",
    "address": "Rashtrakavi Ramdhari Singh Dinkar College of Engineering, Begusarai, Begusarai, Bihar",
    "officialWebsite": "https://www.rrsdcebgs.ac.in/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c126",
    "name": "Bakhtiyarpur College of Engineering, Patna",
    "short": "BCOEP",
    "location": "Patna, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Bakhtiyarpur College of Engineering, Patna is a government engineering college in Patna, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2016",
    "address": "Champapur, Dedaur, Bakhtiyarpur, Patna, Bihar – 803212",
    "officialWebsite": "https://bcebakhtiyarpur.ac.in/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c127",
    "name": "Sitamarhi Institute of Technology, Sitamarhi",
    "short": "SIOTS",
    "location": "Sitamarhi, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Sitamarhi Institute of Technology, Sitamarhi is a government engineering college in Sitamarhi, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2016",
    "address": "Sitamarhi Institute of Technology, Sitamarhi, Sitamarhi, Bihar",
    "officialWebsite": "https://www.sitsitamarhi.ac.in/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c128",
    "name": "B.P. Mandal College of Engineering, Madhepura",
    "short": "BPMCO",
    "location": "Madhepura, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "B.P. Mandal College of Engineering, Madhepura is a government engineering college in Madhepura, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2016",
    "address": "B.P. Mandal College of Engineering, Madhepura, Madhepura, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c129",
    "name": "Katihar Engineering College, Katihar",
    "short": "KECK",
    "location": "Katihar, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Katihar Engineering College, Katihar is a private engineering institute in Katihar, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2016",
    "address": "Katihar Engineering College, Katihar, Katihar, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c130",
    "name": "Supaul College of Engineering, Supaul",
    "short": "SCOES",
    "location": "Supaul, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Supaul College of Engineering, Supaul is a private engineering institute in Supaul, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Supaul College of Engineering, Supaul, Supaul, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c131",
    "name": "Purnea College of Engineering, Purnea",
    "short": "PCOEP",
    "location": "Purnia, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Purnea College of Engineering, Purnea is a private engineering institute in Purnia, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Purnea College of Engineering, Purnea, Purnia, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c132",
    "name": "Saharsa College of Engineering, Saharsa",
    "short": "SCOES",
    "location": "Saharsa, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Saharsa College of Engineering, Saharsa is a private engineering institute in Saharsa, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Saharsa College of Engineering, Saharsa, Saharsa, Bihar",
    "officialWebsite": "https://www.scesaharsa.org/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c133",
    "name": "Government Engineering College, Jamui",
    "short": "GECJ",
    "location": "Jamui, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Jamui is a government engineering college in Jamui, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2018",
    "address": "Government Engineering College, Jamui, Jamui, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c134",
    "name": "Government Engineering College, Banka",
    "short": "GECB",
    "location": "Banka, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Banka is a government engineering college in Banka, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2018",
    "address": "Vill. Lakrikola, Post Manjira, Banka, Bihar – 813102",
    "officialWebsite": "https://www.gecbanka.org/",
    "officialEmail": "",
    "phone": "9065338690",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c135",
    "name": "Government Engineering College, Vaishali",
    "short": "GECV",
    "location": "Vaishali, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Vaishali is a government engineering college in Vaishali, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2018",
    "address": "Shyampur, Mansurpur, Bidupur, Vaishali, Bihar – 844115",
    "officialWebsite": "https://www.gecvaishali.ac.in/",
    "officialEmail": "principalgecvaishali@gmail.com",
    "phone": "06229-297002",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c136",
    "name": "Mothers Institute of Technology, Bihta",
    "short": "MIOTB",
    "location": "Patna, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Mothers Institute of Technology, Bihta is a government engineering college in Patna, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Mothers Institute of Technology, Bihta, Patna, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c139",
    "name": "R.P. Sharma Institute of Technology, Patna",
    "short": "RPSIO",
    "location": "Patna, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "R.P. Sharma Institute of Technology, Patna is a private engineering institute in Patna, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "R.P. Sharma Institute of Technology, Patna, Patna, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c140",
    "name": "Maulana Azad College of Engineering & Technology, Neora, Patna",
    "short": "MACOE",
    "location": "Patna, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Maulana Azad College of Engineering & Technology, Neora, Patna is a private engineering institute in Patna, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Maulana Azad College of Engineering & Technology, Neora, Patna, Patna, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c141",
    "name": "Government Engineering College, Nawada",
    "short": "GECN",
    "location": "Nawada, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Nawada is a government engineering college in Nawada, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, Nawada, Nawada, Bihar",
    "officialWebsite": "https://www.gecnawada.org.in/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c142",
    "name": "Government Engineering College, Kishanganj",
    "short": "GECK",
    "location": "Kishanganj, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Kishanganj is a government engineering college in Kishanganj, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, Kishanganj, Kishanganj, Bihar",
    "officialWebsite": "https://www.geckishanganj.org/",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c144",
    "name": "Government Engineering College, Munger",
    "short": "GECM",
    "location": "Munger, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Munger is a government engineering college in Munger, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Sajawalpur, Churamba Road, Munger, Bihar – 811202",
    "officialWebsite": "https://gecmunger.org/",
    "officialEmail": "principalmungerengg@gmail.com",
    "phone": "06344-291229",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c145",
    "name": "Government Engineering College, Sheohar",
    "short": "GECS",
    "location": "Sheohar, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Sheohar is a government engineering college in Sheohar, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, Sheohar, Sheohar, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c146",
    "name": "Government Engineering College, West Champaran",
    "short": "GECWC",
    "location": "West Champaran, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, West Champaran is a government engineering college in West Champaran, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, West Champaran, West Champaran, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c147",
    "name": "Government Engineering College, Aurangabad",
    "short": "GECA",
    "location": "Aurangabad, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Aurangabad is a government engineering college in Aurangabad, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, Aurangabad, Aurangabad, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c148",
    "name": "Government Engineering College, Kaimur",
    "short": "GECK",
    "location": "Kaimur, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Kaimur is a government engineering college in Kaimur, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2022",
    "address": "Government Engineering College, Kaimur, Kaimur, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c149",
    "name": "Government Engineering College, Gopalganj",
    "short": "GECG",
    "location": "Gopalganj, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Gopalganj is a government engineering college in Gopalganj, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, Gopalganj, Gopalganj, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c150",
    "name": "Government Engineering College, Madhubani",
    "short": "GECM",
    "location": "Madhubani, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Madhubani is a government engineering college in Madhubani, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2021",
    "address": "Government Engineering College, Madhubani, Madhubani, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c151",
    "name": "Government Engineering College, Siwan",
    "short": "GECS",
    "location": "Siwan, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Siwan is a government engineering college in Siwan, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2018",
    "address": "Government Engineering College, Siwan, Siwan, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c152",
    "name": "Government Engineering College, Jehanabad",
    "short": "GECJ",
    "location": "Jehanabad, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Jehanabad is a government engineering college in Jehanabad, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2020",
    "address": "Government Engineering College, Jehanabad, Jehanabad, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c153",
    "name": "Government Engineering College, Arwal",
    "short": "GECA",
    "location": "Arwal, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Arwal is a government engineering college in Arwal, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2021",
    "address": "Government Engineering College, Arwal, Arwal, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c154",
    "name": "Government Engineering College, Khagaria",
    "short": "GECK",
    "location": "Khagaria, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Khagaria is a government engineering college in Khagaria, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, Khagaria, Khagaria, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "gecb",
    "name": "Government Engineering College, Buxar",
    "short": "GECB",
    "location": "Buxar, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Buxar is a government engineering college in Buxar, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2018",
    "address": "Buxar, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c156",
    "name": "Government Engineering College, Bhojpur",
    "short": "GECB",
    "location": "Bhojpur, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Bhojpur is a government engineering college in Bhojpur, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2018",
    "address": "Government Engineering College, Bhojpur, Bhojpur, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c157",
    "name": "Government Engineering College, Sheikhpura",
    "short": "GECS",
    "location": "Sheikhpura, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Sheikhpura is a government engineering college in Sheikhpura, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, Sheikhpura, Sheikhpura, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c158",
    "name": "Government Engineering College, Lakhisarai",
    "short": "GECL",
    "location": "Lakhisarai, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Lakhisarai is a government engineering college in Lakhisarai, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2022",
    "address": "Government Engineering College, Lakhisarai, Lakhisarai, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c159",
    "name": "Government Engineering College, Samastipur",
    "short": "GECS",
    "location": "Samastipur, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Government Engineering College, Samastipur is a government engineering college in Samastipur, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "2019",
    "address": "Government Engineering College, Samastipur, Samastipur, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c165",
    "name": "Shri Phanishwar Nath Renu Engineering College, Araria",
    "short": "SPNRE",
    "location": "Araria, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Shri Phanishwar Nath Renu Engineering College, Araria is a government engineering college in Araria, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Araria, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c166",
    "name": "Millia Kishanganj College of Engineering and Technology, Kishanganj",
    "short": "MKCOE",
    "location": "Kishanganj, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Millia Kishanganj College of Engineering and Technology, Kishanganj is a private engineering institute in Kishanganj, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Kishanganj, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c167",
    "name": "Millia Institute of Technology, Purnia",
    "short": "MIOTP",
    "location": "Purnia, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Millia Institute of Technology, Purnia is a private engineering institute in Purnia, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Purnia, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c168",
    "name": "Prabhu Kailash Engineering College, Aurangabad",
    "short": "PKECA",
    "location": "Aurangabad, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Prabhu Kailash Engineering College, Aurangabad is a government engineering college in Aurangabad, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Aurangabad, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c169",
    "name": "Central Institute of Petrochemicals Engineering & Technology (CIPET), Bihta, Patna",
    "short": "CIOPE",
    "location": "Patna, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Central Institute of Petrochemicals Engineering & Technology (CIPET), Bihta, Patna is a central government technical institute in Patna, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Bihta, Patna, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c170",
    "name": "Dr. Ashok Gagan College, Bihta, Patna",
    "short": "DAGCB",
    "location": "Patna, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Dr. Ashok Gagan College, Bihta, Patna is a private engineering institute in Patna, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Bihta, Patna, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c171",
    "name": "Hi-tech Polytechnic College, Bettiah, West Champaran",
    "short": "HTPCB",
    "location": "West Champaran, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Hi-tech Polytechnic College, Bettiah, West Champaran is a institute/college listed in BEU examination-centre affiliation data in West Champaran, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Bettiah, West Champaran, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c172",
    "name": "Rajeev College of Professional Education, Sitamarhi",
    "short": "RCOPE",
    "location": "Sitamarhi, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Rajeev College of Professional Education, Sitamarhi is a institute/college listed in BEU examination-centre affiliation data in Sitamarhi, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Sitamarhi, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c173",
    "name": "Institute of Management and Planning & Advanced Computer Training, Patna",
    "short": "IOMAP",
    "location": "Patna, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Institute of Management and Planning & Advanced Computer Training, Patna is a institute/college listed in BEU examination-centre affiliation data in Patna, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Patna, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c174",
    "name": "Rungta Institute of Technology and Management, Araria",
    "short": "RIOTA",
    "location": "Araria, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "Rungta Institute of Technology and Management, Araria is a private engineering institute in Araria, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Araria, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  },
  {
    "id": "c175",
    "name": "J.P. College of Engineering, Biharsharif, Nalanda",
    "short": "JPCOE",
    "location": "Nalanda, Bihar",
    "followers": 0,
    "students": 0,
    "battlePoints": 0,
    "battleWins": 0,
    "rating": 0,
    "ratings": {
      "Mess": 0,
      "Wi-Fi": 0,
      "Library": 0,
      "Hostel": 0,
      "Labs": 0,
      "Sports": 0
    },
    "description": "J.P. College of Engineering, Biharsharif, Nalanda is a private engineering institute in Nalanda, Bihar. It is included in Bihar Engineering University's current examination-centre/affiliation data. For current branches, intake and admissions, the 2026–27 BEU/BCECEB information and the institute's official website should be treated as the latest source.",
    "established": "Not published in verified source set",
    "address": "Biharsharif, Nalanda, Bihar",
    "officialWebsite": "",
    "officialEmail": "",
    "phone": "",
    "officialInstagram": "",
    "officialFacebook": "",
    "officialLinkedIn": "",
    "officialTwitter": "",
    "courses": [
      "B.Tech / engineering programmes — see current 2026–27 BEU/BCECEB seat matrix"
    ],
    "facilities": [
      "Academic departments",
      "Laboratories",
      "Library",
      "Student activities",
      "Training / placement support"
    ],
    "notices": [],
    "gallery": [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=700&q=80",
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
    ]
  }
];

// NOTE ON IDENTITY FIELDS:
// `name` is the student's real display name (rendered bold).
// `username` is a separate, distinct handle (rendered next to/under the
// name, never merged into it). Social link fields below are OPTIONAL —
// missing/empty values must never render a broken link or button (see
// SocialLinkButton in components.js).
const students = [
  { id: 'u1', name: 'Nikhil Kumar Singh', username: '@nikhilks', college: 'gecb', role: 'Student', bio: 'CSE \'26 · Building things & chasing battle points for GEC Buxar 🚀', xp: 640, level: 6,
    badges: ['winner', 'photo', 'coder', 'contributor'],
    instagram: 'https://instagram.com/nikhilks', twitter: '', linkedin: 'https://linkedin.com/in/nikhilks', website: '' },
  { id: 'u2', name: 'Ananya Sharma', username: '@ananya.s', college: 'mitm', role: 'Student', bio: 'Design lead, MIT Muzaffarpur Robotics Club', xp: 520, level: 5, badges: ['photo', 'contributor'],
    instagram: 'https://instagram.com/ananya.s', twitter: '', linkedin: '', website: '' },
  { id: 'u3', name: 'Rohit Verma', username: '@rohitv', college: 'gecb', role: 'Student', bio: 'Full-stack dev · Competitive programmer', xp: 810, level: 7, badges: ['coder', 'winner'],
    instagram: '', twitter: 'https://twitter.com/rohitv', linkedin: 'https://linkedin.com/in/rohitv', website: '' },
  { id: 'u4', name: 'Priya Kumari', username: '@priyak', college: 'c139', role: 'Student', bio: 'Photography club core member', xp: 340, level: 3, badges: ['photo'],
    instagram: 'https://instagram.com/priyak', twitter: '', linkedin: '', website: '' },
  { id: 'u5', name: 'Saurabh Raj', username: '@saurabhraj', college: 'c126', role: 'Student', bio: 'ECE sophomore · Campus fest organizer', xp: 410, level: 4, badges: ['contributor'],
    instagram: '', twitter: '', linkedin: '', website: '' },
  { id: 'u6', name: 'Divya Patel', username: '@divyap', college: 'c103', role: 'Student', bio: 'ML enthusiast, hackathon regular', xp: 730, level: 6, badges: ['coder', 'contributor'],
    instagram: '', twitter: 'https://twitter.com/divyap', linkedin: 'https://linkedin.com/in/divyap', website: '' },
  { id: 'u7', name: 'Aman Gupta', username: '@amangupta', college: 'mitm', role: 'Student', bio: 'eSports team captain, MIT Muzaffarpur', xp: 590, level: 5, badges: ['winner'],
    instagram: 'https://instagram.com/amangupta', twitter: '', linkedin: '', website: '' },
  { id: 'u8', name: 'Sneha Roy', username: '@sneharoy', college: 'gecb', role: 'Student', bio: 'Cultural secretary · loves campus events', xp: 275, level: 3, badges: ['contributor'],
    instagram: '', twitter: '', linkedin: '', website: '' },
];

// The logged-in account is selected dynamically from state. Demo users remain
// available as read-only sample content, while newly registered users are
// stored in localStorage and become the actual current account.

const posts = [
  { id: 'p1', authorId: 'u1', college: 'gecb', time: '2h ago',
    image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=900&q=80',
    caption: 'Our annual tech fest is finally here! Innovation, teamwork and unforgettable moments 🚀',
    tags: ['#TechFest', '#GECBuxar'], likes: 214, comments: [
      { id:'c1', authorId:'u3', text:'This looks amazing! Wish I could be there 🔥' },
      { id:'c2', authorId:'u8', text:'GEC Buxar showing up as always 💪' },
    ] },
  { id: 'p2', authorId: 'u2', college: 'mitm', time: '4h ago',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&q=80',
    caption: 'Robotics club prepping our bot for the inter-college challenge next week 🤖',
    tags: ['#Robotics', '#MITMuzaffarpur'], likes: 176, comments: [
      { id:'c3', authorId:'u7', text:'Let\'s go team!!' },
    ] },
  { id: 'p3', authorId: 'u4', college: 'c139', time: '6h ago',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80',
    caption: 'Golden hour on campus grounds. Entering this one in the photography battle 📸',
    tags: ['#Photography', '#CampusLife'], likes: 302, comments: [] },
  { id: 'p4', authorId: 'u6', college: 'c103', time: '9h ago',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80',
    caption: 'Our team just wrapped a 24-hour hackathon. Sleep deprived but proud 💻',
    tags: ['#Hackathon', '#NITPatna'], likes: 268, comments: [
      { id:'c4', authorId:'u1', text:'Respect! What did you build?' },
    ] },
  { id: 'p5', authorId: 'u5', college: 'c126', time: '11h ago',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80',
    caption: 'Fresher\'s orientation was a blast this year — welcome to CEP, batch of 2030!',
    tags: ['#Freshers', '#CEP'], likes: 189, comments: [] },
  { id: 'p6', authorId: 'u7', college: 'mitm', time: '1d ago',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=900&q=80',
    caption: 'eSports squad qualified for the next round of the Battle Arena eSports demo bracket 🎮',
    tags: ['#eSports', '#BattleArena'], likes: 241, comments: [] },
  { id: 'p7', authorId: 'u3', college: 'gecb', time: '1d ago',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80',
    caption: 'Late night grind for the Coding Battle. Two more days to go ⌨️',
    tags: ['#CodingBattle', '#GECBuxar'], likes: 197, comments: [] },
  { id: 'p8', authorId: 'u8', college: 'gecb', time: '2d ago',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80',
    caption: 'Cultural night rehearsals in full swing — 3 days to the big show! 🎭',
    tags: ['#CulturalFest'], likes: 154, comments: [] },
];

const battles = [
  { id: 'b1', type: 'Photography Battle', icon: '📸', status: 'LIVE',
    collegeA: 'gecb', collegeB: 'mitm', prize: '₹5,000 + Campus Feature',
    participants: 42, votesA: 712, votesB: 536,
    startTime: 'Today, 9:00 AM', endTime: 'Tomorrow, 9:00 PM',
    rules: [
      'One original photo submission per participant.',
      'Theme: "Campus Life in Motion".',
      'No heavy editing or AI-generated images.',
      'Voting closes at the end time; highest votes wins.',
    ],
    submissions: [
      { id:'s1', college:'gecb', studentId:'u1', image:'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80', votes: 389 },
      { id:'s2', college:'mitm', studentId:'u2', image:'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=700&q=80', votes: 340 },
      { id:'s3', college:'gecb', studentId:'u8', image:'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=700&q=80', votes: 323 },
      { id:'s4', college:'mitm', studentId:'u7', image:'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=700&q=80', votes: 196 },
    ] },
  { id: 'b2', type: 'Coding Battle', icon: '💻', status: 'LIVE',
    collegeA: 'c103', collegeB: 'c126', prize: '₹8,000 + Internship Referral',
    participants: 60, votesA: 0, votesB: 0, scoreA: 480, scoreB: 455,
    startTime: 'Today, 10:00 AM', endTime: 'Today, 11:59 PM',
    rules: [
      '3-hour competitive programming sprint, 5 problems.',
      'Judged on correctness, time and efficiency.',
      'Individual scores are summed per college.',
      'Plagiarism results in disqualification.',
    ],
    submissions: [] },
  { id: 'b3', type: 'Photography Battle', icon: '📸', status: 'UPCOMING',
    collegeA: 'c139', collegeB: 'c103', prize: '₹5,000 + Campus Feature',
    participants: 0, votesA: 0, votesB: 0,
    startTime: 'Tomorrow, 9:00 AM', endTime: 'In 2 days',
    rules: [ 'Theme: "Unseen Corners of Campus".', 'Submissions open once the battle goes live.', 'One entry per student.' ],
    submissions: [] },
  { id: 'b4', type: 'Design Battle', icon: '🎨', status: 'UPCOMING',
    collegeA: 'gecb', collegeB: 'c126', prize: '₹4,000',
    participants: 0, votesA: 0, votesB: 0,
    startTime: 'In 3 days', endTime: 'In 5 days',
    rules: [ 'Poster design on the theme "Sustainable Campus".', 'Any design tool allowed.', 'Submit as PNG/JPG.' ],
    submissions: [] },
  { id: 'b5', type: 'Coding Battle', icon: '💻', status: 'COMPLETED',
    collegeA: 'gecb', collegeB: 'c139', prize: '₹6,000',
    participants: 48, votesA: 0, votesB: 0, scoreA: 512, scoreB: 398, winner: 'gecb',
    startTime: '3 days ago', endTime: '3 days ago',
    rules: [ '3-hour sprint, 5 problems.', 'Judged on correctness and speed.' ],
    submissions: [] },
  { id: 'b6', type: 'eSports Battle', icon: '🎮', status: 'UPCOMING', demo: true,
    collegeA: 'mitm', collegeB: 'c103', prize: 'Trophy + Bragging Rights',
    participants: 0, votesA: 0, votesB: 0,
    startTime: 'Coming soon', endTime: '—',
    rules: [ 'Represented as a demo category for this MVP.', 'Full bracket and live scoring planned for the next release.' ],
    submissions: [] },
];

const polls = [
  { id: 'poll-mess', category: 'Mess', question: 'How would you rate your college mess?', average: 3.8, votes: 428 },
  { id: 'poll-wifi', category: 'Wi-Fi', question: 'How reliable is your campus Wi-Fi?', average: 4.2, votes: 356 },
  { id: 'poll-library', category: 'Library', question: 'How would you rate the library resources?', average: 4.5, votes: 301 },
  { id: 'poll-hostel', category: 'Hostel', question: 'How comfortable are the hostel facilities?', average: 3.4, votes: 389 },
  { id: 'poll-labs', category: 'Labs', question: 'How well-equipped are your labs?', average: 4.1, votes: 274 },
  { id: 'poll-sports', category: 'Sports', question: 'How would you rate the sports facilities?', average: 4.0, votes: 213 },
  { id: 'poll-clean', category: 'Cleanliness', question: 'How clean is your campus overall?', average: 3.9, votes: 245 },
];

const notifications = [
  { id: 'n1', icon: '🏆', text: 'Your college won the Photography Battle round.', time: '10m ago', unread: true },
  { id: 'n2', icon: '❤️', text: 'Ananya Sharma liked your post.', time: '38m ago', unread: true },
  { id: 'n3', icon: '💬', text: 'Rohit Verma commented on your post.', time: '1h ago', unread: true },
  { id: 'n4', icon: '🔥', text: 'New Coding Battle is starting: NSIT Patna vs BCE Patna.', time: '3h ago', unread: false },
  { id: 'n5', icon: '📊', text: 'New Campus Poll is available: Rate your hostel.', time: '5h ago', unread: false },
  { id: 'n6', icon: '🥇', text: 'GEC Buxar climbed to #1 on the leaderboard.', time: '1d ago', unread: false },
];

const badgeMeta = {
  winner: { emoji: '🏆', label: 'Battle Winner' },
  photo: { emoji: '📸', label: 'Photography Champion' },
  coder: { emoji: '💻', label: 'Coding Warrior' },
  contributor: { emoji: '🌟', label: 'Campus Contributor' },
};

function getCollege(id){ return colleges.find(c => c.id === id); }
// getStudent overlays saved profile edits (name/username/bio/avatar/banner/
// social links) onto the base demo record for the CURRENT user only — other
// students are read-only official demo data in this MVP. This keeps a
// single source of truth: base `students` array + state.profileOverrides.
function getRegisteredStudents(){
  try{
    const raw = localStorage.getItem('beugram_registered_users_v1');
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  }catch(e){ return []; }
}

function saveRegisteredStudents(list){
  try{
    localStorage.setItem('beugram_registered_users_v1', JSON.stringify(list));
    return true;
  }catch(e){ return false; }
}

function getStudent(id){
  const base = students.find(s => s.id === id) || getRegisteredStudents().find(s => s.id === id);
  if(!base) return null;
  if(id === getState().currentUserId && typeof getState === 'function'){
    try{
      const overrides = (getState().profileOverrides) || {};
      return { ...base, ...overrides };
    }catch(e){ return base; }
  }
  return base;
}
function getBattle(id){ return battles.find(b => b.id === id); }
function getCurrentUser(){
  const id = getState().currentUserId;
  return id ? getStudent(id) : null;
}

// ---------- state.js ----------
// ==========================================================================
// BeUgram — Lightweight state store (pub/sub over localStorage)
// Keeps the demo interactive across a refresh without needing a backend.
// ==========================================================================

const STORAGE_KEY = 'beugram_state_v1';

function defaultState(){
  return {
    auth: false,
    currentUserId: null,
    theme: 'light',
    likedPosts: [],
    savedPosts: [],
    postComments: {},      // postId -> [{authorId,text}]
    extraPosts: [],        // user-created posts
    pollVotes: {},         // pollId -> star rating (1-5)
    battleVotes: {},       // battleId -> submissionId voted for
    followedColleges: [],
    xpBonus: 0,
    notifRead: [],
    profileOverrides: {},  // saved Edit Profile fields for the current user
    postOverrides: {},     // postId -> {caption?,tags?,pinned?,deleted?}
  };
}

// Recovers safely from corrupted/partial localStorage data: any field
// missing from a stored (older-schema) blob falls back to its default
// instead of leaving the app with undefined state.
function loadState(){
  const defaults = defaultState();
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const parsed = JSON.parse(raw);
      if(parsed && typeof parsed === 'object' && !Array.isArray(parsed)){
        const merged = {
          ...defaults,
          ...parsed,
          postComments: (parsed.postComments && typeof parsed.postComments === 'object') ? parsed.postComments : defaults.postComments,
          pollVotes: (parsed.pollVotes && typeof parsed.pollVotes === 'object') ? parsed.pollVotes : defaults.pollVotes,
          battleVotes: (parsed.battleVotes && typeof parsed.battleVotes === 'object') ? parsed.battleVotes : defaults.battleVotes,
          profileOverrides: (parsed.profileOverrides && typeof parsed.profileOverrides === 'object') ? parsed.profileOverrides : defaults.profileOverrides,
          postOverrides: (parsed.postOverrides && typeof parsed.postOverrides === 'object') ? parsed.postOverrides : defaults.postOverrides,
          extraPosts: Array.isArray(parsed.extraPosts) ? parsed.extraPosts : defaults.extraPosts,
          likedPosts: Array.isArray(parsed.likedPosts) ? parsed.likedPosts : defaults.likedPosts,
          savedPosts: Array.isArray(parsed.savedPosts) ? parsed.savedPosts : defaults.savedPosts,
          followedColleges: Array.isArray(parsed.followedColleges) ? parsed.followedColleges : defaults.followedColleges,
          notifRead: Array.isArray(parsed.notifRead) ? parsed.notifRead : defaults.notifRead,
          xpBonus: typeof parsed.xpBonus === 'number' && !Number.isNaN(parsed.xpBonus) ? parsed.xpBonus : defaults.xpBonus,
          currentUserId: typeof parsed.currentUserId === 'string' ? parsed.currentUserId : null,
        };
        // Old demo sessions did not have a real account id. Force those
        // sessions back to the login page instead of silently logging in
        // as the old demo user.
        if(merged.auth && !merged.currentUserId) merged.auth = false;
        return merged;
      }
    }
  }catch(e){
    // Corrupted JSON — wipe the bad key so we don't keep failing, and
    // fall through to clean defaults below.
    try{ localStorage.removeItem(STORAGE_KEY); }catch(e2){ /* storage unavailable */ }
  }
  return defaults;
}

let state = loadState();
const listeners = new Set();

function persist(){
  try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); return true; }
  catch(e){ return false; /* storage full/unavailable */ }
}

function getState(){ return state; }

function setState(patch){
  state = { ...state, ...(typeof patch === 'function' ? patch(state) : patch) };
  const ok = persist();
  listeners.forEach(fn => fn(state));
  return ok;
}

function subscribe(fn){ listeners.add(fn); return () => listeners.delete(fn); }

// ---------- convenience mutators ----------
function toggleLike(postId){
  const liked = state.likedPosts.includes(postId);
  setState({ likedPosts: liked ? state.likedPosts.filter(id => id !== postId) : [...state.likedPosts, postId] });
  return !liked;
}
function toggleSave(postId){
  const saved = state.savedPosts.includes(postId);
  setState({ savedPosts: saved ? state.savedPosts.filter(id => id !== postId) : [...state.savedPosts, postId] });
  return !saved;
}
function addComment(postId, authorId, text){
  const list = state.postComments[postId] || [];
  setState({ postComments: { ...state.postComments, [postId]: [...list, { authorId, text }] } });
}
function addPost(post){
  setState({ extraPosts: [post, ...state.extraPosts] });
}
function setPollVote(pollId, rating){
  setState({ pollVotes: { ...state.pollVotes, [pollId]: rating } });
}
function setBattleVote(battleId, submissionId){
  setState({ battleVotes: { ...state.battleVotes, [battleId]: submissionId } });
}
function toggleFollow(collegeId){
  const f = state.followedColleges.includes(collegeId);
  setState({ followedColleges: f ? state.followedColleges.filter(id => id !== collegeId) : [...state.followedColleges, collegeId] });
  return !f;
}
function addXp(amount){
  setState({ xpBonus: state.xpBonus + amount });
}
function markNotifRead(id){
  if(!state.notifRead.includes(id)) setState({ notifRead: [...state.notifRead, id] });
}
function markAllNotifsRead(ids){
  setState({ notifRead: Array.from(new Set([...state.notifRead, ...ids])) });
}
function setTheme(theme){
  setState({ theme });
  document.documentElement.setAttribute('data-theme', theme);
}
function login(userId){ setState({ auth: true, currentUserId: userId || state.currentUserId || null }); }
function logout(){ setState({ auth: false, currentUserId: null, profileOverrides: {} }); }

function normalizeUsername(value){
  return String(value || '').trim().replace(/^@+/, '').toLowerCase();
}

function findAccount(username, password){
  const handle = normalizeUsername(username);
  const cleanPassword = String(password || '');
  if(!handle || !cleanPassword) return null;

  const registered = getRegisteredStudents().find(u =>
    normalizeUsername(u.username) === handle &&
    String(u.password || '') === cleanPassword
  );
  return registered || null;
}

function registerAccount({name, username, dob, place, college, password, confirmPassword}){
  const cleanName = String(name || '').trim();
  const handle = normalizeUsername(username);
  const cleanDob = String(dob || '').trim();
  const cleanPlace = String(place || '').trim();
  const cleanCollege = String(college || '').trim();
  const cleanPassword = String(password || '');
  const cleanConfirmPassword = String(confirmPassword || '');

  if(cleanName.length < 2) return {ok:false, message:'Please enter your full name.'};
  if(!/^[a-z0-9._-]{3,30}$/.test(handle)) return {ok:false, message:'Username must be 3–30 characters using letters, numbers, dot, underscore or hyphen.'};
  if(!/^\d{4}-\d{2}-\d{2}$/.test(cleanDob)) return {ok:false, message:'Please enter a valid date of birth.'};
  if(new Date(cleanDob + 'T00:00:00') > new Date()) return {ok:false, message:'Date of birth cannot be in the future.'};
  if(cleanPlace.length < 2) return {ok:false, message:'Please enter your place.'};
  if(!cleanCollege || !getCollege(cleanCollege)) return {ok:false, message:'Please select your college.'};
  if(cleanPassword.length < 8) return {ok:false, message:'Password must be at least 8 characters.'};
  if(cleanPassword !== cleanConfirmPassword) return {ok:false, message:'Passwords do not match.'};

  const list = getRegisteredStudents();
  const existingRegistered = list.find(u => normalizeUsername(u.username) === handle);
  const legacyDemo = existingRegistered && !existingRegistered.password;
  const demoUsernameTaken = students.some(u => normalizeUsername(u.username) === handle);
  if((existingRegistered && !legacyDemo) || (!existingRegistered && demoUsernameTaken)) return {ok:false, message:'That username is already taken. Please choose another one.'};

  const account = {
    id: existingRegistered?.id || ('r_' + Date.now() + '_' + Math.random().toString(36).slice(2,8)),
    name: cleanName,
    username: '@' + handle,
    dob: cleanDob,
    place: cleanPlace,
    college: cleanCollege,
    password: cleanPassword,
    role: 'Student',
    bio: existingRegistered?.bio || '',
    xp: existingRegistered?.xp || 0,
    level: existingRegistered?.level || 1,
    badges: existingRegistered?.badges || [],
    instagram: existingRegistered?.instagram || '',
    twitter: existingRegistered?.twitter || '',
    linkedin: existingRegistered?.linkedin || '',
    website: existingRegistered?.website || ''
  };

  const nextList = legacyDemo
    ? list.map(u => u.id === existingRegistered.id ? account : u)
    : [...list, account];
  if(!saveRegisteredStudents(nextList)) return {ok:false, message:'Could not save your registration on this device.'};
  return {ok:true, user:account};
}

// ---------- profile + post ownership mutators ----------
// Returns true/false so callers (Edit Profile modal, etc.) can show a
// clear error toast instead of silently failing when storage write fails.
function saveProfile(patch){
  try{
    return setState({ profileOverrides: { ...state.profileOverrides, ...patch } });
  }catch(e){ return false; }
}

function getPostOverride(postId){
  return (state.postOverrides && state.postOverrides[postId]) || null;
}

function setPostOverride(postId, patch){
  try{
    return setState({ postOverrides: { ...state.postOverrides, [postId]: { ...(state.postOverrides[postId] || {}), ...patch } } });
  }catch(e){ return false; }
}

// Merges any saved edit/pin/delete override onto a base post record.
function getEffectivePost(post){
  const ov = getPostOverride(post.id);
  return ov ? { ...post, ...ov } : post;
}

function editPost(postId, patch){
  return setPostOverride(postId, patch);
}

function togglePinPost(postId){
  const current = getPostOverride(postId);
  const nowPinned = !(current && current.pinned);
  const ok = setPostOverride(postId, { pinned: nowPinned });
  return ok ? nowPinned : null;
}

// Deletes a user-created post outright, or marks a demo post as deleted
// via an override (keeps the original demo data source untouched).
function deletePost(postId){
  try{
    const isExtra = state.extraPosts.some(p => p.id === postId);
    if(isExtra){
      return setState({ extraPosts: state.extraPosts.filter(p => p.id !== postId) });
    }
    return setPostOverride(postId, { deleted: true });
  }catch(e){ return false; }
}

// ---------- gemini.js ----------
// ==========================================================================
// BeUgram — Gemini AI service layer (client side)
//
// IMPORTANT: The real GEMINI_API_KEY must NEVER live in this file or any
// other frontend code — it is only ever used inside /server (see
// server/gemini.js), which reads it from an environment variable.
//
// This module first tries the local backend routes (POST /api/gemini/*).
// If the backend isn't running (common while judging a hackathon demo
// straight from the file system), it falls back to a realistic mock so
// every AI feature in the UI still works end to end.
// ==========================================================================

const ENDPOINTS = {
  caption: '/api/gemini/caption',
  moderate: '/api/gemini/moderate',
  summary: '/api/gemini/battle-summary',
};

async function callBackend(path, body){
  const res = await fetch(path, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if(!res.ok) throw new Error('backend unavailable');
  return res.json();
}

function delay(ms){ return new Promise(r => setTimeout(r, ms)); }

const CAPTION_TEMPLATES = [
  'Innovation, teamwork and unforgettable moments captured right here on campus 🚀',
  'Big energy, bigger memories — another day of campus life worth sharing 🎉',
  'Behind every great event is a team that believed in it 💫',
  'Chasing ideas, building community, one moment at a time 🌟',
  'This is what campus spirit looks like ✨',
];

const ABUSIVE_WORDS = ['idiot', 'stupid', 'hate', 'kill', 'dumb', 'ugly', 'shut up'];
const SPAM_PATTERNS = ['http://', 'https://', 'buy now', 'subscribe', 'click here', 'free money', 'www.'];

/**
 * generateCaption(imageHint?: string) -> Promise<{ caption: string, source: 'gemini'|'mock' }>
 */
async function generateCaption(imageHint = ''){
  try{
    const data = await callBackend(ENDPOINTS.caption, { imageHint });
    return { caption: data.caption, source: 'gemini' };
  }catch(e){
    await delay(900);
    const base = CAPTION_TEMPLATES[Math.floor(Math.random() * CAPTION_TEMPLATES.length)];
    const caption = imageHint ? `${base}` : base;
    return { caption, source: 'mock' };
  }
}

/**
 * moderateContent(text: string) -> Promise<{ label: 'Normal'|'Spam'|'Abusive'|'Inappropriate', flagged: boolean, source }>
 */
async function moderateContent(text){
  try{
    const data = await callBackend(ENDPOINTS.moderate, { text });
    return { ...data, source: 'gemini' };
  }catch(e){
    await delay(500);
    const lower = (text || '').toLowerCase();
    let label = 'Normal';
    if(ABUSIVE_WORDS.some(w => lower.includes(w))) label = 'Abusive';
    else if(SPAM_PATTERNS.some(w => lower.includes(w))) label = 'Spam';
    return { label, flagged: label !== 'Normal', source: 'mock' };
  }
}

/**
 * generateBattleSummary(battle) -> Promise<{ summary: string, source }>
 */
async function generateBattleSummary(battle){
  try{
    const data = await callBackend(ENDPOINTS.summary, { battle });
    return { summary: data.summary, source: 'gemini' };
  }catch(e){
    await delay(700);
    const totalVotes = (battle.votesA || 0) + (battle.votesB || 0);
    const useScores = !totalVotes && (battle.scoreA || battle.scoreB);
    let summary;
    if(useScores){
      const total = (battle.scoreA || 0) + (battle.scoreB || 0);
      const leaderIsA = (battle.scoreA || 0) >= (battle.scoreB || 0);
      const pct = total ? Math.round(((leaderIsA ? battle.scoreA : battle.scoreB) / total) * 100) : 50;
      summary = `${leaderIsA ? 'College A' : 'College B'} took the lead with ${pct}% of the combined score in the ${battle.type}, edging out a closely fought contest.`;
    } else if(totalVotes){
      const leaderIsA = battle.votesA >= battle.votesB;
      const pct = Math.round(((leaderIsA ? battle.votesA : battle.votesB) / totalVotes) * 100);
      const margin = Math.abs(battle.votesA - battle.votesB);
      summary = `The leading college secured victory with ${pct}% of the total votes, leading the ${battle.type.toLowerCase()} by ${margin} votes.`;
    } else {
      summary = `The ${battle.type.toLowerCase()} is set to begin soon — both colleges have fielded strong lineups for this round.`;
    }
    return { summary, source: 'mock' };
  }
}

// ---------- components.js ----------
// ==========================================================================
// BeUgram — Reusable UI components (return HTML strings)
// ==========================================================================

function initials(name){
  return name.split(' ').map(w => w[0]).slice(0,2).join('').toUpperCase();
}

function Avatar(name, size = 42, extraClass = ''){
  return `<div class="avatar ${extraClass}" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.38)}px">${initials(name)}</div>`;
}

// ---------- Safe rendering helpers (never surface undefined/null/NaN) ----------
function escAttr(value){
  return String(value === undefined || value === null ? '' : value)
    .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

const IMG_FALLBACK = 'data:image/svg+xml;utf8,' + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='900' height='600'>" +
  "<rect width='100%' height='100%' fill='#e7e9f0'/>" +
  "<text x='50%' y='50%' font-family='sans-serif' font-size='26' fill='#9096a6' text-anchor='middle' dominant-baseline='middle'>Image unavailable</text>" +
  "</svg>"
);

// Called from an inline onerror handler when a post/user-uploaded image
// fails to load, so broken images never leave a blank/broken box.
function imgFallback(imgEl){
  try{ imgEl.onerror = null; imgEl.src = IMG_FALLBACK; }catch(e){ /* ignore */ }
}

// Called from an inline onerror handler when a custom avatar image fails
// to load — swaps back to the safe initials avatar instead of a broken img.
function avatarFallback(imgEl, name, size, extraClass){
  try{ imgEl.outerHTML = Avatar(name || 'User', size || 42, extraClass || ''); }catch(e){ /* ignore */ }
}

// Renders a student/user's profile picture if they've uploaded one,
// otherwise falls back to the initials Avatar. Used everywhere a person's
// avatar is shown so a custom photo (Edit Profile) appears consistently.
function UserAvatar(user, size = 42, extraClass = ''){
  const name = (user && user.name) ? user.name : 'User';
  if(user && user.avatarImage){
    const safeName = String(name).replace(/'/g, "\\'");
    const safeClass = String(extraClass).replace(/'/g, "\\'");
    return `<img class="avatar ${extraClass}" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.38)}px" src="${user.avatarImage}" alt="${escAttr(name)}" onerror="avatarFallback(this, '${safeName}', ${size}, '${safeClass}')" />`;
  }
  return Avatar(name, size, extraClass);
}

function CollegeLogo(collegeId, size = 44){
  const c = getCollege(collegeId);
  if(!c) return `<div class="avatar" style="width:${size}px;height:${size}px"></div>`;
  if(c.logo){
    return `<img class="avatar logo college-logo-image" src="${c.logo}" alt="${escAttr(c.name)} logo" style="width:${size}px;height:${size}px;object-fit:contain;background:#fff;border-radius:12px;padding:3px" onerror="this.onerror=null;this.replaceWith(document.createRange().createContextualFragment(CollegeLogo('${String(collegeId).replace(/'/g, "\\'")}', ${size})))" />`;
  }
  return `<div class="avatar logo" style="width:${size}px;height:${size}px;font-size:${Math.round(size*0.34)}px">${c.short}</div>`;
}

function CollegeChip(collegeId){
  const c = getCollege(collegeId);
  if(!c) return '';
  return `<span class="college-chip">${c.short}<span class="dot"></span>${c.location.split(',')[0]}</span>`;
}

// ---------- Official College Info helpers (College Profile only) ----------
// These helpers render OFFICIAL/pre-installed college fields safely — they
// never touch the `posts` array and always guard against missing data so
// the UI never shows "undefined"/"null" or a dead link/button.

function safeText(value, fallback = 'Not available'){
  if(value === undefined || value === null) return fallback;
  if(typeof value === 'number' && Number.isNaN(value)) return fallback;
  if(typeof value === 'string' && value.trim() === '') return fallback;
  return value;
}

function OfficialInfoRow(label, value, opts = {}){
  // Skip the row entirely when the field wasn't provided — never render
  // an empty/broken info row.
  if(value === undefined || value === null || String(value).trim() === '') return '';
  const display = opts.isLink
    ? `<a href="${value}" target="_blank" rel="noopener">${opts.displayText || value}</a>`
    : value;
  return `<div class="info-row"><span class="info-label">${label}</span><span class="info-value">${display}</span></div>`;
}

function SocialLinkButton(url, label, icon){
  // Missing social link -> render nothing (no broken/empty button).
  if(!url || String(url).trim() === '') return '';
  return `<a class="btn btn-secondary btn-sm social-link" href="${url}" target="_blank" rel="noopener">${icon} ${label}</a>`;
}

function NoticeCard(notice){
  return `
  <div class="card notice-card">
    <div class="notice-top">
      <span class="notice-title">📢 ${safeText(notice.title, 'Untitled Notice')}</span>
      <span class="notice-date">${safeText(notice.date, '')}</span>
    </div>
    ${notice.description ? `<p class="notice-desc">${notice.description}</p>` : ''}
    ${notice.link ? `<a class="btn btn-ghost btn-sm" href="${notice.link}" target="_blank" rel="noopener">Read Notice →</a>` : ''}
  </div>`;
}

function GalleryGrid(images){
  if(!images || !images.length){
    return `<div class="empty-state"><div class="emoji">🖼️</div>No official campus images available.</div>`;
  }
  return `<div class="gallery-grid">${images.map(src => `<img src="${src}" alt="Campus gallery image" loading="lazy" onerror="this.style.display='none'" />`).join('')}</div>`;
}

function CourseTags(courses){
  if(!courses || !courses.length){
    return `<p class="text-faint" style="font-size:13.5px">No official course information available.</p>`;
  }
  return `<div class="course-tags">${courses.map(c => `<span class="badge badge-brand">${c}</span>`).join('')}</div>`;
}

function FacilityChips(facilities){
  if(!facilities || !facilities.length){
    return `<p class="text-faint" style="font-size:13.5px">No official facility information available.</p>`;
  }
  return `<div class="course-tags">${facilities.map(f => `<span class="badge">${f}</span>`).join('')}</div>`;
}

function StatusBadge(status){
  const map = {
    LIVE: '<span class="badge badge-live">LIVE</span>',
    UPCOMING: '<span class="badge badge-upcoming">UPCOMING</span>',
    COMPLETED: '<span class="badge badge-done">COMPLETED</span>',
  };
  return map[status] || '';
}

function Toast(message, tone = 'default'){
  const root = document.getElementById('toast-root');
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = message;
  root.appendChild(el);
  setTimeout(() => {
    el.classList.add('leaving');
    setTimeout(() => el.remove(), 220);
  }, 2600);
}

function Skeleton(height = 120, radius = 'var(--radius-md)'){
  return `<div class="skeleton" style="height:${height}px;border-radius:${radius}"></div>`;
}

// ---------- Post Card ----------
function PostCard(post){
  const state = getState();
  const author = getStudent(post.authorId) || { id: post.authorId, name: 'Unknown User', username: '' };
  const liked = state.likedPosts.includes(post.id);
  const saved = state.savedPosts.includes(post.id);
  const extraComments = state.postComments[post.id] || [];
  const allComments = [...(post.comments || []), ...extraComments];
  const likeCount = (post.likes || 0) + (liked ? 1 : 0);
  const isOwner = post.authorId === getState().currentUserId;
  const pinned = !!post.pinned;

  const commentsHtml = allComments.map(c => {
    const cAuthor = getStudent(c.authorId) || { name: 'You' };
    return `<div class="comment-row">
      ${UserAvatar(cAuthor, 32)}
      <div class="bubble"><b>${safeText(cAuthor.name, 'You')}</b>${safeText(c.text, '')}</div>
    </div>`;
  }).join('') || `<p class="text-faint" style="font-size:13px;padding:10px 0">No comments yet — be the first to say something.</p>`;

  const postMenu = isOwner ? `
    <div class="post-menu-wrap">
      <button class="icon-btn" data-action="toggle-post-menu" data-id="${post.id}" title="More">⋯</button>
      <div class="post-menu" data-post-menu="${post.id}" hidden>
        <button data-action="edit-post" data-id="${post.id}">✏️ Edit Post</button>
        <button data-action="${pinned ? 'unpin-post' : 'pin-post'}" data-id="${post.id}">${pinned ? '📌 Unpin Post' : '📌 Pin Post'}</button>
        <button data-action="delete-post" data-id="${post.id}" class="danger">🗑️ Delete Post</button>
      </div>
    </div>` : '';

  return `
  <article class="card post-card" data-post-id="${post.id}">
    <div class="post-head">
      ${UserAvatar(author, 42)}
      <div class="who">
        <b>${safeText(author.name, 'Unknown User')}</b>
        ${author.username ? `<span class="username">${safeText(author.username, '')}</span>` : ''}
        <div class="sub">${CollegeChip(post.college)}<span class="dot"></span>${safeText(post.time, '')}</div>
      </div>
      ${pinned ? `<span class="badge badge-brand pin-badge">📌 Pinned</span>` : ''}
      ${postMenu}
    </div>
    <img class="post-img" src="${post.image || IMG_FALLBACK}" alt="post image" loading="lazy" onerror="imgFallback(this)" />
    <div class="post-body">
      <p class="cap"><b>${safeText(author.name, 'Unknown User')}</b>${safeText(post.caption, '')}</p>
      <div class="post-tags">${(post.tags || []).map(t => `<span>${safeText(t, '')}</span>`).join(' ')}</div>
    </div>
    <div class="post-actions">
      <button class="icon-btn ${liked ? 'active' : ''}" data-action="like" data-id="${post.id}" title="Like">${liked ? '❤️' : '🤍'}</button>
      <span class="count">${likeCount}</span>
      <button class="icon-btn" data-action="toggle-comments" data-id="${post.id}" title="Comment">💬</button>
      <span class="count">${allComments.length}</span>
      <button class="icon-btn" data-action="share" data-id="${post.id}" title="Share">↗️</button>
      <span class="spacer"></span>
      <button class="icon-btn ${saved ? 'save-active active' : ''}" data-action="save" data-id="${post.id}" title="Save">${saved ? '🔖' : '📑'}</button>
    </div>
    <div class="comments-box" data-comments-for="${post.id}" hidden>
      ${commentsHtml}
      <div class="comment-input-row">
        <input type="text" placeholder="Add a comment…" data-comment-input="${post.id}" />
        <button class="btn btn-primary btn-sm" data-action="submit-comment" data-id="${post.id}">Post</button>
      </div>
    </div>
  </article>`;
}

// ---------- Battle Card ----------
function BattleCard(battle){
  const a = getCollege(battle.collegeA), b = getCollege(battle.collegeB);
  const usesVotes = battle.votesA || battle.votesB;
  const total = usesVotes ? (battle.votesA + battle.votesB) : ((battle.scoreA||0) + (battle.scoreB||0));
  const pctA = total ? Math.round(((usesVotes ? battle.votesA : battle.scoreA) / total) * 100) : 50;
  return `
  <div class="card card-hover battle-card" data-nav="battle" data-id="${battle.id}" style="cursor:pointer">
    <div class="battle-top">
      <span class="badge badge-brand">${battle.icon} ${battle.type}</span>
      ${StatusBadge(battle.status)}
    </div>
    <div class="battle-vs">
      <div class="battle-side">${CollegeLogo(battle.collegeA, 52)}<b>${a.short}</b><div class="score">${usesVotes ? battle.votesA + ' votes' : (battle.scoreA ?? '—') + ' pts'}</div></div>
      <div class="vs-badge">VS</div>
      <div class="battle-side">${CollegeLogo(battle.collegeB, 52)}<b>${b.short}</b><div class="score">${usesVotes ? battle.votesB + ' votes' : (battle.scoreB ?? '—') + ' pts'}</div></div>
    </div>
    ${total ? `<div class="vote-bar-track"><div class="vote-bar-a" style="width:${pctA}%"></div><div class="vote-bar-b" style="width:${100-pctA}%"></div></div>` : ''}
    <div class="battle-meta">
      <span>👥 ${battle.participants} participants</span>
      <span class="prize">🏆 ${battle.prize}</span>
    </div>
    <button class="btn btn-primary btn-block btn-sm" data-nav="battle" data-id="${battle.id}">Enter Battle</button>
  </div>`;
}

// ---------- College card ----------
function CollegeCard(college){
  const state = getState();
  const following = state.followedColleges.includes(college.id);
  return `
  <div class="card card-hover college-card">
    <div class="logo">${CollegeLogo(college.id, 56)}</div>
    <h4>${college.name}</h4>
    <div class="loc">${college.location}</div>
    <div class="college-stats">
      <div><b>${college.battlePoints}</b><span>Points</span></div>
      <div><b>${college.battleWins}</b><span>Wins</span></div>
      <div><b>★${college.rating}</b><span>Rating</span></div>
    </div>
    <div class="flex gap-8">
      <button class="btn ${following ? 'btn-secondary' : 'btn-primary'} btn-sm w-full" data-action="follow" data-id="${college.id}">${following ? 'Following' : 'Follow'}</button>
      <button class="btn btn-secondary btn-sm w-full" data-nav="college" data-id="${college.id}">View</button>
    </div>
  </div>`;
}

// ---------- Leaderboard rows ----------
function rankedColleges(colleges){
  return [...colleges].sort((a,b) => b.battlePoints - a.battlePoints);
}

function PodiumCard(college, rank){
  const medals = { 1:'🥇', 2:'🥈', 3:'🥉' };
  return `
  <div class="card podium-card rank-${rank}">
    <div class="podium-medal">${medals[rank]}</div>
    <div class="logo">${CollegeLogo(college.id, 48)}</div>
    <b>${college.name}</b>
    <div class="pts">${college.battlePoints} pts</div>
  </div>`;
}

function RankRow(college, rank){
  return `
  <div class="rank-row">
    <div class="rank-num">#${rank}</div>
    <div class="logo">${CollegeLogo(college.id, 38)}</div>
    <div class="info">
      <b>${college.name}</b>
      <div class="stats">${college.battleWins} wins · ${college.students.toLocaleString()} students</div>
    </div>
    <div class="pts">${college.battlePoints} pts</div>
  </div>`;
}

// ---------- Poll card ----------
function PollCard(poll){
  const state = getState();
  const userVote = state.pollVotes[poll.id];
  const stars = [1,2,3,4,5];
  if(userVote){
    const newAvg = (((poll.average * poll.votes) + userVote) / (poll.votes + 1)).toFixed(1);
    return `
    <div class="card poll-card">
      <h4>${poll.question}</h4>
      <div class="poll-result">
        <span class="avg">${newAvg}</span>
        <span class="stars-static">${'★'.repeat(Math.round(newAvg))}${'☆'.repeat(5-Math.round(newAvg))}</span>
        <span class="votes-count">${(poll.votes + 1).toLocaleString()} students</span>
      </div>
      <p class="text-faint" style="font-size:12.5px;margin-top:8px">Thanks for rating — you gave it ${userVote} ★</p>
    </div>`;
  }
  return `
  <div class="card poll-card">
    <h4>${poll.question}</h4>
    <div class="stars-row">
      ${stars.map(s => `<button class="star-btn" data-action="vote-poll" data-id="${poll.id}" data-rating="${s}">${s}</button>`).join('')}
    </div>
    <div class="poll-result">
      <span class="avg">${poll.average}</span>
      <span class="stars-static">${'★'.repeat(Math.round(poll.average))}${'☆'.repeat(5-Math.round(poll.average))}</span>
      <span class="votes-count">${poll.votes.toLocaleString()} students</span>
    </div>
  </div>`;
}

function RatingBar(label, value){
  const pct = (value/5)*100;
  return `
  <div class="rating-row">
    <div class="top"><span>${label}</span><span class="mono">${value.toFixed(1)}/5</span></div>
    <div class="rating-track"><div class="rating-fill" style="width:${pct}%"></div></div>
  </div>`;
}

// ---------- Notification item ----------
function NotificationItem(n){
  const state = getState();
  const read = state.notifRead.includes(n.id) && n.unread;
  const unread = n.unread && !state.notifRead.includes(n.id);
  return `
  <div class="notif-item ${unread ? 'unread' : ''}" data-action="read-notif" data-id="${n.id}">
    <div class="ic">${n.icon}</div>
    <div>
      <div class="txt">${n.text}</div>
      <div class="time">${n.time}</div>
    </div>
  </div>`;
}

function BadgeTile(key){
  const meta = badgeMeta[key];
  if(!meta) return '';
  return `<div class="card badge-tile"><div class="emoji">${meta.emoji}</div><span>${meta.label}</span></div>`;
}

// ---------- pages.js ----------
// ==========================================================================
// BeUgram — Page renderers
// ==========================================================================
const NAV_ITEMS = [
  { id:'home', route:'home', icon:'🏠', label:'Home' },
  { id:'explore', route:'explore', icon:'🧭', label:'Explore' },
  { id:'arena', route:'arena', icon:'⚔️', label:'Battle Arena' },
  { id:'polls', route:'polls', icon:'📊', label:'Polls' },
  { id:'colleges', route:'colleges', icon:'🏫', label:'Colleges' },
  { id:'leaderboard', route:'leaderboard', icon:'🏆', label:'Leaderboard' },
  { id:'notifications', route:'notifications', icon:'🔔', label:'Notifications' },
  { id:'profile', route:'profile', icon:'👤', label:'Profile' },
];

const BOTTOM_NAV = [
  { route:'home', icon:'🏠', label:'Home' },
  { route:'arena', icon:'⚔️', label:'Arena' },
  { route:'create', icon:'➕', label:'', fab:true },
  { route:'polls', icon:'📊', label:'Polls' },
  { route:'profile', icon:'👤', label:'Profile' },
];

function allPosts(){
  const state = getState();
  const merged = [...state.extraPosts, ...posts]
    .map(getEffectivePost)
    .filter(p => !p.deleted);
  const pinned = merged.filter(p => p.pinned);
  const rest = merged.filter(p => !p.pinned);
  return [...pinned, ...rest];
}

// Looks up a single post (user-created or demo) by id, with any saved
// edit/pin override applied. Returns null if the post can't be found or
// was deleted, so callers can show a clear message instead of crashing.
function getPostById(id){
  const state = getState();
  const raw = state.extraPosts.find(p => p.id === id) || posts.find(p => p.id === id);
  if(!raw) return null;
  const effective = getEffectivePost(raw);
  return effective.deleted ? null : effective;
}

function unreadCount(){
  const state = getState();
  return notifications.filter(n => n.unread && !state.notifRead.includes(n.id)).length;
}

// ==========================================================================
// LANDING
// ==========================================================================
function renderLanding(){
  return `
  <div>
    <nav class="landing-nav">
      <div class="brand"><span class="brand-mark">B</span>BeUgram</div>
      <div class="landing-nav-links">
        <a href="#why">Why BeUgram</a>
        <a href="#arena">Battle Arena</a>
        <a href="#pulse">Campus Pulse</a>
        <a href="#ai">AI</a>
      </div>
      <div class="flex gap-8">
        <button class="btn btn-ghost btn-sm" data-nav="login">Log in</button>
        <button class="btn btn-primary btn-sm" data-nav="login">Enter Demo</button>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-mesh"></div>
      <div class="hero-inner">
        <div>
          <div class="eyebrow">🎓 Built for BEU &amp; university campuses</div>
          <h1>Your Campus. Your Community. <span class="grad">Your Arena.</span></h1>
          <p class="lead">BeUgram connects students across universities, turns colleges into communities, and brings inter-college competition to one digital platform.</p>
          <div class="hero-ctas">
            <button class="btn btn-primary" data-nav="login">Explore BeUgram</button>
            <button class="btn btn-secondary" data-nav="login">Enter Demo</button>
          </div>
          <div class="hero-stats">
            <div class="hero-stat"><b>${colleges.length}</b><span>Colleges live</span></div>
            <div class="hero-stat"><b>${students.length * 260}+</b><span>Students</span></div>
            <div class="hero-stat"><b>${battles.length}</b><span>Active battles</span></div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="floaty f1">🏆 GEC Buxar +12 pts</div>
          <div class="floaty f2">📸 1,248 votes cast</div>
          <div class="mock-window">
            <div class="mock-titlebar"><span></span><span></span><span></span></div>
            <div class="mock-body">
              <div class="mock-vs">
                <div class="vscol">🎓<br/>GEC Buxar</div>
                <div class="vscol"><div class="vsbadge">PHOTOGRAPHY</div><b>VS</b></div>
                <div class="vscol">🎓<br/>MIT Muzaffarpur</div>
              </div>
              ${landingSkeleton(70)}
              ${landingSkeleton(70)}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="why">
      <div class="section-head">
        <div class="eyebrow">Why BeUgram</div>
        <h2>Three problems, one campus platform</h2>
        <p>BeUgram brings students, colleges and campus feedback together — with AI woven through every step.</p>
      </div>
      <div class="grid-3">
        <div class="card card-hover value-card">
          <div class="value-icon connect">🔗</div>
          <h3>Connect</h3>
          <p>Discover students and college communities across every registered campus, and share what's happening on yours.</p>
        </div>
        <div class="card card-hover value-card">
          <div class="value-icon compete">⚔️</div>
          <h3>Compete</h3>
          <p>Challenge other colleges through the Battle Arena — coding, photography, design and eSports, all with live voting.</p>
        </div>
        <div class="card card-hover value-card">
          <div class="value-icon improve">📈</div>
          <h3>Improve</h3>
          <p>Share structured feedback about campus facilities — mess, hostel, Wi-Fi, library, labs and sports — and help colleges improve.</p>
        </div>
      </div>
    </section>

    <section class="section" id="arena">
      <div class="section-head">
        <div class="eyebrow">⚔️ Battle Arena Preview</div>
        <h2>Where colleges compete</h2>
      </div>
      <div class="battle-preview">
        <div class="battle-vs" style="position:relative;z-index:1">
          <div class="battle-side">${CollegeLogo('gecb', 60)}<b style="color:#fff">GEC Buxar</b></div>
          <div class="vs-badge">VS</div>
          <div class="battle-side">${CollegeLogo('mitm', 60)}<b style="color:#fff">MIT Muzaffarpur</b></div>
        </div>
        <div class="flex items-center justify-between mt-24" style="position:relative;z-index:1">
          <span class="badge badge-live">LIVE · Photography Battle</span>
          <span style="color:#fff;font-weight:700" class="mono">1,248 Votes</span>
        </div>
      </div>
    </section>

    <section class="section" id="pulse">
      <div class="section-head">
        <div class="eyebrow">📊 Campus Pulse</div>
        <h2>Real feedback, real facilities</h2>
        <p>Sample ratings pulled straight from Campus Pulse.</p>
      </div>
      <div class="card pulse-grid">
        <div class="pulse-card"><b>3.8</b><span>Mess</span></div>
        <div class="pulse-card"><b>4.2</b><span>Wi-Fi</span></div>
        <div class="pulse-card"><b>4.5</b><span>Library</span></div>
        <div class="pulse-card"><b>3.4</b><span>Hostel</span></div>
      </div>
    </section>

    <section class="section" id="ai">
      <div class="section-head">
        <div class="eyebrow">✨ AI Powered</div>
        <h2>Google Gemini, built in</h2>
        <p>Gemini powers real workflows across BeUgram — not just a chatbot bolted on the side.</p>
      </div>
      <div class="ai-strip">
        <div class="ai-pill"><span class="dot"></span>AI Caption Generator</div>
        <div class="ai-pill"><span class="dot"></span>AI Content Moderation</div>
        <div class="ai-pill"><span class="dot"></span>AI Battle Summaries</div>
      </div>
    </section>

    <section class="section">
      <div class="cta-band">
        <h2>Join your campus community.</h2>
        <p>Connect. Compete. Represent. — one digital campus for every student, every college, and every competition.</p>
        <button class="btn btn-secondary" data-nav="login">Enter BeUgram</button>
      </div>
    </section>

    <footer class="landing-footer">
      <div class="brand" style="justify-content:center;margin-bottom:10px">
        <span class="brand-mark" style="width:26px;height:26px;font-size:13px">B</span>BeUgram
      </div>
      BeUgram · A university hackathon MVP · Demo data only — no real student data is used.
    </footer>
  </div>`;
}

function landingSkeleton(h){ return `<div class="skeleton" style="height:${h}px"></div>`; }

// ==========================================================================
// LOGIN
// ==========================================================================
function renderLogin(){
  return `
  <div class="auth-wrap">
    <div class="auth-visual">
      <div class="auth-visual-inner">
        <div class="brand" style="color:#fff"><span class="brand-mark" style="background:rgba(255,255,255,.18);box-shadow:none">B</span>BeUgram</div>
        <h2>Connect. Compete. Represent.</h2>
        <p>One digital campus for every student, every college, and every competition. Join the Battle Arena, share campus feedback, and represent your college.</p>
        <div class="flex gap-8 mt-24">
          <span class="badge" style="background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.24);color:#fff">⚔️ Battle Arena</span>
          <span class="badge" style="background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.24);color:#fff">📊 Campus Pulse</span>
          <span class="badge" style="background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.24);color:#fff">✨ Gemini AI</span>
        </div>
      </div>
    </div>
    <div class="auth-form-side">
      <div class="auth-form">
        <h1>Welcome to BeUgram</h1>
        <p>Log in with your unique username and password.</p>
        <form id="login-form">
          <div class="field"><label>Username</label><input name="username" type="text" autocomplete="username" placeholder="e.g. " required /></div>
          <div class="field"><label>Password</label><input name="password" type="password" autocomplete="current-password" placeholder="Enter your password" minlength="8" required /></div>
          <div id="login-error" class="mod-flag bad" style="display:none"></div>
          <button type="submit" class="btn btn-primary btn-block">Login to BeUgram</button>
        </form>
        <div class="divider-or">or</div>
        <button type="button" class="btn btn-secondary btn-block" data-nav="register">Register to BeUgram</button>
        <p class="auth-switch">New to BeUgram? <a href="#/register" data-nav="register">Create your account</a></p>
      </div>
    </div>
  </div>`;
}

function renderRegister(){
  return `
  <div class="auth-wrap">
    <div class="auth-visual">
      <div class="auth-visual-inner">
        <div class="brand" style="color:#fff"><span class="brand-mark" style="background:rgba(255,255,255,.18);box-shadow:none">B</span>BeUgram</div>
        <h2>Create your BeUgram identity.</h2>
        <p>Your username is unique to you. Use a password to keep your account private.</p>
        <div class="flex gap-8 mt-24">
          <span class="badge" style="background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.24);color:#fff">🔐 Unique Username</span>
          <span class="badge" style="background:rgba(255,255,255,.14);border-color:rgba(255,255,255,.24);color:#fff">🔑 Password Login</span>
        </div>
      </div>
    </div>
    <div class="auth-form-side">
      <div class="auth-form">
        <h1>Register to BeUgram</h1>
        <p>Fill in your details to create your account.</p>
        <form id="register-form">
          <div class="field"><label>Full Name</label><input name="name" type="text" autocomplete="name" placeholder="" required /></div>
          <div class="field"><label>Username</label><input name="username" type="text" autocomplete="username" placeholder="" required /><small class="text-faint">3–30 characters: letters, numbers, . _ -</small></div>
          <div class="field"><label>Date of Birth</label><input name="dob" type="date" autocomplete="bday" required /></div>
          <div class="field"><label>Place</label><input name="place" type="text" autocomplete="address-level2" placeholder="" required /></div>
          <div class="field"><label>College</label><select name="college" required><option value="">Select your BEU college</option>${colleges.map(c => `<option value="${escAttr(c.id)}">${escAttr(c.name)}</option>`).join('')}</select></div>
          <div class="field"><label>Password</label><input name="password" type="password" autocomplete="new-password" minlength="8" placeholder="At least 8 characters" required /><small class="text-faint">Use at least 8 characters.</small></div>
          <div class="field"><label>Confirm Password</label><input name="confirmPassword" type="password" autocomplete="new-password" minlength="8" placeholder="Re-enter your password" required /></div>
          <div id="register-error" class="mod-flag bad" style="display:none"></div>
          <button type="submit" class="btn btn-primary btn-block">Create BeUgram Account</button>
        </form>
        <p class="auth-switch">Already registered? <a href="#/login" data-nav="login">Login here</a></p>
      </div>
    </div>
  </div>`;
}

// ==========================================================================
// APP SHELL (wraps every authenticated page)
// ==========================================================================
function renderShell(route, contentHtml){
  const user = getCurrentUser();
  const uc = unreadCount();
  const totalXp = (user.xp || 0) + (getState().xpBonus || 0);
  return `
  <div class="app-shell">
    <header class="topbar">
      <button class="icon-btn hamburger-btn" data-action="toggle-hamburger" title="Menu" aria-label="Open menu" aria-expanded="false">☰</button>
      <div class="brand" data-nav="home" style="cursor:pointer"><span class="brand-mark">B</span>BeUgram</div>
      <div class="search-box">🔍<input type="text" placeholder="Search students, colleges, battles…" /></div>
      <div class="topbar-actions">
        <button class="icon-btn" data-action="toggle-theme" title="Toggle theme">🌓</button>
        <button class="icon-btn" data-nav="notifications" title="Notifications" style="position:relative">
          🔔${uc ? `<span class="badge badge-live" style="position:absolute;top:-6px;right:-6px;padding:1px 6px;font-size:10px">${uc}</span>` : ''}
        </button>
        <button data-nav="profile" style="border:none;background:none;cursor:pointer;padding:0">${UserAvatar(user, 38)}</button>
      </div>
    </header>
    <div class="app-body">
      <aside class="sidebar">
        ${NAV_ITEMS.map(item => `
          <a href="#/${item.route}" class="side-link ${route === item.route ? 'active' : ''}" data-nav="${item.route}">
            <span class="ic">${item.icon}</span>${item.label}
          </a>`).join('')}
        <button class="btn btn-primary btn-block mt-16" data-action="open-composer">+ Create Post</button>
        <div class="card side-card">
          <h4>Campus XP</h4>
          <div class="flex justify-between" style="font-size:12.5px;margin-bottom:6px"><span class="text-faint">Level ${user.level}</span><span class="mono">${totalXp} XP</span></div>
          <div class="xp-bar-track"><div class="xp-bar-fill" style="width:${Math.min(100, (totalXp % 1000) / 10)}%"></div></div>
        </div>
      </aside>
      <main class="main-col">${contentHtml}</main>
      ${renderRail()}
    </div>
    <nav class="bottom-nav">
      ${BOTTOM_NAV.map(item => item.fab
        ? `<a href="#" data-action="open-composer" class="fab"><span class="ic">${item.icon}</span></a>`
        : `<a href="#/${item.route}" data-nav="${item.route}" class="${route === item.route ? 'active' : ''}"><span class="ic">${item.icon}</span>${item.label}</a>`
      ).join('')}
    </nav>

    <div class="hamburger-overlay" data-action="close-hamburger" hidden></div>
    <aside class="hamburger-menu" hidden aria-hidden="true">
      <div class="hamburger-head">
        <div class="brand"><span class="brand-mark">B</span>BeUgram</div>
        <button class="icon-btn" data-action="close-hamburger" aria-label="Close menu">✕</button>
      </div>
      <div class="hamburger-user" data-nav="profile">
        ${UserAvatar(user, 44)}
        <div class="hu-info">
          <b>${safeText(user.name, 'Unnamed Student')}</b>
          ${user.username ? `<span class="username">${safeText(user.username, '')}</span>` : ''}
        </div>
      </div>
      <nav class="hamburger-links">
        ${NAV_ITEMS.map(item => `
          <a href="#/${item.route}" class="${route === item.route ? 'active' : ''}" data-nav="${item.route}">
            <span class="ic">${item.icon}</span>${item.label}
          </a>`).join('')}
      </nav>
      <div class="hamburger-footer">
        <button class="btn btn-secondary btn-block" data-action="toggle-theme">🌓 Toggle Theme</button>
        <button class="btn btn-danger btn-block mt-8" data-action="logout">🚪 Logout</button>
      </div>
    </aside>
  </div>`;
}

function renderRail(){
  const topColleges = rankedColleges(colleges).slice(0,3);
  const liveBattles = battles.filter(b => b.status === 'LIVE');
  return `
  <aside class="rail">
    <div class="card rail-card">
      <h4>🔥 Trending</h4>
      ${['#TechFest','#BattleArena','#CodingBattle','#CampusPulse'].map(t => `<div class="rail-row">${t}</div>`).join('')}
    </div>
    <div class="card rail-card">
      <h4>⚔️ Live Battles<span class="badge badge-live">LIVE</span></h4>
      ${liveBattles.map(b => `<div class="rail-row" data-nav="battle" data-id="${b.id}" style="cursor:pointer">${b.icon} ${getCollege(b.collegeA).short} vs ${getCollege(b.collegeB).short}</div>`).join('') || '<p class="text-faint" style="font-size:13px">No live battles right now.</p>'}
    </div>
    <div class="card rail-card">
      <h4>🏆 Top Colleges</h4>
      ${topColleges.map((c,i) => `<div class="rail-row" data-nav="college" data-id="${c.id}" style="cursor:pointer">#${i+1} ${c.name}<span class="mono" style="margin-left:auto">${c.battlePoints}</span></div>`).join('')}
    </div>
    <div class="card rail-card">
      <h4>📊 Campus Pulse</h4>
      ${Object.entries(getCollege('gecb').ratings).slice(0,4).map(([k,v]) => `<div class="rail-row">${k}<span class="mono" style="margin-left:auto">${v}/5</span></div>`).join('')}
    </div>
  </aside>`;
}

// ==========================================================================
// HOME FEED
// ==========================================================================
function renderHome(){
  const feed = allPosts();
  return `
    <div class="card composer-trigger" data-action="open-composer">
      ${UserAvatar(getCurrentUser(), 42)}
      <input type="text" placeholder="Share something with your campus…" />
      <button class="btn btn-primary btn-sm" data-action="open-composer">Post</button>
    </div>
    ${feed.map(p => PostCard(p)).join('')}
  `;
}

// ==========================================================================
// EXPLORE
// ==========================================================================
function renderExplore(){
  const trendingPosts = [...allPosts()].sort((a,b) => (b.likes) - (a.likes)).slice(0,4);
  const trendingColleges = rankedColleges(colleges).slice(0,4);
  const popularBattles = battles.filter(b => b.status !== 'COMPLETED').slice(0,3);
  const suggested = students.filter(s => s.id !== getCurrentUser().id).slice(0,4);
  return `
    <div class="page-title"><h1>Explore</h1></div>
    <p class="page-sub">Trending posts, colleges, battles and campus trends across BeUgram.</p>

    <h3 style="margin-bottom:12px">Trending Posts</h3>
    <div class="grid-2" style="margin-bottom:28px">
      ${trendingPosts.map(p => `
        <div class="card card-hover" style="overflow:hidden;cursor:pointer">
          <img class="post-img" style="aspect-ratio:16/9" src="${p.image}" />
          <div style="padding:12px 16px"><b style="font-size:13.5px">${getStudent(p.authorId).name}</b><p class="text-faint" style="font-size:12.5px;margin-top:4px">❤️ ${p.likes} likes · ${CollegeChip(p.college)}</p></div>
        </div>`).join('')}
    </div>

    <h3 style="margin-bottom:12px">Trending Colleges</h3>
    <div class="grid-2" style="margin-bottom:28px">
      ${trendingColleges.map(c => CollegeCard(c)).join('')}
    </div>

    <h3 style="margin-bottom:12px">Popular Battles</h3>
    <div class="grid-2" style="margin-bottom:28px">
      ${popularBattles.map(b => BattleCard(b)).join('')}
    </div>

    <h3 style="margin-bottom:12px">Suggested Students</h3>
    <div class="card" style="padding:8px 4px">
      ${suggested.map(s => `
        <div class="rail-row" style="padding:12px 16px">
          ${UserAvatar(s, 36)}
          <div style="flex:1;margin-left:10px"><b style="font-size:13.5px;display:block">${safeText(s.name, 'Unknown Student')}</b><span class="text-faint" style="font-size:12px">${(getCollege(s.college) || {short:'—'}).short} · ${safeText(s.bio, '').slice(0,40)}…</span></div>
          <button class="btn btn-secondary btn-sm">Follow</button>
        </div>`).join('')}
    </div>
  `;
}

// ==========================================================================
// BATTLE ARENA
// ==========================================================================
function renderArena(){
  const categories = [
    { key:'Coding Battle', icon:'💻', ready:true },
    { key:'Photography Battle', icon:'📸', ready:true },
    { key:'eSports Battle', icon:'🎮', ready:false },
    { key:'Design Battle', icon:'🎨', ready:false },
  ];
  const live = battles.filter(b => b.status === 'LIVE');
  const upcoming = battles.filter(b => b.status === 'UPCOMING');
  const completed = battles.filter(b => b.status === 'COMPLETED');
  return `
    <div class="arena-hero">
      <h1># Battle Arena</h1>
      <p>Where colleges compete. Where students represent.</p>
      <div class="cat-strip">
        ${categories.map(c => `<span class="cat-pill ${c.ready ? '' : 'soon'}">${c.icon} ${c.key}${c.ready ? '' : ' · demo'}</span>`).join('')}
      </div>
    </div>

    ${live.length ? `<h3 class="mt-24" style="margin-bottom:12px">🔴 Live now</h3><div class="grid-2">${live.map(BattleCard).join('')}</div>` : ''}
    ${upcoming.length ? `<h3 class="mt-24" style="margin-bottom:12px">🕒 Upcoming</h3><div class="grid-2">${upcoming.map(BattleCard).join('')}</div>` : ''}
    ${completed.length ? `<h3 class="mt-24" style="margin-bottom:12px">✅ Completed</h3><div class="grid-2">${completed.map(BattleCard).join('')}</div>` : ''}
  `;
}

// ==========================================================================
// BATTLE DETAILS
// ==========================================================================
function renderBattleDetails(id){
  const battle = getBattle(id);
  if(!battle) return `<div class="empty-state"><div class="emoji">🔍</div>Battle not found.</div>`;
  const a = getCollege(battle.collegeA), b = getCollege(battle.collegeB);
  const usesVotes = !!(battle.votesA || battle.votesB || battle.submissions.length);
  const total = usesVotes ? battle.votesA + battle.votesB : (battle.scoreA||0)+(battle.scoreB||0);
  const pctA = total ? Math.round(((usesVotes ? battle.votesA : battle.scoreA) / total) * 100) : 50;
  const state = getState();
  const myVote = state.battleVotes[battle.id];

  return `
    <button class="btn btn-ghost btn-sm" data-nav="arena">← Back to Arena</button>
    <div class="card battle-detail-head mt-16">
      <div class="flex items-center justify-between mt-8" style="margin-bottom:16px">
        <span class="badge badge-brand">${battle.icon} ${battle.type}</span>
        ${StatusBadge(battle.status)}
      </div>
      <div class="battle-vs" style="margin-bottom:18px">
        <div class="battle-side">${CollegeLogo(battle.collegeA,64)}<b>${a.name}</b><div class="score">${usesVotes ? battle.votesA+' votes' : (battle.scoreA??'—')+' pts'}</div></div>
        <div class="vs-badge" style="width:52px;height:52px;font-size:14px">VS</div>
        <div class="battle-side">${CollegeLogo(battle.collegeB,64)}<b>${b.name}</b><div class="score">${usesVotes ? battle.votesB+' votes' : (battle.scoreB??'—')+' pts'}</div></div>
      </div>
      ${total ? `<div class="vote-bar-track" style="height:14px"><div class="vote-bar-a" style="width:${pctA}%"></div><div class="vote-bar-b" style="width:${100-pctA}%"></div></div>` : ''}
      <div class="battle-meta mt-16">
        <span>🕓 ${battle.startTime} → ${battle.endTime}</span>
        <span>👥 ${battle.participants} participants</span>
        <span class="prize">🏆 ${battle.prize}</span>
      </div>
    </div>

    <div class="grid-2 mt-24" style="align-items:start">
      <div class="card" style="padding:20px">
        <h4 style="margin-bottom:12px">Rules</h4>
        <ul class="rules-list">${battle.rules.map(r => `<li>▸ ${r}</li>`).join('')}</ul>
      </div>
      <div class="card" style="padding:20px">
        <div class="flex items-center justify-between" style="margin-bottom:12px">
          <h4>Leaderboard</h4>
        </div>
        ${RankRow(a, usesVotes ? (battle.votesA >= battle.votesB ? 1 : 2) : (battle.scoreA >= battle.scoreB ? 1 : 2))}
        ${RankRow(b, usesVotes ? (battle.votesB > battle.votesA ? 1 : 2) : (battle.scoreB > battle.scoreA ? 1 : 2))}
        <button class="btn btn-secondary btn-block btn-sm mt-16" data-action="battle-summary" data-id="${battle.id}">✨ Generate AI Battle Summary</button>
        <div id="battle-summary-box"></div>
      </div>
    </div>

    ${battle.submissions.length ? `
    <h3 class="mt-24" style="margin-bottom:12px">Submissions — tap to vote</h3>
    <div class="submission-grid">
      ${battle.submissions.map(s => `
        <div class="card submission-card ${myVote === s.id ? 'card-hover' : ''}" style="${myVote===s.id ? 'box-shadow:var(--shadow-glow);border-color:var(--indigo)' : ''}">
          <img src="${s.image}" alt="submission" />
          <div class="submission-foot">
            <span class="badge badge-brand">${getCollege(s.college).short}</span>
            <span class="votes">${s.votes + (myVote===s.id?1:0)} votes</span>
            <button class="btn ${myVote===s.id ? 'btn-primary':'btn-secondary'} btn-sm" data-action="vote-battle" data-battle="${battle.id}" data-submission="${s.id}" ${myVote ? 'disabled':''}>${myVote===s.id ? '✓ Voted' : 'Vote'}</button>
          </div>
        </div>`).join('')}
    </div>` : `<div class="card empty-state mt-24"><div class="emoji">🖼️</div>Submissions open once the battle goes live.</div>`}
  `;
}

// ==========================================================================
// CAMPUS POLLS
// ==========================================================================
function renderPolls(){
  return `
    <div class="page-title"><h1>Campus Pulse</h1></div>
    <p class="page-sub">Student opinions that can improve campus life.</p>
    <div class="grid-2">
      ${polls.map(p => PollCard(p)).join('')}
    </div>
  `;
}

// ==========================================================================
// COLLEGES LIST
// ==========================================================================
function renderColleges(){
  return `
    <div class="page-title"><h1>Colleges</h1></div>
    <p class="page-sub">Every registered campus on BeUgram.</p>
    <div class="grid-2">
      ${colleges.map(c => CollegeCard(c)).join('')}
    </div>
  `;
}

// ==========================================================================
// COLLEGE PROFILE — Official College Information Page
//
// IMPORTANT (data-flow): this page renders ONLY from the pre-installed
// `colleges` array (official/static data). It must never read from or
// filter the `posts` array — student-generated posts belong exclusively
// to the Home Feed (see renderHome / allPosts). Do not reintroduce
// `posts.filter(...)` or PostCard(...) into this function.
// ==========================================================================
function renderCollegeProfile(id){
  const c = getCollege(id);
  if(!c) return `<div class="empty-state"><div class="emoji">🔍</div>College not found.</div>`;
  const state = getState();
  const following = state.followedColleges.includes(c.id);
  const collegeBattles = battles.filter(b => b.collegeA === c.id || b.collegeB === c.id);

  const socialLinks = [
    SocialLinkButton(c.officialInstagram, 'Instagram', '📷'),
    SocialLinkButton(c.officialFacebook, 'Facebook', '📘'),
    SocialLinkButton(c.officialLinkedIn, 'LinkedIn', '💼'),
    SocialLinkButton(c.officialTwitter, 'X / Twitter', '𝕏'),
  ].filter(Boolean).join('');

  return `
    <div class="profile-cover">
      <div class="avatar" style="position:absolute;bottom:-40px;left:28px;width:90px;height:90px;font-size:26px">${c.short}</div>
    </div>
    <div class="profile-head">
      <div>
        <div class="flex items-center gap-8">
          <h1>${c.name}</h1>
          <span class="badge badge-brand">🎓 BEU Affiliated</span>
        </div>
        <p class="text-faint">${safeText(c.location)}</p>
      </div>
      <div class="flex gap-8">
        ${c.officialWebsite ? `<a class="btn btn-secondary" href="${c.officialWebsite}" target="_blank" rel="noopener">Visit Official Website</a>` : ''}
        <button class="btn ${following?'btn-secondary':'btn-primary'}" data-action="follow" data-id="${c.id}">${following?'✓ Following':'Follow'}</button>
      </div>
    </div>
    <div class="profile-stats">
      <div><b>${c.followers.toLocaleString()}</b><span>Followers</span></div>
      <div><b>${c.students.toLocaleString()}</b><span>Students</span></div>
      <div><b>${c.battlePoints}</b><span>Battle Points</span></div>
      <div><b>${c.battleWins}</b><span>Battle Wins</span></div>
      <div><b>★${c.rating}</b><span>Rating</span></div>
    </div>

    <div class="card mt-24" style="padding:22px">
      <h4 style="margin-bottom:10px">About ${c.short}</h4>
      <p class="text-soft" style="font-size:14.5px;line-height:1.7">${safeText(c.description, 'Official description coming soon.')}</p>
    </div>

    <div class="card mt-16" style="padding:22px">
      <h4 style="margin-bottom:14px">Official Information</h4>
      <div class="info-grid">
        ${OfficialInfoRow('Website', c.officialWebsite, { isLink: true, displayText: c.officialWebsite ? c.officialWebsite.replace(/^https?:\/\//,'') : '' })}
        ${OfficialInfoRow('Email', c.officialEmail, { isLink: true, displayText: c.officialEmail })}
        ${OfficialInfoRow('Phone', c.phone)}
        ${OfficialInfoRow('Address', c.address)}
        ${OfficialInfoRow('Established', c.established)}
      </div>
    </div>

    ${socialLinks ? `
    <div class="card mt-16" style="padding:22px">
      <h4 style="margin-bottom:14px">Official Social Media</h4>
      <div class="flex gap-8" style="flex-wrap:wrap">${socialLinks}</div>
    </div>` : ''}

    <div class="card mt-16" style="padding:22px">
      <h4 style="margin-bottom:14px">Official Notices</h4>
      ${c.notices && c.notices.length
        ? `<div class="notice-list">${c.notices.map(NoticeCard).join('')}</div>`
        : `<div class="empty-state"><div class="emoji">📭</div>No official notices available.</div>`}
    </div>

    <div class="grid-2 mt-16" style="align-items:start">
      <div class="card" style="padding:22px">
        <h4 style="margin-bottom:14px">Facilities</h4>
        ${FacilityChips(c.facilities)}
      </div>
      <div class="card" style="padding:22px">
        <h4 style="margin-bottom:14px">Courses / Programs</h4>
        ${CourseTags(c.courses)}
      </div>
    </div>

    <div class="card mt-16" style="padding:22px">
      <h4 style="margin-bottom:14px">Campus Gallery</h4>
      ${GalleryGrid(c.gallery)}
    </div>

    <div class="card mt-16" style="padding:22px">
      <h4 style="margin-bottom:14px">Battle Arena Participation</h4>
      ${collegeBattles.length ? `<div class="grid-2">${collegeBattles.map(BattleCard).join('')}</div>` : `<div class="empty-state"><div class="emoji">⚔️</div>No battles yet.</div>`}
    </div>

    <div class="card mt-16" style="padding:22px">
      <h4 style="margin-bottom:14px">Campus Pulse — Facility Ratings</h4>
      ${Object.entries(c.ratings).map(([k,v]) => RatingBar(k, v)).join('')}
    </div>
  `;
}

// ==========================================================================
// LEADERBOARD
// ==========================================================================
function renderLeaderboard(){
  const ranked = rankedColleges(colleges);
  const top3 = ranked.slice(0,3);
  const rest = ranked.slice(3);
  return `
    <div class="page-title"><h1># College Rankings</h1></div>
    <p class="page-sub">Battle wins, battle points, total votes and participation — updated live.</p>
    <div class="podium">
      ${top3.map((c,i) => PodiumCard(c, i+1)).join('')}
    </div>
    <div class="card">
      ${rest.map((c,i) => RankRow(c, i+4)).join('')}
    </div>
  `;
}

// ==========================================================================
// NOTIFICATIONS
// ==========================================================================
function renderNotifications(){
  return `
    <div class="page-title"><h1>Notifications</h1><button class="btn btn-secondary btn-sm" data-action="read-all-notifs">Mark all read</button></div>
    <div class="card">
      ${notifications.map(n => NotificationItem(n)).join('')}
    </div>
  `;
}

// ==========================================================================
// PROFILE
// ==========================================================================
function renderProfile(){
  const user = getCurrentUser();
  const state = getState();
  const myPosts = allPosts().filter(p => p.authorId === user.id);
  const totalXp = (user.xp || 0) + (state.xpBonus || 0);
  const coverStyle = user.bannerImage
    ? ` style="background-image:url('${user.bannerImage}');background-size:cover;background-position:center"`
    : '';
  const socialLinks = [
    SocialLinkButton(user.instagram, 'Instagram', '📷'),
    SocialLinkButton(user.twitter, 'X / Twitter', '𝕏'),
    SocialLinkButton(user.linkedin, 'LinkedIn', '💼'),
    SocialLinkButton(user.website, 'Website', '🔗'),
  ].filter(Boolean).join('');
  const myBattles = battles.filter(b => b.collegeA === user.college || b.collegeB === user.college);

  return `
    <div class="profile-cover"${coverStyle}>${UserAvatar(user, 90)}</div>
    <div class="profile-head">
      <div>
        <h1>${safeText(user.name, 'Unnamed Student')}</h1>
        ${user.username ? `<span class="username username-lg">${safeText(user.username, '')}</span>` : ''}
        <p class="text-faint mt-4">${CollegeChip(user.college)} · ${safeText(user.role, 'Student')}</p>
        <p class="mt-8" style="font-size:14px;color:var(--ink-soft);max-width:480px">${safeText(user.bio, 'No bio yet.')}</p>
        ${socialLinks ? `<div class="flex gap-8 mt-8" style="flex-wrap:wrap">${socialLinks}</div>` : ''}
      </div>
      <button class="btn btn-secondary" data-action="edit-profile">Edit Profile</button>
    </div>
    <div class="profile-stats">
      <div><b>${myPosts.length}</b><span>Posts</span></div>
      <div><b>1.2k</b><span>Followers</span></div>
      <div><b>340</b><span>Following</span></div>
      <div><b>${user.level}</b><span>Level</span></div>
      <div><b class="mono">${totalXp}</b><span>Campus XP</span></div>
    </div>

    <div class="tabs mt-24">
      <button class="tab-btn active" data-tab="posts">Posts</button>
      <button class="tab-btn" data-tab="badges">Badges</button>
      <button class="tab-btn" data-tab="battles">Battle History</button>
    </div>
    <div data-tab-panel="posts">
      ${myPosts.length ? `<div class="grid-2">${myPosts.map(p=>PostCard(p)).join('')}</div>` : `<div class="empty-state"><div class="emoji">📭</div>No posts yet — share your first campus moment.</div>`}
    </div>
    <div data-tab-panel="badges" hidden>
      ${user.badges && user.badges.length ? `<div class="badge-grid">${user.badges.map(BadgeTile).join('')}</div>` : `<div class="empty-state"><div class="emoji">🏅</div>No badges earned yet.</div>`}
    </div>
    <div data-tab-panel="battles" hidden>
      ${myBattles.length ? `<div class="grid-2">${myBattles.map(BattleCard).join('')}</div>` : `<div class="empty-state"><div class="emoji">⚔️</div>No battle history yet.</div>`}
    </div>
  `;
}

function renderMissing(){
  return `<div class="card empty-state"><div class="emoji">🚧</div>This section is a placeholder for the hackathon MVP demo.</div>`;
}

// ---------- app.js ----------
// ==========================================================================
// BeUgram — App bootstrap, router & event delegation
// ==========================================================================
const appRoot = document.getElementById('app');
const modalRoot = document.getElementById('modal-root');

// ---------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------
function parseHash(){
  const raw = (location.hash || '#/landing').replace(/^#\//, '');
  const [route, id] = raw.split('/');
  return { route: route || 'landing', id };
}

const PROTECTED_ROUTES = ['home','explore','arena','battle','polls','colleges','college','leaderboard','profile','notifications'];

function render(){
  const { route, id } = parseHash();
  const state = getState();

  if(!state.auth && PROTECTED_ROUTES.includes(route)){
    location.hash = '#/login';
    return;
  }
  if(state.auth && (route === 'landing' || route === 'login' || route === 'register')){
    location.hash = '#/home';
    return;
  }

  let html;
  if(route === 'landing'){ html = renderLanding(); }
  else if(route === 'login'){ html = renderLogin(); }
  else if(route === 'register'){ html = renderRegister(); }
  else {
    let content;
    switch(route){
      case 'home': content = renderHome(); break;
      case 'explore': content = renderExplore(); break;
      case 'arena': content = renderArena(); break;
      case 'battle': content = renderBattleDetails(id); break;
      case 'polls': content = renderPolls(); break;
      case 'colleges': content = renderColleges(); break;
      case 'college': content = renderCollegeProfile(id); break;
      case 'leaderboard': content = renderLeaderboard(); break;
      case 'profile': content = renderProfile(); break;
      case 'notifications': content = renderNotifications(); break;
      default: content = renderMissing();
    }
    html = renderShell(route, content);
  }
  appRoot.innerHTML = html;
  document.documentElement.setAttribute('data-theme', getState().theme);
}

function rerender(){
  const y = window.scrollY;
  render();
  window.scrollTo(0, y);
}

function goToAuthRoute(route){
  const target = route === 'register' ? '#/register' : '#/login';
  // Change the hash and immediately render. This avoids relying only on the
  // browser's hashchange event, which can be unreliable in some local-file
  // preview environments.
  if(location.hash !== target){
    location.hash = target;
  }
  render();
  window.scrollTo(0,0);
}
window.BeUgramAuth = { go: goToAuthRoute };


window.addEventListener('hashchange', () => { render(); window.scrollTo(0,0); });

// ---------------------------------------------------------------------
// Modal: Create Post
// ---------------------------------------------------------------------
let composerImage = null;

function openComposer(){
  const user = getCurrentUser();
  modalRoot.innerHTML = `
    <div class="modal-overlay" data-action="close-modal">
      <div class="modal" data-stop>
        <div class="modal-head">
          <h3>Create Post</h3>
          <button class="icon-btn" data-action="close-modal">✕</button>
        </div>
        <div class="modal-body">
          <label class="upload-drop" id="upload-drop">
            <input type="file" accept="image/*" id="composer-file" style="display:none" />
            <span id="upload-placeholder">📷 Click to upload an image<br/><span class="text-faint" style="font-size:12px">PNG or JPG, up to ~5MB</span></span>
          </label>

          <div class="field mt-16">
            <label>Caption</label>
            <textarea id="composer-caption" rows="3" placeholder="What's happening on campus?"></textarea>
          </div>

          <div class="ai-box">
            <div class="lbl">✨ Gemini AI</div>
            <button class="btn btn-secondary btn-sm w-full" id="gen-caption-btn">Generate Caption with Gemini</button>
            <div id="mod-flag-box"></div>
          </div>

          <div class="grid-2 mt-16">
            <div class="field">
              <label>College</label>
              <select id="composer-college">${colleges.map(c => `<option value="${c.id}" ${c.id===user.college?'selected':''}>${c.name}</option>`).join('')}</select>
            </div>
            <div class="field">
              <label>Location <span class="text-faint">(optional)</span></label>
              <input type="text" id="composer-location" placeholder="e.g. Main Auditorium" />
            </div>
          </div>
          <div class="field">
            <label>Tags <span class="text-faint">(comma separated)</span></label>
            <input type="text" id="composer-tags" placeholder="#TechFest, #CampusLife" />
          </div>

          <button class="btn btn-primary btn-block mt-16" id="post-submit-btn">Post to BeUgram</button>
        </div>
      </div>
    </div>`;
  composerImage = null;

  const fileInput = document.getElementById('composer-file');
  const dropZone = document.getElementById('upload-drop');
  dropZone.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      composerImage = reader.result;
      dropZone.classList.add('has-image');
      dropZone.innerHTML = `<img src="${composerImage}" alt="preview" />`;
    };
    reader.readAsDataURL(file);
  });

  document.getElementById('gen-caption-btn').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true; btn.textContent = 'Generating…';
    const { caption } = await generateCaption(composerImage ? 'uploaded campus image' : '');
    document.getElementById('composer-caption').value = caption;
    btn.disabled = false; btn.textContent = 'Generate Caption with Gemini';
    Toast('✨ Caption generated with Gemini');
  });

  document.getElementById('post-submit-btn').addEventListener('click', async (e) => {
    const btn = e.currentTarget;
    const captionEl = document.getElementById('composer-caption');
    const caption = captionEl.value.trim();
    if(!caption){ Toast('Add a caption before posting'); return; }
    btn.disabled = true; btn.textContent = 'Checking with Gemini…';
    const mod = await moderateContent(caption);
    const flagBox = document.getElementById('mod-flag-box');
    if(mod.flagged && !btn.dataset.confirmed){
      flagBox.innerHTML = `<div class="mod-flag bad">⚠️ Gemini flagged this as <b>${mod.label}</b>. AI moderation isn't perfect — review before posting.</div>`;
      btn.textContent = 'Post Anyway';
      btn.dataset.confirmed = '1';
      btn.disabled = false;
      return;
    }
    flagBox.innerHTML = `<div class="mod-flag ok">✅ Passed Gemini content check (${mod.label})</div>`;
    const college = document.getElementById('composer-college').value;
    const tags = document.getElementById('composer-tags').value.split(',').map(t => t.trim()).filter(Boolean).map(t => t.startsWith('#') ? t : '#'+t);
    const post = {
      id: 'up' + Date.now(),
      authorId: getCurrentUser().id,
      college,
      time: 'Just now',
      image: composerImage || 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80',
      caption,
      tags: tags.length ? tags : ['#BeUgram'],
      likes: 0,
      comments: [],
    };
    addPost(post);
    addXp(5);
    closeModal();
    Toast('🎉 Posted to BeUgram · +5 XP');
    if(location.hash === '#/home') rerender(); else location.hash = '#/home';
  });
}

function closeModal(){ modalRoot.innerHTML = ''; composerImage = null; }

// ---------------------------------------------------------------------
// Generic confirm modal (used for Delete Post, Logout, etc.)
// ---------------------------------------------------------------------
function openConfirmModal(opts){
  const danger = !!opts.danger;
  modalRoot.innerHTML = `
    <div class="modal-overlay" data-action="close-modal">
      <div class="modal modal-sm" data-stop>
        <div class="modal-head">
          <h3>${safeText(opts.title, 'Please confirm')}</h3>
          <button class="icon-btn" data-action="close-modal">✕</button>
        </div>
        <div class="modal-body">
          <p style="font-size:14px;color:var(--ink-soft);margin-bottom:20px">${safeText(opts.message, 'Are you sure?')}</p>
          <div class="flex gap-8">
            <button class="btn btn-secondary w-full" data-action="close-modal">Cancel</button>
            <button class="btn ${danger ? 'btn-danger' : 'btn-primary'} w-full" id="confirm-action-btn">${safeText(opts.confirmLabel, 'Confirm')}</button>
          </div>
        </div>
      </div>
    </div>`;
  const btn = document.getElementById('confirm-action-btn');
  if(btn){
    btn.addEventListener('click', () => {
      closeModal();
      try{ if(typeof opts.onConfirm === 'function') opts.onConfirm(); }
      catch(e){ Toast('⚠️ Something went wrong. Please try again.'); }
    });
  }
}

// ---------------------------------------------------------------------
// Modal: Edit Post (caption + tags only — image/college stay as posted)
// ---------------------------------------------------------------------
function openEditPostModal(postId){
  const post = getPostById(postId);
  if(!post){ Toast('⚠️ That post could not be found.'); return; }
  modalRoot.innerHTML = `
    <div class="modal-overlay" data-action="close-modal">
      <div class="modal" data-stop>
        <div class="modal-head">
          <h3>Edit Post</h3>
          <button class="icon-btn" data-action="close-modal">✕</button>
        </div>
        <div class="modal-body">
          <div class="field">
            <label>Caption</label>
            <textarea id="editpost-caption" rows="3">${safeText(post.caption, '')}</textarea>
          </div>
          <div class="field">
            <label>Tags <span class="text-faint">(comma separated)</span></label>
            <input type="text" id="editpost-tags" value="${escAttr((post.tags || []).join(', '))}" />
          </div>
          <div id="editpost-error" class="mod-flag bad" style="display:none"></div>
          <button class="btn btn-primary btn-block mt-16" id="editpost-save-btn">Save Changes</button>
        </div>
      </div>
    </div>`;

  document.getElementById('editpost-save-btn').addEventListener('click', () => {
    const errBox = document.getElementById('editpost-error');
    const caption = document.getElementById('editpost-caption').value.trim();
    if(!caption){
      errBox.style.display = 'block';
      errBox.textContent = 'Caption cannot be empty.';
      return;
    }
    const tags = document.getElementById('editpost-tags').value
      .split(',').map(t => t.trim()).filter(Boolean).map(t => t.startsWith('#') ? t : '#' + t);
    const ok = editPost(postId, { caption, tags: tags.length ? tags : ['#BeUgram'] });
    if(ok){
      closeModal();
      Toast('✏️ Post updated');
      rerender();
    } else {
      errBox.style.display = 'block';
      errBox.textContent = 'Could not save your changes. Please try again.';
      Toast('⚠️ Failed to save post changes');
    }
  });
}

// ---------------------------------------------------------------------
// Reusable image-upload binder for Edit Profile (avatar/banner) — handles
// unreadable files gracefully instead of crashing or leaving a broken UI.
// ---------------------------------------------------------------------
function bindImageUpload(dropId, fileId, previewId, placeholderId, onLoaded){
  const drop = document.getElementById(dropId);
  const fileInput = document.getElementById(fileId);
  const preview = document.getElementById(previewId);
  const placeholder = placeholderId ? document.getElementById(placeholderId) : null;
  if(!drop || !fileInput || !preview) return;
  drop.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];
    if(!file) return;
    if(!file.type || !file.type.startsWith('image/')){
      Toast('⚠️ Please choose an image file');
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => Toast('⚠️ Could not read that image — try another file');
    reader.onload = () => {
      try{
        preview.src = reader.result;
        preview.style.display = 'block';
        if(placeholder) placeholder.style.display = 'none';
        onLoaded(reader.result);
      }catch(e){ Toast('⚠️ Could not load image preview'); }
    };
    try{ reader.readAsDataURL(file); }
    catch(e){ Toast('⚠️ Could not read that image'); }
  });
}

function normalizeUrl(value){
  const v = (value || '').trim();
  if(!v) return '';
  if(/^https?:\/\//i.test(v)) return v;
  return 'https://' + v.replace(/^\/+/, '');
}

// ---------------------------------------------------------------------
// Modal: Edit Profile
// ---------------------------------------------------------------------
function openEditProfileModal(){
  const user = getCurrentUser();
  let avatarPending = null;
  let bannerPending = null;

  modalRoot.innerHTML = `
    <div class="modal-overlay" data-action="close-modal">
      <div class="modal" data-stop>
        <div class="modal-head">
          <h3>Edit Profile</h3>
          <button class="icon-btn" data-action="close-modal">✕</button>
        </div>
        <div class="modal-body">
          <label class="upload-drop banner-drop" id="banner-drop">
            <img id="banner-preview" src="${user.bannerImage ? user.bannerImage : ''}" alt="banner preview" style="${user.bannerImage ? '' : 'display:none'}" onerror="imgFallback(this)" />
            <span id="banner-placeholder" style="${user.bannerImage ? 'display:none' : ''}">🖼️ Click to upload a cover banner</span>
            <input type="file" accept="image/*" id="banner-file" style="display:none" />
          </label>

          <div class="flex items-center gap-12 mt-16">
            <label class="upload-drop avatar-drop" id="avatar-drop">
              <img id="avatar-preview" src="${user.avatarImage ? user.avatarImage : ''}" alt="avatar preview" style="${user.avatarImage ? '' : 'display:none'}" onerror="imgFallback(this)" />
              <span id="avatar-placeholder" style="${user.avatarImage ? 'display:none' : ''};font-size:11px">📷 Photo</span>
              <input type="file" accept="image/*" id="avatar-file" style="display:none" />
            </label>
            <p class="text-faint" style="font-size:12px">Upload a profile picture. PNG or JPG.</p>
          </div>

          <div class="field mt-16"><label>Full Name</label><input type="text" id="ep-name" value="${escAttr(user.name)}" maxlength="60" /></div>
          <div class="field"><label>Username</label><input type="text" id="ep-username" value="${escAttr((user.username || '').replace(/^@/, ''))}" maxlength="30" placeholder="username" /></div>
          <div class="field"><label>Bio</label><textarea id="ep-bio" rows="2" maxlength="160">${safeText(user.bio, '')}</textarea></div>
          <div class="grid-2">
            <div class="field"><label>Instagram</label><input type="text" id="ep-instagram" value="${escAttr(user.instagram)}" placeholder="https://instagram.com/you" /></div>
            <div class="field"><label>X / Twitter</label><input type="text" id="ep-twitter" value="${escAttr(user.twitter)}" placeholder="https://x.com/you" /></div>
            <div class="field"><label>LinkedIn</label><input type="text" id="ep-linkedin" value="${escAttr(user.linkedin)}" placeholder="https://linkedin.com/in/you" /></div>
            <div class="field"><label>Website</label><input type="text" id="ep-website" value="${escAttr(user.website)}" placeholder="https://yoursite.com" /></div>
          </div>
          <div id="ep-error" class="mod-flag bad" style="display:none"></div>
          <button class="btn btn-primary btn-block mt-16" id="ep-save-btn">Save Changes</button>
        </div>
      </div>
    </div>`;

  bindImageUpload('avatar-drop', 'avatar-file', 'avatar-preview', 'avatar-placeholder', (dataUrl) => { avatarPending = dataUrl; });
  bindImageUpload('banner-drop', 'banner-file', 'banner-preview', 'banner-placeholder', (dataUrl) => { bannerPending = dataUrl; });

  document.getElementById('ep-save-btn').addEventListener('click', () => {
    const errBox = document.getElementById('ep-error');
    const showErr = (msg) => { errBox.style.display = 'block'; errBox.textContent = msg; };

    const name = document.getElementById('ep-name').value.trim();
    const usernameRaw = document.getElementById('ep-username').value.trim().replace(/^@/, '');
    const bio = document.getElementById('ep-bio').value.trim();

    if(!name){ showErr('Please enter your name.'); return; }
    if(!usernameRaw || /\s/.test(usernameRaw)){ showErr('Username is required and cannot contain spaces.'); return; }

    const username = '@' + usernameRaw.replace(/[^a-zA-Z0-9_.]/g, '');
    const patch = {
      name,
      username,
      bio,
      instagram: normalizeUrl(document.getElementById('ep-instagram').value),
      twitter: normalizeUrl(document.getElementById('ep-twitter').value),
      linkedin: normalizeUrl(document.getElementById('ep-linkedin').value),
      website: normalizeUrl(document.getElementById('ep-website').value),
    };
    if(avatarPending) patch.avatarImage = avatarPending;
    if(bannerPending) patch.bannerImage = bannerPending;

    const ok = saveProfile(patch);
    if(ok){
      closeModal();
      Toast('✅ Profile updated');
      rerender();
    } else {
      showErr('Could not save your profile. Please try again.');
      Toast('⚠️ Failed to save profile changes');
    }
  });
}

// ---------------------------------------------------------------------
// Hamburger menu open/close (DOM-level; not app state, since actions
// that trigger a rerender already close it first)
// ---------------------------------------------------------------------
function setHamburgerOpen(open){
  const menu = document.querySelector('.hamburger-menu');
  const overlay = document.querySelector('.hamburger-overlay');
  const btn = document.querySelector('.hamburger-btn');
  if(!menu || !overlay) return;
  menu.hidden = !open;
  overlay.hidden = !open;
  menu.setAttribute('aria-hidden', String(!open));
  menu.classList.toggle('open', open);
  if(btn) btn.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('hamburger-open', open);
}

function closeAllPostMenus(){
  document.querySelectorAll('.post-menu:not([hidden])').forEach(m => { m.hidden = true; });
}

// ---------------------------------------------------------------------
// Global click delegation
// ---------------------------------------------------------------------
document.addEventListener('click', async (e) => {
  const navEl = e.target.closest('[data-nav]');
  const actionEl = e.target.closest('[data-action]');
  const tabEl = e.target.closest('[data-tab]');

  // Close any open post ⋯ menu when the click lands outside one.
  if(!e.target.closest('.post-menu-wrap')){
    closeAllPostMenus();
  }

  if(navEl){
    e.preventDefault();
    setHamburgerOpen(false);
    closeAllPostMenus();
    const route = navEl.dataset.nav;
    const id = navEl.dataset.id;
    location.hash = id ? `#/${route}/${id}` : `#/${route}`;
    return;
  }

  if(tabEl){
    const group = tabEl.parentElement;
    group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    tabEl.classList.add('active');
    const container = group.parentElement;
    container.querySelectorAll('[data-tab-panel]').forEach(p => p.hidden = true);
    const panel = container.querySelector(`[data-tab-panel="${tabEl.dataset.tab}"]`);
    if(panel) panel.hidden = false;
    return;
  }

  if(!actionEl) return;
  const action = actionEl.dataset.action;

  switch(action){
    case 'close-modal':
      if(e.target === actionEl) closeModal();
      break;
    case 'open-composer':
      e.preventDefault();
      openComposer();
      break;
    case 'register':
      e.preventDefault();
      goToAuthRoute('register');
      break;
    case 'login':
      e.preventDefault();
      goToAuthRoute('login');
      break;
    case 'toggle-theme': {
      const next = getState().theme === 'dark' ? 'light' : 'dark';
      setTheme(next);
      break;
    }
    case 'like': {
      const id = actionEl.dataset.id;
      const nowLiked = toggleLike(id);
      actionEl.classList.toggle('active', nowLiked);
      actionEl.textContent = nowLiked ? '❤️' : '🤍';
      if(nowLiked){ actionEl.classList.add('like-pop'); setTimeout(()=>actionEl.classList.remove('like-pop'),320); }
      const countEl = actionEl.parentElement.querySelector('.count');
      countEl.textContent = String(parseInt(countEl.textContent,10) + (nowLiked ? 1 : -1));
      break;
    }
    case 'save': {
      const id = actionEl.dataset.id;
      const nowSaved = toggleSave(id);
      actionEl.classList.toggle('active', nowSaved);
      actionEl.classList.toggle('save-active', nowSaved);
      actionEl.textContent = nowSaved ? '🔖' : '📑';
      Toast(nowSaved ? '📌 Saved to your collection' : 'Removed from saved');
      break;
    }
    case 'toggle-comments': {
      const id = actionEl.dataset.id;
      const box = document.querySelector(`[data-comments-for="${id}"]`);
      if(box) box.hidden = !box.hidden;
      break;
    }
    case 'submit-comment': {
      const id = actionEl.dataset.id;
      const input = document.querySelector(`[data-comment-input="${id}"]`);
      const text = input.value.trim();
      if(!text) return;
      addComment(id, getCurrentUser().id, text);
      addXp(2);
      rerender();
      const box = document.querySelector(`[data-comments-for="${id}"]`);
      if(box) box.hidden = false;
      break;
    }
    case 'share': {
      Toast('🔗 Link copied — share BeUgram post with friends');
      break;
    }
    case 'follow': {
      const id = actionEl.dataset.id;
      const now = toggleFollow(id);
      const college = getCollege(id);
      Toast(now ? `Following ${college.name}` : `Unfollowed ${college.name}`);
      rerender();
      break;
    }
    case 'vote-poll': {
      const id = actionEl.dataset.id;
      const rating = parseInt(actionEl.dataset.rating, 10);
      setPollVote(id, rating);
      addXp(5);
      Toast('📊 Thanks for rating · +5 XP');
      rerender();
      break;
    }
    case 'vote-battle': {
      const battleId = actionEl.dataset.battle;
      const subId = actionEl.dataset.submission;
      setBattleVote(battleId, subId);
      addXp(5);
      Toast('🗳️ Vote cast · +5 XP');
      rerender();
      break;
    }
    case 'battle-summary': {
      const id = actionEl.dataset.id;
      const battle = getBattle(id);
      const box = document.getElementById('battle-summary-box');
      actionEl.disabled = true; actionEl.textContent = 'Generating with Gemini…';
      const { summary } = await generateBattleSummary(battle);
      box.innerHTML = `<div class="ai-box mt-16"><div class="lbl">✨ AI Battle Summary</div><p style="font-size:13.5px;line-height:1.6">${summary}</p></div>`;
      actionEl.textContent = '✨ Generate AI Battle Summary';
      actionEl.disabled = false;
      break;
    }
    case 'read-notif': {
      const id = actionEl.dataset.id;
      markNotifRead(id);
      actionEl.classList.remove('unread');
      break;
    }
    case 'read-all-notifs': {
      markAllNotifsRead(notifications.map(n => n.id));
      rerender();
      break;
    }
    case 'edit-profile': {
      openEditProfileModal();
      break;
    }
    case 'toggle-post-menu': {
      const id = actionEl.dataset.id;
      const menu = document.querySelector(`[data-post-menu="${id}"]`);
      if(menu){
        const willOpen = menu.hidden;
        closeAllPostMenus();
        menu.hidden = !willOpen;
      }
      break;
    }
    case 'edit-post': {
      const id = actionEl.dataset.id;
      closeAllPostMenus();
      openEditPostModal(id);
      break;
    }
    case 'pin-post':
    case 'unpin-post': {
      const id = actionEl.dataset.id;
      closeAllPostMenus();
      const nowPinned = togglePinPost(id);
      if(nowPinned === null){ Toast('⚠️ Could not update this post. Please try again.'); break; }
      Toast(nowPinned ? '📌 Post pinned to the top of your feed' : '📌 Post unpinned');
      rerender();
      break;
    }
    case 'delete-post': {
      const id = actionEl.dataset.id;
      closeAllPostMenus();
      openConfirmModal({
        title: 'Delete post?',
        message: 'This will permanently remove the post. This action cannot be undone.',
        confirmLabel: 'Delete',
        danger: true,
        onConfirm: () => {
          const ok = deletePost(id);
          if(ok){ Toast('🗑️ Post deleted'); rerender(); }
          else Toast('⚠️ Could not delete this post. Please try again.');
        },
      });
      break;
    }
    case 'toggle-hamburger': {
      const menu = document.querySelector('.hamburger-menu');
      setHamburgerOpen(menu ? !!menu.hidden : true);
      break;
    }
    case 'close-hamburger': {
      setHamburgerOpen(false);
      break;
    }
    case 'logout': {
      setHamburgerOpen(false);
      openConfirmModal({
        title: 'Log out of BeUgram?',
        message: "You'll need to log back in to access your account.",
        confirmLabel: 'Logout',
        danger: true,
        onConfirm: () => {
          logout();
          closeModal();
          Toast('👋 You have been logged out');
          location.hash = '#/login';
        },
      });
      break;
    }
  }
});

document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape'){
    setHamburgerOpen(false);
    closeAllPostMenus();
    if(modalRoot.innerHTML.trim()) closeModal();
    return;
  }
  if(e.key === 'Enter' && e.target.matches('[data-comment-input]')){
    const id = e.target.dataset.commentInput;
    const btn = document.querySelector(`[data-action="submit-comment"][data-id="${id}"]`);
    if(btn) btn.click();
  }
});

document.addEventListener('submit', (e) => {
  if(e.target.id === 'login-form'){
    e.preventDefault();
    const form = e.target;
    const username = form.elements.username.value;
    const password = form.elements.password.value;
    const account = findAccount(username, password);
    const error = document.getElementById('login-error');
    if(!account){
      if(error){
        error.style.display = 'block';
        error.textContent = '❌ Incorrect username or password. Please check your details or register first.';
      }
      return;
    }
    login(account.id);
    Toast(`Welcome back, ${account.name.split(' ')[0]} 👋`);
    location.hash = '#/home';
  }

  if(e.target.id === 'register-form'){
    e.preventDefault();
    const form = e.target;
    const result = registerAccount({
      name: form.elements.name.value,
      username: form.elements.username.value,
      dob: form.elements.dob.value,
      place: form.elements.place.value,
      college: form.elements.college.value,
      password: form.elements.password.value,
      confirmPassword: form.elements.confirmPassword.value,
    });
    const error = document.getElementById('register-error');
    if(!result.ok){
      if(error){ error.style.display = 'block'; error.textContent = '❌ ' + result.message; }
      return;
    }
    // Per spec: do NOT auto-login after registration. Save the account,
    // show a success message, and send the user back to the Login page
    // so they log in with their new credentials themselves.
    Toast(`✅ Account created successfully. Please log in, ${result.user.name.split(' ')[0]}!`);
    form.reset();
    goToAuthRoute('login');
  }
});

// ---------------------------------------------------------------------
// Boot
// ---------------------------------------------------------------------
setTheme(getState().theme);
if(!location.hash) location.hash = getState().auth ? '#/home' : '#/login';
render();
