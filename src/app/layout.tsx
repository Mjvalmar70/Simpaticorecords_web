import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased bg-[#0A0A0A] text-[#F5F4F0]">
        {children}
      </body>
    </html>
  );
}
