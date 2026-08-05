import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const siteUrl = "https://neoagent.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NeoAgent — AI Receptionist & WhatsApp Automation for Clinics",
    template: "%s | NeoAgent",
  },
  description:
    "NeoAgent is a 24/7 AI receptionist that answers WhatsApp, books appointments, sends reminders, and automates follow-ups for clinics and service businesses.",
  keywords: [
    "AI receptionist",
    "WhatsApp automation",
    "clinic automation",
    "appointment booking AI",
    "AI for clinics",
    "WhatsApp AI assistant",
    "automated appointment reminders",
  ],
  authors: [{ name: "NeoAgent" }],
  creator: "NeoAgent",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "NeoAgent",
    title: "NeoAgent — AI Receptionist & WhatsApp Automation for Clinics",
    description:
      "24/7 AI receptionist that answers WhatsApp, books appointments, sends reminders and automates follow-ups.",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoAgent — AI Receptionist & WhatsApp Automation for Clinics",
    description:
      "24/7 AI receptionist that answers WhatsApp, books appointments, sends reminders and automates follow-ups.",
  },
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
  icons: {
    icon: "/favicon.svg",
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NeoAgent",
  url: siteUrl,
  logo: `${siteUrl}/favicon.svg`,
  description:
    "24/7 AI receptionist that answers WhatsApp, books appointments, sends reminders and automates follow-ups for clinics.",
  email: "neoagent.call@gmail.com",
  contactPoint: {
    "@type": "ContactPoint",
    email: "neoagent.call@gmail.com",
    contactType: "customer service",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
