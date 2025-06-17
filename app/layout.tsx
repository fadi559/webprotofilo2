import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "./components/AuroraBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fadi Shqerat - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuroraBackground className="min-h-screen bg-black text-white">
          {children}
        </AuroraBackground>
      </body>
    </html>
  );
}
