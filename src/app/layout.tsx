import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import {Toaster} from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "DIGICCI | Portfolio",
  description: "Portfolio de Brandon Ricci, développeur web et formateur. Découvrez mes réalisations en création de sites vitrines et applications web, ainsi que mes services adaptés aux besoins des entrepreneurs et centres de formation. Contactez-moi pour vos projets.",
  authors: [{name: "Brandon Ricci"}],
  keywords: ["développeur web", "création de site internet", "application mobile", "React", "Next.js", "portfolio"],
  openGraph: {
    title: "Portfolio - Développeur Web & Mobile",
    description: "Développeur passionné spécialisé dans la création de sites web modernes et d'applications mobile innovantes",
    type: "website",
    locale: "fr_FR"
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Développeur Web & Mobile",
    description: "Créateur de solutions digitales sur mesure"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster position={"top-right"} richColors />
        <Navigation />
        {children}
      </body>
    </html>
  );
}