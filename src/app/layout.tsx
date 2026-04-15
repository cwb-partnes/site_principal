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
  metadataBase: new URL("https://www.cwbpartners.com.br"),
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
  alternates: {
    canonical: "https://www.cwbpartners.com.br",
  },
  openGraph: {
    title: "CWB Partners | Desenvolvimento Web Full Stack",
    description:
      "Criação de sites profissionais, lojas virtuais, sistemas web sob medida, SEO e hospedagem.",
    url: "https://www.cwbpartners.com.br",
    siteName: "CWB Partners Tecnologia",
    type: "website",
    locale: "pt_BR",
    images: ["/img/og-banner.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: { index: true, follow: true },
  authors: [{ name: "CWB Partners Tecnologia" }],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "CWB Partners Tecnologia",
  url: "https://www.cwbpartners.com.br",
  telephone: "+55-41-99769-9014",
  email: "contato@cwbpartners.com.br",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "Curitiba",
  },
  serviceType: "Desenvolvimento Web",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-[family-name:var(--font-inter)] bg-white text-text antialiased">
        {children}
      </body>
    </html>
  );
}
