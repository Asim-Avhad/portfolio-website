import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommandMenu from "@/components/CommandMenu";
import { themeScript } from "@/context/ThemeContext";
import { site } from "@/lib/data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description =
  "Asim Avhad, AI engineer and Master of AI student at Monash University, Melbourne. NLP, retrieval-augmented generation, deep learning and multi-agent planning, built on a full-stack and design foundation.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} · ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: ["Asim Avhad", "AI engineer", "machine learning", "NLP", "RAG", "Monash University", "Melbourne", "portfolio"],
  authors: [{ name: site.name, url: site.linkedin }],
  openGraph: {
    type: "website",
    title: `${site.name} · ${site.role}`,
    description,
    siteName: site.name,
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · ${site.role}`,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="grain min-h-dvh overflow-x-hidden">
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-on-accent"
          >
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
          <CommandMenu />
        </Providers>
      </body>
    </html>
  );
}
