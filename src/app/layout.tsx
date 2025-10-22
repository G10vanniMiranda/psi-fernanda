import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/footer";
import Header from "./components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psi-fernanda-tan.vercel.app/"),
  title: {
    template: "%s | Psicóloga Fernanda Miranda",
    default: "Psicóloga em Porto Velho - Terapia Online e Presencial",
  },
  description:
    "Atendimento psicológico com Fernanda Miranda (CRP 24/05343). Terapia para ansiedade, autoestima e relacionamentos em Porto Velho - RO e online.",
  keywords: [
    "psicóloga",
    "terapia",
    "psicologia",
    "ansiedade",
    "autoestima",
    "relacionamentos",
    "Porto Velho",
    "terapia online",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://psi-fernanda-tan.vercel.app/",
    title: "Psicóloga Fernanda Miranda | Terapia Online e Presencial",
    description:
      "Atendimento psicológico com Fernanda Miranda (CRP 24/05343). Terapia para ansiedade, autoestima e relacionamentos.",
    siteName: "Psicóloga Fernanda Miranda",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psicóloga Fernanda Miranda",
      },
    ],
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psicóloga Fernanda Miranda",
    description:
      "Atendimento psicológico para ansiedade, autoestima e relacionamentos. Porto Velho - RO e online.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
