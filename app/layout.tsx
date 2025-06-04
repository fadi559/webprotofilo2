import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AstronautSpaceBackground from "./components/AstronautSpaceBackground";
import Script from "next/script";

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
      <body className={`${inter.className} bg-black text-white min-h-screen`}>
        <AstronautSpaceBackground />
        <Script
       src="https://cloud.umami.is/script.js"
       data-website-id="9660e74e-d640-4b15-81f7-d1a43685f58b"
       strategy="beforeInteractive"
        />
        
        {children}
      </body>
    </html>
  );
}
