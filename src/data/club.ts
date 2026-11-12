export interface ClubStatsItem {
  value: string;
  label: string;
  desc: string;
}

export interface PillarItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badge: string;
  color: string;
  skills: string[];
  stat: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  tagline: string;
  description: string;
  tech: string[];
  architecture: string;
  stars: number;
  forks: number;
  metrics: string;
  github: string;
  color: string;
  codeSnippet?: string;
}

export interface EventItem {
  id: string;
  title: string;
  tag: string;
  type: string;
  status: "upcoming" | "past";
  date: string;
  time: string;
  venue: string;
  posterUrl: string;
  gallery?: string[];
  description: string;
  highlights: string[];
  registrationOpen: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  batch: string;
  linkedin: string;
  github?: string;
  instagram?: string;
  isPlaceholder?: boolean;
}

export interface FacultyCoordinator {
  id: string;
  name: string;
  role: string;
  designation: string;
  email: string;
  institution: string;
  image: string;
  bio: string;
  highlights: string[];
}

export interface DroidCoinEarnAction {
  id: string;
  title: string;
  detail: string;
  coins: number;
  tag: string;
}

export interface DroidCoinReward {
  id: string;
  title: string;
  cost: number;
  tier: string;
  badge: string;
}

export interface DepartmentTeam {
  department: string;
  members: TeamMember[];
}

export interface SponsorItem {
  name: string;
  logo: string;
  type: string;
  fallback: string;
}

export interface TimelineMilestone {
  version: string;
  year: string;
  milestone: string;
  description: string;
}

export interface RecruitmentDomain {
  id: string;
  name: string;
  image: string;
  description: string;
  skills: string[];
  whatYouDo: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  routePath: string;
  index: string;
  previewImage: string;
  subtitle: string;
}

export const navigationConfig = {
  useMultiPageRouting: false,
  items: [
    {
      id: "hero",
      label: "Overview",
      href: "#hero",
      routePath: "/",
      index: "00",
      previewImage: "/assets/gallery/groupPhoto.jpg",
      subtitle: "Android™ Club at VIT Bhopal",
    },
    {
      id: "about",
      label: "Manifesto",
      href: "#about",
      routePath: "/about",
      index: "01",
      previewImage: "/assets/events/Meet_and_Greet/img1.jpg",
      subtitle: "Built in hostels, shipped campus-wide",
    },
    {
      id: "domains",
      label: "Domains",
      href: "#domains",
      routePath: "/domains",
      index: "02",
      previewImage: "/assets/recruitment/Android.webp",
      subtitle: "Kotlin, Flutter, Material You & Edge AI",
    },
    {
      id: "events",
      label: "Events",
      href: "#events",
      routePath: "/events",
      index: "03",
      previewImage: "/assets/events/Android_Fusion/AndroidFusion.jpg",
      subtitle: "Hackathons, bootcamps & build nights",
    },
    {
      id: "projects",
      label: "Projects",
      href: "#projects",
      routePath: "/projects",
      index: "04",
      previewImage: "/assets/events/Android_Fusion/img2.jpg",
      subtitle: "Open-source campus software",
    },
    {
      id: "droidcoins",
      label: "DroidCoins",
      href: "#droidcoins",
      routePath: "/droidcoins",
      index: "05",
      previewImage: "/assets/events/latest/meet_greet_3/banner.webp",
      subtitle: "Campus digital currency & swag vault",
    },
    {
      id: "team",
      label: "Team",
      href: "#team",
      routePath: "/team",
      index: "06",
      previewImage: "/assets/team/faculty/Chandan_Kumar_Behera.webp",
      subtitle: "3 faculty mentors & 12 student departments",
    },
    {
      id: "join",
      label: "Join",
      href: "#join",
      routePath: "/join",
      index: "07",
      previewImage: "/assets/events/latest/geek_rush/banner.webp",
      subtitle: "2026 recruitment & build nights",
    },
  ] satisfies NavItem[],
};

export const clubConfig = {
  name: "Android Club",
  chapter: "VIT Bhopal University",
  established: 2017,
  tagline: "If it's Android, it's Us!",
  subtitle: "Kotlin, on-device AI, and hardware engineering at VIT Bhopal.",
  ctaPrimary: "Join Cohort",
  ctaSecondary: "Explore Tracks",
  recruitmentStatus: "Fall 2026 Open",
  recruitmentUrl: "https://androidclub.tech/recruitment",
  blogsUrl: "https://androidclub.tech/blogs",
  legalLinks: {
    privacy: "https://androidclub.tech/privacy",
    conduct: "https://androidclub.tech/code-of-conduct",
    reports: "https://androidclub.tech/reports",
  },
  email: "androidclub@vitbhopal.ac.in",
  phone: "+91 87073 36921",
  responseHours: "Mon - Fri, 9:00 AM - 6:00 PM IST",
  founder: "Abhay Nigam ('17 Batch)",
  linkedinFollowers: "766+",
  campus:
    "Bhopal-Indore Highway, Kothrikalan, Sehore, Madhya Pradesh 466114",
  campusCoordinates: "23.0755° N, 76.8498° E",
  mapsDirectionsUrl:
    "https://maps.google.com/?q=VIT+Bhopal+University,+Bhopal-Indore+Highway,+Kothrikalan,+Sehore,+Madhya+Pradesh+466114",
  mapsEmbedUrl:
    "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1sVIT+Bhopal+University,+Kothrikalan,+Madhya+Pradesh+466114!6i15",
  socials: {
    github: "https://github.com/Android-Club-VIT-Bhopal",
    linkedin: "https://www.linkedin.com/company/android-club-vit-bhopal/",
    twitter: "https://x.com/AndroidClubVitb",
    instagram: "https://www.instagram.com/androidclub.vitb/",
    whatsapp: "https://chat.whatsapp.com/LNvsdaT2ucu6Xwbm5tYiIK",
    youtube: "https://www.youtube.com/@androidclub-vitb-wi4qe",
    discord: "https://discord.gg/androidclubvitb",
  },
  tagBadges: [
    "Student Run",
    "Weekly Labs",
    "Verified OD",
    "Open Source",
  ],
};

export const clubStats: ClubStatsItem[] = [
  {
    value: "1,000+",
    label: "Enthusiasts",
    desc: "Across four campus batches",
  },
  {
    value: "40+",
    label: "Events",
    desc: "Hackathons, workshops & quests",
  },
  {
    value: "80+",
    label: "Core Members",
    desc: "Across 12 official departments",
  },
  {
    value: "₹2.5L+",
    label: "Prizes",
    desc: "Won by chapter teams",
  },
];

export const droidCoinsConfig = {
  name: "Droid Coins",
  badge: "Coming Soon",
  statusChip: "Releasing Soon • +50 DRD Starter",
  coinImage: "/assets/logos/droidcoin.gif",
  starterBalance: 50,
  description:
    "Official digital currency of Android Club VIT Bhopal. Earn at workshops & arenas, redeem for Android swag.",
  earnActions: [
    {
      id: "verify",
      title: "Verified @vitbhopal",
      detail: "Launch starter drop",
      coins: 50,
      tag: "Starter",
    },
    {
      id: "attend",
      title: "Workshops & Events",
      detail: "QR hall check-in",
      coins: 40,
      tag: "Campus",
    },
    {
      id: "quest",
      title: "Top 10 Leaderboard",
      detail: "Geek Rush & 404 arena",
      coins: 75,
      tag: "Compete",
    },
    {
      id: "pr",
      title: "Merged Chapter PR",
      detail: "Open-source build",
      coins: 100,
      tag: "Code",
    },
  ] satisfies DroidCoinEarnAction[],
  rewards: [
    {
      id: "stickers",
      title: "Die-Cut Sticker Pack",
      cost: 50,
      tier: "Tier 01",
      badge: "Starter",
    },
    {
      id: "lanyard",
      title: "M3 Woven Lanyard",
      cost: 110,
      tier: "Tier 02",
      badge: "2 Events",
    },
    {
      id: "pass",
      title: "Hackathon Fast-Pass",
      cost: 165,
      tier: "Tier 03",
      badge: "Builder",
    },
    {
      id: "tee",
      title: "Droid Edition Apparel",
      cost: 240,
      tier: "Tier 04",
      badge: "Vault",
    },
  ] satisfies DroidCoinReward[],
};

