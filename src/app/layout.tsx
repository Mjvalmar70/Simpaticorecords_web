import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Simpático Records — One Label. Not Records.",
  description:
    "We don't release records. We build archives. Each collection is a year — captured in texture, frequency, and the spaces between sounds.",
  openGraph: {
    title: "Simpático Records",
    description: "One Label. Not Records.",
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
        className={`${playfair.variable} ${dmSans.variable} antialiased bg-[#0A0A0A] text-[#F5F4F0]`}
      >
        {children}
      </body>
    </html>
  );
}
