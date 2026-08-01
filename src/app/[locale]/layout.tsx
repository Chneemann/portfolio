import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import CommandPalette from "@/components/CommandPalette";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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
 * Root localized application layout providing global fonts, shell UI, and message context
 */
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Await route parameters to safely extract the dynamic locale
  const { locale } = await params;

  // Validate that the incoming locale is supported; trigger 404 if invalid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Fetch translation messages for the current server-side locale context
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        {/* Provide localization messages and persistent global overlays to client components */}
        <NextIntlClientProvider messages={messages}>
          <CommandPalette />
          <Background />
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
