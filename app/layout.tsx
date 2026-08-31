import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurentis — Web Design & Automations for Local Businesses",
  description:
    "Websites and automations for local businesses across Atlantic Canada — sites that get you customers, and automations that keep them. Get a free quote.",
  keywords: ["web design", "Canada", "local business"],
  openGraph: {
    title: "Aurentis — Web Design & Automations for Local Businesses",
    description:
      "Websites and automations for local businesses across Atlantic Canada — sites that get you customers, and automations that keep them. Get a free quote.",
    url: "https://aurentis.ca",
    siteName: "Aurentis",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
