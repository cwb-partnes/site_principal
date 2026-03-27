import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CWB Partners | Desenvolvimento Web Full Stack",
  description:
    "Criação de sites profissionais, lojas virtuais, sistemas web sob medida, SEO e hospedagem. Mais de 10 anos de experiência e 200+ clientes atendidos.",
  keywords: [
    "criação de sites",
    "desenvolvimento web",
    "lojas virtuais",
    "sistemas web",
    "SEO",
    "hospedagem",
    "Curitiba",
    "full stack",
  ],
  openGraph: {
    title: "CWB Partners | Desenvolvimento Web Full Stack",
    description:
      "Criação de sites profissionais, lojas virtuais, sistemas web sob medida, SEO e hospedagem.",
    url: "https://www.cwbpartners.com.br",
    siteName: "CWB Partners Tecnologia",
    type: "website",
    locale: "pt_BR",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "CWB Partners Tecnologia" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="icon" href="/img/favicon.png" />
        <meta name="theme-color" content="#0A1628" />
      </head>
      <body className="font-[family-name:var(--font-inter)] bg-white text-text antialiased">
        {children}
      </body>
    </html>
  );
}
