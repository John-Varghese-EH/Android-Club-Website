import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { JetBrains_Mono, Plus_Jakarta_Sans, Roboto_Flex } from "next/font/google";
import { clubConfig, clubFaq, events } from "@/data/club";
import { ThemeProvider } from "@/lib/theme";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto-flex",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://androidclub.tech");

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F9F5" },
    { media: "(prefers-color-scheme: dark)", color: "#101411" },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Android Club | VIT Bhopal University",
    template: "%s | Android Club VIT Bhopal",
  },
  description:
    "Official student developer chapter at VIT Bhopal University. Building native Kotlin, Jetpack Compose, Flutter, Material You, and on-device AI software since 2017.",
  applicationName: "Android Club VIT Bhopal",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  authors: [
    {
      name: "John Varghese (J0X)",
      url: "https://www.linkedin.com/in/John--Varghese",
    },
    {
      name: "Android Club VIT Bhopal",
      url: SITE_URL,
    },
  ],
  creator: "John Varghese (J0X) - github.com/John-Varghese-EH",
  publisher: "Android Club VIT Bhopal",
  category: "technology",
  keywords: [
    "Android Club VIT Bhopal",
    "VIT Bhopal",
    "Android Club",
    "Kotlin",
    "Jetpack Compose",
    "Kotlin Multiplatform",
    "Flutter",
    "Material You",
    "Material Design 3",
    "On-Device AI",
    "Hackathons VIT Bhopal",
    "Student Developers India",
    "Droid Coins",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Android Club | VIT Bhopal University",
    description:
      "VIT Bhopal's official mobile, AI, and hardware engineering chapter. 1,000+ builders shipping Kotlin, Compose, Flutter, and edge AI.",
    url: SITE_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Android Club VIT Bhopal",
    images: [
      {
        url: "/og-image.jpg",
        secureUrl: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Android Club VIT Bhopal",
      },
      {
        url: "/og-image.png",
        secureUrl: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Android Club VIT Bhopal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Android Club | VIT Bhopal University",
    description:
      "Official student developer chapter at VIT Bhopal University. Kotlin, Jetpack Compose, Material 3, and on-device AI.",
    images: ["/og-image.jpg"],
  },
  other: {
    author: "John Varghese (J0X) - github.com/John-Varghese-EH",
    "geo.region": "IN-MP",
    "geo.placename": "Bhopal, Sehore, Madhya Pradesh",
    "geo.position": "23.0755;76.8498",
    ICBM: "23.0755, 76.8498",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": `${SITE_URL}/#organization`,
      name: clubConfig.name,
      alternateName: "Android Club VITB",
      url: SITE_URL,
      logo: `${SITE_URL}/icon.svg`,
      image: `${SITE_URL}/og-image.jpg`,
      foundingDate: "2017",
      email: clubConfig.email,
      description: clubConfig.subtitle,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bhopal-Indore Highway, Kothri Kalan",
        addressLocality: "Sehore",
        addressRegion: "Madhya Pradesh",
        postalCode: "466114",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.0755,
        longitude: 76.8498,
      },
      sameAs: [
        clubConfig.socials.github,
        clubConfig.socials.linkedin,
        clubConfig.socials.twitter,
        clubConfig.socials.instagram,
        clubConfig.socials.youtube,
        clubConfig.socials.discord,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: clubConfig.name,
      description: clubConfig.tagline,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
      author: {
        "@type": "Person",
        name: "John Varghese (J0X)",
        url: "https://github.com/John-Varghese-EH",
        sameAs: [
          "https://github.com/John-Varghese-EH",
          "https://www.linkedin.com/in/John--Varghese/",
          "https://www.instagram.com/cyber__trinity/",
        ],
      },
      creator: {
        "@type": "Person",
        name: "John Varghese (J0X)",
        url: "https://github.com/John-Varghese-EH",
      },
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#events`,
      name: "Android Club VIT Bhopal Flagship Events",
      itemListElement: events.slice(0, 4).map((ev, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Event",
          name: ev.title,
          description: ev.description,
          startDate: ev.date,
          eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          location: {
            "@type": "Place",
            name: ev.venue,
            address: {
              "@type": "PostalAddress",
              addressLocality: "VIT Bhopal University, Kothri Kalan",
              addressRegion: "MP",
              addressCountry: "IN",
            },
          },
          organizer: { "@id": `${SITE_URL}/#organization` },
        },
      })),
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: clubFaq.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('android-club-theme');
    var sysDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved === 'dark' || (saved !== 'light' && sysDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light';
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="author"
          content="John Varghese (J0X) - github.com/John-Varghese-EH"
        />
        <link
          rel="author"
          href="https://www.linkedin.com/in/John--Varghese"
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs Summary" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${robotoFlex.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