export const pillars: PillarItem[] = [
  {
    id: "native-android",
    title: "Native Android™",
    tagline: "Kotlin & Jetpack Compose on real hardware.",
    description:
      "Declarative Compose UI, Kotlin Coroutines, and Room persistence built for real devices.",
    badge: "Core",
    color: "#3DDC84",
    skills: ["Kotlin", "Compose", "Flow", "Room"],
    stat: "18+ Apps",
  },
  {
    id: "cross-platform",
    title: "Flutter & KMP",
    tagline: "Shared logic. 120fps motion.",
    description:
      "Ship campus utilities across Android™ and iOS from one clean multiplatform codebase.",
    badge: "Multi-Target",
    color: "#38BDF8",
    skills: ["Flutter", "KMP", "Dart", "Supabase"],
    stat: "12+ Builds",
  },
  {
    id: "material-you",
    title: "Material You Design",
    tagline: "Adaptive color, optics, and spring physics.",
    description:
      "Figma token systems translated directly into adaptive Material 3 interfaces.",
    badge: "Design",
    color: "#F59E0B",
    skills: ["Material 3", "Figma", "Tokens", "A11y"],
    stat: "Token Driven",
  },
  {
    id: "edge-ai-iot",
    title: "On-Device AI & IoT",
    tagline: "Sub-20ms NPU inference and BLE telemetry.",
    description:
      "Quantized TensorFlow Lite models paired with ESP32 sensors over Bluetooth LE.",
    badge: "R&D",
    color: "#A78BFA",
    skills: ["TFLite", "MediaPipe", "ESP32", "CameraX"],
    stat: "18ms Latency",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "campus-orbit",
    title: "CampusOrbit",
    category: "Utilities",
    badge: "Flagship",
    tagline: "Live shuttles, mess menus, and offline maps.",
    description:
      "Real-time shuttle tracking, mess voting, and offline classroom maps for VIT Bhopal.",
    tech: ["Compose", "Flow", "Room", "BLE"],
    architecture: "Offline-First MVVM",
    stars: 184,
    forks: 42,
    metrics: "2,500+ Installs",
    github: "https://github.com/Android-Club-VIT-Bhopal/CampusOrbit",
    color: "#3DDC84",
    codeSnippet: `@Composable
fun ShuttleTrackerCard(shuttleId: String) {
  val eta by viewModel.getShuttleEta(shuttleId)
    .collectAsState(initial = "2 mins")
  Surface(shape = RoundedCornerShape(24.dp)) {
    Column(Modifier.padding(16.dp)) {
      Text("Shuttle A-1")
      Text("LC-205 in $eta")
    }
  }
}`,
  },
  {
    id: "drowsy-guard",
    title: "DrowsyGuard AI",
    category: "Edge ML",
    badge: "Winner",
    tagline: "Offline fatigue alerts for night drives.",
    description:
      "Tracks eye-aspect ratio via CameraX and MediaPipe with zero cloud latency.",
    tech: ["CameraX", "TFLite", "MediaPipe"],
    architecture: "On-Device Frame Pipeline",
    stars: 246,
    forks: 61,
    metrics: "18ms Edge Latency",
    github: "https://github.com/Android-Club-VIT-Bhopal/DrowsyGuard",
    color: "#FB923C",
    codeSnippet: `class EyeAspectRatioAnalyzer(
  private val onFatigueAlert: () -> Unit
) : ImageAnalysis.Analyzer {
  override fun analyze(proxy: ImageProxy) {
    val ear = FaceMeshProcessor.computeEAR(proxy)
    if (ear < 0.18f) onFatigueAlert()
    proxy.close()
  }
}`,
  },
  {
    id: "pulse-pay",
    title: "PulsePay NFC",
    category: "Security",
    badge: "Staff Pick",
    tagline: "Offline tap-to-settle campus transfers.",
    description:
      "Peer-to-peer canteen ledger over Host Card Emulation with hardware-backed ECDSA.",
    tech: ["HCE", "SQLCipher", "ECDSA"],
    architecture: "Encrypted Local MVI",
    stars: 128,
    forks: 31,
    metrics: "<1s Tap Transfer",
    github: "https://github.com/Android-Club-VIT-Bhopal/PulsePay",
    color: "#38BDF8",
  },
  {
    id: "messmate-vit",
    title: "MessMate VIT",
    category: "Utilities",
    badge: "Popular",
    tagline: "Daily menus and live student ratings.",
    description:
      "Crowdsourced mess menu tracker with instant meal alerts across campus hostels.",
    tech: ["KMP", "Supabase", "Compose"],
    architecture: "Shared KMP Domain",
    stars: 94,
    forks: 18,
    metrics: "4.9/5 Rating",
    github: "https://github.com/Android-Club-VIT-Bhopal/MessMate",
    color: "#EAB308",
  },
  {
    id: "robo-remote",
    title: "RoboRover BLE",
    category: "IoT",
    badge: "Hardware",
    tagline: "60Hz Bluetooth LE rover controller.",
    description:
      "Dual-stick telemetry console streaming motor RPM and sonar data at 60Hz.",
    tech: ["BLE", "Canvas", "Protobuf"],
    architecture: "Binary Telemetry Stream",
    stars: 76,
    forks: 15,
    metrics: "8ms Response",
    github: "https://github.com/Android-Club-VIT-Bhopal/RoboRover",
    color: "#A78BFA",
  },
  {
    id: "biosync-wear",
    title: "BioSync Wear",
    category: "Wear OS",
    badge: "Wearables",
    tagline: "Glanceable recovery tiles for hackathons.",
    description:
      "Smartwatch tiles tracking HRV trends through Health Connect across 36-hour sprints.",
    tech: ["Wear OS", "Health Connect", "Compose"],
    architecture: "Dual-Platform Bridge",
    stars: 82,
    forks: 21,
    metrics: "Low-Power Sync",
    github: "https://github.com/Android-Club-VIT-Bhopal/BioSync",
    color: "#3DDC84",
  },
];

export const events: EventItem[] = [
  {
    id: "promptwars-2026",
    title: "PromptWars Community 2026",
    tag: "Latest Flagship",
    type: "Google for Developers × Hack2skill",
    status: "past",
    date: "Nov 02, 2026",
    time: "Full Day Sprint",
    venue: "VIT Bhopal University",
    posterUrl: "/assets/events/latest/promptwars_2026/banner.jpg",
    gallery: [
      "/assets/events/latest/promptwars_2026/gallery_1.jpg",
      "/assets/events/latest/promptwars_2026/gallery_2.jpg",
      "/assets/events/latest/promptwars_2026/io_2026.jpg",
    ],
    description:
      "Build with AI flagship hosted with Google for Developers and Hack2skill. Students built working AI applications hands-on with Google AI Studio and Google Antigravity.",
    highlights: [
      "Google for Developers",
      "Hack2skill Partner",
      "Google AI Studio",
      "Google Antigravity",
    ],
    registrationOpen: false,
  },
  {
    id: "geek-rush-2026",
    title: "Geek Rush",
    tag: "Campus Hit",
    type: "Multi-Round Quest",
    status: "past",
    date: "Apr 01, 2026",
    time: "10:00 AM to 04:00 PM",
    venue: "AB-2 Auditorium-2",
    posterUrl: "/assets/events/latest/geek_rush/banner.webp",
    gallery: ["/assets/events/latest/geek_rush/gallery_1.webp", "/assets/events/latest/geek_rush/gallery_2.webp", "/assets/events/latest/geek_rush/gallery_3.webp", "/assets/events/latest/geek_rush/gallery_4.webp"],
    description:
      "Fast-paced fresher quest mixing Escape Room puzzles, tech Scribble, and Buzzer rounds with 219+ registered participants at AB-2.",
    highlights: [
      "219+ Registrations",
      "Escape Room & Buzzer",
      "₹79 Entry Pass",
      "AB-2 Auditorium-2",
    ],
    registrationOpen: false,
  },
  {
    id: "buildfest-2026",
    title: "Android BuildFest 2026",
    tag: "Upcoming",
    type: "36h Hackathon",
    status: "upcoming",
    date: "Fall 2026 Cohort",
    time: "36 Hours",
    venue: "Main Auditorium",
    posterUrl: "/assets/events/main_island.png",
    description:
      "500+ builders shipping Android 15, edge AI, and IoT prototypes over 36 hours. ₹1.5L prize pool, verified OD, and Droid Coin drops.",
    highlights: [
      "₹1.5L Cash Pool",
      "Verified OD",
      "Droid Coin Drops",
      "Hardware Kits",
    ],
    registrationOpen: true,
  },
  {
    id: "compose-camp",
    title: "Compose Bootcamp",
    tag: "Workshop",
    type: "Beginner Track",
    status: "upcoming",
    date: "Fall 2026 Cohort",
    time: "10:00 AM to 04:30 PM",
    venue: "LC-104",
    posterUrl: "/assets/events/upcoming_events.png",
    description:
      "Configure Android Studio and ship your first signed Jetpack Compose APK in one day with Kotlin & Material 3 mentorship.",
    highlights: [
      "Zero Prerequisites",
      "Live Compose Lab",
      "Signed APK Build",
      "+40 Droid Coins",
    ],
    registrationOpen: true,
  },
  {
    id: "laser-tag-2026",
    title: "Laser Tag Arena",
    tag: "Campus Hit",
    type: "Tactical Showcase",
    status: "past",
    date: "Feb 26, 2026",
    time: "10:00 AM to 05:00 PM",
    venue: "AB-1 Auditorium-2",
    posterUrl: "/assets/events/latest/meet_greet_3/gallery_2.webp",
    description:
      "High-energy campus tactical arena at AB-1 Auditorium-2 drawing 335+ student competitors across squad elimination rounds.",
    highlights: [
      "335+ Registrations",
      "Squad Brackets",
      "AB-1 Auditorium-2",
      "Full House",
    ],
    registrationOpen: false,
  },
  {
    id: "meet-greet-3-0",
    title: "Meet & Greet 3.0",
    tag: "Orientation",
    type: "Freshers Launchpad",
    status: "past",
    date: "Sep 18, 2025",
    time: "10:00 AM to 01:30 PM",
    venue: "AB-02 Auditorium-02",
    posterUrl: "/assets/events/latest/meet_greet_3/banner.webp",
    gallery: ["/assets/events/latest/meet_greet_3/gallery_1.webp", "/assets/events/latest/meet_greet_3/gallery_2.webp", "/assets/events/latest/meet_greet_3/gallery_3.webp", "/assets/events/latest/meet_greet_3/gallery_4.webp"],
    description:
      "Freshers kickoff welcoming 185+ attendees from the '25 Batch with live project showcases, Android career roadmaps, and Droid Coin onboarding.",
    highlights: [
      "185+ Attendees",
      "'25 Batch Welcome",
      "Live App Demos",
      "AB-02 Auditorium-02",
    ],
    registrationOpen: false,
  },
  {
    id: "pydroid-x-2025",
    title: "Pydroid X",
    tag: "Tech Fusion",
    type: "Python + ML + Cyber",
    status: "past",
    date: "Jul 26, 2025",
    time: "09:30 AM to 04:30 PM",
    venue: "AB-02 Auditorium",
    posterUrl: "/assets/events/latest/pydroid_x/banner.webp",
    gallery: ["/assets/events/latest/pydroid_x/gallery_1.webp", "/assets/events/latest/pydroid_x/gallery_2.webp"],
    description:
      "204+ builders competing across a Common Dataset Challenge uniting Python, Cybersecurity, and Machine Learning in AB-02.",
    highlights: [
      "204+ Participants",
      "Common Dataset Challenge",
      "ML & Cyber Security",
      "AB-02 Auditorium",
    ],
    registrationOpen: false,
  },
  {
    id: "404-fun-found",
    title: "404: Fun Found",
    tag: "Advitya '25",
    type: "Tech Minigames",
    status: "past",
    date: "Feb 22, 2025",
    time: "10:00 AM to 04:00 PM",
    venue: "AB-128",
    posterUrl: "/assets/events/latest/fun_found_404/banner.webp",
    gallery: ["/assets/events/latest/fun_found_404/gallery_1.webp", "/assets/events/latest/fun_found_404/gallery_2.webp", "/assets/events/latest/fun_found_404/gallery_3.webp"],
    description:
      "Advitya 2025 arena featuring live minigames and real-time virtual coin leaderboards inside AB-128.",
    highlights: [
      "Advitya 2025",
      "Virtual Coin Leaderboard",
      "Interactive Minigames",
      "AB-128",
    ],
    registrationOpen: false,
  },
];

