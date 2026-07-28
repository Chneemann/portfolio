import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Background from "../components/Background";
import CommandPalette from "../components/CommandPalette";

// Load Google Fonts as CSS custom variables
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

/**
 * Global page metadata and branding icons
 */
export const metadata: Metadata = {
  title: "André Kempf | Portfolio",
  description: "My personal portfolio, built with React (Next.js)",
  icons: {
    icon: "/assets/icons/favicon.ico",
    shortcut: "/assets/icons/favicon.ico",
    apple: "/assets/images/apple-touch-icon.png",
  },
};

/**
 * Root application layout providing global font variables, shell UI, and persistent overlays
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <CommandPalette />
        <Background />
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
