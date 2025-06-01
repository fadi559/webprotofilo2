import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AstronautSpaceBackground from "./components/AstronautSpaceBackground";

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
        
        {children}
      </body>
    </html>
  );
}