export const facultyCoordinators: FacultyCoordinator[] = [
  {
    id: "chandan-behera",
    name: "Dr. Chandan Kumar Behera",
    role: "Assistant Director, Students' Welfare",
    designation: "Assistant Director, Students' Welfare",
    email: "chandank.behera@vitbhopal.ac.in",
    institution: "VIT Bhopal University",
    image: "/assets/team/faculty/Chandan_Kumar_Behera.webp",
    bio: "Guides student chapter governance, university approvals, and campus technical programming across VIT Bhopal.",
    highlights: ["Institutional Guidance", "Event Approvals", "Student Welfare"],
  },
  {
    id: "adarsh-patel",
    name: "Dr. Adarsh Patel",
    role: "Faculty Coordinator",
    designation: "Faculty Coordinator",
    email: "adarsh.patel@vitbhopal.ac.in",
    institution: "VIT Bhopal University",
    image: "/assets/team/faculty/Adarsh_Patel.webp",
    bio: "Faculty Coordinator supporting weekly workshops, project reviews, and technical mentorship for student builders.",
    highlights: ["Workshop Mentorship", "Technical Tracks", "Student Support"],
  },
  {
    id: "g-ganeshan",
    name: "Dr. G Ganeshan",
    role: "Co-Faculty Coordinator",
    designation: "Co-Faculty Coordinator",
    email: "g.ganeshan@vitbhopal.ac.in",
    institution: "VIT Bhopal University",
    image: "/assets/team/faculty/G_Ganeshan.webp",
    bio: "Co-Faculty Coordinator backing flagship hackathons, engineering talks, and applied project tracks.",
    highlights: ["Flagship Hackathons", "Industry Sessions", "Faculty Leadership"],
  },
];

export const facultyCoordinator = {
  ...facultyCoordinators[1],
  quote:
    "Android Club gives students the confidence to build from scratch and graduate with software that speaks for itself.",
};

