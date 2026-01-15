import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Cycle Calendar",
  description:
    "A cycle-awareness visual ritual. Each morning, your iPhone lock screen updates to show where you are in a 28-day awareness cycle.",
  keywords: ["cycle awareness", "menstrual cycle", "wallpaper", "iOS"],
  openGraph: {
    title: "The Cycle Calendar",
    description: "A cycle-awareness visual ritual for your iPhone lock screen.",
    url: "https://thecyclecalendar.com",
    siteName: "The Cycle Calendar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
