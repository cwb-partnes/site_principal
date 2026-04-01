import { Metadata } from "next";
import { notFound } from "next/navigation";
import { allServices } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappCta from "@/components/WhatsappCta";
import QuoteModal from "@/components/QuoteModal";
import ServicePageClient from "./ServicePageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) return { title: "Serviço não encontrado" };

  return {
    title: service.metadata.title,
    description: service.metadata.description,
    keywords: service.metadata.keywords,
    openGraph: {
      title: service.metadata.title,
      description: service.metadata.description,
      type: "article",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = allServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServicePageClient service={service} />
      <WhatsappCta />
      <Footer />
    </>
  );
}
