import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SMB Market — Find and buy the right business",
  description:
    "80,000+ cash-flowing businesses from 30+ sources in one feed, plus the deal tools, weekly coaching and community to take you from search to close. 7-day free trial.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // data-theme / data-hero / data-font are changed client-side by the preview tools
    <html lang="en" data-theme="sunset" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&family=Fraunces:opsz,wght,SOFT@9..144,300..700,50&family=Texturina:opsz,wght@12..72,400..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
