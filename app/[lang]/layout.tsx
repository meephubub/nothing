import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Dither from "@/components/Dither";
import TargetCursor from "@/components/TargetCursor";
import Navigation from "@/components/Navigation";
import { getDictionary } from "@/lib/dictionary";
import StatsigClientProvider from "@/components/StatsigProvider";

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

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "es");

  const navLinks = [
    { label: dict.nav.home, href: `/${lang}` },
    { label: dict.nav.pay, href: `/${lang}/pay` },
    { label: dict.nav.about, href: `/${lang}/about` },
    { label: dict.nav.leaderboard, href: `/${lang}/leaderboard` },
  ];

  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StatsigClientProvider>
          <TargetCursor
            spinDuration={0}
            hideDefaultCursor={true}
            parallaxOn={true}
          />
          <Navigation links={navLinks} brand={dict.brand} lang={lang} />
          <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
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
        </StatsigClientProvider>
      </body>
    </html>
  );
}