export const leadershipTeam: DepartmentTeam[] = [
  {
    "department": "Admins",
    "members": [
      {
        "name": "Ujjawal Patidar",
        "role": "President",
        "image": "/assets/team/2027/Ujjawal_Patidar.webp",
        "bio": "Directs chapter governance, inter-team reviews, and yearly technical strategy across VIT Bhopal.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/ujjawal_patidar94/"
      },
      {
        "name": "Dhruv Maheshwari",
        "role": "Vice President",
        "image": "/assets/team/2027/Dhruv_Maheshwari.webp",
        "bio": "Leads application architecture, mobile releases, and engineering reviews across club projects.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/dhruv--maheshwari",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/dhruv._.maheshwari/"
      },
      {
        "name": "Anant Singh",
        "role": "General Secretary",
        "image": "/assets/team/2027/Anant_Singh.webp",
        "bio": "Oversees chapter operations, schedules, and cross-team coordination with faculty advisors.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal"
      }
    ]
  },
  {
    "department": "Android Team",
    "members": [
      {
        "name": "Vaibhav Pandey",
        "role": "Lead",
        "image": "/assets/team/2027/Vaibhav_Pandey.webp",
        "bio": "Leads native Kotlin and Jetpack Compose builds, code reviews, and workshop curricula.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/vaibhav-pandey-351308329/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Madhav Aggarwal",
        "role": "Core Member",
        "image": "/assets/team/2027/Madhav_Aggarwal.webp",
        "bio": "Builds native Android screens and ViewModel state flows in Kotlin and Compose.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/madhavvvv.______/",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "SDC",
    "members": [
      {
        "name": "Samay Dutta",
        "role": "Lead",
        "image": "/assets/team/2027/Samay_Dutta.webp",
        "bio": "Leads web portal architecture, recruitment systems, and deployment pipelines.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_.samaydutta._/"
      },
      {
        "name": "Pratham Srivastava",
        "role": "Co Lead",
        "image": "/assets/team/2027/Pratham_Srivastava.webp",
        "bio": "Architects backend APIs, registration flows, and scalable web infrastructure.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/pratham-srivastava0410/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/pratham_probro/"
      },
      {
        "name": "Mishita Tiwari",
        "role": "Core Member",
        "image": "/assets/team/2027/Mishita_Tiwari.webp",
        "bio": "Maintains web application codebases, routing, and deployment workflows.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Atulya Jain",
        "role": "Core Member",
        "image": "/assets/team/2027/Atulya_Jain.webp",
        "bio": "Builds full-stack features across TypeScript frontends and backend services.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Ayush Mukherjee",
        "role": "Core Member",
        "image": "/assets/team/2027/Ayush_Mukherjee.webp",
        "bio": "Works on frontend components, REST endpoints, and internal web utilities.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "John Varghese (J0X)",
        "role": "Core Member",
        "image": "/assets/team/2027/John_Varghese.webp",
        "bio": "Builds full-stack web applications, UI systems, security tooling, and automated development workflows.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/in/John--Varghese/",
        "github": "https://github.com/John-Varghese-EH",
        "instagram": "https://www.instagram.com/cyber__trinity/"
      }
    ]
  },
  {
    "department": "Research & Development",
    "members": [
      {
        "name": "Kushal Zambare",
        "role": "Lead",
        "image": "/assets/team/2027/Kushal_Zambare.webp",
        "bio": "Directs applied R&D tracks in on-device ML, ESP32 hardware, and security.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/kushalzambare/"
      },
      {
        "name": "Pranav",
        "role": "Co Lead",
        "image": "/assets/team/2027/Pranav.webp",
        "bio": "Guides prototype engineering from sensor circuits and edge models to live demos.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/in/pranav-pimpalkar-6b3450373",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/the.pranavfyi/"
      },
      {
        "name": "Swara Mishra",
        "role": "Co Lead",
        "image": "/assets/team/2027/Swara_Mishra.webp",
        "bio": "Directs applied R&D tracks in on-device ML, ESP32 hardware, and security.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/swara-mishra-221075329/",
        "github": "https://github.com/Android-Club-VIT-Bhopal"
      },
      {
        "name": "Amrit Raj",
        "role": "Core Member",
        "image": "/assets/team/2027/Amrit_Raj.webp",
        "bio": "Prototypes edge ML inference pipelines and Android hardware experiments.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Mangal Singh",
        "role": "Core Member",
        "image": "/assets/team/2027/Mangal_Singh.webp",
        "bio": "Investigates system bottlenecks and builds working proof-of-concept tools.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Anubhav Mishra",
        "role": "Core Member",
        "image": "/assets/team/2027/Anubhav_Mishra.webp",
        "bio": "Explores computer vision, BLE hardware, and security tooling with the R&D group.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Vaibhav Santosh Tiwari",
        "role": "Core Member",
        "image": "/assets/team/2027/Vaibhav_Santosh_Tiwari.webp",
        "bio": "Tests TensorFlow Lite models, sensor telemetry, and microcontroller firmware.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Anushka Verma",
        "role": "Core Member",
        "image": "/assets/team/2027/Anushka_Verma.webp",
        "bio": "Builds experimental demos pairing embedded hardware with mobile clients.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "UI/UX",
    "members": [
      {
        "name": "Nityam Bhatt",
        "role": "Lead",
        "image": "/assets/team/2027/Nityam_Bhatt.webp",
        "bio": "Owns design tokens, Material 3 component kits, and interactive Figma prototypes.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/nityam7706/"
      },
      {
        "name": "Khengar Chaun",
        "role": "Co Lead",
        "image": "/assets/team/2027/Khengar_Chaun.webp",
        "bio": "Leads interface reviews, usability testing, and design-to-code handoffs.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Aryan Amit Arya",
        "role": "Core Member",
        "image": "/assets/team/2027/Aryan_Amit_Arya.webp",
        "bio": "Designs responsive layouts, typography scales, and clickable Figma flows.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/relaxits_aryan/",
        "isPlaceholder": true
      },
      {
        "name": "Vedha",
        "role": "Core Member",
        "image": "/assets/team/2027/Vedha.webp",
        "bio": "Crafts mobile interfaces, micro-interactions, and accessible component specs.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/vedha_forecast/",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Operations Team",
    "members": [
      {
        "name": "Harshit Maurya",
        "role": "Operation Lead",
        "image": "/assets/team/2027/Harshit_Maurya.webp",
        "bio": "Manages university venue logistics, OD clearances, and event-day readiness.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/44-harshit-maurya/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/harshit_749/"
      },
      {
        "name": "Jay Pratap Singh Rajput",
        "role": "Operation Manager",
        "image": "/assets/team/2027/Jay_Pratap_Singh_Rajput.webp",
        "bio": "Oversees check-in desks, speaker hospitality, and venue schedules.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Vriti Yadav",
        "role": "Operation Manager",
        "image": "/assets/team/2027/Vriti_Yadav.webp",
        "bio": "Manages university venue logistics, OD clearances, and event-day readiness.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_vriti_29/"
      },
      {
        "name": "Manav Dhirenbhai Vora",
        "role": "Core member",
        "image": "/assets/team/2027/Manav_Dhirenbhai_Vora.webp",
        "bio": "Coordinates room bookings, equipment setup, and ground execution during sessions.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/manavv_vora/"
      }
    ]
  },
  {
    "department": "Event Management Team",
    "members": [
      {
        "name": "Vidhi Thakur",
        "role": "Lead",
        "image": "/assets/team/2027/Vidhi_Thakur.webp",
        "bio": "Plans flagship hackathons, technical workshops, and stage schedules for 200+ attendees.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal"
      },
      {
        "name": "Anushka Kumar",
        "role": "Co Lead",
        "image": "/assets/team/2027/Anushka_Kumar.webp",
        "bio": "Coordinates arena formats, speaker timelines, and volunteer rosters.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Anshita",
        "role": "Core Member",
        "image": "/assets/team/2027/Anshita.webp",
        "bio": "Runs workshop registration desks, participant briefings, and session pacing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Pratik Parsewar",
        "role": "Core Member",
        "image": "/assets/team/2027/Pratik_Parsewar.webp",
        "bio": "Coordinates auditorium scheduling, problem statements, and team check-ins.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Saba Parveen",
        "role": "Core Member",
        "image": "/assets/team/2027/Saba_Parveen.webp",
        "bio": "Manages stage cues, round transitions, and participant support during contests.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/saba_parveen22/",
        "isPlaceholder": true
      },
      {
        "name": "Akshat Ghatiya",
        "role": "Core Member",
        "image": "/assets/team/2027/Akshat_Ghatiya.webp",
        "bio": "Plans quiz rounds, hackathon booths, and live technical showcase timing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/akshatghatiya/",
        "isPlaceholder": true
      },
      {
        "name": "Dhanashri Bhausaheb Dhatrak",
        "role": "Core Member",
        "image": "/assets/team/2027/Dhanashri_Bhausaheb_Dhatrak.webp",
        "bio": "Organizes logistics packets, judge scorecards, and winner announcements.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Narra Harshitha",
        "role": "Core Member",
        "image": "/assets/team/2027/Narra_Harshitha.webp",
        "bio": "Supports crowd flow, helpdesks, and timing checks across multi-track events.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Gudi Sivasankar",
        "role": "Core Member",
        "image": "/assets/team/2027/Gudi_Sivasankar.webp",
        "bio": "Prepares briefing decks, volunteer shifts, and on-ground contest execution.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Aniket Gawai",
        "role": "Core Member",
        "image": "/assets/team/2027/Aniket_Gawai.webp",
        "bio": "Coordinates speaker prep, workshop materials, and post-event wrap-up.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Priyanshi Prajapati",
        "role": "Core Member",
        "image": "/assets/team/2027/Priyanshi_Prajapati.webp",
        "bio": "Runs workshop registration desks, participant briefings, and session pacing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Kshitika Atri",
        "role": "Core Member",
        "image": "/assets/team/2027/Kshitika_Atri.webp",
        "bio": "Coordinates auditorium scheduling, problem statements, and team check-ins.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Jalaj Srivastava",
        "role": "Core Member",
        "image": "/assets/team/2027/Jalaj_Srivastava.webp",
        "bio": "Manages stage cues, round transitions, and participant support during contests.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "MUSKAN SUKHIJA",
        "role": "Core Member",
        "image": "/assets/team/2027/MUSKAN_SUKHIJA.webp",
        "bio": "Plans quiz rounds, hackathon booths, and live technical showcase timing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/muskan-sukhija-915249324",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/muskan_sukhija24/"
      },
      {
        "name": "JIGYASA",
        "role": "Core Member",
        "image": "/assets/team/2027/JIGYASA.webp",
        "bio": "Organizes logistics packets, judge scorecards, and winner announcements.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/jigyasa787/",
        "isPlaceholder": true
      },
      {
        "name": "Aman Mukeshkumar Bisen",
        "role": "Core Member",
        "image": "/assets/team/2027/Aman_Mukeshkumar_Bisen.webp",
        "bio": "Supports crowd flow, helpdesks, and timing checks across multi-track events.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Yogyaa Mishra",
        "role": "Core Member",
        "image": "/assets/team/2027/Yogyaa_Mishra.webp",
        "bio": "Prepares briefing decks, volunteer shifts, and on-ground contest execution.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Design Team",
    "members": [
      {
        "name": "Lavanya Pandit",
        "role": "Lead",
        "image": "/assets/team/2027/Lavanya_Pandit.webp",
        "bio": "Directs visual identity, campaign posters, and apparel graphics across chapter events.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/lavanyaa._.___/",
        "isPlaceholder": true
      },
      {
        "name": "Archi Israni",
        "role": "Co Lead",
        "image": "/assets/team/2027/Archi_Israni.webp",
        "bio": "Leads illustration style, motion graphics, and print-ready brand assets.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/archiayy/",
        "isPlaceholder": true
      },
      {
        "name": "Pirakala Sushwanth",
        "role": "Co Lead",
        "image": "/assets/team/2027/Pirakala_Sushwanth.webp",
        "bio": "Directs visual identity, campaign posters, and apparel graphics across chapter events.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/sushwa_17/"
      },
      {
        "name": "Palak Choithani",
        "role": "Core Member",
        "image": "/assets/team/2027/Palak_Choithani.webp",
        "bio": "Creates event banners, Instagram carousels, and club sticker packs.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Pragalbha Padhy",
        "role": "Core Member",
        "image": "/assets/team/2027/Pragalbha_Padhy.webp",
        "bio": "Builds typographic posters, stage backdrops, and digital promotional kits.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_.pragalbha._/",
        "isPlaceholder": true
      },
      {
        "name": "Shreya Arora",
        "role": "Core Member",
        "image": "/assets/team/2027/Shreya_Arora.webp",
        "bio": "Illustrates visual assets and cohesive layouts for hackathon campaigns.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/aro.ralemon/",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Content Team",
    "members": [
      {
        "name": "Diya Patel",
        "role": "Lead",
        "image": "/assets/team/2027/Diya_Patel.webp",
        "bio": "Edits technical blog drafts, announcement copy, and LinkedIn articles.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/diya_2.306/"
      },
      {
        "name": "Aleena Manesh",
        "role": "Co Lead",
        "image": "/assets/team/2027/Aleena_Manesh.webp",
        "bio": "Leads editorial voice, scripts, and post-event recaps across channels.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/leebewbew/",
        "isPlaceholder": true
      },
      {
        "name": "Sharmili Das",
        "role": "Core Member",
        "image": "/assets/team/2027/Sharmili_Das.webp",
        "bio": "Writes LinkedIn dispatches, speaker introductions, and workshop announcements.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Bhumika Das",
        "role": "Core Member",
        "image": "/assets/team/2027/Bhumika_Das.webp",
        "bio": "Drafts technical summaries, event recaps, and social captions.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/bhumikaa_aa___/",
        "isPlaceholder": true
      },
      {
        "name": "Aditee Singh",
        "role": "Core Member",
        "image": "/assets/team/2027/Aditee_Singh.webp",
        "bio": "Proofreads scripts, blog articles, and recruitment copy for clarity.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/aditee_xox_/",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Media Team",
    "members": [
      {
        "name": "Kirti Sonam Pattnaik",
        "role": "Lead",
        "image": "/assets/team/2027/Kirti_Sonam_Pattnaik.webp",
        "bio": "Directs event photography, aftermovie edits, and short-form video production.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_pattnaikkirti_/"
      },
      {
        "name": "Tanish Kumar",
        "role": "Co Lead",
        "image": "/assets/team/2027/Tanish_Kumar.webp",
        "bio": "Manages camera coverage, lighting setups, and color-graded reels.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Sai Hanish",
        "role": "Co Lead",
        "image": "/assets/team/2027/Sai_Hanish.webp",
        "bio": "Directs event photography, aftermovie edits, and short-form video production.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal"
      },
      {
        "name": "Janhavi Raut",
        "role": "Core Member",
        "image": "/assets/team/2027/Janhavi_Raut.webp",
        "bio": "Shoots candid campus photography, speaker portraits, and stage highlights.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Sarthak Maurya",
        "role": "Core Member",
        "image": "/assets/team/2027/Sarthak_Maurya.webp",
        "bio": "Edits event recap reels, B-roll sequences, and motion cuts.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Shamim Uz Zaman",
        "role": "Core Member",
        "image": "/assets/team/2027/Shamim_Uz_Zaman.webp",
        "bio": "Covers workshops, captures live interviews, and archives event galleries.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/shamim-uz-zaman-88788531a",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/shamim_zaman_"
      },
      {
        "name": "Divyanshi Gupta",
        "role": "Core Member",
        "image": "/assets/team/2027/Divyanshi_Gupta.webp",
        "bio": "Handles camera angles, audio sync, and fast-turnaround reel exports.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/guptajikiladkiii/",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "PR & Outreach",
    "members": [
      {
        "name": "Abhimanyu Manojawas",
        "role": "Lead",
        "image": "/assets/team/2027/Abhimanyu_Manojawas.webp",
        "bio": "Builds sponsor partnerships, external speaker outreach, and inter-college promotion.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/manyu_elayath_/"
      },
      {
        "name": "Aman Prasad",
        "role": "Co Lead",
        "image": "/assets/team/2027/Aman_Prasad.webp",
        "bio": "Coordinates partner communications, brand collaborations, and campus outreach.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/a_man_processing/",
        "isPlaceholder": true
      },
      {
        "name": "Shreya Ramesh",
        "role": "Core Member",
        "image": "/assets/team/2027/Shreya_Ramesh.webp",
        "bio": "Connects with tech communities, guest mentors, and hackathon partners.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Rhythm Sharma",
        "role": "Core Member",
        "image": "/assets/team/2027/Rhythm_Sharma.webp",
        "bio": "Manages partner follow-ups, speaker invites, and sponsor deliverables.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Waniya Khan",
        "role": "Core Member",
        "image": "/assets/team/2027/Waniya_Khan.webp",
        "bio": "Supports external promotions, campus campaigns, and partner decks.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Finance",
    "members": [
      {
        "name": "Sonakshi Dashore",
        "role": "Lead",
        "image": "/assets/team/2027/Sonakshi_Dashore.webp",
        "bio": "Oversees chapter budgets, reimbursement ledgers, and sponsor invoicing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Pearl Mathew",
        "role": "Co Lead",
        "image": "/assets/team/2027/Pearl_Mathew.webp",
        "bio": "Maintains expense records, procurement approvals, and financial compliance.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/pxrl_mathew/",
        "isPlaceholder": true
      },
      {
        "name": "Harshit Sharma",
        "role": "Core member",
        "image": "/assets/team/2027/Harshit_Sharma.webp",
        "bio": "Tracks event budgets, vendor bills, and reimbursement documentation.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_.harshit_sharmaa._/",
        "isPlaceholder": true
      },
      {
        "name": "Priyam Prakash",
        "role": "Core member",
        "image": "/assets/team/2027/Priyam_Prakash.webp",
        "bio": "Audits receipts, ledger sheets, and university finance submissions.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Muhammad Sufyaan Khan",
        "role": "Core member",
        "image": "/assets/team/2027/Muhammad_Sufyaan_Khan.webp",
        "bio": "Maintains expense trackers, invoice records, and budget forecasts.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_no.sufyaan/",
        "isPlaceholder": true
      },
      {
        "name": "Anand Gautam",
        "role": "Core member",
        "image": "/assets/team/2027/Anand_Gautam.webp",
        "bio": "Tracks event budgets, vendor bills, and reimbursement documentation.",
        "batch": "'25 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_anand1610/",
        "isPlaceholder": true
      }
    ]
  }
];

export const pastLeadershipTeam: DepartmentTeam[] = [
  {
    "department": "Admins",
    "members": [
      {
        "name": "Shreyash Srivastava",
        "role": "President",
        "image": "/assets/team/2026/Shreyash_Srivastava.webp",
        "bio": "Guides cross-team execution, faculty alignment, and campus-wide hackathon planning.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/shreyash-srivastava-1a1161280",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/x3_shreyash_x3/"
      },
      {
        "name": "Kataru Heramb Murthy",
        "role": "Vice President",
        "image": "/assets/team/2026/Kataru_Heramb_Murthy.webp",
        "bio": "Coordinates internal chapter operations, approvals, and cross-department delivery.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/heramb-murthy-309b841a9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/murthyheramb/"
      },
      {
        "name": "Shree Charan N",
        "role": "General Secretary",
        "image": "/assets/team/2026/Shree_Charan_N.webp",
        "bio": "Directs chapter governance, inter-team reviews, and yearly technical strategy across VIT Bhopal.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/shree-charan-n-816a511a4/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/fr_charan/"
      }
    ]
  },
  {
    "department": "Android Team",
    "members": [
      {
        "name": "Gourav Agarwal",
        "role": "Lead",
        "image": "/assets/team/2026/Gourav_Agarwal.webp",
        "bio": "Mentors student developers through Compose UI architecture and app releases.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/gourav--ag/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/gourav__ag/"
      },
      {
        "name": "Dhruv Maheshwari",
        "role": "Core Member",
        "image": "/assets/team/2026/Dhruv_Maheshwari.webp",
        "bio": "Implements app features, API integrations, and local persistence in Room.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/dhruv-maheshwari-7616b8339",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/dhruv._.maheshwari/"
      },
      {
        "name": "Amaan Syed",
        "role": "Core Member",
        "image": "/assets/team/2026/Amaan_Syed.webp",
        "bio": "Works on UI components, debugging, and offline caching across mobile builds.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/amaansyed27/",
        "github": "https://github.com/Android-Club-VIT-Bhopal"
      },
      {
        "name": "Shashi Singh",
        "role": "Core Member",
        "image": "/assets/team/2026/Shashi_Singh.webp",
        "bio": "Tests device builds, fixes lifecycle bugs, and ships campus Android utilities.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Vaibhav Pandey",
        "role": "Core Member",
        "image": "/assets/team/2026/Vaibhav_Pandey.webp",
        "bio": "Builds native Android screens and ViewModel state flows in Kotlin and Compose.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "SDC",
    "members": [
      {
        "name": "Harshvardhan Girish Jajoo",
        "role": "Lead",
        "image": "/assets/team/2026/Harshvardhan_Girish_Jajoo.webp",
        "bio": "Leads web portal architecture, recruitment systems, and deployment pipelines.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/hgjajoo/"
      },
      {
        "name": "Harshit Maurya",
        "role": "Co-Lead",
        "image": "/assets/team/2026/Harshit_Maurya.webp",
        "bio": "Architects backend APIs, registration flows, and scalable web infrastructure.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/44-harshit-maurya",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/harshit_749/"
      },
      {
        "name": "Mishita Tiwari",
        "role": "Core Member",
        "image": "/assets/team/2026/Mishita_Tiwari.webp",
        "bio": "Supports database schemas, debugging, and frontend reliability across club portals.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Saksham Jaiswal",
        "role": "Core Member",
        "image": "/assets/team/2026/Saksham_Jaiswal.webp",
        "bio": "Ships web tools, registration pages, and performance improvements for events.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Samay Dutta",
        "role": "Core Member",
        "image": "/assets/team/2026/Samay_Dutta.webp",
        "bio": "Maintains web application codebases, routing, and deployment workflows.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Pratham Srivastava",
        "role": "Core Member",
        "image": "/assets/team/2026/Pratham_Srivastava.webp",
        "bio": "Builds full-stack features across TypeScript frontends and backend services.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Research & Development",
    "members": [
      {
        "name": "Madhuram Patil",
        "role": "Lead",
        "image": "/assets/team/2026/Madhuram_Patil.webp",
        "bio": "Guides prototype engineering from sensor circuits and edge models to live demos.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/madhuram_2901/"
      },
      {
        "name": "Rana Talukdar",
        "role": "Co-Lead",
        "image": "/assets/team/2026/Rana_Talukdar.webp",
        "bio": "Directs applied R&D tracks in on-device ML, ESP32 hardware, and security.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/rana-talukdar-782b60293/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_kafi_rana_/"
      },
      {
        "name": "Krishnashish Munshi",
        "role": "Core Member",
        "image": "/assets/team/2026/Krishnashish_Munshi.webp",
        "bio": "Evaluates dataset pipelines, model quantization, and embedded communications.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/krishnashish-munshi",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/snapped_outside/"
      },
      {
        "name": "KUSHAL ZAMBARE",
        "role": "Core Member",
        "image": "/assets/team/2026/KUSHAL_ZAMBARE.webp",
        "bio": "Supports cybersecurity testing, IoT hardware rigs, and research documentation.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/kushalzambare/"
      },
      {
        "name": "Garvit Audichya",
        "role": "Core Member",
        "image": "/assets/team/2026/Garvit_Audichya.webp",
        "bio": "Develops prototype scripts and benchmarks new mobile and hardware frameworks.",
        "batch": "'23 Batch",
        "linkedin": "http://www.linkedin.com/in/garvit-audichya-305132337",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/garvit.010/"
      },
      {
        "name": "Amrit Raj",
        "role": "Core Member",
        "image": "/assets/team/2026/Amrit_Raj.webp",
        "bio": "Prototypes edge ML inference pipelines and Android hardware experiments.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Anubhav Mishra",
        "role": "Core Member",
        "image": "/assets/team/2026/Anubhav_Mishra.webp",
        "bio": "Investigates system bottlenecks and builds working proof-of-concept tools.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Mangal Singh",
        "role": "Core Member",
        "image": "/assets/team/2026/Mangal_Singh.webp",
        "bio": "Explores computer vision, BLE hardware, and security tooling with the R&D group.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Vaibhav Santosh Tiwari",
        "role": "Core Member",
        "image": "/assets/team/2026/Vaibhav_Santosh_Tiwari.webp",
        "bio": "Tests TensorFlow Lite models, sensor telemetry, and microcontroller firmware.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Swara Mishra",
        "role": "Core Member",
        "image": "/assets/team/2026/Swara_Mishra.webp",
        "bio": "Builds experimental demos pairing embedded hardware with mobile clients.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "UI/UX",
    "members": [
      {
        "name": "Nityam Bhatt",
        "role": "Lead",
        "image": "/assets/team/2026/Nityam_Bhatt.webp",
        "bio": "Owns design tokens, Material 3 component kits, and interactive Figma prototypes.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/nityam-bhatt-7789b7323",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/nityam7706/"
      },
      {
        "name": "Priiyanka Priyadarshinee",
        "role": "Co - lead",
        "image": "/assets/team/2026/Priiyanka_Priyadarshinee.webp",
        "bio": "Leads interface reviews, usability testing, and design-to-code handoffs.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/priyanka-priyadarshinee-9b309a31a/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/fogxyz_/"
      },
      {
        "name": "Khengar Chaun",
        "role": "Core Member",
        "image": "/assets/team/2026/Khengar_Chaun.webp",
        "bio": "Translates user flows into clean wireframes and developer-ready UI kits.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Operations Team",
    "members": [
      {
        "name": "Dhriti Mittal",
        "role": "Lead",
        "image": "/assets/team/2026/Dhriti_Mittal.webp",
        "bio": "Oversees check-in desks, speaker hospitality, and venue schedules.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/dhriti-mittal-143700288?trk=contact-info",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/crystyn1912/"
      },
      {
        "name": "Ujjawal Patidar",
        "role": "Operation Manager",
        "image": "/assets/team/2026/Ujjawal_Patidar.webp",
        "bio": "Manages university venue logistics, OD clearances, and event-day readiness.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/ujjawal-patidar-876a09328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/ujjawal_patidar94/"
      },
      {
        "name": "Anan Nakrani",
        "role": "Core Member",
        "image": "/assets/team/2026/Anan_Nakrani.webp",
        "bio": "Handles attendance tracking, logistics checklists, and intra-team handoffs.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Aniket Atul Karkhelikar",
        "role": "Core Member",
        "image": "/assets/team/2026/Aniket_Atul_Karkhelikar.webp",
        "bio": "Supports stage setup, registration counters, and smooth event-day coordination.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Anant Singh",
        "role": "Core Member",
        "image": "/assets/team/2026/Anant_Singh.webp",
        "bio": "Coordinates room bookings, equipment setup, and ground execution during sessions.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Event Management Team",
    "members": [
      {
        "name": "Gauri Gupta",
        "role": "Lead",
        "image": "/assets/team/2026/Gauri_Gupta.webp",
        "bio": "Plans flagship hackathons, technical workshops, and stage schedules for 200+ attendees.",
        "batch": "'23 Batch",
        "linkedin": "http://linkedin.com/in/gauri-gupta-5b5584340",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/gauri_gupta1803/"
      },
      {
        "name": "Akshat Pandey",
        "role": "Co-Lead",
        "image": "/assets/team/2026/Akshat_Pandey.webp",
        "bio": "Coordinates arena formats, speaker timelines, and volunteer rosters.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/akshat_28_p/"
      },
      {
        "name": "Vriti Yadav",
        "role": "Co Lead",
        "image": "/assets/team/2026/Vriti_Yadav.webp",
        "bio": "Plans flagship hackathons, technical workshops, and stage schedules for 200+ attendees.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_vriti_29/"
      },
      {
        "name": "Atharv Dev Tripathi",
        "role": "Core Member",
        "image": "/assets/team/2026/Atharv_Dev_Tripathi.webp",
        "bio": "Coordinates speaker prep, workshop materials, and post-event wrap-up.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_atharv_dev/"
      },
      {
        "name": "Diya Bhargava",
        "role": "Core Member",
        "image": "/assets/team/2026/Diya_Bhargava.webp",
        "bio": "Runs workshop registration desks, participant briefings, and session pacing.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/diya.b95/"
      },
      {
        "name": "Vikalp Joshi",
        "role": "Core Member",
        "image": "/assets/team/2026/Vikalp_Joshi.webp",
        "bio": "Coordinates auditorium scheduling, problem statements, and team check-ins.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/joshivikalp905/",
        "isPlaceholder": true
      },
      {
        "name": "Vidhi Thakur",
        "role": "Core Member",
        "image": "/assets/team/2026/Vidhi_Thakur.webp",
        "bio": "Manages stage cues, round transitions, and participant support during contests.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal"
      },
      {
        "name": "Ridhima Agarwal",
        "role": "Core Member",
        "image": "/assets/team/2026/Ridhima_Agarwal.webp",
        "bio": "Plans quiz rounds, hackathon booths, and live technical showcase timing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Anshita",
        "role": "Core Member",
        "image": "/assets/team/2026/Anshita.webp",
        "bio": "Organizes logistics packets, judge scorecards, and winner announcements.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Pratik Parsewar",
        "role": "Core Member",
        "image": "/assets/team/2026/Pratik_Parsewar.webp",
        "bio": "Supports crowd flow, helpdesks, and timing checks across multi-track events.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Kshitika Atri",
        "role": "Core Member",
        "image": "/assets/team/2026/Kshitika_Atri.webp",
        "bio": "Prepares briefing decks, volunteer shifts, and on-ground contest execution.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Saba Parveen",
        "role": "Core Member",
        "image": "/assets/team/2026/Saba_Parveen.webp",
        "bio": "Coordinates speaker prep, workshop materials, and post-event wrap-up.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Akshat Ghatiya",
        "role": "Core Member",
        "image": "/assets/team/2026/Akshat_Ghatiya.webp",
        "bio": "Runs workshop registration desks, participant briefings, and session pacing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Dhanashri Bhausaheb Dhatrak",
        "role": "Core Member",
        "image": "/assets/team/2026/Dhanashri_Bhausaheb_Dhatrak.webp",
        "bio": "Coordinates auditorium scheduling, problem statements, and team check-ins.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Narra Harshitha",
        "role": "Core Member",
        "image": "/assets/team/2026/Narra_Harshitha.webp",
        "bio": "Manages stage cues, round transitions, and participant support during contests.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "GUDI SIVASHANKAR",
        "role": "Core Member",
        "image": "/assets/team/2026/GUDI_SIVASHANKAR.webp",
        "bio": "Plans quiz rounds, hackathon booths, and live technical showcase timing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Aniket Gawai",
        "role": "Core Member",
        "image": "/assets/team/2026/Aniket_Gawai.webp",
        "bio": "Organizes logistics packets, judge scorecards, and winner announcements.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Priyanshi Prajapati",
        "role": "Core Member",
        "image": "/assets/team/2026/Priyanshi_Prajapati.webp",
        "bio": "Supports crowd flow, helpdesks, and timing checks across multi-track events.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "ANUSHKA KUMAR",
        "role": "Core Member",
        "image": "/assets/team/2026/ANUSHKA_KUMAR.webp",
        "bio": "Prepares briefing decks, volunteer shifts, and on-ground contest execution.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Jalaj Srivastava",
        "role": "Core Member",
        "image": "/assets/team/2026/Jalaj_Srivastava.webp",
        "bio": "Coordinates speaker prep, workshop materials, and post-event wrap-up.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "MUSKAN SUKHIJA",
        "role": "Core Member",
        "image": "/assets/team/2026/MUSKAN_SUKHIJA.webp",
        "bio": "Runs workshop registration desks, participant briefings, and session pacing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Design Team",
    "members": [
      {
        "name": "Lavanya Pandit",
        "role": "Lead",
        "image": "/assets/team/2026/Lavanya_Pandit.webp",
        "bio": "Leads illustration style, motion graphics, and print-ready brand assets.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "PIRAKALA SUSHWANTH",
        "role": "Co Lead",
        "image": "/assets/team/2026/PIRAKALA_SUSHWANTH.webp",
        "bio": "Directs visual identity, campaign posters, and apparel graphics across chapter events.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Nityam Bhatt",
        "role": "Core Member",
        "image": "/assets/team/2026/Nityam_Bhatt.webp",
        "bio": "Formats social templates, badge artwork, and workshop slide themes.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/nityam-bhatt-7789b7323",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/nityam7706/"
      },
      {
        "name": "Riddhi Agnihotri",
        "role": "Core Member",
        "image": "/assets/team/2026/Riddhi_Agnihotri.webp",
        "bio": "Creates event banners, Instagram carousels, and club sticker packs.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/riddhi-agnihotri-85b31b28a/",
        "github": "https://github.com/Android-Club-VIT-Bhopal"
      },
      {
        "name": "Palak Choithani",
        "role": "Core Member",
        "image": "/assets/team/2026/Palak_Choithani.webp",
        "bio": "Builds typographic posters, stage backdrops, and digital promotional kits.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Archi Israni",
        "role": "Core Member",
        "image": "/assets/team/2026/Archi_Israni.webp",
        "bio": "Illustrates visual assets and cohesive layouts for hackathon campaigns.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Content Team",
    "members": [
      {
        "name": "Hiya Dullu",
        "role": "Lead",
        "image": "/assets/team/2026/Hiya_Dullu.webp",
        "bio": "Edits technical blog drafts, announcement copy, and LinkedIn articles.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/hiya-dullu-3a2338286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/adorakkru/"
      },
      {
        "name": "M B Pragathi",
        "role": "Co-Lead",
        "image": "/assets/team/2026/M_B_Pragathi.webp",
        "bio": "Leads editorial voice, scripts, and post-event recaps across channels.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/mbpragathi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/pragathi_mb/"
      },
      {
        "name": "Diya Patel",
        "role": "Core Member",
        "image": "/assets/team/2026/Diya_Patel.webp",
        "bio": "Writes LinkedIn dispatches, speaker introductions, and workshop announcements.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/diya-patel-4b0375335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/diya_2.306/"
      },
      {
        "name": "Aleena Manesh I",
        "role": "Core Member",
        "image": "/assets/team/2026/Aleena_Manesh_I.webp",
        "bio": "Drafts technical summaries, event recaps, and social captions.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "SHARMILI DAS",
        "role": "Core Member",
        "image": "/assets/team/2026/SHARMILI_DAS.webp",
        "bio": "Proofreads scripts, blog articles, and recruitment copy for clarity.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Parv Dube",
        "role": "Core Member",
        "image": "/assets/team/2026/Parv_Dube.webp",
        "bio": "Writes LinkedIn dispatches, speaker introductions, and workshop announcements.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Media Team",
    "members": [
      {
        "name": "Dikshika",
        "role": "Lead",
        "image": "/assets/team/2026/Dikshika.webp",
        "bio": "Manages camera coverage, lighting setups, and color-graded reels.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/dikshika-sachdeva-103455289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/dikshikka/"
      },
      {
        "name": "T.V.VAMSI KRISHNA",
        "role": "Co- Lead",
        "image": "/assets/team/2026/T_V_VAMSI_KRISHNA.webp",
        "bio": "Directs event photography, aftermovie edits, and short-form video production.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Kirti Sonam Pattnaik",
        "role": "Co Lead",
        "image": "/assets/team/2026/Kirti_Sonam_Pattnaik.webp",
        "bio": "Manages camera coverage, lighting setups, and color-graded reels.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/_pattnaikkirti_/"
      },
      {
        "name": "Omkar Ravindra Shastri",
        "role": "Core Member",
        "image": "/assets/team/2026/Omkar_Ravindra_Shastri.webp",
        "bio": "Shoots candid campus photography, speaker portraits, and stage highlights.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/omrshastri/"
      },
      {
        "name": "Tanish Kumar",
        "role": "Core Member",
        "image": "/assets/team/2026/Tanish_Kumar.webp",
        "bio": "Edits event recap reels, B-roll sequences, and motion cuts.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Janhavi Raut",
        "role": "Core Member",
        "image": "/assets/team/2026/Janhavi_Raut.webp",
        "bio": "Covers workshops, captures live interviews, and archives event galleries.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Sai hanish",
        "role": "Core Member",
        "image": "/assets/team/2026/Sai_hanish.webp",
        "bio": "Handles camera angles, audio sync, and fast-turnaround reel exports.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Shamim Uz Zaman",
        "role": "Core Member",
        "image": "/assets/team/2026/Shamim_Uz_Zaman.webp",
        "bio": "Shoots candid campus photography, speaker portraits, and stage highlights.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "PR & Outreach",
    "members": [
      {
        "name": "Rishit Singh",
        "role": "Lead",
        "image": "/assets/team/2026/Rishit_Singh.webp",
        "bio": "Builds sponsor partnerships, external speaker outreach, and inter-college promotion.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal"
      },
      {
        "name": "Fiona Dey",
        "role": "Co-Lead",
        "image": "/assets/team/2026/Fiona_Dey.webp",
        "bio": "Coordinates partner communications, brand collaborations, and campus outreach.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/fiona-dey-a8572631a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B5YqFTJ9qQGGzmGNjmKv%2BfA%3D%3D",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/dey_fiona/"
      },
      {
        "name": "Vitthal Das Srivastava",
        "role": "Core member",
        "image": "/assets/team/2026/Vitthal_Das_Srivastava.webp",
        "bio": "Handles community outreach, collaborator replies, and cross-campus invites.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Abhimanyu Manojawas",
        "role": "Core Member",
        "image": "/assets/team/2026/Abhimanyu_Manojawas.webp",
        "bio": "Connects with tech communities, guest mentors, and hackathon partners.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/in/abhimanyu-manojawas-50687528b/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/manyu_elayath_/"
      },
      {
        "name": "Aman Prasad",
        "role": "Core Member",
        "image": "/assets/team/2026/Aman_Prasad.webp",
        "bio": "Manages partner follow-ups, speaker invites, and sponsor deliverables.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Shreya Ramesh",
        "role": "Core Member",
        "image": "/assets/team/2026/Shreya_Ramesh.webp",
        "bio": "Supports external promotions, campus campaigns, and partner decks.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Samriddhi jain",
        "role": "Core Member",
        "image": "/assets/team/2026/Samriddhi_jain.webp",
        "bio": "Handles community outreach, collaborator replies, and cross-campus invites.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Gauri Nandwana",
        "role": "Core Member",
        "image": "/assets/team/2026/Gauri_Nandwana.webp",
        "bio": "Connects with tech communities, guest mentors, and hackathon partners.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Rhythm Sharma",
        "role": "Core Member",
        "image": "/assets/team/2026/Rhythm_Sharma.webp",
        "bio": "Manages partner follow-ups, speaker invites, and sponsor deliverables.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  },
  {
    "department": "Finance",
    "members": [
      {
        "name": "Jay pratap singh rajput",
        "role": "Co Lead",
        "image": "/assets/team/2026/Jay_pratap_singh_rajput.webp",
        "bio": "Oversees chapter budgets, reimbursement ledgers, and sponsor invoicing.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Prashasti Joshi",
        "role": "Core member",
        "image": "/assets/team/2026/Prashasti_Joshi.webp",
        "bio": "Audits receipts, ledger sheets, and university finance submissions.",
        "batch": "'23 Batch",
        "linkedin": "https://www.linkedin.com/in/prashasti-joshi-449620332",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "instagram": "https://www.instagram.com/prashasti_joshi__/"
      },
      {
        "name": "Sonakshi Dashore",
        "role": "Core member",
        "image": "/assets/team/2026/Sonakshi_Dashore.webp",
        "bio": "Maintains expense trackers, invoice records, and budget forecasts.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "HARSHIT SHARMA",
        "role": "Core member",
        "image": "/assets/team/2026/HARSHIT_SHARMA.webp",
        "bio": "Tracks event budgets, vendor bills, and reimbursement documentation.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "PRIYAM PRAKASH",
        "role": "Core member",
        "image": "/assets/team/2026/PRIYAM_PRAKASH.webp",
        "bio": "Audits receipts, ledger sheets, and university finance submissions.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      },
      {
        "name": "Muhammad Sufyaan Khan",
        "role": "Core member",
        "image": "/assets/team/2026/Muhammad_Sufyaan_Khan.webp",
        "bio": "Maintains expense trackers, invoice records, and budget forecasts.",
        "batch": "'24 Batch",
        "linkedin": "https://www.linkedin.com/company/android-club-vit-bhopal/",
        "github": "https://github.com/Android-Club-VIT-Bhopal",
        "isPlaceholder": true
      }
    ]
  }
];

export const clubTimeline: TimelineMilestone[] = [
  {
    version: "Cupcake 1.5",
    year: "2017",
    milestone: "Hostel Genesis",
    description:
      "Started by Abhay Nigam ('17) and peers building Java Android™ apps late at night.",
  },
  {
    version: "KitKat 4.4",
    year: "2019 / 20",
    milestone: "University Charter",
    description:
      "Official chapter recognition under Abhinav ('20) with the first campus App-A-Thon.",
  },
  {
    version: "Oreo 8.0",
    year: "2021 / 22",
    milestone: "Hardware & IoT",
    description:
      "Expanded into ESP32 microcontrollers, BLE telemetry, and cloud backends.",
  },
  {
    version: "Tiramisu 13",
    year: "2023 / 24",
    milestone: "1,000+ Members",
    description:
      "Partnered with Coding Ninjas, Notion, and Unstop across major campus events.",
  },
  {
    version: "Vanilla Ice Cream 15",
    year: "2025 / 26",
    milestone: "Campus Scale & DroidCoins",
    description:
      "Compose by default, 40+ campus events, 12 active departments, and the Droid Coins student rewards program.",
  },
];

export const sponsors: SponsorItem[] = [
  {
    name: "Notion",
    logo: "/assets/sponsors/notion-clean.png",
    type: "Productivity Partner",
    fallback: "/assets/sponsors/notion.jpg",
  },
  {
    name: "Coding Ninjas",
    logo: "/assets/sponsors/coding-ninja-clean.png",
    type: "Learning Partner",
    fallback: "/assets/sponsors/coding-ninja-logo.jpeg",
  },
  {
    name: "Unstop",
    logo: "/assets/sponsors/unstop-clean.png",
    type: "Platform Partner",
    fallback: "/assets/sponsors/unStop.avif",
  },
  {
    name: "HackerEarth",
    logo: "/assets/sponsors/hackerearth-clean.png",
    type: "Coding Partner",
    fallback: "/assets/sponsors/hackerarth-696x348.webp",
  },
  {
    name: "Give My Certificate",
    logo: "/assets/sponsors/gmc-clean.png",
    type: "Certificates Partner",
    fallback: "/assets/sponsors/give_my_certificate.png",
  },
  {
    name: "CodeChef",
    logo: "/assets/sponsors/codechef-clean.png",
    type: "Competitive Partner",
    fallback: "/assets/sponsors/codechef.png",
  },
  {
    name: "Dainik Bhaskar",
    logo: "/assets/sponsors/dainikbhaskar-clean.png",
    type: "Media Partner",
    fallback: "/assets/sponsors/dainikbhaskar.png",
  },
  {
    name: "Gen.xyz",
    logo: "/assets/sponsors/genxyz-clean.png",
    type: "Domain Partner",
    fallback: "/assets/sponsors/genxyz.webp",
  },
];

export const recruitmentDomains: {
  technical: RecruitmentDomain[];
  nonTechnical: RecruitmentDomain[];
} = {
  technical: [
    {
      id: "android",
      name: "Android Team",
      image: "/assets/recruitment/Android.webp",
      description:
        "Build native mobile applications with Kotlin, Jetpack Compose, and clean architecture.",
      skills: ["Kotlin", "Jetpack Compose", "Coroutines", "Room DB"],
      whatYouDo: "Build Android apps, review PRs, mentor freshers.",
    },
    {
      id: "sdc",
      name: "Software Development Cell (SDC)",
      image: "/assets/recruitment/SDC.webp",
      description:
        "Develop scalable web portals, recruitment systems, APIs, and internal club platforms.",
      skills: ["React / Next.js", "TypeScript", "Firebase", "PostgreSQL"],
      whatYouDo: "Maintain club portals and live event engineering systems.",
    },
    {
      id: "rnd",
      name: "R&D (Cyber Security, IoT & ML)",
      image: "/assets/recruitment/RnD.webp",
      description:
        "Research and prototype systems across Cyber Security, ESP32 IoT hardware, and on-device ML.",
      skills: ["Cyber Security", "TensorFlow Lite", "ESP32 / IoT", "Python"],
      whatYouDo: "Explore emerging tech and bridge hardware with intelligence.",
    },
    {
      id: "uiux",
      name: "UI/UX & Design Systems",
      image: "/assets/recruitment/UIUX.webp",
      description:
        "Design intuitive interfaces, Material You systems, and high-craft prototypes in Figma.",
      skills: ["Figma", "Material 3", "Prototyping", "User Testing"],
      whatYouDo: "Translate ideas into production-ready UI specs.",
    },
  ],
  nonTechnical: [
    {
      id: "operations",
      name: "Operations & Logistics",
      image: "/assets/recruitment/Operations.webp",
      description:
        "Coordinate university approvals, faculty scheduling, venue setup, and verified OD letters.",
      skills: ["Team Coordination", "Approvals", "Planning"],
      whatYouDo: "Keep tech and non-tech teams aligned on campus.",
    },
    {
      id: "evm",
      name: "Event Management (EVM)",
      image: "/assets/recruitment/EVM.webp",
      description:
        "Plan and execute hackathons, live demos, and 200+ attendee workshops in the auditorium.",
      skills: ["Stage Direction", "Event Hosting", "Crowd Ops"],
      whatYouDo: "Turn classrooms and halls into energized build arenas.",
    },
    {
      id: "design-assets",
      name: "Graphic Design & Posters",
      image: "/assets/recruitment/Design.webp",
      description:
        "Create visual campaigns, Instagram carousels, sticker packs, and club merch.",
      skills: ["Illustrator", "Photoshop", "Typography", "Branding"],
      whatYouDo: "Shape the visual identity across campus campaigns.",
    },
    {
      id: "finance",
      name: "Finance & Documentation",
      image: "/assets/recruitment/Finance.webp",
      description:
        "Manage club budgets, transparent fund ledgers, sponsor invoices, and event documentation.",
      skills: ["Budgeting", "Transparency", "Ledgers", "Documentation"],
      whatYouDo: "Keep budgets accountable and club records audit-ready.",
    },
    {
      id: "media",
      name: "Media & Video",
      image: "/assets/recruitment/Media.webp",
      description:
        "Produce event reels, landscape aftermovies, and campus builder visual stories.",
      skills: ["DaVinci Resolve", "Cinematography", "Reels"],
      whatYouDo: "Capture build nights and flagship event milestones.",
    },
    {
      id: "pr",
      name: "PR & Corporate Outreach",
      image: "/assets/recruitment/PR.webp",
      description:
        "Pitch sponsors, invite industry speakers, and expand strategic partner networks.",
      skills: ["Sponsorship Pitching", "Outreach", "Networking"],
      whatYouDo: "Bring industry mentors and prizes to VIT Bhopal.",
    },
    {
      id: "content",
      name: "Content & Editorial",
      image: "/assets/recruitment/Content.webp",
      description:
        "Write technical blogs, social captions, event briefs, and community scripts.",
      skills: ["Technical Writing", "Editorial", "Copywriting"],
      whatYouDo: "Make complex engineering topics approachable.",
    },
  ],
};

export const recruitmentPipeline = [
  {
    step: "01",
    title: "General Screening",
    detail: "Submit @vitbhopal.ac.in details & domain application.",
  },
  {
    step: "02",
    title: "Domain Task Round",
    detail: "Complete role challenge & submit shareable Google Drive link.",
  },
  {
    step: "03",
    title: "Personal Interview",
    detail: "Discuss your build mindset, availability & team fit.",
  },
] as const;

export const engineeringBlogs = [
  {
    id: "01",
    title: "Jetpack Compose",
    summary:
      "Declarative native UI toolkit simplifying Android layouts with reactive state.",
    url: "https://androidclub.tech/blogs",
  },
  {
    id: "02",
    title: "Kotlin Coroutines",
    summary:
      "Structured concurrency for non-blocking network calls and background tasks.",
    url: "https://androidclub.tech/blogs",
  },
  {
    id: "03",
    title: "MVVM Architecture",
    summary:
      "Clean separation of UI and business logic for testable, scalable mobile apps.",
    url: "https://androidclub.tech/blogs",
  },
  {
    id: "04",
    title: "Android Jetpack Libraries",
    summary:
      "Production components including Room, Navigation, and WorkManager out of the box.",
    url: "https://androidclub.tech/blogs",
  },
] as const;

export const linkedinDispatches = [
  {
    id: "LI-01",
    date: "Nov 2026",
    author: "Google for Developers × Hack2skill",
    title: "PromptWars Community 2026",
    summary:
      "Hands-on Build with AI sprint at VIT Bhopal using Google AI Studio and Google Antigravity.",
    url: "https://www.linkedin.com/posts/android-club-vit-bhopal_promptwars2026-androidclub-vitbhopal-activity-7522989612747902976-w8md",
  },
  {
    id: "LI-02",
    date: "May 2026",
    author: "I/O Edition Digest",
    title: "Android Show: I/O 2026",
    summary:
      "Exploring Android's AI-first runtime, Gemini integration, and cross-device frameworks.",
    url: "https://www.linkedin.com/posts/android-club-vit-bhopal_android-googleio2026-artificialintelligence-activity-7460975325309571072-0spu",
  },
  {
    id: "LI-03",
    date: "Feb 2026",
    author: "Aditee Singh",
    title: "Edge AI at Point of Care",
    summary:
      "How Android-powered on-device AI enables real-time diagnostics and smarter wearable health insights.",
    url: "https://www.linkedin.com/posts/android-club-vit-bhopal_edgeai-androiddevelopment-digitalhealth-activity-7431350966811201536-LfGy",
  },
  {
    id: "LI-04",
    date: "Feb 2026",
    author: "Diya Patel",
    title: "Kotlin Multiplatform",
    summary:
      "Sharing one production Kotlin codebase across Android, iOS, web, and desktop applications.",
    url: "https://www.linkedin.com/posts/android-club-vit-bhopal_kotlinmultiplatform-mobiledevelopment-activity-7423671852033523712-g5kW",
  },
] as const;

export const coreTestimonials = [
  {
    name: "Giriraj Parsewar",
    position: "President",
    image: "/assets/team/testimonials/Giriraj.webp",
    quote:
      "IDE that we work on is Innovation, Determination and Enthusiasm! As nothing hinders us in this quest for learning and growth. Let's code, create, and conquer in our style!",
  },
  {
    name: "Avyaan Verma",
    position: "Vice President",
    image: "/assets/team/testimonials/Avyaan.webp",
    quote:
      "A place more than a group of developers and enthusiasts, with people who care, guide, and inspire.",
  },
  {
    name: "Ujjawal Patidar",
    position: "General Secretary",
    image: "/assets/team/testimonials/Ujjawal.webp",
    quote:
      "Proud to be part of such a dynamic community. The dedication and enthusiasm of our members make this club an exceptional place for growth and innovation.",
  },
  {
    name: "Antareep Dey",
    position: "Operations Lead",
    image: "/assets/team/testimonials/Antareep.webp",
    quote:
      "Stepping into Android Club in 2nd semester transformed my university experience. With awesome events and incredible people, this is where I've grown the most.",
  },
  {
    name: "Samriddhi Tripathi",
    position: "Operations Manager",
    image: "/assets/team/testimonials/Samriddhi.webp",
    quote:
      "Deeply honored for the opportunity to serve Android Club and contribute to the growth and success of our campus community.",
  },
  {
    name: "Amrutha Duvvuri",
    position: "Event Management Lead",
    image: "/assets/team/testimonials/Amrutha.webp",
    quote:
      "Geek out, level up, and have a blast! That is how we plan, execute, and celebrate every challenge we conquer together.",
  },
] as const;

export const galleryImages = [
  "/assets/events/Meet_and_Greet/img1.jpg",
  "/assets/events/Meet_and_Greet/img2.jpg",
  "/assets/events/Android_Fusion/img1.jpg",
  "/assets/events/Android_Fusion/img2.jpg",
  "/assets/events/DSA_Tussle/img2.jpg",
  "/assets/gallery/groupPhoto.jpg",
];

export interface ClubFaqItem {
  question: string;
  answer: string;
}

export const clubFaq: ClubFaqItem[] = [
  {
    question: "What is Android Club VIT Bhopal?",
    answer:
      "Android Club VIT Bhopal is the flagship student developer organization at VIT Bhopal University, established in 2017. Over 1,000 students collaborate across native Android, Kotlin Multiplatform, Flutter, Material 3 UI/UX, Web Systems, and On-Device AI/IoT.",
  },
  {
    question: "How can VIT Bhopal students join Android Club?",
    answer:
      "Any VIT Bhopal student can apply through the official recruitment form on this website or via the chapter recruitment portal during semester onboarding. Applicants choose either a Technical track (Android, SDC, R&D, UI/UX) or a Non-Technical track (Events, Design, Content, Media, PR, Finance, Operations), complete a practical task, and attend a short peer interview.",
  },
  {
    question: "What technologies do members build with?",
    answer:
      "Members ship production applications and hardware prototypes using Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP), Flutter, Material Design 3, Next.js, TypeScript, TensorFlow Lite, and ESP32 microcontrollers over Bluetooth LE.",
  },
  {
    question: "What are Droid Coins?",
    answer:
      "Droid Coins (DRD) is the chapter's upcoming student rewards currency. Students earn coins by verifying their @vitbhopal.ac.in email, checking in at campus workshops and arenas, placing in the top 10 on event leaderboards, or merging pull requests to chapter repositories, then redeem them for club swag and hackathon passes.",
  },
  {
    question: "Do I need prior Android experience to join?",
    answer:
      "No prior Android experience is required. Freshers regularly join through introductory sessions like Meet & Greet and Android Fusion, where senior leads mentor first-time builders from setup to their first deployed app.",
  },
];
