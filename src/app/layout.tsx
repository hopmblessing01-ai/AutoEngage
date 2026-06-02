import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://autoengage.com";

export const viewport: Viewport = {
  themeColor: "#f8fafc",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "AutoEngage",
  icons: {
    icon: "./favicon.ico",
    shortcut: "./favicon.ico",
    apple: "./favicon.ico",
  },
  alternates: {
    canonical: "/",
  },
  title: {
    default: "AutoEngage | Business Automation & CRM Consulting",
    template: "%s | AutoEngage",
  },
  description:
    "We design and automate business systems that scale your operations - from CRM setup to AI-powered workflows. Book a free consultation.",
  keywords: [
    "business automation",
    "CRM consulting",
    "workflow automation",
    "n8n",
    "Zapier",
    "Make",
    "AI chatbots",
  ],
  openGraph: {
    title: "AutoEngage | Business Automation & CRM Consulting",
    description:
      "Eliminate manual work and connect your tools into one efficient system. CRM, workflows, and AI automation.",
    siteName: "AutoEngage",
    type: "website",
    locale: "en_US",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoEngage | Business Automation & CRM Consulting",
    description:
      "Eliminate manual work and connect your tools into one efficient system.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AutoEngage",
  url: siteUrl,
  description:
    "Business automation and systems consulting: CRM, workflow automation, and AI assistants.",
  areaServed: "Worldwide",
  serviceType: [
    "CRM consulting",
    "Business process automation",
    "Workflow automation",
    "AI chatbot implementation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full scroll-smooth scroll-pt-[7.25rem] sm:scroll-pt-[7.5rem]`}
    >
      <body className="min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
