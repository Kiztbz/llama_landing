import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import JsonLd from "./components/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://llamacoop.dev";

const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "LLAMA LLC",
      legalName: "Learning, Language, and Multicultural Advancement, LLC",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.svg`,
      },
      description:
        "A democratically run web development cooperative based in Virginia, USA, building technology that advances learning, language access, and multicultural connection.",
      foundingDate: "2024-03",
      address: {
        "@type": "PostalAddress",
        addressRegion: "VA",
        addressCountry: "US",
      },
      sameAs: [
        "https://github.com/llama-llc",
        "https://linkedin.com/company/llama-llc",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "LLAMA LLC",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "LLAMA LLC — Learning, Language, and Multicultural Advancement",
    template: "%s | LLAMA LLC",
  },
  description:
    "LLAMA LLC is a democratically run web development cooperative based in Virginia, USA. We build tools that advance learning, language access, and multicultural connection.",
  keywords: [
    "LLAMA LLC",
    "web development cooperative",
    "Virginia tech company",
    "multicultural technology",
    "learning platform",
    "Alpaca",
    "tech internship Virginia",
    "democratically run company",
  ],
  authors: [{ name: "LLAMA LLC", url: SITE_URL }],
  creator: "LLAMA LLC",
  publisher: "LLAMA LLC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "LLAMA LLC",
    title: "LLAMA LLC — Learning, Language, and Multicultural Advancement",
    description:
      "A democratically run web development cooperative based in Virginia, USA, building technology that advances learning, language access, and multicultural connection.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LLAMA LLC — Virginia-based tech cooperative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LLAMA LLC — Learning, Language, and Multicultural Advancement",
    description:
      "A democratically run web development cooperative based in Virginia, USA.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <JsonLd data={siteSchema} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
