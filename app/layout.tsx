import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Dither from "@/components/Dither";
import TargetCursor from "@/components/TargetCursor";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "nothing",
  description: "absolutely nothing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Pay', href: '/pay' },
    { label: 'About', href: '/about' },
  ];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TargetCursor
          spinDuration={0}
          hideDefaultCursor={true}
          parallaxOn={true}
        />
        <Navigation links={navLinks} />
        <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
          {children}
          <Dither
            waveColor={[0.5, 0.5, 0.5]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.2}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
      </body>
    </html>
  );
}
