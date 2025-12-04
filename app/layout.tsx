import type { Metadata } from "next";
import { New_Rocker } from "next/font/google";
import "./globals.css";

const newRocker = New_Rocker({
  variable: "--font-new-rocker",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "cool graveyard",
  description: "very cool dead projects from sabio idk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${newRocker.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
