import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Aurora from './components/Aurora';

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
        <Aurora
          colorStops={[
            { color: "#5227FF", position: 0 },
            { color: "#7cff67", position: 0.5 },
            { color: "#5227FF", position: 1 }
          ]}
          blend={0.5}
          amplitude={1.0}
        />
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
