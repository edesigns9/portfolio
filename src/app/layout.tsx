import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: "italic",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Ephraim - UI/UX Designer & Product Thinker",
  description: "Crafting thoughtful digital experiences that bridge the gap between user needs and business goals.",
};

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ReadingProgress } from "@/components/ui/reading-progress";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background font-sans antialiased selection:bg-white/20",
          outfit.variable,
          instrumentSerif.variable
        )}
      >
        <div className="fixed inset-0 z-[-1] bg-background pointer-events-none">
          <div className="absolute inset-0 bg-grid-white/[0.05]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="noise-overlay" />
        <ReadingProgress />
        <CustomCursor />
        <Navbar />
        <main className="relative flex flex-col min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
