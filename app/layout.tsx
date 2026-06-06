import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aurentis — Web Design for Local Businesses",
  description:
    "Professional web design for local businesses in New Brunswick. We build websites that get you more customers.",
  keywords: ["web design", "Fredericton", "New Brunswick", "local business"],
  openGraph: {
    title: "Aurentis — Web Design for Local Businesses",
    description:
      "Professional web design for local businesses in New Brunswick.",
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
